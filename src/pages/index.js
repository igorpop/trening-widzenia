import React from 'react';
import MainTemplate from '../templates/MainTemplate/MainTemplate';
import MainSite from '../templates/MainSite/MainSite';
import About from '../templates/About/About';
import Offer from '../templates/Offer/Offer';


const IndexPage = () => (
 <MainTemplate>
  <MainSite />
  <About />
  <Offer />
 </MainTemplate>
);

export default IndexPage