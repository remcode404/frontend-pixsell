import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavorite } from "../../../reducers/Slice/favoriteSlice";
import style from './myGame.module.scss'
const MyFavoritesGames = () => {
const dispatch = useDispatch()
const myFavorites = useSelector((state) => state.favoriteReducer.favourites)
console.log(myFavorites.map((item) => item.favourites));
useEffect(() => {
dispatch(fetchFavorite())
}, [dispatch])
 
  return (
    <div>
     <div className={style.myGames}>
     <div className={style.firstBlock}>
          {/* <img className={style.photo} src={ alt="d"}/> */}
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
              {/* <img className={style.arrow} src={} alt="f" /> */}
            </button>
          </div>
        </div>
     </div>
    </div>
  );
};

export default MyFavoritesGames