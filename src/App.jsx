import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainPageGame from "./pages/Games/MainPageGame";

function App() {
  return (
    <div className="app">
      <Header/>
     <MainPageGame/>
     <Footer/>
    </div>
  );
}

export default App;
