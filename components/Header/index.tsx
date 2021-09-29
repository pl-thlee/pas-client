import React from 'react';
import { Redirect } from 'react-router';
import { HeaderWrapper, Spacer, Wrapper } from './styles';

// interface Props {
//   user: IUser;
// }

const Header = () => {
  const loginBtn = {};
  const logoutBtn = {};
  return (
    <>
      <HeaderWrapper>
        <Wrapper>
          <div className="logo">Programming Assistant System</div>
          <div className="right">
            <Redirect to="/login">
              로그아웃
            </Redirect>
          </div>
        </Wrapper>
      </HeaderWrapper>
      <Spacer />
    </>
  );
};

export default Header;
