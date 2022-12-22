import React from "react";
import style from "../Contacts/Contacts.module.scss";
import { Map, Placemark, YMaps } from "react-yandex-maps";
import placemarkIcon from "../Contacts/files/Frame.png";

const Contacts = () => {
  return (
    <div className={style.contactsParent}>
      <div className={style.blockContacts}>
        <div className={style.textContacts}>
          <b className={style.textContacts}>КОНТАКТЫ</b>
        </div>
        <div className={style.phone}>
          <b>+7 (925) 807 89 79</b>
        </div>
        <div className={style.textEmail}>AdamTsurov123@gmail.com</div>
        <div className={style.address}>Technopark Adamo, Grozny</div>
      </div>

      <div className={style.YMap}>
        <YMaps>
          <Map
            height={"100%"}
            width={"100%"}
            defaultState={{
              center: [43.324675, 45.692376],
              zoom: 15,
            }}
          >
            <Placemark
              defaultGeometry={[43.324675, 45.692376]}
              options={{
                iconLayout: "default#image",
                iconImageHref: placemarkIcon,
                iconImageSize: [43.324675, 45.692376],
              }}
            />
          </Map>
        </YMaps>
      </div>
    </div>
  );
};

export default Contacts;
