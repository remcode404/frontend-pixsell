import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.scss";
import Plogo from "./photos/Plogo.svg";
import Behance from "./photos/Behance.svg";
import crugLogo from "./photos/crugLogo.svg";
import Snapchat from "./photos/Snapchat.svg";
import Facebook from "./photos/facebook.svg";
const Footer = () => {
  return (
    <div className={style.footer}>

      <div className={style.AdamInc}>
        <p className={style.incs}>@Adam, Inc</p>
      </div>

      <div className={style.links}>
        <Link to="/main">
          <button className={style.BtnLink}>Главная</button>
        </Link>
        <Link to="/compain">
          <button className={style.BtnLink}>Компания</button>
        </Link>
        <Link to="/games">
          <button className={style.BtnLink}>Игры</button>
        </Link>
        <Link to="/сareer">
          <button className={style.BtnLink}>Карьера</button>
        </Link>
        <Link to="/news">
          <button className={style.BtnLink}>Новости</button>
        </Link>
        <Link to="/contacts">
          <button className={style.BtnLink}>Контакты</button>
        </Link>
      </div>
      <div className={style.logos}>
        <img className={style.icons} src={Plogo} alt="f" />
        <img className={style.icons} src={Behance} alt="f" />
        <img className={style.icons} src={crugLogo} alt="f" />
        <img className={style.icons} src={Snapchat} alt="f" />
        <img className={style.icons} src={Facebook} alt="f" />
      </div>
    </div>
  );
};

export default Footer;
