import "../Styles/Home.css";
import Menu from "./Menu";
import Order from "./Order";
import BurgerTitle from "./Img/burgerLongLogo.png";

const Home = () => {
  return (
    <>
      <div className="header-logo">
        <img src={BurgerTitle} alt={"Burger-Logo"} />
      </div>
      <Menu />
      <Order />
    </>
  );
};

export default Home;
