import React, { useState } from 'react';
import SocialNetwork from '../../components/SocialNetwork/SocialNetwork';
import style from './MainPageVacancy.module.scss';
import light from './images/main-light.png';
import arrow from './images/Arrow.svg';

const MainPageVacancy = () => {
  const arr = [
    { text: 'Карьера', id: 'mainPageVacancy' },
    { text: 'Вакансии', id: 'main_vacancy' },
    { text: 'Последние проекты', id: 'mainJoboBenefits' },
  ];
  const [sideBarItems, setSideBarItems] = useState(0);

  return (
    <div id="mainPageVacancy" className={style.main}>
      <div className={style.sectionOne}>
        <div className={style.socialNetworkLogos}>
          <SocialNetwork />
        </div>
        <a href="#mainPageVacancy" className={style.aUpMain}>
          <button className={style.btnUpMain}>Вверх</button>
        </a>
        <div className={style.deskriptionDevelopers}>
          <p className={style.game}>Карьера в Toy.Stream</p>
          <p className={style.text}>
            Мы всегда рады новым высококлассным специалистам геймдева, желающим присоединиться к
            нашей команде.
          </p>
          <div>
            <a className={style.AOurWorks} href="#main_vacancy">
              <button className={style.BtnOurWorks}>
                Вакансии
                <img className={style.arrow} src={arrow} alt="f" />
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className={style.sectionTwo}>
        <img className={style.light} src={light} alt="light" />
        <ul className={style.sidebar_list}>
          {arr.map((item, index) => (
            <li  className={style.sidebar_items}>
              <a onClick={() => setSideBarItems(index)} className={style.aHrefs} href={'#' + item.id}>
                {item.text}
              </a>
              <span
                className={
                  sideBarItems === index ? `${style.sidebar_square}` : `${style.sideBarTrue}`
                }></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainPageVacancy;
