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
          <HeaderLink onClick={() => globalNavigate('/createEvent')}>
            Crear evento
          </HeaderLink>
          <HeaderLink onClick={() => globalNavigate('/createEvent')}>
            Agenda
          </HeaderLink>
          <HeaderLink onClick={() => globalNavigate('/createEvent')}>
            Metricas
          </HeaderLink>
          <HeaderLink onClick={() => globalNavigate('/createEvent')}>
            Perfil
          </HeaderLink>
          <LogoutContainer>
            <HeaderLink onClick={() => onClickLogout()}>Salir</HeaderLink>
          </LogoutContainer>
        </RightContainer>
      </TopNav>
      {children}
    </>
  );
};

export default Layout;
