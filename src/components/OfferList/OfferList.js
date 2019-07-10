import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.primary};
  display: fixed;
  z-index: 9998; 
  transform: translateY(${({ isListOpen }) => (isListOpen ? '0' : '-120%')});
  transition: transform 0.25s ease-in-out;
`;
const ListWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
`;
const List = styled.li`
  margin: 20px 0;
  list-style: none;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  opacity: ${({ isListOpen }) => (isListOpen ? '1' : '0')};
  transition: opacity 0.25s 0.2s ease-in-out;
`;

const OfferList = ({ isListOpen }) => (
  <StyledWrapper isListOpen={isListOpen}>
    <ListWrapper>
      <List isListOpen={isListOpen}>Profilaktyka i leczenie jaskry</List>
      <List isListOpen={isListOpen}>Warsztaty „Jak pomóc sobie w leczeniu jaskry?”</List>
      <List isListOpen={isListOpen}>Klawiterapia</List>
      <List isListOpen={isListOpen}>Profilaktyka dobrego widzenia</List>
      <List isListOpen={isListOpen}>Program „Komputer a Twój wzrok”</List>
      <List isListOpen={isListOpen}>Diagnostyka i leczenie okulistyczne</List>
    </ListWrapper>
  </StyledWrapper>
);

export default OfferList