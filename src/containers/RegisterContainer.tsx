import { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { Role } from 'src/helpers/roles';
import { onRegisterRequested } from 'src/redux/actions/user.actions';
import Register from 'src/views/Register/Register';

const RegisterContainer: FunctionComponent = () => {
  const dispatch = useDispatch();

  const onRegister = (googleResponse: any) => {
    const data = {
      userId: googleResponse.profileObj.googleId,
      name: googleResponse.profileObj.givenName,
      lastname: googleResponse.profileObj.familyName,
      role: Role.ORGANIZER,
      email: googleResponse.profileObj.email,
    };

    dispatch(onRegisterRequested(data));
  };

  return <Register onRegister={onRegister} />;
};
export default RegisterContainer;
