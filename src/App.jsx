import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import GamePages from "./pages/Games/GameMain";
import VacancyMain from "./pages/Vacancy/VacancyMain";

function App() {
  return (
    <div className="app">
      <Header />
      <VacancyMain/>
      <Footer />
    </div>
  );
}

export default App;
