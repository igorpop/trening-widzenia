import React from 'react';
import styled from 'styled-components';
import Image from '../../assets/images/about.png'

const ImageWrapper = styled.div`
position: relative;
text-align: center;
padding: 10px 0;

img {
 width: 40vh;
}
`;

const ImageAbout = () => (
 <ImageWrapper><img src={Image} /></ImageWrapper>
);

export default ImageAbout;