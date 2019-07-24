import React from 'react';
import styled from 'styled-components';
import ImageOffer from '../../components/ImageOffer/ImageOffer';

const data = [
 {
  title: 'Warsztaty:',
  subtitle: 'samopomoc w leczeniu jaskry'
 },
 {
  title: 'Diagnostyka i leczenie'
 },
 {
  title: 'Klawiterapia'
 },
 {
  title: 'Program:',
  subtitle: 'komputer, a Twój wzrok'
 },
];

const StyledWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: ${({ order }) => order % 2 === 0 ? "flex-start" : "flex-end"};
overflow-x: hidden;
/* margin-bottom: 30px; */
`;

const StyledData = styled.div`
display: flex;
justify-content: center;
align-items:center;
background-color: ${({ theme }) => theme.primary};
height: 10vh;
width: 80%;
margin-top: 40px;
border-radius: ${({ order }) => order % 2 === 0 ? '0 20px 20px 0' : '20px 0 0 20px'};
/* transform: translateX(${({ order }) => order % 2 === 0 ? '-100%' : '100%'}); */
`;

const StyledH1 = styled.h1`
font-size: ${({ theme }) => theme.font.size.xs};
color: ${({ theme }) => theme.black};
text-align: center;
line-height: 1.5;
`;

const StyledH2 = styled.h2`
font-size: ${({ theme }) => theme.font.size.xxs};
font-weight: ${({ theme }) => theme.font.weight.normal};
padding: 0;
margin: 0;
`;

const Offer = () => (
 <>
  <ImageOffer />
  {data.map((item, i) => (
   <StyledWrapper order={i} key={item.title} >
    <StyledData order={i}>
     <StyledH1>{item.title}<StyledH2>{item.subtitle}</StyledH2>
     </StyledH1>
    </StyledData>
   </StyledWrapper>
  ))}
 </>
);

export default Offer