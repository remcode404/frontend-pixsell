import React from "react";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import style from "../Registration/Registration.module.scss";
import { Link } from "react-router-dom";
// import dialog from './images/pixsell-dialog1.png'

const Registration = () => {
  const [password, setPassword] = React.useState();
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div>
      <div className={style.mainDiv}>
        <div className={style.registrationDiv}>
          <div className={style.registrationTitle}>Регистрация</div>
          <form>
            <div className={style.login}>
              <Input type="text" placeholder="Введите логин" />
            </div>
            <div className={style.email}>
              <Input type="text" placeholder="Введите электронную почту" />
            </div>
            <div className={style.password}>
              <Input
                placeholder="Введите пароль"
                type={values.showPassword ? "text" : "password"}
                onChange={handlePasswordChange("password")}
                value={values.password}
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
              <button>Зарегистрироваться</button>
            </div>
          </form>
          <div className={style.enterButtonDiv}>
            <div className={style.enterButtonText}>Уже есть аккаунт?</div>
            <button>Войти</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
