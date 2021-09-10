import Url from '@components/Url';
import Editor from '@components/Editor';
import Header from '@components/Header';
import Nav from '@components/Snb';
import React from 'react';
import { Redirect } from 'react-router';

const PlaygroundUrl = () => {
//   if (!localStorage.getItem('user')) {
//     return <Redirect to="/login" />;
//   }

  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <Nav />
        <Editor />
        <Url />
      </div>
    </>
  );
};

export default PlaygroundUrl;
