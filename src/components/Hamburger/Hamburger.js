import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHamburger = styled.button`
padding: 15px;
border: none;
background:none;
position:absolute;
right: 15px;
z-index: 9999;

${({ theme }) => theme.mq.desktop} {
  display:none;
}
`;

const InnerHamburger = styled.div`
  position: relative;
  width: 25px;
  height: 2px;
  background-color: ${({ theme, isOpen }) =>
    isOpen ? 'transparent' : theme.black};
  transition: background-color 0.15s ease-in;

  ::after,
  ::before {
    content: '';
    position: absolute;
    left: 0;
    width: 25px;
    height: 2px;
    background-color: ${({ theme }) => theme.black};
    transition: transform 0.25s ease-in-out;
  }

  ::before {
    top: -7px;
    transform: translateY(${({ isOpen }) => (isOpen ? '7px' : '0')})
      rotate(${({ isOpen }) => (isOpen ? '45deg' : '0')});
  }

  ::after {
    top: 7px;
    transform: translateY(${({ isOpen }) => (isOpen ? '-7px' : '0')})
      rotate(${({ isOpen }) => (isOpen ? '-45deg' : '0')});
  }
`;

const Hamburger = ({ isOpen, ...props }) => (
  <StyledHamburger {...props}>
    <InnerHamburger isOpen={isOpen} />
  </StyledHamburger>
);

Hamburger.propTypes = {
  isOpen: PropTypes.bool,
};

Hamburger.defaultProps = {
  isOpen: false,
};


export default Hamburger