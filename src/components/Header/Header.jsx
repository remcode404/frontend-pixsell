import React from "react";
import style from "./Header.module.scss";
import toyStream from "./photos/toyStream.png";
import { Link } from "react-router-dom";
import IronMan from "./photos/ironman.gif";
// import basket from '../Header/files/Basket.svg'
import { ReactComponent as Basket } from "../Header/files/Basket.svg";

const Header = () => {
  return (
    <div className={style.header}>
      <div>
        <div className={style.toyStream}>
          <Link to="/">
            {" "}
            <img
              className={style.imgToyStream}
              src={toyStream}
              alt="фото header"
            />
          </Link>
        </div>
      </div>
      <div className={style.textMenu}>
        <div className={style.links}>
          <Link to="/" relative="path">
            <button className={style.BtnLink}>Главная</button>
          </Link>
          <Link to="/compain">
            <button className={style.BtnLink}>Компания</button>
          </Link>
          <Link to="/games">
            <button className={style.BtnLink}>Игры</button>
          </Link>
          <Link to="/career">
            <button className={style.BtnLink}>Карьера</button>
          </Link>
          <Link to="/news">
            <button className={style.BtnLink}>Новости</button>
          </Link>
          <Link to="/contacts">
            <button className={style.BtnLink}>Контакты</button>
          </Link>
          <Link to="/basket">
            <button className={style.BtnLink}><Basket className={style.basket} />
              {/* <img className={style.basket} src={basket} alt="" /> */}
              </button>
          </Link>
        </div>

        <div className={style.language}>
          <p className={style.btnLangiage}>
            <img src={IronMan} alt="Железный Человек" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
