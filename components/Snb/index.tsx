import React, { useState } from "react";
//동작용
import { Link, NavLink } from "react-router-dom";
import { Side, Menu } from './styles';
import { AiOutlineSetting } from 'react-icons/ai';
//icons
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from "@material-ui/core/ListItemText";

const Snb = () => {
  const menus = [
    { title: 'Home', path: '/'
      // icon: <AiOutlineSetting/>,
    },
    { title: 'Setting', path: '/'
    // icon: <AiOutlineSetting/>,

    },
    { title: 'File', path: '/'
    // icon: <AiOutlineSetting/>,
  },
  ];

  return(
    <Side>
      <List disablePadding dense>
        <ListItem button>
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>Setting</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>File</ListItemText>
        </ListItem>
      </List>
    </Side>
  );
};

export default Snb;
