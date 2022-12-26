import React, { useEffect, useState } from "react";
import style from "./AboutGame.module.scss";
import { Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addReviews, fetchGames } from "../../reducers/Slice/GamesList";
import { fetchPromos } from "../../reducers/Slice/PromoSlice";
import { addBasket, removeBasket } from "../../reducers/Slice/basketSlice";
import {
  fetchUsersName,
  isExistence,
  printReviews,
} from "../../reducers/Slice/reviewSlice";
import { fetchFavorite, saveGames } from "../../reducers/Slice/favoriteSlice";

const AboutGame = () => {
  const { gameId } = useParams();
  const dispatch = useDispatch();

  const [promoText, setPromoText] = useState("");
  const [validPromo, setValidPromo] = useState(null);
  const [validPromoPrice, setValidPromoPrice] = useState(null);

  const [textReview, setTextReview] = useState("");
  const [isGrade, setIsGrade] = useState(null);

  const promos = useSelector((state) => state.promoReducer.promo);

  const favourites = useSelector((state) => state.favoriteReducer.favourites);
  const tokenId = useSelector((state) => state.registrationReducer.id);
  console.log(tokenId, "tokenId");
  console.log(favourites, "favor");

  const isExistenceReview = useSelector(
    (state) => state.reviewSlice.isExistenceReview
  );

  const game = useSelector((state) => state.gameReducer.game).find(
    (item) => item._id === gameId
  );

  const userID = useSelector((state) => state.registrationReducer.userID.id);

  const handleTextPromo = () => {
    setValidPromo(promos.find((item) => item.text === promoText));
  };

  useEffect(() => {
    dispatch(fetchGames());
    dispatch(fetchPromos());
    dispatch(printReviews());
    dispatch(fetchFavorite());
  }, [dispatch]);

  const getGrade = () => {
    const grade = game?.reviews.map((review) => {
      if (review.isPositiveGrade === true) {
        return (review = true);
      }
      return (review = false);
    });
    const likes = grade?.filter(function (value) {
      return value;
    }).length;
    const dislikes = grade?.filter((item) => item === false).length;

    const p = Math.floor((likes / (likes + dislikes)) * 100);

    if (p <= 20) {
      return "В основном отрицательные";
    } else if (p <= 40) {
      return "Отрицательные";
    } else if (p > 40 && p <= 50) {
      return "Средние";
    } else if (p > 50 && p <= 70) {
      return "Положительные";
    } else if (p > 70) {
      return "В основном положительные";
    }
  };

  const hasReview = game?.reviews?.find((item) => item.userId?._id === userID);

  //loading
  if (!game && !hasReview) {
    return "Loading...";
  }

  const addToCart = () => {
    dispatch(addBasket({id: gameId, price: game.price}));
  };

  const addToFavorite = () => {
   
    dispatch(saveGames({ gameId, tokenId }));
  };

 

  const discountPrice = Math.floor(
    game?.price - (game?.price / 100) * promos.map((item) => item.discount)[0]
  );
  

  const handleAddReview = () => {
    // dispatch(isExistence({id: game._id}));
    // console.log("isExistenceReview", isExistenceReview);

    if (!hasReview) {
      dispatch(
        addReviews({ id: game._id, textReview: textReview, isGrade: isGrade })
      );
    }
    setIsGrade(null);
    setTextReview("");
  };
  //  console.log(game.price);
  // console.log(promos)
  // console.log(promos.map((item) => item.text).join(""));

  if (!game) {
    return "Loading...";
  }

  return (
    <div className={style.about_game}>
      <div className={style.card_information}>
        <img
          src={`http://localhost:3001/${game?.images[0]}`}
          alt="img"
          className={style.img_game}
        ></img>
        <div className={style.information_game}>
          <h1 className={style.name_game}>{game?.name}</h1>

          <p className={style.all_reviews}>
            Все обзоры: {getGrade()} (всего {game.reviews.length})
          </p>
          <p className={style.date}>ДАТА ВЫХОДА: {game?.date}</p>
          <p className={style.publisher_game}>ИЗДАТЕЛЬ: {game?.publisher}</p>
          <p className={style.genre_game}>Жанр: {game?.genres.join(", ")}</p>
          <p className={style.platform_game}>
            Платформа: {game?.platform.join(", ")}
          </p>
          <button onClick={() => addToFavorite()} className={style.add_toFavorites}>
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
          {/* <button onClick={handleTextPromo}>ввести</button> */}
          {validPromo && <div>OK</div>}
          {validPromo === undefined && <div>NULL</div>}
        </div>

        <div className={style.buy}>
          <p className={style.price_game}>
            {promoText === promos.map((item) => item.text).join("") ? (
              <div>{discountPrice}</div>
            ) : (
              <div className={style.game_price}>{game?.price}</div>
            )}
          </p>
          <button onClick={() => addToCart()} className={style.but_buy}>
            Добавить в корзину
          </button>

      
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
                    alt="img"
                    className="d-block w-100"
                  />
                </Carousel.Item>
              );
            }
          })}
        </Carousel>
        <p className={style.description_game}>{game.description}</p>
        <div className={style.window_reviews}>
          {hasReview ? (
            <p className={style.checkReviews_text}> Вы уже добавили отзыв</p>
          ) : (
            <div className={style.add_review}>
              <div className={style.input_review}>
                <p className={style.title_review}>Добавить свой отзыв: </p>
                <textarea
                  autoFocus
                  maxLength="200"
                  value={textReview}
                  onChange={(e) => setTextReview(e.target.value)}
                  className={style.input}
                />
              </div>
              <div className={style.buttons}>
                <button
                  className={style.like_btn}
                  onClick={() => setIsGrade(true)}
                >
                  Хорошо{" "}
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M57.8999 26.4001C55.8999 24.0001 52.9999 22.7001 49.8999 22.7001H45.9999V18.2001C45.9999 11.0001 40.0999 5.1001 32.8999 5.1001C32.4999 5.1001 32.1999 5.3001 31.8999 5.6001C31.6999 5.9001 31.5999 6.3001 31.5999 6.6001L33.0999 14.4001C33.4999 16.6001 32.9999 18.8001 31.5999 20.5001C30.0999 22.4001 27.9999 23.4001 25.5999 23.4001H22.2999C20.1999 23.4001 18.2999 24.2001 16.8999 25.5001C16.6999 23.3001 14.8999 21.5001 12.6999 21.5001H7.6999C5.3999 21.5001 3.3999 23.4001 3.3999 25.8001V56.5001C3.3999 58.8001 5.2999 60.8001 7.6999 60.8001H12.6999C14.8999 60.8001 16.7999 59.0001 16.8999 56.8001C18.2999 58.1001 20.1999 58.9001 22.2999 58.9001H43.3999C50.5999 58.9001 56.7999 53.7001 57.9999 46.6001L59.9999 34.9001C60.7999 31.9001 59.8999 28.8001 57.8999 26.4001ZM14.5999 56.5001C14.5999 57.5001 13.7999 58.3001 12.7999 58.3001H7.7999C6.7999 58.3001 5.9999 57.5001 5.9999 56.5001V25.8001C5.9999 24.8001 6.7999 24.0001 7.7999 24.0001H12.7999C13.7999 24.0001 14.5999 24.8001 14.5999 25.8001V56.5001ZM57.7999 34.6001L55.7999 46.3001C54.7999 52.2001 49.6999 56.5001 43.6999 56.5001H22.3999C19.4999 56.5001 17.0999 54.1001 17.0999 51.2001V31.2001C17.0999 28.3001 19.4999 25.9001 22.3999 25.9001H25.6999C28.7999 25.9001 31.7999 24.5001 33.6999 22.0001C35.4999 19.7001 36.1999 16.7001 35.5999 13.8001L34.3999 7.6001C39.4999 8.3001 43.4999 12.8001 43.4999 18.1001V23.9001C43.4999 24.6001 44.0999 25.2001 44.7999 25.2001H49.9999C52.3999 25.2001 54.5999 26.2001 56.0999 28.1001C57.4999 29.8001 58.1999 32.2001 57.7999 34.6001Z"
                      fill="green"
                    />
                  </svg>
                </button>
                <button
                  className={style.dislike_btn}
                  onClick={() => setIsGrade(false)}
                >
                  Плохо{" "}
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M60.22 30.86L58.22 19.17C57.6244 15.7232 55.8273 12.5987 53.1473 10.3508C50.4674 8.10282 47.0778 6.87674 43.58 6.89H22.45C20.4593 6.88265 18.5414 7.63766 17.09 9C17.0312 7.9202 16.561 6.90392 15.7762 6.15998C14.9913 5.41605 13.9514 5.00096 12.87 5H7.86996C7.3059 4.99992 6.74747 5.11213 6.22722 5.33008C5.70697 5.54802 5.23531 5.86735 4.83974 6.26944C4.44416 6.67154 4.13258 7.14835 3.92316 7.67209C3.71374 8.19583 3.61067 8.75602 3.61996 9.32V40C3.6226 41.1264 4.07122 42.2058 4.86767 43.0023C5.66413 43.7987 6.7436 44.2474 7.86996 44.25H12.87C13.9514 44.249 14.9913 43.834 15.7762 43.09C16.561 42.3461 17.0312 41.3298 17.09 40.25C18.5367 41.6233 20.4552 42.3892 22.45 42.39H25.71C26.8329 42.3895 27.9421 42.6378 28.9576 43.1172C29.9731 43.5965 30.8698 44.295 31.5831 45.1623C32.2965 46.0296 32.8088 47.0442 33.0831 48.1331C33.3575 49.222 33.3872 50.3582 33.17 51.46L31.65 59.25C31.6161 59.4255 31.6218 59.6064 31.6668 59.7794C31.7118 59.9524 31.7949 60.1132 31.91 60.25C32.0295 60.3991 32.1821 60.5183 32.3556 60.5981C32.5292 60.6779 32.719 60.7163 32.91 60.71C36.3697 60.7048 39.6871 59.3322 42.1391 56.8915C44.5911 54.4507 45.9789 51.1396 46 47.68V43.16H49.9C51.4317 43.1608 52.945 42.8265 54.3338 42.1805C55.7227 41.5344 56.9533 40.5924 57.9395 39.4204C58.9257 38.2484 59.6435 36.8748 60.0427 35.396C60.4418 33.9173 60.5125 32.369 60.25 30.86H60.22ZM14.62 40C14.62 40.2298 14.5747 40.4574 14.4868 40.6697C14.3988 40.882 14.2699 41.0749 14.1074 41.2374C13.9449 41.3999 13.752 41.5288 13.5397 41.6168C13.3273 41.7047 13.0998 41.75 12.87 41.75H7.86996C7.40664 41.7474 6.96305 41.5622 6.63543 41.2345C6.3078 40.9069 6.12259 40.4633 6.11996 40V9.32C6.11996 8.85587 6.30434 8.41075 6.63252 8.08256C6.96071 7.75437 7.40583 7.57 7.86996 7.57H12.87C13.3341 7.57 13.7792 7.75437 14.1074 8.08256C14.4356 8.41075 14.62 8.85587 14.62 9.32V40ZM56 37.81C55.2482 38.7037 54.3098 39.4219 53.2508 39.9143C52.1918 40.4067 51.0378 40.6612 49.87 40.66H44.72C44.3884 40.66 44.0705 40.7917 43.8361 41.0261C43.6017 41.2605 43.47 41.5785 43.47 41.91V47.68C43.4664 50.2237 42.55 52.6817 40.8873 54.6068C39.2246 56.532 36.9261 57.7963 34.41 58.17L35.63 52C35.9098 50.5392 35.8635 49.0345 35.4944 47.5937C35.1253 46.1528 34.4425 44.8112 33.4948 43.6648C32.5471 42.5184 31.3579 41.5955 30.0122 40.962C28.6664 40.3284 27.1974 40 25.71 40H22.45C21.0364 40 19.6807 39.4384 18.6811 38.4389C17.6815 37.4393 17.12 36.0836 17.12 34.67V14.71C17.1226 13.2981 17.6853 11.945 18.6846 10.9476C19.6839 9.95018 21.0381 9.39 22.45 9.39H43.58C46.4835 9.38355 49.2956 10.4053 51.5177 12.2742C53.7399 14.1431 55.2286 16.7383 55.72 19.6L57.72 31.29C57.9252 32.4365 57.8776 33.6139 57.5805 34.7401C57.2834 35.8662 56.744 36.9139 56 37.81Z"
                      fill="red"
                    />
                  </svg>
                </button>
              </div>
              <button className={style.submit_review} onClick={handleAddReview}>
                Добавить отзыв
              </button>
            </div>
          )}
          <h1 className={style.text_title_reviews}>Отзывы покупателей: </h1>
          <div className={style.print_reviews}>
            {game.reviews.map((reviewItem) => {
              return (
                <div key={reviewItem._id} className={style.one_review}>
                  <div className={style.grade_review_userName}>
                    {reviewItem.isPositiveGrade ? (
                      <svg
                        width="54"
                        height="54"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M57.8999 26.4001C55.8999 24.0001 52.9999 22.7001 49.8999 22.7001H45.9999V18.2001C45.9999 11.0001 40.0999 5.1001 32.8999 5.1001C32.4999 5.1001 32.1999 5.3001 31.8999 5.6001C31.6999 5.9001 31.5999 6.3001 31.5999 6.6001L33.0999 14.4001C33.4999 16.6001 32.9999 18.8001 31.5999 20.5001C30.0999 22.4001 27.9999 23.4001 25.5999 23.4001H22.2999C20.1999 23.4001 18.2999 24.2001 16.8999 25.5001C16.6999 23.3001 14.8999 21.5001 12.6999 21.5001H7.6999C5.3999 21.5001 3.3999 23.4001 3.3999 25.8001V56.5001C3.3999 58.8001 5.2999 60.8001 7.6999 60.8001H12.6999C14.8999 60.8001 16.7999 59.0001 16.8999 56.8001C18.2999 58.1001 20.1999 58.9001 22.2999 58.9001H43.3999C50.5999 58.9001 56.7999 53.7001 57.9999 46.6001L59.9999 34.9001C60.7999 31.9001 59.8999 28.8001 57.8999 26.4001ZM14.5999 56.5001C14.5999 57.5001 13.7999 58.3001 12.7999 58.3001H7.7999C6.7999 58.3001 5.9999 57.5001 5.9999 56.5001V25.8001C5.9999 24.8001 6.7999 24.0001 7.7999 24.0001H12.7999C13.7999 24.0001 14.5999 24.8001 14.5999 25.8001V56.5001ZM57.7999 34.6001L55.7999 46.3001C54.7999 52.2001 49.6999 56.5001 43.6999 56.5001H22.3999C19.4999 56.5001 17.0999 54.1001 17.0999 51.2001V31.2001C17.0999 28.3001 19.4999 25.9001 22.3999 25.9001H25.6999C28.7999 25.9001 31.7999 24.5001 33.6999 22.0001C35.4999 19.7001 36.1999 16.7001 35.5999 13.8001L34.3999 7.6001C39.4999 8.3001 43.4999 12.8001 43.4999 18.1001V23.9001C43.4999 24.6001 44.0999 25.2001 44.7999 25.2001H49.9999C52.3999 25.2001 54.5999 26.2001 56.0999 28.1001C57.4999 29.8001 58.1999 32.2001 57.7999 34.6001Z"
                          fill="green"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="54"
                        height="54"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M60.22 30.86L58.22 19.17C57.6244 15.7232 55.8273 12.5987 53.1473 10.3508C50.4674 8.10282 47.0778 6.87674 43.58 6.89H22.45C20.4593 6.88265 18.5414 7.63766 17.09 9C17.0312 7.9202 16.561 6.90392 15.7762 6.15998C14.9913 5.41605 13.9514 5.00096 12.87 5H7.86996C7.3059 4.99992 6.74747 5.11213 6.22722 5.33008C5.70697 5.54802 5.23531 5.86735 4.83974 6.26944C4.44416 6.67154 4.13258 7.14835 3.92316 7.67209C3.71374 8.19583 3.61067 8.75602 3.61996 9.32V40C3.6226 41.1264 4.07122 42.2058 4.86767 43.0023C5.66413 43.7987 6.7436 44.2474 7.86996 44.25H12.87C13.9514 44.249 14.9913 43.834 15.7762 43.09C16.561 42.3461 17.0312 41.3298 17.09 40.25C18.5367 41.6233 20.4552 42.3892 22.45 42.39H25.71C26.8329 42.3895 27.9421 42.6378 28.9576 43.1172C29.9731 43.5965 30.8698 44.295 31.5831 45.1623C32.2965 46.0296 32.8088 47.0442 33.0831 48.1331C33.3575 49.222 33.3872 50.3582 33.17 51.46L31.65 59.25C31.6161 59.4255 31.6218 59.6064 31.6668 59.7794C31.7118 59.9524 31.7949 60.1132 31.91 60.25C32.0295 60.3991 32.1821 60.5183 32.3556 60.5981C32.5292 60.6779 32.719 60.7163 32.91 60.71C36.3697 60.7048 39.6871 59.3322 42.1391 56.8915C44.5911 54.4507 45.9789 51.1396 46 47.68V43.16H49.9C51.4317 43.1608 52.945 42.8265 54.3338 42.1805C55.7227 41.5344 56.9533 40.5924 57.9395 39.4204C58.9257 38.2484 59.6435 36.8748 60.0427 35.396C60.4418 33.9173 60.5125 32.369 60.25 30.86H60.22ZM14.62 40C14.62 40.2298 14.5747 40.4574 14.4868 40.6697C14.3988 40.882 14.2699 41.0749 14.1074 41.2374C13.9449 41.3999 13.752 41.5288 13.5397 41.6168C13.3273 41.7047 13.0998 41.75 12.87 41.75H7.86996C7.40664 41.7474 6.96305 41.5622 6.63543 41.2345C6.3078 40.9069 6.12259 40.4633 6.11996 40V9.32C6.11996 8.85587 6.30434 8.41075 6.63252 8.08256C6.96071 7.75437 7.40583 7.57 7.86996 7.57H12.87C13.3341 7.57 13.7792 7.75437 14.1074 8.08256C14.4356 8.41075 14.62 8.85587 14.62 9.32V40ZM56 37.81C55.2482 38.7037 54.3098 39.4219 53.2508 39.9143C52.1918 40.4067 51.0378 40.6612 49.87 40.66H44.72C44.3884 40.66 44.0705 40.7917 43.8361 41.0261C43.6017 41.2605 43.47 41.5785 43.47 41.91V47.68C43.4664 50.2237 42.55 52.6817 40.8873 54.6068C39.2246 56.532 36.9261 57.7963 34.41 58.17L35.63 52C35.9098 50.5392 35.8635 49.0345 35.4944 47.5937C35.1253 46.1528 34.4425 44.8112 33.4948 43.6648C32.5471 42.5184 31.3579 41.5955 30.0122 40.962C28.6664 40.3284 27.1974 40 25.71 40H22.45C21.0364 40 19.6807 39.4384 18.6811 38.4389C17.6815 37.4393 17.12 36.0836 17.12 34.67V14.71C17.1226 13.2981 17.6853 11.945 18.6846 10.9476C19.6839 9.95018 21.0381 9.39 22.45 9.39H43.58C46.4835 9.38355 49.2956 10.4053 51.5177 12.2742C53.7399 14.1431 55.2286 16.7383 55.72 19.6L57.72 31.29C57.9252 32.4365 57.8776 33.6139 57.5805 34.7401C57.2834 35.8662 56.744 36.9139 56 37.81Z"
                          fill="red"
                        />
                      </svg>
                    )}

                    <h2 className={style.user_name}>
                      {reviewItem.userId?.nickName}
                    </h2>
                  </div>
                  {/* {console.log(reviewItem.userId.usersName)} */}
                  <p className={style.text_review}>{reviewItem.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutGame;
