import "./App.scss";

import Contacts from "./pages/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainPageGame from "./pages/Games/MainPageGame";

function App() {
  return (
    <div className="app">
      <Header />
      <MainPageGame />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
