import React from 'react';
import SocialNetwork from '../../components/SocialNetwork/SocialNetwork';
import style from './MainPageVacancy.module.scss';
import light from './images/main-light.png';
import arrow from './images/Arrow.svg'

const MainPageVacancy = () => {
  return (
    <div className={style.main}>
      <div className={style.sectionOne}>
        <div className={style.socialNetworkLogos}>
          <SocialNetwork />
        </div>
        <div className={style.deskriptionDevelopers}>
          <p className={style.game}>Карьера в Toy.Stream</p>
          <p className={style.text}>
            Мы всегда рады новым высококлассным специалистам геймдева, желающим присоединиться к
            нашей команде.
          </p>
          <div>
            <button className={style.BtnOurWorks}>
              Вакансии
              <img className={style.arrow} src={arrow} alt="f" />
            </button>
          </div>
        </div>
      </div>
      <div className={style.sectionTwo}>
        <img className={style.light} src={light} alt="light" />
        <ul className={style.sidebar_list}>
          <li className={style.sidebar_items}>
            Карьера <span className={style.sidebar_square}></span>
          </li>
          <li className={style.sidebar_items}>
            Вакансии
            <span
              style={{ backgroundColor: '#CE0002', outline: 0 }}
              className={style.sidebar_square}></span>
          </li>
          <li className={style.sidebar_items}>
            Преимущества
            <span
              style={{ backgroundColor: '#CE0002', outline: 0 }}
              className={style.sidebar_square}></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainPageVacancy;
