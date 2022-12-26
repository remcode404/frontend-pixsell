import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers } from "../../../reducers/Slice/registrationSlice";
import MyVerticallyCenteredModal from "../../WalletModal";
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

  
  const dispatch = useDispatch()
  
  const userID = useSelector((state) => state.registrationReducer.userID.id);
  const users = useSelector(state => state.registrationReducer.users)
  const currentUser = users.find(item => item._id === userID)
  console.log("USER", currentUser);
console.log(userID);

  const [modalShow, setModalShow] = React.useState(false);


  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return (
    <div>
      <div className={style.mainDiv}>
        <div className={style.accountMainDiv}>
          <div className={style.logOutWindow}>
            <button onClick={() => handleEnter()}>X</button>
          </div>
          <div className={style.userName}>Добро пожаловать: </div>
          <div className={style.walletDiv}>
            <p>Сумма в кошельке: {currentUser?.walletAmount} </p>
            <button onClick={() => setModalShow(true)}>Пополнение кошелька</button>
            {<MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />}
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
