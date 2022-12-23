import React from "react";
import style from "./VacancyList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import SingleVacancy from "./SingleVacancy";
import { fetchVacancy } from "../../reducers/Slice/vacancySlice";

const VacancyList = () => {
  const vacancies = useSelector((state) => state.vacancySlice.vacancy);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchVacancy())
  }, [dispatch])

  return (
    <div id="main_vacancy" className={style.main_vacancylist}>
      <h1 className={style.main_title}>Наши вакансии</h1>

      <div className={style.main_blocksvacancy}>
        {
          vacancies.map((item, index) => {
            return <SingleVacancy item={item} key={index}/>
          })
        }
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