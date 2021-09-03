import React from 'react';
//sidebar
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//icon
import { AiOutlineSetting } from 'react-icons/ai';
import { DiCodeBadge } from 'react-icons/di';
import { FaLock, FaUnlock } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';
import { GiExitDoor } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  background: {
    color: '#292F36'},
});

type Anchor = 'left';

const Snb = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      // className={clsx(classes.list, {
      //   [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      // })}
      style={{background: '#292F36'}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Profile', 'Lecture', 'Dashboard', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <DiCodeBadge /> : <FiUpload />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['File', 'Setting', 'Logout'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <FaUnlock /> : <AiOutlineSetting />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {(['left' ] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>

    // <IconContext.Provider value={{ size: '2rem', color: 'white' /* attr: { display: 'block' } */ }}>
    //   <div
    //     style={{
    //       background: 'rgb(30, 34, 40)',
    //       width: '4rem',
    //       borderRight: '1px rgb(68, 76, 86) solid',
    //       textAlign: 'center',
    //       padding: '0.5rem',
    //       height: 'calc(100vh - 4rem)',

    //     }}
    //   >
    //     {/* <div style={{ width: '4rem', borderRight: '1px rgb(68, 76, 86) solid' }}> */}
    //     <div style={{ margin: '1rem 0' }}>
    //       <DiCodeBadge />
    //     </div>
    //     <div style={{ margin: '1rem 0' }}>
    //       <FiUpload />
    //     </div>
    //     <div style={{ margin: '1rem 0' }}>
    //       <FaUnlock />
    //     </div>
    //     <div style={{ margin: '1rem 0' }}>
    //       <FaLock />
    //     </div>
    //     <div style={{ margin: '1rem 0' }}>
    //       <AiOutlineSetting />
    //     </div>
    //     <div style={{ margin: '1rem 0' }}>
    //       <GiExitDoor />
    //     </div>
    //   </div>
    // </IconContext.Provider>
  );
};

export default Snb;
