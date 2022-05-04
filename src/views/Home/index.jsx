import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { cardImages } from '../../assets/images';
import { Banner, Cards, CardsHeader, Cart, Header, LandingContent, SectionTitle } from '../../components';
import "./style.scss";
import CartContext from '../../context/CartContext';

const content = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis officiis magnam similique voluptatem reprehenderit obcaecati?"
const Home = () => {
  const { shoppedItems, showCart } = useContext(CartContext)
  const [storeContent, setStoreContent] = useState([]);
  const [storeLoading, setStoreLoading] = useState(false);
  const [storeError, setStoreError] = useState(false);


useEffect(() => {
  const controller = new AbortController();
  if(!storeContent.length) {
    const storeRequest = async() => {
      setStoreLoading(true)
      try {
        const res = await axios("https://fakestoreapi.com/products", {
          signal: controller.signal
       });
       
        if(res){
          setStoreContent(res.data);
          setStoreLoading(false)
          setStoreError(false)
        }
      } catch (error) {
        setStoreError(true)
        setStoreLoading(false)
      }
    }
    storeRequest()
  }

  return () => controller.abort()
}, [storeContent])

  return (
    <>
    {showCart && shoppedItems.length && <Cart/>}
    <Banner/>
    <div className='header-container'>
      <Header />
      <LandingContent button={true} highlight={true} title="Skin Remedies." content={content} />
       </div>
    <SectionTitle borderLow="border-low" title="Solutions for all skin" content="Explore our innovative skincare products"/>
    <div className="single-row-card-container">
      <CardsHeader cardsHeader="Most Popular"/>
      <Cards content={cardImages} size="lg" filter={(card) => card.hasOwnProperty("overlay")}/>
    </div>
    <div className="single-row-card-container">
      <CardsHeader cardsHeader="Top Rated"/>
      {storeLoading ? <div><h2>Loading...</h2></div> : storeError ? <div><h2>There was an error...</h2></div> : <Cards content={storeContent} size="xl" filter={(card) => card.category.includes("clothing") && card.rating.rate > 2.7}/>}
    </div>
    </>
  )
}

export default Home;