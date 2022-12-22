import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { editAmount, removeBasket } from "../../../reducers/Slice/cartSlice";
import styles from "./BasketCart.module.scss";

const BasketCart = ({ item }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productSlice.products);

  //   useEffect(() => {
//     setTotals(products.reduce((prev, item) => prev+= item.price))
//   })

  // const productImage = useSelector((state) =>
  //   state.products.filter((product) => product.id === id)
  // );

  const handleSetAmountInc = (id) => {
    // dispatch(editAmount({id, type: "plus"}));
  };

  const handleSetAmountDec = (id) => {
    // dispatch(editAmount({id, type: "minus"}));
  };

  const handleRemove = (id) => {
    // dispatch(removeBasket(id));
  };


  return (
    <>
      {products.map((el, i) => {
        if (el._id === item.productId) {
          return (
            <tr>
                <td><img className={styles.cartImg} src={el.img} alt={el.name} /></td>
              <td>{el.name}</td>
              <td>
                <div style={{display: "flex"}}>
                  <button className={styles.incProdBtn} onClick={() => handleSetAmountInc(el._id)}>+</button>
                  <div className={styles.amount}>{item.amount}</div>
                  <button className={styles.decProdBtn} onClick={() => handleSetAmountDec(el._id)}>-</button>
                </div>
              </td>
              <td>{el.price * item.amount}</td>
              <td><button className={styles.delProdBtn} onClick={() => handleRemove(el._id)}>×</button></td>
            </tr>
          );
        }
      })}
    </>
  );
};

export default BasketCart;
