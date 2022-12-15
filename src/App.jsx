import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import GamePages from "./pages/Games/GameMain";
import AboutVacancy from "./pages/Vacancy/AboutVacancy";

function App() {
  return (
    <div className="app">
      <Header />
      <AboutVacancy />
      <Footer />
    </div>
  );
}

export default App;
