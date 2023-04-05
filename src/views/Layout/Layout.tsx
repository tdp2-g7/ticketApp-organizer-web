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
        <RowDiv onClick={() => globalNavigate('/')}>
          <Logo src={LogoImg} alt='logo' />
          <Title>TicketApp</Title>
        </RowDiv>
        <RightContainer>
          <HeaderLink href='/createEvent'>Create event</HeaderLink>
          <HeaderLink href='/agenda'>Agenda</HeaderLink>
          <HeaderLink href='/metrics'>Metrics</HeaderLink>
          <HeaderLink href='/profile'>Profile</HeaderLink>
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
