import { Link } from "react-router-dom";
import style from "../Vacancy/SingleVacancy.module.scss";

function SingleVacancy({ item }) {
  return (
    <div className={style.main_itemvacancy}>
      <h2 className={style.main_titlevacancy}>{item.name}</h2>
      <Link to={`/aboutVacancy/${item._id}`} className={style.button_itemvacancy}>
        <button className={style.button_itemvacancy}>
          <span className={style.linkText} to={item._id}>Подробнее</span>
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
  );
}

export default SingleVacancy;
