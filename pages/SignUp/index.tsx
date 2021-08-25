import React, { useCallback, useState } from 'react';
import {
  Button,
  Form,
  Header,
  Input,
  Label,
  LabelWrapper,
  LinkContainer,
  SignUpContainer,
  SignUpWrapper,
  SplashWrapper,
} from '@pages/SignUp/styles';
import { Link } from 'react-router-dom';
import useInputs from '@hooks/useInputs';

const SignUp = () => {
  const [state, onChange] = useInputs({
    userid: '',
    sid: '',
    password: '',
    pscheck: '',
    email: '',
    username: '',
    phone: '',
  });
  const { userid, sid, password, pscheck, email, username, phone } = state;

  const onSubmit = useCallback(() => {}, []);

  return (
    <SignUpContainer>
      <SplashWrapper>
        <img src="assets/logo.png" alt="splashimage" />
      </SplashWrapper>

      <SignUpWrapper>
        <Header>회원가입을 진행하세요.</Header>

        <Form onSubmit={onSubmit}>
          <LabelWrapper>
            <Label id="label-id">
              <span>아이디</span>
              <div>
                <Input type="text" id="userid" name="userid" value={userid} onChange={onChange} />
              </div>
            </Label>
            <Label id="label-sid">
              <span>학번</span>
              <div>
                <Input type="text" id="sid" name="sid" value={sid} onChange={onChange} />
              </div>
            </Label>
          </LabelWrapper>
          <LabelWrapper>
            <Label id="label-password">
              <span>비밀번호</span>
              <div>
                <Input type="password" id="password" name="password" value={password} onChange={onChange} />
              </div>
            </Label>
            <Label id="label-pscheck">
              <span>비밀번호 확인</span>
              <div>
                <Input type="password" id="pscheck" name="pscheck" value={pscheck} onChange={onChange} />
              </div>
            </Label>
          </LabelWrapper>
          <Label id="label-email">
            <span>이메일 주소</span>
            <div>
              <Input type="email" id="email" name="email" value={email} onChange={onChange} />
            </div>
          </Label>
          <Label id="label-username">
            <span>이름</span>
            <div>
              <Input type="text" id="username" name="username" value={username} onChange={onChange} />
            </div>
          </Label>
          <Label id="label-phone">
            <span>핸드폰</span>
            <div>
              <Input
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                value={phone}
                onChange={onChange}
              />
            </div>
          </Label>
          <Button type="submit">회원가입</Button>
        </Form>

        <LinkContainer>
          이미 회원가입을 했었나요?&nbsp;
          <Link to="/login">로그인하기</Link>
        </LinkContainer>
      </SignUpWrapper>
    </SignUpContainer>
  );
};

export default SignUp;
