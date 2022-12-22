import React from "react";
import style from "../MainPage/MainPage.module.scss";
import horse from "../MainPage/files/Frame.png";
import arrow from "../MainPage/files/Arrow 3.svg";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <div className={style.mainLeft}>
        <div className={style.mainLeftText}>
          Мы создаем мобильные игры, в которые ты играешь
        </div>
        <div className={style.moreButton}>
          <Link className={style.blockText} to="/compain">
            <p className={style.blockText}>Узнать подробнее</p>
          </Link>
          <div className={style.arrowMore}>
            <img src={arrow} alt="Стрелка" />
          </div>
        </div>
      </div>
      <div className={style.mainRight}>
        <div className={style.yellowBlock}></div>
        <div className={style.yellowBlockImg}>
          <img src={horse} alt="Конь" />
        </div>
        <div className={style.mainText}>
          «Оригинальные идеи, качество реализации игровых механик и внимание к
          деталям интерфейса - наши основные принципы.»
        </div>
      </div>
    </>
  );
};

export default MainPage;
