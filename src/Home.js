import React from 'react';
import styles from './App.css';
import classNames from 'classnames/bind';

const design = classNames.bind(styles);

const Home = ({history}) => {

        return(
            <div className={design('app')} >           
                <div className={design('logo')}> <img alt="logo img" src="Logo.png" /> </div>
                    <div className={design('container')}>
                    <button className={design('btn')} onClick={ () => {history.push("/Student")}}> <img alt="start" src="StartBtn.png" /> </button>
                        <div className={design('login')}>
                            <div> <img alt="id" src="id.png" /> </div>
                            <div> <img alt="pwd" src="pwd.png" /> </div>
                        </div>
                    </div>
            </div>
        );

}

export default Home;
