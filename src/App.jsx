import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Order from "./Components/Order";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <header>
        <Navbar />
      </header>
      <main className="flex-fill container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="order" element={<Order />} />
          <Route path="signUp" element={<SignUp redirect="/signIn" />} />
          <Route path="signIn" element={<SignIn redirect="/" />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
