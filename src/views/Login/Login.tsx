import React, { FunctionComponent } from 'react';
import { Form, Field } from 'react-final-form';
import { ILoginProps } from './types';

const Login: FunctionComponent<ILoginProps> = (props: ILoginProps) => {
  const { onLoginClick } = props;
  return (
    <Form
      onSubmit={onLoginClick}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Field name="email" component="input" type="email" placeholder="Email" />
          <Field name="password" component="input" type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      )}
    />
  );
};

export default Login;
