import React, { useEffect, useState } from "react";
import style from "./AboutGame.module.scss";
import { Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "../../reducers/Slice/GamesList";
import { fetchPromos } from "../../reducers/Slice/PromoSlice";
import { addBasket } from "../../reducers/Slice/basketSlice";

const AboutGame = () => {
  const { gameId } = useParams();
  const dispatch = useDispatch();

  const [promoText, setPromoText] = useState("");
  const [validPromo, setValidPromo] = useState(null);
  const [validPromoPrice, setValidPromoPrice] = useState(null);

  const promos = useSelector((state) => state.promoReducer.promo);

  const handleTextPromo = () => {
    setValidPromo(promos.find((item) => item.text === promoText));
  };

  useEffect(() => {
    dispatch(fetchGames());
    dispatch(fetchPromos());
  }, [dispatch]);

  const game = useSelector((state) => state.gameReducer.game).find(
    (item) => item._id === gameId
  );
  const addToCart = () => {
    dispatch(addBasket({id: gameId, price: game.price}))
  }


  console.log(promos.map((item) => item.text).join(""));
  if (!game) {
    return "Loading...";
  }

  return (
    <div className={style.about_game}>
      <div className={style.card_information}>
        <img
          src={`http://localhost:3001/${game?.images[0]}`}
          className={style.img_game}
          alt="f"
        ></img>
        <div className={style.information_game}>
          <h1 className={style.name_game}>{game?.name}</h1>

          <p className={style.all_reviews}>
            Все обзоры: Очень положительные (всего 6,808,257)
          </p>
          <p className={style.date}>ДАТА ВЫХОДА: {game?.date}</p>
          <p className={style.publisher_game}>ИЗДАТЕЛЬ: {game?.publisher}</p>
          <p className={style.genre_game}>Жанр: {game?.genres.join(", ")}</p>
          <p className={style.platform_game}>
            Платформа: {game?.platform.join(", ")}
          </p>
          <button className={style.add_toFavorites}>
            Добавить в избранное
          </button>
        </div>
      </div>
      <div className={style.buy_game}>
        <div>
          <p className={style.text_cupon}>Промокод:</p>

          <input
            value={promoText}
            onChange={(e) => setPromoText(e.target.value)}
            className={style.input_cupon}
            type="text"
          />
          <button onClick={handleTextPromo}>ввести</button>
          {validPromo && <div>OK</div>}
          {validPromo === undefined && <div>NULL</div>}
        </div>

        <div className={style.buy}>
          <p className={style.price_game}>
            {promoText === promos.map((item) => item.text).join("") ? (
              <div>
                {Math.floor(
                  game?.price -
                    (game?.price / 100) * promos.map((item) => item.discount)[0]
                )}
              </div>
            ) : (
              <div>{game?.price}</div>
            )}
          </p>
          <button onClick={() => addToCart()} className={style.but_buy}>Добавить в корзину</button>
        </div>
      </div>

      <div className={style.game_information}>
        <Carousel className="w-75">
          {game?.images?.map((item, index) => {
            if (index !== 0) {
              return (
                <Carousel.Item key={item}>
                  <img
                    src={`http://localhost:3001/${item}`}
                    alt="image"
                    className="d-block w-100"
                  />
                </Carousel.Item>
              );
            }
          })}
        </Carousel>
        <p className={style.description_game}>{game.description}</p>
      </div>
      <div className={style.window_reviews}></div>
    </div>
  );
};

export default AboutGame;
{
  /* <div className={style.buy}>
          <p className={style.price_game}>{promos.map((item) => item.text) === promoText ?<div>{game?.price}</div> :  <div>{(game?.price / 100) * promos.map((item) => item.discount[0])}</div>   }</p>
          <button className={style.but_buy}>Купить</button>
        </div> */
}

//   <div className={style.buy}>
//   <p className={style.price_game}>{game?.price} р.</p>
//   <button className={style.but_buy}>Купить</button>
// </div>
