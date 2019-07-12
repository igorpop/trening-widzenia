import React, { useState } from 'react';
import styled from 'styled-components';
import ImageAbout from '../../components/ImageAbout/ImageAbout';
import Gallery from '../../components/Gallery/Gallery';

const StyledWrapper = styled.div`
display: flex;
flex-direction: column;
`;

const NameWrapper = styled.h1`
font-family: ${({ theme }) => theme.font.family.montserrat};
font-weight: ${({ theme }) => theme.font.weight.bold};
font-size: ${({ theme }) => theme.font.size.s};
text-align: right;
margin: 0;
padding: 0 15px 0 0;
`;

const StyledDescription = styled.h3`
font-family: ${({ theme }) => theme.font.family.montserrat};
font-weight: ${({ theme }) => theme.font.weight.normal};
font-size: ${({ theme }) => theme.font.size.xxs};
text-align: justify;
padding: 0 15px;
`;

const StyledWrapDescription = styled.h3`
/* display: ${({ isOpen }) => (isOpen ? 'inline' : 'none')}; */
font-family: ${({ theme }) => theme.font.family.montserrat};
font-weight: ${({ theme }) => theme.font.weight.normal};
/* font-size: ${({ theme }) => theme.font.size.xxs}; */
text-align: justify;
padding: 0 15px;

opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
max-height: ${({ isOpen }) => (isOpen ? '999em' : '0')};
font-size: ${({ isOpen }) => (isOpen ? '16px' : '0')};
transition: .25s ease;

`;

const MoreLess = styled.button`
position: relative;
text-decoration: none;
border: none;
color: ${({ theme }) => theme.primary};
background: none;
padding: 0 15px 15px 15px;
left: 60%;
text-align:right;
font-family: ${({ theme }) => theme.font.family.montserrat};
font-size: ${({ theme }) => theme.font.size.xxs};
font-weight: ${({ theme }) => theme.font.weight.bold};
margin-top: 10px;
`;

const TextWrap = [
   '-wieloletnie doświadczenie w stosowaniu naturalnych metod leczenia, min. współzałożyciel ośrodka odmładzania Ad Vita.',

   '-bogate doświadczenie w prowadzeniu warsztatów poświęconym umiejętnością reagowania w sytuacjach stresowych.',

   '-autor programu wspierania odporności metodami wizualnymi - Klinika Hematologii Wrocław',

   '-propagator zdrowego stylu życia w licznych programach TV i audycjach radiowych.',
]

const ShowGallery = styled.div`
position:relative;
display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const About = () => {
   const [isOpen, setTextState] = useState(false);

   const toggleLessMore = () => {
      setTextState(!isOpen);
   };

   return (
      <>
         <StyledWrapper>
            <ImageAbout />
            <NameWrapper>Jacek Niegierysz</NameWrapper>
            <StyledDescription>Absolwent wrocławskiej Akademii Medycznej ze specjalizacją z okulistyki, medycyny naturalnej i akupunktury. Ponad to praktyk NLP - tytuł wydany przez Instytut psychoterapii we Wrocławiu, trener technik relaksacyjnych i wizualnych/tytuł uzyskany przez Niepubliczne Centrum Kształcenia podyplomowego we Wrocławiu.',
 </StyledDescription>

            {TextWrap.map(item => (
               <StyledWrapDescription isOpen={isOpen} key={item} >
                  {item}
               </StyledWrapDescription>
            ))}
            <ShowGallery isOpen={isOpen}><Gallery /></ShowGallery>
         </StyledWrapper>
         <MoreLess onClick={toggleLessMore}>{isOpen ? "pokaż mniej" : "pokaż więcej"}</MoreLess>
      </>
   );
};

export default About