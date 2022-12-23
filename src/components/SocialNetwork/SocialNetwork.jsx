import React from 'react';
import style from "./SocialNetwork.module.scss";
import Plogo from "../Footer/photos/Plogo.svg";
import Behance from "../Footer/photos/Behance.svg";
import crugLogo from "../Footer/photos/crugLogo.svg";
import Snapchat from "../Footer/photos/Snapchat.svg";
import Facebook from "../Footer/photos/facebook.svg";
import inst from '../../pages/Games/photos/in.svg'

const SocialNetwork = () => {
  return (
    <div>
       <div className={style.logos}>
        <img className={style.icons} src={Plogo} alt="f" />
        <img className={style.icons} src={Behance} alt="f" />
        <img className={style.icons} src={inst} alt="f" />
        <img className={style.icons} src={crugLogo} alt="f" />
        <img className={style.icons} src={Snapchat} alt="f" />
        <img className={style.icons} src={Facebook} alt="f" />
      </div>
    </div>
  );
};

export default SocialNetwork;