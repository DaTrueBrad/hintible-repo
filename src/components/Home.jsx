import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-container">
        <h1>Start your Journey.</h1>
        <img
          src="https://softr-prod.imgix.net/applications/4beb3749-0462-47c9-bd84-03dd40b9c2aa/assets/48cb2bb3-bab1-4361-b409-0455f5b75c60.png"
          alt=""
          className="home-logo"
        />
        <Link to='/profile/2'><button className="solid-btn">Show Me</button></Link>
      </div>
    </div>
  );
};

export default Home;
