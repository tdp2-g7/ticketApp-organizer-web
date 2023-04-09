import { FunctionComponent } from 'react';
import Register from 'src/views/Register/Register';

const RegisterContainer: FunctionComponent = () => {
  const onRegister = () => {
  };

  return (
        <Register
          onRegister={onRegister}
        />
  );
};
export default RegisterContainer;
