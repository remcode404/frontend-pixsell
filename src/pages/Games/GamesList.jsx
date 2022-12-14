import React from "react";
import style from "./GamesList.module.scss";
import game1 from "./photos/game1.png";
import game2 from "./photos/game2.png";
import arrow2 from "./photos/Arrow2.svg";
import game3 from "./photos/game3.png";
import game4 from "./photos/game4.png";
const GamesList = () => {
  return (
    <div className={style.main}>
      <div className={style.manLists}>
      <div className={style.firstBlockData}>
        <div className={style.firstBlock}>
          <div className={style.description}>
            <p className={style.title}>DESIGN MASTERS</p>
            <p className={style.motivation}>Станьте дизайнером интерьеров!</p>
            <p className={style.text}>
              Проходите уровни матч-3, создавайте собственные дизайны и
              интерьеры, следите за историей и знакомьтесь с персонажами.
            </p>
            <button className={style.btn}>
              Подробнее
              <img src={arrow2} alt="d" />
            </button>
          </div>
        </div>
        <div>
          <img className={style.game1} src={game1} alt="a" />
        </div>
      </div>
      {/* end */}

      <div className={style.secondBlockData}>
        <div>
          <img className={style.game1} src={game2} alt="a" />
        </div>
        <div className={style.secondBlock}>
          <div className={style.description}>
            <p className={style.title}>Perfect Makeup 3D</p>
            <p className={style.motivation}>Добро пожаловать в мир макияжа!</p>
            <p className={style.text}>
              Выбирайте кисти, цвета и оттенки губной помады, подводки для глаз
              и пудры, чтобы добиться превосходного результата.
            </p>
            <button className={style.btn}>
              Подробнее
              <img src={arrow2} alt="d" />
            </button>
          </div>
        </div>
      </div>
      {/* end */}

      <div className={style.firstBlockData}>
        <div className={style.firstBlock}>
          <div className={style.description}>
            <p className={style.title}>Escape Masters</p>
            <p className={style.motivation}>Совершите идеальный побег!</p>
            <p className={style.text}>
              Спаси напарников, собери сокровища и прокопай путь к свободе, но
              опасайся ловушек.
            </p>
            <button className={style.btn}>
              Подробнее
              <img src={arrow2} alt="d" />
            </button>
          </div>
        </div>
        <div>
          <img className={style.game1} src={game3} alt="a" />
        </div>
      </div>
      {/* end */}

      <div className={style.secondBlockData}>
        <div>
          <img className={style.game1} src={game4} alt="a" />
        </div>
        <div className={style.secondBlock}>
          <div className={style.description}>
            <p className={style.title}>Hitmasters</p>
            <p className={style.motivation}>
              Стань стрелком и срази всех врагов!
            </p>
            <p className={style.text}>
              Целься метко, используй объекты на уровнях и не дай никому
              спастись! Открывай новое оружие, пополняй свой арсенал и проходи
              головоломки.
            </p>
            <button className={style.btn}>
              Подробнее
              <img src={arrow2} alt="d" />
            </button>
          </div>
        </div>
      </div>
      {/* end */}

      <div className={style.moreProjects}>
        <button className={style.btnMoreProjects}>Больше проектов</button>
      </div>
      </div>
    </div>
  );
};

export default GamesList;
