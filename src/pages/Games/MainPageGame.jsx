import React from "react";
import adamPhoto from "./photos/adam.png";
import arrow from "./photos/Arrow.svg";
import style from "./Main.module.scss";
import SocialNetwork from "../../components/SocialNetwork/SocialNetwork";

const MainPageGame = () => {
  return (
    <div className={style.main}>
      <div className={style.sectionOne}>
        <div className={style.socialNetworkLogos}>
          <SocialNetwork />
        </div>
        <div className={style.deskriptionDevelopers}>
          <p className={style.game}>игры</p>
          <p className={style.text}>
            Toy.Stream сегодня — это команда из более 500 человек и офисы по
            всему миру. Мы входим в топ-10 игровых разработчиков по установкам —
            общее количество загрузок перевалило за 2 млрд, а ежемесячная
            аудитория составляет более 250 млн игроков.
          </p>
          <p className={style.text}>
            В разработке у нас всегда находится более десяти проектов
            одновременно. Мы постоянно экспериментируем, ищем новые тренды и
            пробуем себя в новых жанрах.
          </p>
          <div>
            <button className={style.BtnOurWorks}>
              Смотреть наши работы
              <img className={style.arrow} src={arrow} alt="f" />
            </button>
          </div>
        </div>
      </div>
      <div className={style.sectionTwo}>
        <img className={style.adamPhoto} src={adamPhoto} alt="adam" />
        <ul className={style.sidebar_list}>
          <li className={style.sidebar_items}>
            Игры <span className={style.sidebar_square}></span>
          </li>
          <li className={style.sidebar_items}>
            Наши работы
            <span
              style={{ backgroundColor: "#CE0002", outline: 0 }}
              className={style.sidebar_square}
            ></span>
          </li>
          <li className={style.sidebar_items}>
            Последние проекты
            <span
              style={{ backgroundColor: "#CE0002", outline: 0 }}
              className={style.sidebar_square}
            ></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainPageGame;
