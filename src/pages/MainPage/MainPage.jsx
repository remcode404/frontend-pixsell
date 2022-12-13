import React from "react";
import style from "../MainPage/MainPage.module.scss";
import horse from "../MainPage/files/Frame.png";

const MainPage = () => {
  return (
    <>
      <div className={style.mainLeft}>
        <div className={style.mainLeftText}>
          Мы создаем мобильные игры, в которые ты играешь
        </div>
      </div>
      <div className={style.mainRight}>
        <div className={style.yellowBlock}></div>
        <div className={style.yellowBlockImg}>
          <img src={horse} alt="Конь" />
        </div>
      </div>
    </>
  );
};

export default MainPage;
