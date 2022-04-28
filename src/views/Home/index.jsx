import React from 'react'
import { Banner, Header, HeaderContainer, LandingContent, SectionTitle } from '../../components';

const content = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis officiis magnam similique voluptatem reprehenderit obcaecati?"
const Home = () => {
  return (
    <>
    <Banner/>
    <HeaderContainer>
      <Header/>
      <LandingContent highlight={true} title="Skin Remedies." content={content} />
    </HeaderContainer>
    <SectionTitle borderLow="border-low" title="Solutions for all skin" content="Explore our innovative skincare products"/>
    </>
  )
}

export default Home
