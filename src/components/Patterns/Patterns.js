import React from 'react';
import styled from 'styled-components';
import Element_1 from '../../assets/images/element_1.png';
import Element_2 from '../../assets/images/element_2.png';
import Element_3 from '../../assets/images/element_3.png';

const StyledWrapper = styled.div`
position: relative;
top:0;
left:0;
`;

const Element1 = styled.div`
position:absolute;
top: 12vh;
right: -60px;
z-index: 9998;
padding:0;

img {
 width: 180px;
 
}
`;

const Element2 = styled.div`
position: absolute;
left: 5px;
top: 30vh;
z-index: 9998;
padding: 0;

img {
 width: 110px;
}
`;
const Element3 = styled.div`
position: absolute;
left: 60vw;
top: 65vh;
z-index: 9998;
padding: 0;

img {
 width: 100px;
}
`;

const Patterns = () => (
 <StyledWrapper>
  <Element1>< img src={Element_1} /></Element1>
  <Element2>< img src={Element_2} /></Element2>
  <Element3>< img src={Element_3} /></Element3>
 </StyledWrapper>
);

export default Patterns;