import React, { useState } from "react";
import style from "../PersonalAccount/PersonalAccountWindow.module.scss";

const PersonalAccountWindow = () => {
  return (
    <div>
      <div className={style.mainDiv}>
        <div className={style.accountMainDiv}>
          <div className={style.logOutWindow}>
            <button>X</button>
          </div>
          <div className={style.userName}>Добро пожаловать: </div>
          <div className={style.walletDiv}>
            <p>Сумма в кошельке: р. </p>
            <button>Пополнение кошелька</button>
          </div>
          <div className={style.myGamesButton}>
            <button>Мои игры</button>
          </div>
          <div className={style.logOutButton}>
            <button>Выход из аккаунта</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalAccountWindow;
