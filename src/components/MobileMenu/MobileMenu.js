import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import Patterns from '../Patterns/Patterns';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9997;
  flex-direction: column;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  transition: transform 0.25s ease-in-out;

  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`;

const MenuLink = styled.li`
  margin: 20px 0;
  list-style: none;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-weight: ${({ theme }) => theme.font.weight.bold};

  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: opacity 0.25s 0.2s ease-in-out;

  a{
  text-decoration: none;
  color: black;
  }
`;
const MenuLinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

`;
const menuItems = [
  'home',
  'o mnie',
  'oferta',
  'blog',
  'kontakt',
];

const MobileMenu = ({ isOpen }) => (
  <StyledWrapper isOpen={isOpen}>
    <MenuLinksWrapper>
      {menuItems.map(item => (
        <MenuLink isOpen={isOpen} key={item} >
          <Link to={item}>{item}</Link>
        </MenuLink>
      ))}
    </MenuLinksWrapper>

  </StyledWrapper>
);

MobileMenu.propTypes = {
  isOpen: PropTypes.bool,
};
MobileMenu.defaultProps = {
  isOpen: false,
};

export default MobileMenu