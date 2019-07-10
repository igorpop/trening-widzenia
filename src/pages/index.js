import React from 'react';
import MainTemplate from '../templates/MainTemplate/MainTemplate';
import MainSite from '../templates/MainSite/MainSite';
import About from '../templates/About/About';


const IndexPage = () => (
 <MainTemplate>
  <MainSite />
  <About />
 </MainTemplate>
);

export default IndexPage