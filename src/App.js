import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CardComponent from "./components/CardComponent";
import BookContainer from "./containers/BookContainer";

function App() {
  
  return (
    <div className="App">
      <NavbarComponent />
      <BookContainer />
      <Footer />
    </div>
  );
}

export default App;
