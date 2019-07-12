// import React from 'react';
// import styled from 'styled-components';
// import Dyplom1 from '../../assets/images/dyplom1.png';
// import Dyplom2 from '../../assets/images/dyplom2.png';
// import Dyplom3 from '../../assets/images/dyplom3.png';
// import Dyplom4 from '../../assets/images/dyplom4.png';

// const StyledWrapper = styled.div`
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;
// `;

// const Item = styled.div`
// display: block;
// margin-top: 10px;
// `;

// const Gallery = () => {

//  const OpenImage = (ItemID) => (
//   console.log(ItemID)
//  )

//  return (
//   <StyledWrapper onClick={OpenImage} ItemID={Item.id}>
//    <Item id='1'><img src={Dyplom1} /></Item>
//    <Item id='2'><img src={Dyplom2} /></Item>
//    <Item id='3'><img src={Dyplom3} /></Item>
//    <Item id='4'><img src={Dyplom4} /></Item>
//   </StyledWrapper>
//  )
// };

// export default Gallery;

import React from 'react';
import styled from 'styled-components';
import ZoomImg from '../Gallery/ZoomImg';
import Dyplom1 from '../../assets/images/dyplom1.png';
import Dyplom2 from '../../assets/images/dyplom2.png';
import Dyplom3 from '../../assets/images/dyplom3.png';
import Dyplom4 from '../../assets/images/dyplom4.png';

const StyledWrapper = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
`;

const Gallery = () => (
 <StyledWrapper>
  <ZoomImg
   src={Dyplom1}
  />
  <ZoomImg
   src={Dyplom2}
  />
  <ZoomImg
   src={Dyplom3}
  />
  <ZoomImg
   src={Dyplom4}
  />
 </StyledWrapper>

);

export default Gallery;
