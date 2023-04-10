import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import LogoImg from '../../assets/logo.png';
import { globalNavigate } from '../../helpers/history';
import { onLogout } from '../../redux/actions/user.actions';

import {
  TopNav,
  Logo,
  RowDiv,
  RightContainer,
  HeaderLink,
  LogoutContainer,
  Title,
  CreateEventLink,
  LogoutLink,
} from './styles';
import { ILayoutProps } from './types';

const Layout: FunctionComponent<ILayoutProps> = (props: ILayoutProps) => {
  const { children } = props;

  const dispatch = useDispatch();

  const onClickLogout = () => {
    dispatch(onLogout());
  };

  return (
    <>
      <TopNav>
        <RowDiv onClick={() => globalNavigate('/home')}>
          <Logo src={LogoImg} alt='logo' />
          <Title>TicketApp</Title>
        </RowDiv>
        <RightContainer>
          <CreateEventLink onClick={() => globalNavigate('/createEvent')}>
            Crear evento
          </CreateEventLink>
          <HeaderLink onClick={() => globalNavigate('/home')}>
            Metricas
          </HeaderLink>
          <HeaderLink onClick={() => globalNavigate('/home')}>
            Perfil
          </HeaderLink>
          <LogoutContainer>
            <LogoutLink onClick={() => onClickLogout()}>Salir</LogoutLink>
          </LogoutContainer>
        </RightContainer>
      </TopNav>
      {children}
    </>
  );
};

export default Layout;
