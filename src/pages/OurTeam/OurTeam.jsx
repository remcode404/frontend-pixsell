import React from "react";
import style from "../OurTeam/OurTeam.module.scss";
import photo1 from "../OurTeam/files/Rectangle 4 (1).png";
import photo2 from "../OurTeam/files/Rectangle 4 (2).png";
import photo3 from "../OurTeam/files/Rectangle 4 (3).png";
import photo4 from "../OurTeam/files/Rectangle 4.png";

const OurTeam = () => {
  return (
    <div className={style.parentOurTeam}>
      <div className={style.bcgYellow}>
        <div className={style.parentBlockInf}>
          <div className={style.blockInf}>
            <div className={style.blockTitleAndBtn}>
              <div className={style.title}>НАША КОМАНДА</div>

              <div className={style.blockBtn}>
                <button className={style.btnLeft}>←</button>
                <button className={style.btnRight}>→</button>
              </div>
            </div>

            <div className={style.cards}>
              <div className={style.card}>
                <img className={style.photo} src={photo3} alt="Асхьаб" />
                <div className={style.name}>
                  Бычок <br /> Асхьаб
                </div>
                <div className={style.post}>Сын маминой подруги</div>
                <div className={style.quote}>
                  Цитата: <br />
                  «Тха денанс...»
                </div>
              </div>

              <div className={style.card}>
                <img className={style.photo} src={photo2} alt="Дени" />
                <div className={style.name}>Стиллавин Дени</div>
                <div className={style.post}>Механик</div>
                <div className={style.quote}>
                  Цитата: <br />
                  «Со ву шумный?!»
                </div>
              </div>

              <div className={style.card}>
                <img className={style.photo} src={photo1} alt="Адам" />
                <div className={style.name}>Цуров Адольф</div>
                <div className={style.post}>Директор CC</div>
                <div className={style.quote}>
                  Цитата: <br />
                  «В смысле?!))»
                </div>
              </div>

              <div className={style.card}>
                <img className={style.photo} src={photo4} alt="Малик" />
                <div className={style.name}>Малик Дизель</div>
                <div className={style.post}>Завхоз</div>
                <div className={style.quote}>
                  Цитата: <br />
                  «Ас кхана чекх йоккхар ю и»
                </div>
              </div>

              <div className={style.card}>
                <img className={style.photo} src={photo2} alt="Изновр" />
                <div className={style.name}>Изнаур Жинкин</div>
                <div className={style.post}>
                  Покоритель <br />
                  женских сердец
                </div>
                <div className={style.quote}>
                  Цитата: <br />
                  «Седа доьхьал г1ойла хьо!»
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
