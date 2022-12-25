import style from "./App.scss";
import Contacts from "./pages/Contacts/Contacts";
import MainPage from "./pages/MainPage/MainPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import GamePages from "./pages/Games/GameMain";
import AboutVacancy from "./pages/Vacancy/AboutVacancy";
import { Route, Routes } from "react-router-dom";
import VacancyMain from "./pages/Vacancy/VacancyMain";
import AboutCompany from "./pages/AboutCompany/AboutCompany";
import Registration from "./components/Header/Registration/Registration";
import AboutGame from "./pages/Games/AboutGame";
import Enter from "./components/Header/Enter/Enter";
import { useState } from "react";
// import Basket from "./pages/Basket/Basket";


function App() {
  const [enterWindow, setEnterWindow] = useState(false);
  const [registration, setRegistration] = useState(false);

  return (
    <div className={style.app}>
      <Header
        enterWindow={enterWindow}
        setEnterWindow={setEnterWindow}
        registration={registration}
        setRegistration={setRegistration}
      />
      {enterWindow ? (
        <div className={style.enterWindow}>
          {" "}
          <Enter
            registration={registration}
            setRegistration={setRegistration}
            enterWindow={enterWindow}
            setEnterWindow={setEnterWindow}
          />
        </div>
      ) : null}
      {registration ? (
        <div className={style.enterWindow}>
          <Registration
            enterWindow={enterWindow}
            setEnterWindow={setEnterWindow}
            registration={registration}
            setRegistration={setRegistration}
          />
        </div>
      ) : null}
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              enterWindow={enterWindow}
              setEnterWindow={setEnterWindow}
              registration={registration}
              setRegistration={setRegistration}
            />
          }
        />
        <Route
          path="/games"
          element={
            <GamePages
              enterWindow={enterWindow}
              setEnterWindow={setEnterWindow}
              registration={registration}
              setRegistration={setRegistration}
            />
          }
        />
        <Route
          path="/compain"
          element={
            <AboutCompany
              enterWindow={enterWindow}
              setEnterWindow={setEnterWindow}
              registration={registration}
              setRegistration={setRegistration}
            />
          }
        />
        <Route
          path="/career"
          element={
            <VacancyMain
              enterWindow={enterWindow}
              setEnterWindow={setEnterWindow}
              registration={registration}
              setRegistration={setRegistration}
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <Contacts
              enterWindow={enterWindow}
              setEnterWindow={setEnterWindow}
              registration={registration}
              setRegistration={setRegistration}
            />
          }
        />
        <Route
          path="/aboutVacancy/:id"
          element={
            <AboutVacancy
              enterWindow={enterWindow}
              setEnterWindow={setEnterWindow}
              registration={registration}
              setRegistration={setRegistration}
            />
          }
        />
        <Route
          path="/registration"
          element={
            <Registration
              enterWindow={enterWindow}
              setEnterWindow={setEnterWindow}
              registration={registration}
              setRegistration={setRegistration}
            />
          }
        />
        <Route
          path="/games/:gameId"
          element={
            <AboutGame
              enterWindow={enterWindow}
              setEnterWindow={setEnterWindow}
              registration={registration}
              setRegistration={setRegistration}
            />
          }
        />
        <Route
          path="/enter"
          element={
            <Enter
              enterWindow={enterWindow}
              setEnterWindow={setEnterWindow}
              registration={registration}
              setRegistration={setRegistration}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;