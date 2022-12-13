import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import GamePages from "./pages/Games/GameMain";

function App() {
  return (
    <div className="app">
      <Header />
      <GamePages />
      <Footer />
    </div>
  );
}

export default App;
