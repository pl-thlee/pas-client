import React from 'react';
import hljs from 'highlight.js';
import 'react-quill/dist/quill.core.css';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import 'highlight.js/styles/github-dark.css';


import classNames from 'classnames/bind';

import styles from './Editor.scss';

// import QuillCursors from 'quill-cursors';
import QuillCursors from '../Cursors';
import ReconnectingWebSocket from 'reconnectingwebsocket';

import cursors from './cursors';
import ShareDB from 'sharedb/lib/client';

ShareDB.types.register(require('rich-text').type);
Quill.register('modules/cursors', QuillCursors);
const shareDBSocket = new ReconnectingWebSocket(
  (window.location.protocol === 'https:' ? 'wss' : 'ws') +
    '://' +
    window.location.hostname +
    ':4000/sharedb'
);
const shareDBConnection = new ShareDB.Connection(shareDBSocket);

const cx = classNames.bind(styles);

// const Editor = () => {
//   return (
//     <div className={cx('editor-main')}>
//       <ReactQuill
//         ref={(el) => {
//           this.reactQuillRef = el;
//         }}
//         theme="snow"
//         modules={Editor.modules}
//         bounds=".editor-main"
//       />
//     </div>
//   );
// };

hljs.configure({
  languages: ['javascript', 'ruby', 'python', 'rust'],
})

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.reactQuillRef = null;
    this.state = {
      text: `<code><pre>fn hello() -> Option<u32> {
        Some(1)
      }</pre></code>`
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value })
  }

  componentDidMount() {
    const doc = shareDBConnection.get('documents', 'foobar');
    const quillRef = this.reactQuillRef.getEditor();
    const cursorsModule = quillRef.getModule('cursors');

    doc.subscribe((err) => {
      if (err) throw err;

      if (!doc.type)
        doc.create(
          [
            {
              insert: '\n',
            },
          ],
          'rich-text'
        );

      // update editor contents
      quillRef.setContents(doc.data);

      // local -> server
      quillRef.on('text-change', function (delta, oldDelta, source) {
        if (source === 'user') {
          // Check if it's a formatting-only delta
          var formattingDelta = delta.reduce(function (check, op) {
            return op.insert || op.delete ? false : check;
          }, true);

          // If it's not a formatting-only delta, collapse local selection
          if (
            !formattingDelta &&
            cursors.localConnection.range &&
            cursors.localConnection.range.length
          ) {
            cursors.localConnection.range.index +=
              cursors.localConnection.range.length;
            cursors.localConnection.range.length = 0;
            cursors.update();
          }

          doc.submitOp(
            delta,
            {
              source: quillRef,
            },
            function (err) {
              if (err) console.error('Submit OP returned an error:', err);
            }
          );
        }
      });

      cursorsModule.registerTextChangeListener();

      // server -> local
      doc.on('op', function (op, source) {
        if (source !== quillRef) {
          quillRef.updateContents(op);
        }
      });

      //
      function sendCursorData(range) {
        cursors.localConnection.range = range;
        cursors.update();
      }

      //
      function debounce(func, wait, immediate) {
        var timeout;
        return function () {
          var context = this,
            args = arguments;
          var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      }

      var debouncedSendCursorData = debounce(function () {
        var range = quillRef.getSelection();

        if (range) {
          console.log(
            '[cursors] Stopped typing, sending a cursor update/refresh.'
          );
          sendCursorData(range);
        }
      }, 1500);

      doc.on('nothing pending', debouncedSendCursorData);

      function updateCursors(source) {
        var activeConnections = {},
          updateAll = Object.keys(cursorsModule.cursors).length == 0;

        cursors.connections.forEach(function (connection) {
          if (connection.id !== cursors.localConnection.id) {
            // Update cursor that sent the update, source (or update all if we're initting)
            if (
              (connection.id === source.id || updateAll) &&
              connection.range
            ) {
              cursorsModule.setCursor(
                connection.id,
                connection.range,
                connection.name,
                connection.color
              );
            }

            // Add to active connections hashtable
            activeConnections[connection.id] = connection;
          }
        });

        // Clear 'disconnected' cursors
        Object.keys(cursorsModule.cursors).forEach(function (cursorId) {
          if (!activeConnections[cursorId]) {
            cursorsModule.removeCursor(cursorId);
          }
        });
      }

      quillRef.on('selection-change', function (range, oldRange, source) {
        sendCursorData(range);
      });

      document.addEventListener('cursors-update', function (e) {
        // Handle Removed Connections
        e.detail.removedConnections.forEach(function (connection) {
          if (cursorsModule.cursors[connection.id])
            cursorsModule.removeCursor(connection.id);
        });

        updateCursors(e.detail.source);
      });

      updateCursors(cursors.localConnection);
    });

    window.cursors = cursors;
  }

  editorHandle = (e) => {
    cursors.localConnection.name = '#000000'.replace(/0/g, function () {
      return (~~(Math.random() * 16)).toString(16);
    });
    cursors.update();
    this.reactQuillRef.getEditor().enable();
  };

  render() {
    return (
      <div className={cx('editor-main')}>
        <input type='button' value='연결' onClick={this.editorHandle}/>
        <ReactQuill
          value={this.state.text}
          onChange={this.handleChange}
          ref={(el) => {
            this.reactQuillRef = el;
          }}
          theme="bubble"
          modules={modules}
          bounds=".editor-main"
        />
      </div>
    );
  }
}

const modules = {
  syntax: {
    highlight: text => hljs.highlightAuto(text).value,
  },
  cursors: {
    autoRegisterListener: false,
  },
  toolbar: false,
  // history: {
  //   userOnly: true,
  // },
  clipboard: { matchVisual: false },
};

export default Editor;
