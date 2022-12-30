import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavorite } from "../../../reducers/Slice/favoriteSlice";
import style from "./myGame.module.scss";
import arrow2 from "../photos/Arrow2.svg"
import mask from "../photos//Mask.svg";
import photo1 from "../photos/game1.png";
import photo2 from "../photos/game2.png";
import photo3 from "../photos/game3.png";
import arrow from "../photos/Arrow 3.svg";

const MyFavoritesGames = () => {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.favoriteReducer.favourites);
  useEffect(() => {
    dispatch(fetchFavorite());
  }, [dispatch]);

  return (
    <div className={style.LastProjects}>
   
    {/* end */}

    <div className={style.firstBlockData}>
      <div className={style.firstBlock}>
        <img className={style.photo} src={photo1} alt="d" />
        <div className={style.description}>
          <p className={style.name}>Escape Masters</p>
          <p className={style.titleCard}>Совершите идеальный побег!</p>
          <p className={style.text}>
            Спаси напарников, собери сокровища и прокопай путь к свободе, но
            опасайся ловушек, людей и Адама прочих усатых человеков
          </p>
          <button className={style.onebtn}>
            {" "}
            Подробнее
            <img className={style.arrow} src={arrow} alt="f" />
          </button>
        </div>
      </div>
      <div className={style.firstBlock}>
        <img className={style.photo} src={photo2} alt="d" />
        <div className={style.description}>
          <p className={style.name}>DESIGN MASTERS</p>
          <p className={style.titleCard}>Станьте дизайнером интерьеров!</p>
          <p className={style.text}>
            Проходите уровни матч-3, создавайте собственные дизайны и
            интерьеры, следите за историей и знакомьтесь с персонажами.
          </p>
          <button className={style.btnInformation}>
            {" "}
            Подробнее
            <img className={style.arrow} src={arrow} alt="f" />
          </button>
        </div>
      </div>
      <div className={style.firstBlock}>
        <img className={style.photo} src={photo3} alt="d" />
        <div className={style.description}>
          <p className={style.name}>Perfect Makeup 3D</p>
          <p className={style.titleCard}>Добро пожаловать в мир макияжа!</p>
          <p className={style.text}>
            Выбирайте кисти, цвета и оттенки губной помады, подводки для глаз,
            чтобы добиться превосходного результата.
          </p>
          <button className={style.btnInformation}>
            {" "}
            Подробнее
            <img className={style.arrowss} src={arrow} alt="f" />
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default MyFavoritesGames;
