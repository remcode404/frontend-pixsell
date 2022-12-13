import React from 'react';
import style from './MainPageVacancy.module.scss';
import light from './images/main-light.png';

const MainPageVacancy = () => {
  return (
    <div className={style.main_vacancy}>
      <div className={style.behind_div}></div>
      <div className={style.sidebar_vacancy}>
        <ul className={style.sidebar_list}>
          <li className={style.sidebar_items}>
          карьера <span className={style.sidebar_square}></span>
          </li>
          <li className={style.sidebar_items}>
            <span style={{backgroundColor: '#CE0002', outline: 0}} className={style.sidebar_square}></span>
          </li>
          <li className={style.sidebar_items}>
            <span style={{backgroundColor: '#CE0002', outline: 0}} className={style.sidebar_square}></span>
          </li>
        </ul>
      </div>
      <div className={style.section_one_vacancy}>
        <div className={style.section_one_div}>
          <h1 className={style.section_one_title}>Карьера в Toy.Stream</h1>
          <p className={style.section_one_text}>
            Мы всегда рады новым высококлассным специалистам геймдева, желающим присоединиться к
            нашей команде.
          </p>
          <button className={style.section_one_button}>
            Вакансии <span className={style.button_arrow}>↓</span>
          </button>
        </div>
      </div>
      <div className={style.section_two_vacancy}>
        <img className={style.image_light} src={light} alt="light" />
      </div>
    </div>
  );
};

export default MainPageVacancy;
