import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Logo from '../../components/Logo/Logo';
import LogoSmall from '../../components/Logo/LogoSmall';
import Hamburger from '../../components/Hamburger/Hamburger';
import MobileMenu from '../../components/MobileMenu/MobileMenu';
import DesktopMenu from '../../components/DesktopMenu/DesktopMenu';

const StyledWrapper = styled.nav`
 padding: 32px 34px;
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  z-index: 9999;
`;

const StyledLogoSmall = styled(LogoSmall)`
position:relative;
z-index: 9999;
background-size: cover;

svg {
  background-size: cover;
  padding:0;
}

${({ theme }) => theme.mq.desktop} {
  display: none;
}
`;
const StyledLogo = styled(Logo)`
position: relative;
z-index: 9999;
display: none;

${({ theme }) => theme.mq.desktop} {
  position: absolute;
  left: 40px;
  display: flex;
}
`;

const Header = () => {

  const [isMenuOpen, setMenuState] = useState(false);

  const toggleMobileMenu = () => {
    setMenuState(!isMenuOpen);
  };

  return (
    <StyledWrapper>
      <Link to='/'><StyledLogoSmall /></Link>
      <Link to='/'><StyledLogo /></Link>
      <Hamburger onClick={toggleMobileMenu} isOpen={isMenuOpen} />
      <MobileMenu isOpen={isMenuOpen} />
      <DesktopMenu />
    </StyledWrapper>
  );
};

export default Header