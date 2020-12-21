import "./styles/global.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
