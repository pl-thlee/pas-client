import { EditorConfiguration } from 'codemirror';

export const editorConfig: EditorConfiguration = {
  /**
   * @see https://stackoverflow.com/questions/53469681/how-to-configure-codemirror-for-c-like-language
   * @see https://codemirror.net/mode/clike/
   * @see https://codemirror.net/mode/python/
   */
  mode: 'text/x-python',
  lineNumbers: true,

  /**
   * @see https://github.com/felixhao28/JSCPP
   */
  // lint: true,
  autofocus: true,
  theme: 'darcula',
  lineWrapping: true,
  scrollbarStyle: 'null',
  // viewportMargin: 'Infinity',

  /**
   * @see https://codemirror.net/doc/manual.html#addons
   */
  // search: true,
  autoCloseBrackets: true,
  // matchBrackets{}: true,
  // autoCloseTags: true,

  /**
   * @file search/match-highlighter.js
   */
  highlightSelectionMatches: {
    showToken: true,
  },

  /**
   * @file selection/selection-pointer.js
   */
  styleActiveLine: {
    nonEmpty: true,
  },

  /**
   * @file display/fullscreen.js (x)
   */
  // fullScreen: true,
};
