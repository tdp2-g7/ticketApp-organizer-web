import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import LogoImg from '../../assets/logo.png';
import history from '../../helpers/history';
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
        <RowDiv onClick={() => history.push('/')}>
          <Logo src={LogoImg} alt='logo' />
          <Title>TicketApp</Title>
        </RowDiv>
        <RightContainer>
          <HeaderLink href='/createEvent'>Crear evento</HeaderLink>
          <HeaderLink href='/agenda'>Agenda</HeaderLink>
          <HeaderLink href='/metrics'>Metricas</HeaderLink>
          <HeaderLink href='/profile'>Perfil</HeaderLink>
          <LogoutContainer>
            <HeaderLink type='button' onClick={() => onClickLogout()}>
              Logout
            </HeaderLink>
          </LogoutContainer>
        </RightContainer>
      </TopNav>
      {children}
    </>
  );
};

export default Layout;
