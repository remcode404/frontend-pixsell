import React from "react";
import adamPhoto from "./photos/adam.png";
import arrow from "./photos/Arrow.svg";
import style from "./Main.module.scss";
import SocialNetwork from "../../components/SocialNetwork/SocialNetwork";
import { useState } from "react";

const MainPageGame = () => {
  const arr = [
    { text: "Игры", id: "mainPage" },
    { text: "Наши работы", id: "gameList" },
    { text: "Последние проекты", id: "lastProjects" },
  ];
  const [sideBarItems, setSideBarItems] = useState(0);

  return (
    <div id="mainPage" className={style.main}>
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
            <a className={style.BtnOurWorks} href="#gameList">
              <button className={style.BtnOurWorks}>
                Смотреть наши работы
                <img className={style.arrow} src={arrow} alt="f" />
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className={style.sectionTwo}>
        <img className={style.adamPhoto} src={adamPhoto} alt="adam" />
        <ul className={style.sidebar_list}>
          {arr.map((item, index) => (
            <li
              key={index}
              onClick={() => setSideBarItems(index)}
              className={style.sidebar_items}
            >
              <a className={style.aHrefs} href={"#" + item.id}>
                {item.text}
              </a>
              <span
                className={
                  sideBarItems === index
                    ? `${style.sidebar_square}`
                    : `${style.sideBarTrue}`
                }
              >
                {" "}
                <a className={style.spanAHref} href={"#" + item.id}>
                  O
                </a>{" "}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainPageGame;
