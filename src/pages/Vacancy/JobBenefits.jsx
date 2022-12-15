import React from 'react';
import style from './JobBenefits.module.scss';
import team_icon from './images/team-icon.png';
import bonus_icon from './images/bonus-icon.png';
import self_realization_icon from './images/self-realization-icon.png';
import development_icon from './images/development-icon.png';

const JobBenefits = () => {
  return (
    <div id="mainJoboBenefits" className={style.main_job}>
      <div className={style.main_text}>
        <h1 className={style.main_title}>Преимущества работы в Toy.Stream</h1>
        <p className={style.main_description}>
          Toy.Stream сегодня — это команда из более 500 человек и офисы по всему миру. Мы входим в
          топ-10 игровых разработчиков по установкам — общее количество загрузок перевалило за 2
          млрд, а ежемесячная аудитория составляет более 250 млн игроков. <br /> <br /> В разработке у нас всегда
          находится более десяти проектов одновременно. Мы постоянно экспериментируем, ищем новые
          тренды и пробуем себя в новых жанрах.
        </p>
      </div>
      <div className={style.main_blockBenefints}>
        <div className={style.blockBenefints_items}>
          <div className={style.blockBenefints_item}>
            <div className={style.item_imageDiv}>
              <img className={style.item_image} src={team_icon} alt="team" />
            </div>
            <h4 className={style.item_titleText}>Команда</h4>
            <p className={style.item_descriptionText}>Лучшие из лучших</p>
          </div>
          <div className={style.blockBenefints_item}>
            <div className={style.item_imageDiv}>
              <img className={style.item_image} src={bonus_icon} alt="bonus" />
            </div>
            <h4 className={style.item_titleText}>Бонусы</h4>
            <p className={style.item_descriptionText}>% с проектов</p>
          </div>
          <div className={style.blockBenefints_item}>
            <div className={style.item_imageDiv}>
              <img className={style.item_image} src={self_realization_icon} alt="self realization" />
            </div>
            <h4 className={style.item_titleText}>Самореализация</h4>
            <p className={style.item_descriptionText}>Поддерживаем идеи</p>
          </div>
          <div className={style.blockBenefints_item}>
            <div className={style.item_imageDiv}>
              <img className={style.item_image} src={development_icon} alt="development" />
            </div>
            <h4 className={style.item_titleText}>Развитие</h4>
            <p className={style.item_descriptionText}>Растим профессионалов</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobBenefits;
