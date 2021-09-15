import Url from '@components/Url';
import Editor from '@components/Editor';
import Header from '@components/Header';
import Nav from '@components/Snb';
import React from 'react';
import { Redirect } from 'react-router';

const PlaygroundUrl = () => {
// JWT 토큰이 있는지 확인하고
//   if (!localStorage.getItem('user')) {
//     return <Redirect to="/login" />;
//   }

  return (
    <>
      <Header />
      <div style={{ display: 'flex', background: '#292F36'}}>
        {/* <Nav />
        <Editor /> */}
        <Url />
      </div>
    </>
  );
};

export default PlaygroundUrl;
