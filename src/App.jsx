import "./App.scss";

import Contacts from "./pages/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import GamePages from "./pages/Games/GameMain";
import AboutVacancy from "./pages/Vacancy/AboutVacancy";
import { Route, Routes } from "react-router-dom";
import VacancyMain from "./pages/Vacancy/VacancyMain";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/games" element={<GamePages />} />
        <Route path="/career" element={<VacancyMain />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
