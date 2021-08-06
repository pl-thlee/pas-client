import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter as Router, Route } from 'react-router-dom'
import Editor from './Editor';
import App from './Chat/App';
import * as serviceWorker from './serviceWorker';

import classNames from 'classnames/bind';
import styles from './index.scss';
import Logo from "./components/Logo";

import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
//import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
//import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

const design = classNames.bind(styles);

const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);
  
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

function Index() {
    const classes = useStyles();
    const [languages, setLanguages] = React.useState('');
    const handleChange = (event) => {
      setLanguages(event.target.value);
    };
    return (
        <div>
            <Logo height='150px' width='100%'/>
                <div>
                <FormControl className={classes.margin}>
                    <InputLabel htmlFor="demo-customized-select-native">languages</InputLabel>
                    <NativeSelect
                        id="demo-customized-select-native"
                        value={languages}
                        onChange={handleChange}
                        input={<BootstrapInput />}
                    >
                        <option aria-label="None" value="" />
                        <option value={10}>C</option>
                        <option value={20}>Python</option>
                        <option value={30}>JAVA</option>
                    </NativeSelect>
                </FormControl>
                <div className={design('main')}>
                <Editor />
                <React.StrictMode>
                  <App />
                </React.StrictMode>,
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'));
serviceWorker.unregister();

// import React from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Chat from './Chat/Chat'
// import Join from './Join/Join'

// const Index = () => {
//   return (
//     <Router>
//       <Route path='/' component={Join} />
//       <Route path='/Chat' component={Chat} />
//     </Router>
//   )
// }

// export default Index