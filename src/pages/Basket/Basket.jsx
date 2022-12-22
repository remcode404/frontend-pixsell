import React from "react";
import { useSelector } from "react-redux";
import SocialNetwork from "../../components/SocialNetwork/SocialNetwork";
import style from "../Basket/Basket.module.scss";

const Basket = () => {
  return (
    <div className={style.mainParent}>
      <div className={style.mainPage}>
        <div className={style.products}></div>
      </div>
    </div>
  );
};

export default Basket;
