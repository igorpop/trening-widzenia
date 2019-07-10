import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import OfferList from '../../components/OfferList/OfferList';

const StyledWrapper = styled.nav`
display: flex;
position: relative;
display: none;
z-index: 9999;

${({ theme }) => theme.mq.desktop} {
  display: flex;
}
`;
const MenuLink = styled.li`
  margin-right: 40px;
  list-style: none;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  `;

const MenuLinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: space-between;
  justify-content: space-between;
`;


const DesktopMenu = () => {

  // const [isListOpen, setListState] = useState(false);

  // const toggleList = () => {
  //   setListState(!isListOpen);
  //   console.log(isListOpen);
  // };


  return (
    <StyledWrapper >
      <MenuLinksWrapper>
        <MenuLink ><Link to='/'>home</Link></MenuLink>
        <MenuLink >o mnie</MenuLink>
        <MenuLink >oferta</MenuLink>
        {/* <MenuLink onClick={toggleList} isClick={isListOpen}>oferta<OfferList isListOpen={isListOpen} /></MenuLink> */}
        <MenuLink >blog</MenuLink>
        <MenuLink >kontakt</MenuLink>
      </MenuLinksWrapper>
    </StyledWrapper>
  );
};

export default DesktopMenu;