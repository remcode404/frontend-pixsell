import "./App.scss";
import MainPage from "./pages/MainPage/MainPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import GamesList from "./pages/Games/GamesList";
import LastProjects from "./pages/Games/LastProjects";
import MainPageGame from "./pages/Games/MainPageGame";

function App() {
  return (
    <div className="app">

      <Header />
      <MainPageGame />
      <GamesList />
      <LastProjects />

    </div>
  );
}

export default App;
