import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasketCart from "./BasketCart";
import { getBasket } from "../../reducers/Slice/basketSlice";
import styles from "../Basket/Basket.module.scss";
import { fetchGames } from "../../reducers/Slice/GamesList";

const Basket = () => {
  const dispatch = useDispatch();


  const basket = useSelector((state) => state.basketReducer.basket);
  const products = useSelector((state) => state.gameReducer.game);

console.log(products)

  useEffect(() => {
    dispatch(getBasket());
    dispatch(fetchGames())
  }, [dispatch]);


  ////////////////////////////
  return (
    <div className="CART">
        {basket?.products?.map(bask => {
            return products?.map(prod => {
                if (bask.productId === prod._id) {
                    return (
                        <div style={{display: 'flex', width: "500px", justifyContent: "space-between", margin: "20px"}}>
                            <div>
                                <img width={"100px"} src={`http://localhost:3001/${prod.images[0]}`} alt="" />
                            </div>
                            <div>{prod.name}</div>
                            <div>{prod.price}</div>
                        </div>
                    )
                }
            })
        })}
    </div>
  );
};

export default Basket;
