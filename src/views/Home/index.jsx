import React from 'react';
import Header from '../../components/Header';
import HeaderContainer from '../../components/layout/containers/HeaderContainer';
import Banner from "../../components/Banner"

const Home = () => {
  return (
    <>
    <Banner/>
    <HeaderContainer>
      <Header/>
    </HeaderContainer>
    </>
  )
}

export default Home
