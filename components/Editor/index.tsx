import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/darcula.css';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/python/python';

// import 'codemirror/addon/display/fullscreen';
import 'codemirror/addon/edit/closebrackets';
// import 'codemirror/addon/edit/matchbrackets';
// import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/search/match-highlighter';
// import 'codemirror/addon/search/search';
import 'codemirror/addon/selection/active-line';

import { editorConfig } from './editorConfig';

const Editor = () => {
  // const [doc, setDoc] = useState<CodeMirror.Doc>();

  const [editor, setEditor] = useState<CodeMirror.Editor>();
  if (editor) {
    editor.refresh();
    // setEditor(undefined);
    editor.setSize('70vw', '100%');
  }

  const [value, setValue] = useState(`"""
"""


if __name__ == '__main__':
    import doctest
    doctest.testmod()

    import python_ta
    python_ta.check_all()
`);

  // const codemirrorRef = useRef<CodeMirror.EditorFromTextArea>();

  // useEffect(() => {
  //   // setValue('');
  //   // const current = codemirrorRef.current.editor.display.wrapper.style.width = "inherit";
  //   // codemirrorRef.current?.getWrapperElement.style
  // }, [value]);

  return (
    <div
      style={{
        display: 'flex',
        flex: '0.7',
        width: '100%',
        background: 'lightgray',
        // marginTop: '0.3rem',
        height: 'calc(100vh - 4rem)',
      }}
    >
      <CodeMirror
        editorDidMount={(editor) => {
          setEditor(editor);
        }}
        value={value}
        options={editorConfig}
        onBeforeChange={(editor, data, value) => {
          setValue(value);
        }}
        onChange={(editor, data, value) => {
          setValue(value);
        }}
      />
    </div>
  );
};

export default Editor;
