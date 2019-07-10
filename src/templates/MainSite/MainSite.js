import React from 'react';
import styled from 'styled-components';
import MainImage from '../../assets/images/jacek_black.png';
import Patterns from '../../components/Patterns/Patterns';

const StyledWrapper = styled.div`
width:100vw;
height: 100vh;
overflow-x: hidden;
`;


const MainPhoto = styled.div`
position: relative;
width: 100vw;
height: 47vh;
top: 28vh;
left: 0;
background-image: url(${MainImage});
background-size: cover;
background-position: center;
filter: blur(0);

animation: blur 3s both;

@keyframes blur {
 from {
  filter: blur(2px)
 }
 to {
  filter: blur(0)
 }
};

${({ theme }) => theme.mq.desktop} {
 width: 70vw;
 height: 60vh;
 left: 160px;
 border-radius: 30px;
 border-bottom: solid 5px ${({ theme }) => theme.primary};
border-left: solid 45px ${({ theme }) => theme.primary};
}
`;

const StyledHeader = styled.h1`
position: absolute;
font-family: ${({ theme }) => theme.font.family.montserrat};
font-weight: ${({ theme }) => theme.font.weight.normal};
font-size: ${({ theme }) => theme.font.size.xs};
color: ${({ theme }) => theme.black};
bottom: 30px;
width:100%;
text-align: center;
text-transform:uppercase;
background-color: ${({ theme }) => theme.primary};
padding: 10px 0;
line-height:1.1;
margin:0;
animation-name: showText;
animation-duration: 2s;

@keyframes showText {
 from {
  color: ${({ theme }) => theme.primary};
 }
 to {
  color: ${({ theme }) => theme.black};
 }
}

${({ theme }) => theme.mq.desktop} {
 font-size: ${({ theme }) => theme.font.size.m};
 bottom: 10vh;
 padding: 20px 20px;
}
`;

const MainSite = () => (
 <StyledWrapper>
  <Patterns />
  <MainPhoto />
  <StyledHeader>Czy chciałbyś poprawić<br /> jakość swojego widzenia?</StyledHeader>
 </StyledWrapper>
);

export default MainSite