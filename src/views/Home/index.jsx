import React from 'react'
import { Banner, Cards, CardsHeader, Header, LandingContent, SectionTitle } from '../../components';
import "./style.scss";

const content = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis officiis magnam similique voluptatem reprehenderit obcaecati?"
const Home = () => {
  return (
    <>
    <Banner/>
    <div className='header-container'>
      <Header/>
      <LandingContent button={true} highlight={true} title="Skin Remedies." content={content} />
       </div>
    <SectionTitle borderLow="border-low" title="Solutions for all skin" content="Explore our innovative skincare products"/>
    <div className="single-row-card-container">
      <CardsHeader cardsHeader="Most Popular"/>
      <Cards size="lg" filter={(card) => card.hasOwnProperty("overlay")}/>
    </div>
    </>
  )
}

export default Home
