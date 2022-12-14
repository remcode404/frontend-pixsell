import "./App.scss";

import Contacts from "./pages/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import GamePages from "./pages/Games/GameMain";

function App() {
  return (
    <div className="app">
      <Header />
      <Contacts />
      <GamePages />
      <Footer />
    </div>
  );
}

export default App;
