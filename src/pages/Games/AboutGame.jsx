import React from 'react';
import style from './AboutGame.module.scss';
import { Carousel } from 'react-bootstrap';
import game from './photos/broforce1.png';

const AboutGame = () => {
  return (
    <div className={style.about_game}>
      <div className={style.card_information}>
        <div className={style.img_game}></div>
        <div className={style.information_game}>
          <h1 className={style.name_game}>Counter-Strike: Global Offensive</h1>
          {/* <p className={style.description_game}>
            Counter-Strike: Global Offensive (CS:GO) расширяет границы ураганной командной игры,
            представленной ещё 19 лет назад. CS:GO включает в себя новые карты, персонажей, оружие и
            режимы игры, а также улучшает классическую составляющую CS (de_dust2 и т. п.).
          </p> */}
          <p className={style.all_reviews}>Все обзоры: Очень положительные (всего 6,808,257)</p>
          <p className={style.date}>ДАТА ВЫХОДА: 21-08-2012</p>
          <p className={style.publisher_game}>ИЗДАТЕЛЬ: Valve</p>
          <p className={style.genre_game}>Жанр: Экшены, Бесплатно</p>
          <p className={style.platform_game}>Платформа: PC, PS, Xbox</p>
          <button className={style.add_toFavorites}>Добавить в избранное</button>
        </div>
      </div>
      <div className={style.buy_game}>
        <p className={style.text_cupon}>Промокод:</p>
        <input className={style.input_cupon} type="text" />
        <div className={style.buy}>
          <p className={style.price_game}>5000 р.</p>
          <button className={style.but_buy}>Купить</button>
        </div>
      </div>
      <div className={style.game_information}>
        <Carousel className="w-75">
          <Carousel.Item>
            <img src={game} alt="" className="d-block w-100" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={game} alt="" className="d-block w-100" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={game} alt="" className="d-block w-100" />
          </Carousel.Item>
        </Carousel>
        <p className={style.description_game}>
          Counter-Strike: Global Offensive (CS:GO) расширяет границы ураганной командной игры,
          представленной ещё 19 лет назад. CS:GO включает в себя новые карты, персонажей, оружие и
          режимы игры, а также улучшает классическую составляющую CS (de_dust2 и т. п.).
        </p>
      </div>
      <div className={style.window_reviews}>

      </div>
    </div>
  );
};

export default AboutGame;
