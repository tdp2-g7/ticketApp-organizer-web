import React, { FunctionComponent } from 'react';
import LogoImg from 'src/assets/logo.png';
import GoogleImg from 'src/assets/google-logo.png';
import FacebookImg from 'src/assets/facebook.png';
import TwitterImg from 'src/assets/twitter.png';
import LinkeInImg from 'src/assets/linkedIn.png';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleLogin from 'react-google-login';
import { GOOGLE_CLIENT_ID } from 'src/configs/configs';
import {
  CenterContainer,
  Google,
  InfoContainer,
  Logo,
  RegisterButton,
  RegisterContainer,
  Subtitle,
  SubtitleBold,
  Title,
  RowContainer,
  InfoText,
  Icons,
  EndRowContainer,
  IconsContainer,
  LoginButton,
  GoogleSmall,
} from './styles';
import { IRegisterProps } from './types';

const Register: FunctionComponent<IRegisterProps> = (props: IRegisterProps) => {
  const { onRegister } = props;

  const responseGoogle = (response: any) => {
    onRegister(response);
  };

  return (
    <>
      <RegisterContainer>
        <Logo src={LogoImg} alt='logo' />
        <CenterContainer>
          <Title>¡Bienvenido de nuevo!</Title>
          <LoginButton onClick={() => onRegister('')}>
            <Google src={GoogleImg} alt='google' />
            Iniciar sesion con Google
          </LoginButton>
          <InfoText>o</InfoText>
          <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <GoogleLogin
              render={(renderProps) => (
                <RegisterButton onClick={renderProps.onClick}>
                  <GoogleSmall src={GoogleImg} alt='google' />
                  Registrarse con Google
                </RegisterButton>
              )}
              clientId={GOOGLE_CLIENT_ID}
              buttonText='Registrarse con Google'
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </GoogleOAuthProvider>
        </CenterContainer>
        <EndRowContainer>
          <InfoContainer>
            <RowContainer>
              <SubtitleBold>Ticket</SubtitleBold>
              <Subtitle>app</Subtitle>
            </RowContainer>
            <InfoText>
              Ticketapp es una plataforma global de venta de entradas de
              autoservicio para experienciasen vivo que permite a cualquier
              persona crear, compartir, encontrar y asistir a eventos que
              alimentan sus pasiones y enriquecen sus vidas
            </InfoText>
          </InfoContainer>
          <IconsContainer>
            <Icons src={FacebookImg} />
            <Icons src={TwitterImg} />
            <Icons src={LinkeInImg} />
          </IconsContainer>
        </EndRowContainer>
      </RegisterContainer>
    </>
  );
};

export default Register;
