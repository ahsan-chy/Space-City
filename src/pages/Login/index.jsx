// import { Col, Row } from 'antd';
// import React from 'react';

// const Login = () => {
//   return (
//     <div>
//       <Row>
//         <Col span={24}>col</Col>
//       </Row>
//     </div>
//   );
// };

// export default Login;

import {
  ButtonWrapper,
  LinkBox,
  LinkText,
  Root,
  StyledButton,
  StyledGrid,
  StyledText,
} from './Styles.jsx';
import { useState } from 'react';
import { message } from 'antd';
import { useNavigate } from 'react-router';
import { Divider } from 'antd';
import { FcGoogle } from 'react-icons/fc';

// + Firebase
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/utils/constants/firebase.js';
import TextInput from '@/components/Inputs/index.jsx';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const LoginUser = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      message.warning('Fill All Fields');
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password)
          .then((data) => {
            message.success('Login Successfully');
            const user = {
              accessToken: data.user.accessToken,
              email: data.user.email,
              uid: data.user.uid,
              role: 'admin',
            };
            localStorage.setItem('user', JSON.stringify(user));
          })
          .then(() => {
            navigate('/profile');
          });
      } catch (error) {
        switch (error.code) {
          case 'auth/invalid-email':
            message.error('Wrong Email!');
            break;
          case 'auth/user-not-found':
            message.error('User Not Found');
            break;
          case 'auth/wrong-password':
            message.error('Please Enter Correct Password!!!');
            break;
          case 'auth/invalid-login-credentials':
            message.error('Invalid Login Details!!!');
            break;
        }

        console.error(error.message);
      }
    }
  };
  return (
    <Root>
      <StyledGrid>
        <StyledText>Login</StyledText>

        <form onSubmit={LoginUser}>
          <TextInput
            type="primary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            type="primary"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonWrapper>
            <StyledButton type="primary" htmlType="submit">
              Login
            </StyledButton>
          </ButtonWrapper>
        </form>
        <LinkBox>
          <LinkText to="/sign-up">Sign Up</LinkText>
          <LinkText to="/">Forgot Password</LinkText>
        </LinkBox>
        <Divider>OR</Divider>
        <StyledButton color="info">
          {' '}
          <FcGoogle /> &nbsp; Signin With Google
        </StyledButton>
      </StyledGrid>
    </Root>
  );
};

export default Login;
