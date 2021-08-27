import React from 'react';
import { Redirect } from 'react-router';

const Playground = () => {
  if (!localStorage.getItem('user')) {
    return <Redirect to="/login" />;
  }

  return <div>Playground</div>;
};

export default Playground;
