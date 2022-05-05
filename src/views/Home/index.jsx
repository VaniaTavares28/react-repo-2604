import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { cardImages } from '../../assets/images';
import {
  Banner,
  Cards,
  CardsHeader,
  Cart,
  Form,
  Header,
  LandingContent,
  SectionTitle,
} from "../../components";
import "./style.scss";
import CartContext from "../../context/CartContext";
import { toast } from "react-toastify";

const content =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis officiis magnam similique voluptatem reprehenderit obcaecati?";
const Home = () => {
  const { shoppedItems, showCart } = useContext(CartContext);
  const [storeContent, setStoreContent] = useState([]);
  const [storeLoading, setStoreLoading] = useState(false);
  const [storeError, setStoreError] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState("");
  const [category, setCategory] = useState("login");

  const handleLogIn = () => {
    if (userLoggedIn.length) {
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("users");
      setUserLoggedIn("");
      toast.success("Successfully logged out!");
    } else {
    }
  };
  useEffect(() => {
    const storedLogIn = localStorage.getItem("loggedIn");
    if (storedLogIn) {
      setUserLoggedIn(`${storedLogIn}'s Cart`);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    if (!storeContent.length) {
      const storeRequest = async () => {
        setStoreLoading(true);
        try {
          const res = await axios("https://fakestoreapi.com/products", {
            signal: controller.signal,
          });

          if (res) {
            setStoreContent(res.data);
            setStoreLoading(false);
            setStoreError(false);
          }
        } catch (error) {
          setStoreError(true);
          setStoreLoading(false);
        }
      };
      storeRequest();
    }

    return () => controller.abort();
  }, [storeContent]);

  return (
    <>
      {!userLoggedIn && showForm && (
        <Form
          category={category}
          setCategory={setCategory}
          setShowForm={setShowForm}
        />
      )}
      {showCart && shoppedItems.length && <Cart />}
      <Banner />
      <div className="header-container">
        <Header userLoggedIn={userLoggedIn} handleLogIn={handleLogIn} />
        <LandingContent
          button={true}
          highlight={true}
          title="Skin Remedies."
          content={content}
        />
      </div>
      <SectionTitle
        borderLow="border-low"
        title="Solutions for all skin"
        content="Explore our innovative skincare products"
      />
      <div className="single-row-card-container">
        <CardsHeader cardsHeader="Most Popular" />
        <Cards
          content={cardImages}
          size="lg"
          filter={(card) => card.hasOwnProperty("overlay")}
        />
      </div>
      <div className="single-row-card-container">
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
    </>
  );
};

export default Home;