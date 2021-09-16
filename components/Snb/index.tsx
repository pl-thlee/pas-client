import React, { useState } from "react";
//동작용
import { Link, NavLink } from "react-router-dom";
import { Side, Profile, Menu } from './styles';
import { AiOutlineSetting } from 'react-icons/ai';
//import SidebarItem from "./SidebarItem";
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
//사이드바 이벤트 처리
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar); 

  return(
    <Side>
      {/* //프로필 모양 나타내고싶음 */}
      <Profile>
        <img src = "assets/profile.png"></img>
      </Profile>
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

      {/* // 메뉴 리스트 클릭시 회색만들고싶음 */}
       {/* <Menu>
        {menus.map((menu, index) => {
          return (
            <NavLink
              exact
              style={{color: "gray", textDecoration: "none"}}
              to={menu.path}
              key={index}
              activeStyle={{color: "black"}}
            >
              <SidebarItem
                menu={menu}
              />
              <div className = "item"> HOME </div>
            </NavLink>
          );
        })}
      </Menu> */}
      {/* // 메뉴 선택시 주소창이 바뀜. 렌더링으로 쓰고싶어서 보류 */}
      {/* <Link to = '#'>
        <FaIcons.FaBars onClick={showSidebar} />
      </Link>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {menus.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav> */}
    </Side>
  );
};

export default Snb;
