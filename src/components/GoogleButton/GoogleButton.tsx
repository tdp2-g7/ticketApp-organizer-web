import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import GoogleImg from 'src/assets/google-logo.png';
import { CustomButton, GoogleSmall } from './styles';
import { IGoogleButtonProps } from './types';

const GoogleButton = (props: IGoogleButtonProps) => {
  const { onSuccess: onSuccessGoogle, text, isSmall } = props;

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const userInfo = await axios
        .get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then((res) => res.data);

      onSuccessGoogle({ ...userInfo, ...tokenResponse });
    },
  });
  return (
    <CustomButton isSmall={isSmall} onClick={() => login()}>
      <GoogleSmall isSmall={isSmall} src={GoogleImg} alt="google" />
      {text}
    </CustomButton>
  );
};

export default GoogleButton;
