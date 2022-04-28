import React from 'react';
// import Header from '../../components/Header';
import { Banner, Header, LandingContent } from '../../components';
import HeaderContainer from '../../components/layout/containers/HeaderContainer';

const content = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis officiis magnam similique voluptatem reprehenderit obcaecati?"
const Home = () => {
  return (
    <>
    <Banner/>
    <HeaderContainer>
      <Header/>
      <LandingContent highlight={true} title="Skin Remedies." content={content}/>
    </HeaderContainer>
    </>
  )
}

export default Home
