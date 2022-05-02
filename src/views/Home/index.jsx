import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { cardImages } from '../../assets/images';
import { Banner, Cards, CardsHeader, Header, LandingContent, SectionTitle } from '../../components';
import "./style.scss";

const content = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis officiis magnam similique voluptatem reprehenderit obcaecati?"
const Home = () => {
  const [storeContent, setStoreContent] = useState([]);
  const [storeLoading, setStoreLoading] = useState(false);
  const [storeError, setStoreError] = useState(false);
  
useEffect(() => {
  const controller = new AbortController();
  const storeRequest = async() => {
    setStoreLoading(true)
    try {
      const res = await axios(`${process.env.REACT_APP_FAKE_STORE_API}`, {
        signal: controller.signal
     });
      console.log(res) 
      if(res){
        setStoreContent(res.data);
        setStoreLoading(false)
      }
    } catch (error) {
      setStoreError(true)
      setStoreLoading(false)
    }
  }
  storeRequest()

  return () => controller.abort()
}, [])

if(storeLoading) return <div><h2>Loading...</h2></div>
if(!storeContent.length && storeError) return <div><h3>There was an error</h3></div>
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
      <Cards content={cardImages} size="lg" filter={(card) => card.hasOwnProperty("overlay")}/>
    </div>
    <div className="single-row-card-container">
      <CardsHeader cardsHeader="Top Rated"/>
      <Cards content={storeContent} size="xl" filter={(card) => card.category.includes("clothing") && card.rating.rate > 2.7}/>
    </div>
    </>
  )
}

export default Home
