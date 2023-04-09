import React, { FunctionComponent } from 'react';
import LogoImg from 'src/assets/logo.png';
import GoogleImg from 'src/assets/google-logo.png';
import FacebookImg from 'src/assets/facebook.png';
import TwitterImg from 'src/assets/twitter.png';
import LinkeInImg from 'src/assets/linkedIn.png';
import GoogleLogin from 'react-google-login';
import { GoogleOAuthProvider } from '@react-oauth/google';
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
} from './styles';
import { IRegisterProps } from './types';

const Register: FunctionComponent<IRegisterProps> = (props: IRegisterProps) => {
  const { onRegister } = props;

  const responseGoogle = (response: any) => {
    console.log(response);
  };

  return (
    <>
      <RegisterContainer>
        <Logo src={LogoImg} alt='logo' />

        <CenterContainer>
          <Title>¡Bienvenido de nuevo!</Title>
          <RegisterButton onClick={() => onRegister()}>
            <Google src={GoogleImg} alt='google' />
            Continuar con Google
          </RegisterButton>
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
      <br /> <br />
      <GoogleOAuthProvider clientId='391050283783-gfmsthbi7j78ac4ulc1okug7o1p225ih.apps.googleusercontent.com'>
        <GoogleLogin
          clientId='391050283783-gfmsthbi7j78ac4ulc1okug7o1p225ih.apps.googleusercontent.com'
          buttonText='Login'
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </GoogleOAuthProvider>
    </>
  );
};

export default Register;
