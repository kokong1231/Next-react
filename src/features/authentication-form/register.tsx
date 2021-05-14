import React, { useContext } from 'react';
import Link from 'next/link';
import { Input } from 'components/forms/input';
import {
  Button,
  IconWrapper,
  Wrapper,
  Container,
  LogoWrapper,
  Heading,
  SubHeading,
  HelperText,
  Offer,
  Divider,
  LinkButton,
} from './authentication-form.style';
import { Facebook } from 'assets/icons/Facebook';
import { Google } from 'assets/icons/Google';
import { AuthContext } from 'contexts/auth/auth.context';
import { FormattedMessage, useIntl } from 'react-intl';

const axios = require('axios');


export default function SignOutModal() {
  const intl = useIntl();
  const { authDispatch } = useContext<any>(AuthContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password_again, setPassword_again] = React.useState('');

  const toggleSignInForm = () => {
    authDispatch({
      type: 'SIGNIN',
    });
  };

  const mongooseSignUp = function () {
    axios({
      method: 'POST',
      url: '/grocery/reg',
      params: {
        email: email,
        password: password,
        password_again: password_again
      }
    }).then((res) => {
      console.log('axios response success !')
      if(res.data.success){
        alert('회원가입 성공');
      }
    }).catch((err) => {
      alert("이미 있는 회원이거나 비밀번호를 다시 확인하세요.");
      console.log("가입 실패");
      throw err;
    })
  }

  return (
    <Wrapper>
      <Container>
        <Heading>
          <FormattedMessage id='signUpBtnText' defaultMessage='Sign Up' />
        </Heading>
        <SubHeading>
          <FormattedMessage
            id='signUpText'
            defaultMessage='Every fill is required in sign up'
          />
        </SubHeading>
        <form onSubmit={mongooseSignUp}>
          <Input
            type='email'
            placeholder="New E-mail"
            height='48px'
            backgroundColor='#F7F7F7'
            mb='10px'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          
          <Input
            type='password'
            placeholder="New Password"
            height='48px'
            backgroundColor='#F7F7F7'
            mb='10px'
            name='password'
            onChange={(e) => setPassword(e.target.value)}
            required
            value={password}
          />

          <Input
            type='password'
            placeholder="New Password - Again"
            height='48px'
            backgroundColor='#F7F7F7'
            mb='10px'
            name='password_again'
            onChange={(e) => setPassword_again(e.target.value)}
            required
            value={password_again}
          />
          <HelperText style={{ padding: '20px 0 30px' }}>
            <FormattedMessage
              id='signUpText'
              defaultMessage="By signing up, you agree to Pickbazar's"
            />
            &nbsp;
            <Link href='/'>
              <a>
                <FormattedMessage
                  id='termsConditionText'
                  defaultMessage='Terms &amp; Condition'
                />
              </a>
            </Link>
          </HelperText>
          <Button variant='primary' size='big' width='100%' type='submit'>
            <FormattedMessage id='continueBtn' defaultMessage='Continue' />
          </Button>
        </form>
        <Divider>
          <span>
            <FormattedMessage id='orText' defaultMessage='or' />
          </span>
        </Divider>
        <Button
          variant='primary'
          size='big'
          style={{
            width: '100%',
            backgroundColor: '#4267b2',
            marginBottom: 10,
          }}
        >
          <IconWrapper>
            <Facebook />
          </IconWrapper>
          <FormattedMessage
            id='continueFacebookBtn'
            defaultMessage='Continue with Facebook'
          />
        </Button>
        <Button
          variant='primary'
          size='big'
          style={{ width: '100%', backgroundColor: '#4285f4' }}
        >
          <IconWrapper>
            <Google />
          </IconWrapper>
          <FormattedMessage
            id='continueGoogleBtn'
            defaultMessage='Continue with Google'
          />
        </Button>
        <Offer style={{ padding: '20px 0' }}>
          <FormattedMessage
            id='alreadyHaveAccount'
            defaultMessage='Already have an account?'
          />{' '}
          <LinkButton onClick={toggleSignInForm}>
            <FormattedMessage id='loginBtnText' defaultMessage='Login' />
          </LinkButton>
        </Offer>
      </Container>
    </Wrapper>
  );
}
