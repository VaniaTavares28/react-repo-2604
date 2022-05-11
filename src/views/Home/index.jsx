import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import CartContext from "../../context/CartContext";
import {
  Banner,
  Cards,
  CardsHeader,
  Cart,
  ColoredSection,
  Header,
  LandingContent,
  SectionTitle,
} from "../../components";
import { cardImages, images } from "../../assets/images";
import "./style.scss";

const content =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis officiis magnam similique voluptatem reprehenderit obcaecati?";
const coloredContent =
  "A healthier you from the inside out. We’ve sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best";
const titles = {
  landing: "Skin Remedies.",
  solutions: "Solutions for all skin",
  como_green: "Clean products that deliver better solutions",
  silver_rust: "All Natural Ingredients",
};

const Home = () => {
  const [storeContent, setStoreContent] = useState([]);
  const [storeLoading, setStoreLoading] = useState(false);
  const [storeError, setStoreError] = useState(false);
  const { showCart, openCart, closeCart } = useContext(CartContext);

  useEffect(() => {
    const storeRequest = async () => {
      setStoreLoading(true);
      try {
        const res = await axios.get("https://fakestoreapi.com/products");

        if (res?.data) {
          setStoreContent(res.data);
          setStoreLoading(false);
        }
      } catch (error) {
        setStoreError(true);
        setStoreLoading(false);
        toast.error("Issues on retrieval");
      }
    };
    storeRequest();
  }, []);

  return (
    <>
      {showCart && <Cart closeCart={closeCart} />}
      <Banner />
      <div className="header-container">
        <Header openCart={openCart} />
        <LandingContent
          button={true}
          highlight={true}
          title={titles.landing}
          content={content}
        />
      </div>
      <SectionTitle
        borderLow="border-low"
        title={titles.solutions}
        content="Explore our innovative skincare products"
      />
      <div className="card-section-container-1">
        <CardsHeader cardsHeader="Most Popular" />
        <Cards
          content={cardImages}
          size="lg"
          filter={(card) => card.hasOwnProperty("overlay")}
        />
      </div>
      <ColoredSection
        title={titles.como_green}
        text={coloredContent}
        image={images.manInBlue}
        color="como_green"
      />
      <div className="card-section-container-2">
        <CardsHeader cardsHeader="Top Rated" />
        {storeLoading ? (
          <div>
            <h2>Loading...</h2>
          </div>
        ) : storeError ? (
          <div>
            <h2>There was an error...</h2>
          </div>
        ) : (
          <Cards
            content={storeContent}
            size="xl"
            filter={(card) =>
              card.category.includes("clothing") && card.rating.rate > 2.7
            }
          />
        )}
      </div>
      <ColoredSection
        title={titles.silver_rust}
        text={coloredContent}
        image={images.armWithTattoo}
        color="silver_rust"
        reverse
      />
    </>
  );
};

export default Home;
