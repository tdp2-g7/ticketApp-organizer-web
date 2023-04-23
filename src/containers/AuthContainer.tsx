import { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { Role } from 'src/helpers/roles';
import {
  onLoginRequested,
  onRegisterRequested,
} from 'src/redux/actions/user.actions';
import Auth from 'src/views/Auth/Auth';

const AuthContainer: FunctionComponent = () => {
  const dispatch = useDispatch();

  const onRegister = (googleResponse: any) => {
    const data = {
      userId: googleResponse.sub,
      name: googleResponse.given_name,
      lastName: googleResponse.family_name,
      role: Role.ORGANIZER,
      email: googleResponse.email,
    };

    dispatch(onRegisterRequested(data));
  };

  const onLogin = (googleResponse: any) => {
    const data = {
      userId: googleResponse.sub,
      accessToken: googleResponse.access_token,
      email: googleResponse.email,
    };

    dispatch(onLoginRequested(data));
  };

  return <Auth onRegister={onRegister} onLogin={onLogin} />;
};
export default AuthContainer;
