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
      userId: googleResponse.profileObj.googleId,
      name: googleResponse.profileObj.givenName,
      lastName: googleResponse.profileObj.familyName,
      role: Role.ORGANIZER,
      email: googleResponse.profileObj.email,
    };

    dispatch(onRegisterRequested(data));
  };

  const onLogin = (googleResponse: any) => {
    const data = {
      userId: googleResponse.profileObj.googleId,
      accessToken: googleResponse.accessToken,
      email: googleResponse.profileObj.email,
    };

    dispatch(onLoginRequested(data));
  };

  return <Auth onRegister={onRegister} onLogin={onLogin} />;
};
export default AuthContainer;
