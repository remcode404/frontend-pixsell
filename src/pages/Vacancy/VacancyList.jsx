import React from "react";
import { Link } from "react-router-dom";
import style from "./VacancyList.module.scss";

const VacancyList = () => {
  return (
    <div id="main_vacancy" className={style.main_vacancylist}>
      <h1 className={style.main_title}>Наши вакансии</h1>
      <div className={style.main_blocksvacancy}>
        <div className={style.main_itemvacancy}>
          <h2 className={style.main_titlevacancy}>User Acquisition Manager</h2>
          <Link to="/aboutVacancy" className={style.button_itemvacancy}>
            {" "}
            <button
              className={style.button_itemvacancy}
              onClick={() => console.log("sdada")}
            >
              Подробнее
              <svg
                width="88"
                height="16"
                viewBox="0 0 95 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={style.arrow_itemvacancy}
                  d="M94.7071 8.70711C95.0976 8.31658 95.0976 7.68342 94.7071 7.29289L88.3431 0.928932C87.9526 0.538408 87.3195 0.538408 86.9289 0.928932C86.5384 1.31946 86.5384 1.95262 86.9289 2.34315L92.5858 8L86.9289 13.6569C86.5384 14.0474 86.5384 14.6805 86.9289 15.0711C87.3195 15.4616 87.9526 15.4616 88.3431 15.0711L94.7071 8.70711ZM0 9L94 9V7L0 7L0 9Z"
                  fill="white"
                />
              </svg>
            </button>
          </Link>
        </div>
        <div className={style.main_itemvacancy}>
          <h2 className={style.main_titlevacancy}>User Acquisition Manager</h2>
          <Link className={style.button_itemvacancy} to="/aboutVacancy">
            {" "}
            <button
              className={style.button_itemvacancy}
              onClick={() => console.log("sdada")}
            >
              Подробнее
              <svg
                width="88"
                height="16"
                viewBox="0 0 95 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={style.arrow_itemvacancy}
                  d="M94.7071 8.70711C95.0976 8.31658 95.0976 7.68342 94.7071 7.29289L88.3431 0.928932C87.9526 0.538408 87.3195 0.538408 86.9289 0.928932C86.5384 1.31946 86.5384 1.95262 86.9289 2.34315L92.5858 8L86.9289 13.6569C86.5384 14.0474 86.5384 14.6805 86.9289 15.0711C87.3195 15.4616 87.9526 15.4616 88.3431 15.0711L94.7071 8.70711ZM0 9L94 9V7L0 7L0 9Z"
                  fill="white"
                />
              </svg>
            </button>
          </Link>
        </div>
        <div className={style.main_itemvacancy}>
          <h2 className={style.main_titlevacancy}>User Acquisition Manager</h2>
          <Link className={style.button_itemvacancy} to="/aboutVacancy">
            <button className={style.button_itemvacancy}>
              Подробнее
              <svg
                width="88"
                height="16"
                viewBox="0 0 95 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={style.arrow_itemvacancy}
                  d="M94.7071 8.70711C95.0976 8.31658 95.0976 7.68342 94.7071 7.29289L88.3431 0.928932C87.9526 0.538408 87.3195 0.538408 86.9289 0.928932C86.5384 1.31946 86.5384 1.95262 86.9289 2.34315L92.5858 8L86.9289 13.6569C86.5384 14.0474 86.5384 14.6805 86.9289 15.0711C87.3195 15.4616 87.9526 15.4616 88.3431 15.0711L94.7071 8.70711ZM0 9L94 9V7L0 7L0 9Z"
                  fill="white"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
      <div className={style.main_buttondiv}>
        <a className={style.main_a} href="#mainJoboBenefits">
          <button className={style.main_button}>
            Преимущества компании
            <svg
              width="16"
              height="100"
              viewBox="0 0 16 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.29289 99.7071C7.68342 100.098 8.31658 100.098 8.70711 99.7071L15.0711 93.3431C15.4616 92.9526 15.4616 92.3195 15.0711 91.9289C14.6805 91.5384 14.0474 91.5384 13.6569 91.9289L8 97.5858L2.34315 91.9289C1.95262 91.5384 1.31946 91.5384 0.928934 91.9289C0.538409 92.3195 0.538409 92.9526 0.928934 93.3431L7.29289 99.7071ZM7 1.72196e-08L7 99L9 99L9 -1.72196e-08L7 1.72196e-08Z"
                fill="white"
              />
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
};

export default VacancyList;
