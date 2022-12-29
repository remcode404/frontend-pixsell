import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import BasketCart from "./BasketCart";
import { getBasket, removeBasket } from "../../reducers/Slice/basketSlice";

import { fetchGames } from "../../reducers/Slice/GamesList";
import styles from "../Basket/Basket.module.scss";

const Basket = () => {
  const dispatch = useDispatch();

  const basket = useSelector((state) => state.basketReducer.basket);
  const products = useSelector((state) => state.gameReducer.game);

  const totalPrice = basket?.products?.reduce((acc, item) => {
    return acc + item?.price;
  }, 0);

  useEffect(() => {
    dispatch(getBasket());
    dispatch(fetchGames());
  }, [dispatch]);

  const handleremoveBasket = (id) => {
    dispatch(removeBasket(id));
  };

  ////////////////////////////
  return (
    <div className={styles.mainParent}>
      {basket?.products?.map((bask) => {
        return products?.map((prod) => {
          if (bask?.productId === prod?._id) {
            return (
              <div key={prod._id} className={styles.mainBlock}>
                <div className={styles.prodList}>
                  <div className={styles.product}>
                    <div className={styles.image}>
                      <img
                        src={`http://localhost:3001/${prod?.images[0]}`}
                        alt=""
                      />
                    </div>
                    <div className={styles.prodName}>
                      <div className={styles.gameName}>Название</div>
                      <div className={styles.name}>{prod?.name}</div>
                    </div>
                    <div className={styles.prodPrice}>
                      <div className={styles.gamePrice}>Стоимость</div>
                      <div className={styles.price}>{prod?.price} ₽</div>
                    </div>
                    <button
                      className={styles.delBtn}
                      onClick={() => handleremoveBasket(bask.productId)}
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        });
      })}
      {/* <div className={styles.total}>Итого: {totalPrice} ₽</div> */}
      <div className={styles.total} id="box">
        Итого: {totalPrice} ₽
      </div>
    </div>
  );
};

export default Basket;
