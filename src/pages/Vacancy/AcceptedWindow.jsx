import style from "../Vacancy/AcceptedWindow.module.scss";
import logo from "../Vacancy/images/Group.png";

function AcceptedWindow({ acceptedWindow, setAcceptedWindow }) {
  const handleClickCloseWindow = () => {
    setAcceptedWindow(false);
  };

  return (
    <div className={style.parendDiv}>
      <div className={style.divWindow}>
        <div className={style.X}>
          <button className={style.btnX} onClick={() => handleClickCloseWindow()}>
            ✕
          </button>
        </div>

        <div className={style.logo}>
          <img className={style.imgLogo} src={logo} alt="bayrakkh" />
        </div>

        <b className={style.textB}>Спасибо за сообщение</b>

        <div className={style.textMini}>
          Мы скоро свяжемся с вами для уточнения деталей
        </div>
      </div>
    </div>
  );
}

export default AcceptedWindow;
