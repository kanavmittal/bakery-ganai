import React from "react";
import "./banner.scss";
import { ReactComponent as FoodIcon } from '../../assets/icon/foodIcon.svg';

const BannerData = [
  {
    title: "Products",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Cake Class",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Recipes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

function Banner() {
  return (
    <>
      <div id="banner_body">
        <div id="banner_card">
          {BannerData.map((item) => {
            return (<div id="banner_card_body">
              <div id="banner_card_icon">
                <FoodIcon></FoodIcon>
              </div>
              <div id="banner_card_content">
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
              </div>
            </div>)
            ;
          })}
        </div>
      </div>
    </>
  );
}

export default Banner;
