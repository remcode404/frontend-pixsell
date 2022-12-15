import "./App.scss";

import Contacts from "./pages/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import GamePages from "./pages/Games/GameMain";
import OurTeam from "./pages/OurTeam/OurTeam";

function App() {
  return (
    <div className="app">
      <Header />
      <Contacts />
      <GamePages />
      <OurTeam />
      <Footer />
    </div>
  );
}

export default App;
