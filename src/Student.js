import React from 'react';
import Editor from './Editor';
import styles from './App.css';
import classNames from 'classnames/bind';

const design = classNames.bind(styles);

const Student = ({history}) => {

    return (
        <div>
            <div className={design('_logo')}> <img margin-top="0" height="20%" alt="logo img" src="Logo.png" /> </div>
            <div className={design('editor_box')}>
                <Editor />
            </div>
        </div>
    );
}

export default Student;