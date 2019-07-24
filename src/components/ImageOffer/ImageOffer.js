import React from 'react';
import styled from 'styled-components';
import Image from '../../assets/images/offer.png'

const ImageWrapper = styled.div`
position: relative;
top: 0;
left: -40px;
margin: 20px 0;

img {
 width: 50vh;
}
`;

const ImageOffer = () => (
 <ImageWrapper><img src={Image} alt="Oferta" /></ImageWrapper>
);

export default ImageOffer;