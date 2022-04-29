import React from 'react'
import { Banner, CardContainer, Cards, CardsHeader, Header, HeaderContainer, LandingContent, SectionTitle } from '../../components';

const content = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis officiis magnam similique voluptatem reprehenderit obcaecati?"
const Home = () => {
  return (
    <>
    <Banner/>
    <HeaderContainer>
      <Header/>
      <LandingContent button={true} highlight={true} title="Skin Remedies." content={content} />
       </HeaderContainer>
    <SectionTitle borderLow="border-low" title="Solutions for all skin" content="Explore our innovative skincare products"/>
    <CardContainer padding="82px 139px 111px 135px">
      <CardsHeader cardsHeader="Most Popular"/>
      <Cards size="lg" filter={(card) => card.hasOwnProperty("overlay")}/>
    </CardContainer>
    </>
  )
}

export default Home
