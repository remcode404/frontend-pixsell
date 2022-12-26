import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "../PersonalAccount/PersonalAccountWindow.module.scss";

const PersonalAccountWindow = ({
  registration,
  setRegistration,
  enterWindow,
  setEnterWindow,
  accountWindow,
  setAccountWindow,
}) => {
  const handleEnter = () => {
    setAccountWindow(false);
  };


  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <div>
      <div className={style.mainDiv}>
        <div className={style.accountMainDiv}>
          <div className={style.logOutWindow}>
            <button onClick={() => handleEnter()}>X</button>
          </div>
          <div className={style.userName}>Добро пожаловать: </div>
          <div className={style.walletDiv}>
            <p>Сумма в кошельке: 2000р. </p>
            <button>Пополнение кошелька</button>
          </div>
          <div className={style.myGamesButton}>
        <button>
        <Link className={style.myGamesButtons}  to='/mygames'  >Мои игры</Link>
          </button>  
          </div>
          <div className={style.logOutButton}>
            <button onClick={logout}>Выход из аккаунта</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalAccountWindow;
