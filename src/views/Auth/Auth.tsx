import React, { FunctionComponent } from 'react';
import LogoImg from 'src/assets/logo.png';
import FacebookImg from 'src/assets/facebook.png';
import TwitterImg from 'src/assets/twitter.png';
import LinkeInImg from 'src/assets/linkedIn.png';
import GoogleButton from 'src/components/GoogleButton/GoogleButton';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GOOGLE_CLIENT_ID } from 'src/configs/configs';
import {
  CenterContainer,
  InfoContainer,
  Logo,
  RegisterContainer,
  Subtitle,
  SubtitleBold,
  Title,
  RowContainer,
  InfoText,
  Icons,
  EndRowContainer,
  IconsContainer,
} from './styles';
import { IRegisterProps } from './types';

const Auth: FunctionComponent<IRegisterProps> = (props: IRegisterProps) => {
  const { onRegister, onLogin } = props;

  const responseRegisterGoogle = (response: any) => {
    onRegister(response);
  };

  const responseLoginGoogle = (response: any) => {
    onLogin(response);
  };

  return (
    <>
      <RegisterContainer>
        <Logo src={LogoImg} alt='logo' />
        <CenterContainer>
          <Title>¡Bienvenido de nuevo!</Title>
          <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <GoogleButton
              text='Iniciar sesión con Google'
              onSuccess={responseLoginGoogle}
            />
          </GoogleOAuthProvider>
          <InfoText>o</InfoText>
          <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <GoogleButton
              text='Registrarse con Google'
              onSuccess={responseRegisterGoogle}
              isSmall
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

export default Auth;
