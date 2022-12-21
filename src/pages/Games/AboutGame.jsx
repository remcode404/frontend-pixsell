import React, { useEffect } from 'react';
import style from './AboutGame.module.scss';
import { Carousel } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from '../../reducers/Slice/GamesList';

const AboutGame = () => {

  const { gameId } = useParams()
  const dispatch = useDispatch()

  useEffect(() => { 

    dispatch
(fetchGames());

  }, [dispatch]);

  const game = useSelector((state) => state.gameSlice.game).find(item => item._id === gameId)
  const state = useSelector((state) => state.gameSlice)
  console.log(state)

  console.log(game);

  if (!game) {
    return 'Loading...'
  }


  return (
    <div className={style.about_game}>
      <div className={style.card_information}>
        <img src={`http://localhost:3001/${game?.images[0]}`} className={style.img_game}></img>
        <div className={style.information_game}>
          <h1 className={style.name_game}>{game?.name}</h1>
          {/* <p className={style.description_game}>
            Counter-Strike: Global Offensive (CS:GO) расширяет границы ураганной командной игры,
            представленной ещё 19 лет назад. CS:GO включает в себя новые карты, персонажей, оружие и
            режимы игры, а также улучшает классическую составляющую CS (de_dust2 и т. п.).
          </p> */}
          <p className={style.all_reviews}>Все обзоры: Очень положительные (всего 6,808,257)</p>
          <p className={style.date}>ДАТА ВЫХОДА: {game?.date}</p>
          <p className={style.publisher_game}>ИЗДАТЕЛЬ: {game?.publisher}</p>
          <p className={style.genre_game}>Жанр: {game?.genres.join(', ')}</p>
          <p className={style.platform_game}>Платформа: {game?.platform.join(', ')}</p>
          <button className={style.add_toFavorites}>Добавить в избранное</button>
        </div>
      </div>
      <div className={style.buy_game}>
        <p className={style.text_cupon}>Промокод:</p>
        <input className={style.input_cupon} type="text" />
        <div className={style.buy}>
          <p className={style.price_game}>{game?.price} р.</p>
          <button className={style.but_buy}>Купить</button>
        </div>
      </div>
      <div className={style.game_information}>
        <Carousel className="w-75">
          {game?.images?.map((item,index) => {
            if(index !== 0) {
              return (
                <Carousel.Item key={item}>
                  <img src={`http://localhost:3001/${item}`} alt="image" className="d-block w-100" />
                </Carousel.Item>
              )
            }
            
          })}
        </Carousel>
        <p className={style.description_game}>
          {game.description}
        </p>
      </div>
      <div className={style.window_reviews}>

      </div>
    </div>
  );
};

export default AboutGame;
