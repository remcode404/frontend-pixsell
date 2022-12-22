import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import style from "../Registration/Registration.module.scss";
import { Link } from "react-router-dom";
import { authSignUp } from "../../../reducers/Slice/registrationSlice";

const Registration = ({
  registration,
  setRegistration,
  enterWindow,
  setEnterWindow,
}) => {
  const [nickName, setNickName] = useState("");
  const [usersName, setUsersName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const dispatch = useDispatch();

  const handlebtnLogin = () => {
    setEnterWindow(enterWindow);
    setRegistration(!registration);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(authSignUp({ nickName, email, usersName, password }));
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className={style.mainDiv}>
        <div className={style.registrationDiv}>
          <div className={style.registrationTitle}>Регистрация</div>
          <form onSubmit={handleSignUp}>
            <div className={style.logins}>
              <Input
                type="text"
                value={nickName}
                placeholder="Введите логин"
                onChange={(e) => setNickName(e.target.value)}
              />
            </div>
            <div className={style.nameUser}>
              <Input
                type="text"
                value={usersName}
                placeholder="Введите имя"
                onChange={(e) => setUsersName(e.target.value)}
              />
            </div>
            <div className={style.emails}>
              <Input
                type="text"
                value={email}
                placeholder="Введите электронную почту"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={style.passwords}>
              <Input
                placeholder="Введите пароль"
                value={password}
                type={values.showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                } 
              />
            </div>
            <div className={style.regButton}>
              <button type="submit">Зарегистрироваться</button>
            </div>
          </form>
          <div className={style.enterButtonDiv}>
            <div className={style.enterButtonText}>Уже есть аккаунт?</div>
            <button onClick={() => handlebtnLogin()}>Войти</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
