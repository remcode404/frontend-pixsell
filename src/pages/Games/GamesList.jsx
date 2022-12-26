import React, { useState } from "react";
import style from "./GamesList.module.scss";
import arrow2 from "./photos/Arrow2.svg";
import { fetchGames} from "../../reducers/Slice/GamesList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const GamesList = () => {
  const dispatch = useDispatch();

  const games = useSelector((state) => state.gameReducer.game);
  const error = useSelector((state) => state.gameReducer.error);
  const loadings = useSelector((state) => state.gameReducer.loading);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchGames(page));
  }, [dispatch, page]);

  return (
    <div className={style.main}>
      {loadings ? <div className={style.custom_loader}></div> : null}
      <div className={style.manLists}>
        {error ? <h1>{error}</h1> : null}

        {games.map((item, index) => {
          if (index % 2 === 0) {
            return (
              <div key={item._id} className={style.firstBlockData}>
                <div className={style.firstBlock}>
                  <div className={style.description}>
                    <p className={style.title}>{item.name}</p>
                    <p className={style.motivation}>{item.publisher}</p>

                    <p className={style.text}>{item.description}</p>
                    <Link
                      className="text-decoration-none"
                      to={`/games/${item._id}`}
                    >
                      <button className={style.btn}>
                        Подробнее
                        <img src={arrow2} alt="d" />
                      </button>
                    </Link>
                  </div>
                  <div className={style.RoditelImg}>
                    <img
                      className={style.game1}
                      src={`http://localhost:3001/${item.images[0]}`}
                      alt="a"
                    />
                  </div>
                </div>
              </div>
            );
          } else if (index % 2 !== 0) {
            return (
              <div key={item._id} className={style.secondBlockData}>
                <div className={style.RoditelImg}>
                  <img
                    className={style.game1}
                    src={`http://localhost:3001/${item.images[0]}`}
                    alt="a"
                  />
                </div>
                <div className={style.secondBlock}>
                  <div className={style.description}>
                    <p className={style.title}>{item.name}</p>
                    <p className={style.motivation}>{item.publisher}</p>
                    <p className={style.text}>{item.description}</p>
                    <Link
                      className="text-decoration-none"
                      to={`/games/${item._id}`}
                    >
                      <button className={style.btn}>
                        Подробнее
                        <img src={arrow2} alt="d" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
        })}
        <div className={style.ButtonsPogination}>
          <button
            className={style.BtnPogination}
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            {" "}
            назад{" "}
          </button>
          <button
            className={style.BtnPogination}
            disabled={page === 5}
            onClick={() => setPage(page + 1)}
          >
            {" "}
            вперед
          </button>
        </div>
        <div className={style.moreProjects}>
          <button className={style.btnMoreProjects}>Больше проектов</button>
        </div>
      </div>
    </div>
  );
};

export default GamesList;
