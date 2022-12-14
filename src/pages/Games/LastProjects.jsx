import React from "react";
import style from "./LastProducts.module.scss";
import arrow2 from "./photos/miniArrow2.svg";
import mask from "./photos//Mask.svg";
import photo1 from "./photos/game1.png";
import photo2 from "./photos/game2.png";
import photo3 from "./photos/game3.png";
import arrow from "./photos/Arrow 3.svg";
const LastProjects = () => {
  return (
    <div className={style.LastProjects}>
      <div className={style.title}>
        <p>Последние проекты</p>
        <div className={style.arrows}>
          <div className={style.arrow2}>
            <img className={style.Arrow2} src={arrow2} alt="f" />
          </div>
          <div className={style.arrow1}>
            <img className={style.Arrow1} src={mask} alt="dd" />
          </div>
        </div>
      </div>
      {/* end */}

      <div className={style.firstBlockData}>
        <div className={style.firstBlock}>
          <img className={style.photo} src={photo1} alt="d" />
          <div className={style.description}>
            <p className={style.name}>Escape Masters</p>
            <p>Совершите идеальный побег!</p>
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
            <p>Станьте дизайнером интерьеров!</p>
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
            <p>Добро пожаловать в мир макияжа!</p>
            <p className={style.text}>
              Выбирайте кисти, цвета и оттенки губной помады, подводки для глаз,
              чтобы добиться превосходного результата.
            </p>
            <button className={style.btnInformation}>
              {" "}
              Подробнее
              <img className={style.arrows} src={arrow} alt="f" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastProjects;
