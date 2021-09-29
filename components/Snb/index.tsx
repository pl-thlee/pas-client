import React, { useState } from "react";
//동작용
import { Side, Menu } from './styles';

//icons
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from "@material-ui/core/ListItemText";
import { IconContext } from "react-icons";

const Snb = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { name: 'Description', content: 'Description' },
    { name: 'Editor', content: 'Editor' },
  ];
  return(
    <Side>
      <IconContext.Provider value={{color: "#ffff"}}/>

        <ListItem button>
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>Setting</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>File</ListItemText>
        </ListItem>
    </Side>
  );
};

export default Snb;
