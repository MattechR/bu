import "./Menu.css";
import Cards from "./Cards";
import CardItems from "./CardItems";
import BurgerBundle from "./Img/burgerdeal.jpg";
import FeaturedBurger from "./Img/featured.jpg";
import Burger from "./Img/burger.jpg";
import ChickenBurger from "./Img/chickenBurger.jpg";
import Sides from "./Img/sides.jpg";
import Sweets from "./Img/sweets.jpg";

const Menu = () => {
  const MenuCards = [
    { title: "Featured", alt: "FeaturedBurgers" },
    {
      title: "Family Bundles",
      alt: "BurgerBundle",
    },
    { title: "Flame Grilled Burgers", alt: "burger" },
    { title: "Chicken & More" },
    { title: "Sides" },
    { title: "Sweets" },
  ];
  return (
    <>
      <Cards className="card-list">
        <CardItems
          title={MenuCards[0].title}
          src={FeaturedBurger}
          alt={MenuCards[0].alt}
        />
        <CardItems
          title={MenuCards[1].title}
          src={BurgerBundle}
          alt={MenuCards[1].alt}
        />
        <CardItems
          title={MenuCards[2].title}
          src={Burger}
          alt={MenuCards[2].alt}
        />
        <CardItems
          title={MenuCards[3].title}
          src={ChickenBurger}
          alt={MenuCards[3].alt}
        />
        <CardItems
          title={MenuCards[4].title}
          src={Sides}
          alt={MenuCards[4].alt}
        />
        <CardItems
          title={MenuCards[5].title}
          src={Sweets}
          alt={MenuCards[5].alt}
        />
      </Cards>
    </>
  );
};

export default Menu;
