import "./App.scss";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AboutCompany from "./pages/AboutCompany/AboutCompany";

function App() {
  return (
    <div className="app">
      <Header />
      <AboutCompany />
      <Footer />
    </div>
  );
}

export default App;
