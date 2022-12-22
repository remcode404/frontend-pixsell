import React from "react";
import style from "../AboutCompany/AboutCompany.module.scss";
import img1 from "./files/Frame.svg";
import img2 from "./files/Frame2.svg";
import img3 from "./files/Frame3.svg";
import img4 from "./files/Frame4.svg";
import SocialNetwork from "../../components/SocialNetwork/SocialNetwork";
import OurTeam from "../OurTeam/OurTeam";

const AboutCompany = () => {
  return (
    <div id="first" className={style.aboutAndOurTeam}>
      <div className={style.mainParent}>
        <div className={style.leftSide}>
          <SocialNetwork />
          <div className={style.textBlock}>
            <h1>О КОМПАНИИ</h1>
            <p>Pixsell - это компания-разработчик и издатель мобильных игр.</p>
            <p>
              Мы работаем небольшими командами - это позволяет оставаться
              гибкими и быстро подстраиваться под потребности наших игроков. На
              каждом этапе - начиная с детального разбора идеи, заканчивая
              реализацией игровых механик и геймплея - мы ориентируемся на наших
              пользователей. Просто потому, что сами играем.
            </p>
            <p>
              Также мы помогаем другим студиям разработки реализовывать свои
              идеи: поможем протестировать идеи и прототипы, а хит - издадим на
              полностью прозрачных и вкусных условиях.
            </p>
          </div>
        </div>
        <div className={style.rightSide}>
          <div className={style.iconBlock}>
            <div className={style.block}>
              <div className={style.iconShadow}>
                <img src={img1} alt="" />
              </div>
              <div className={style.text}>
                <h3>2млрд+</h3>
                <p>Установок</p>
              </div>
            </div>
            <div className={style.block}>
              <div className={style.iconShadow}>
                <img src={img2} alt="" />
              </div>
              <div className={style.text}>
                <h3>500млн++</h3>
                <p>Игроков</p>
              </div>
            </div>
            <div className={style.block}>
              <div className={style.iconShadow}>
                <img src={img3} alt="" />
              </div>
              <div className={style.text}>
                <h3>250млн+</h3>
                <p>Активных юзеров в месяц</p>
              </div>
            </div>
            <div className={style.block}>
              <div className={style.iconShadow}>
                <img src={img4} alt="" />
              </div>
              <div className={style.text}>
                <h3>500+</h3>
                <p>Сотрудников</p>
              </div>
            </div>
          </div>
          <div className={style.cubes}>
            {/* <div className={style.studiocube}> */}
            <div className={style.text}>
              <a className={style.aHrefs} href="#first">
                {" "}
                О СТУДИИ <span className={style.cube}></span>{" "}
              </a>
            </div>
            {/* </div> */}
            {/* <div className={style.teamCube}> */}
            <div className={style.text}>
              <a className={style.aHrefs} href="#second">
                {" "}
                КОМАНДА <span className={style.cube}></span>{" "}
              </a>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
      <div id="second">
        <OurTeam />
      </div>
    </div>
  );
};

export default AboutCompany;
