import React from "react";
import Banner from "../../components/Banner/banner";
import './home.scss'
import Listings from "../../components/Listings/listings";

function Home() {
  return (
    <div id='home'>
      <div id="home_body">
        <Banner />
        <Listings />
      </div>
    </div>
  );
}

export default Home;
