import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Student from './Student';
import Home from './Home';
import ChatRoom from './Chat/ChatRoom/ChatRoom';
import styles from './App.css';
import classNames from 'classnames/bind';

const design = classNames.bind(styles);

class App extends Component {
    render() {
        return(
            <div className={design('app')} >           
              <BrowserRouter>
                <Route exact path="/" component={Home}/>
                <Route path="/Student" component={Student}/>
                <Route exact path="/:roomId" component={ChatRoom} />
              </BrowserRouter> 
            </div>
        );
    }
}

export default App;
