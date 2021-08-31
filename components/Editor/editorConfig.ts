import { EditorConfiguration } from 'codemirror';

export const editorConfig: EditorConfiguration = {
  mode: 'text/typescript-jsx',
  theme: 'darcula',
  smartIndent: true,
  tabSize: 4,
  indentWithTabs: false,
  lineWrapping: true,
  lineNumbers: true,
  scrollbarStyle: 'null',
  // readOnly: 'nocursor',
  autofocus: true,
  autoCloseTags: true,
  autoCloseBrackets: {
    override: true,
  },
  foldGutter: true,
  gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
  showHint: true,
  highlightSelectionMatches: {
    showToken: true,
  },
  styleActiveLine: {
    nonEmpty: true,
  },
  continueComments: true,
  placeholder: '이곳에 소스 코드를 작성하세요',
};
