import React, { SyntheticEvent, useCallback } from 'react';
import { Button, Form, Input, Label, LinkContainer } from '@pages/SignUp/styles';
import { Link } from 'react-router-dom';
import useInputs from '@hooks/useInputs';
import { LoginContainer, LoginWrapper } from './styles';

const LogIn = () => {
  const [state, onChange] = useInputs({ userid: '', password: '' });
  const { userid: userId, password } = state;

  const onSubmit = useCallback((e: SyntheticEvent) => {}, []);

  return (
    <LoginContainer>
      <LoginWrapper>
        <img src="assets/logo.png" alt="splashimage" style={{ marginBottom: '1rem' }} />

        <Form onSubmit={onSubmit}>
          <Label id="label-id">
            <span style={{ color: '#ccc' }}>아이디</span>
            <div>
              <Input type="text" id="userid" name="userid" value={userId} onChange={onChange} />
            </div>
          </Label>
          <Label id="label-password">
            <span style={{ color: '#ccc' }}>비밀번호</span>
            <div>
              <Input type="password" id="password" name="password" value={password} onChange={onChange} />
            </div>
          </Label>

          <Button type="submit" style={{ border: '1px solid #ccc', marginTop: '1rem' }}>
            로그인
          </Button>
        </Form>

        <LinkContainer style={{ color: '#ccc' }}>
          아직 계정이 없으신가요?&nbsp;
          <Link to="/signup">회원가입</Link>
        </LinkContainer>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default LogIn;
