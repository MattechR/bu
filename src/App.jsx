import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-fill container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="SignUp" element={<SignUp redirect="SignIn" />} />
          <Route path="SignIn" element={<SignIn redirect="/" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
