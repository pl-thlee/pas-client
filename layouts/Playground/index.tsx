import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Link, useHistory } from 'react-router-dom';
import loadable from '@loadable/component';
//component
//import Chat from '@components/Chat';
import Editor from '@components/Editor';
import Header from '@components/Header';
import Snb from '@components/Snb';
//ui
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CodeIcon from '@material-ui/icons/Code';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CommentIcon from '@material-ui/icons/Comment';

const Chat = loadable(() => import('@components/Chat'));

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 'fullwidth',
  },
});

const Playground = () => {
  // if (!localStorage.getItem('user')) {
  //   return <Redirect to="/login" />;
  // }

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };


  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <Snb />
        <div style={{width: '100%' }}>
        <Switch>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="icon label tabs example"
          >
            <Tab icon={<CodeIcon />} label="EDITOR" />
            <Tab icon={<AssignmentIcon />} label="DASHBOARD" />
            <Tab icon={<CommentIcon />} label="CHAT" />
          </Tabs>
          <Route path="/chat" component={Chat} />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default Playground;