import "../Styles/Menu.css";
import Cards from "./Cards";
import CardItems from "./CardItems";
import BurgerBundle from "./Img/burgerDeal.jpg";
import FeaturedBurger from "./Img/featured.jpg";
import Burger from "./Img/burger.jpg";
import ChickenBurger from "./Img/chickenBurger.jpg";
import Sides from "./Img/sides.jpg";
import Sweets from "./Img/sweets.jpg";
import PageHeader from "./Common/PageHeader";

const Menu = () => {
  const MenuCards = [
    {
      title: "Featured",
      alt: "FeaturedBurgers",
      description: "Check out the featured products and HOT deals.",
      button: "Featured",
    },

    {
      title: "Family Bundles",
      alt: "BurgerBundle",
      description: "Our family bundles is available here.",
      button: "Bundles",
    },
    {
      title: "Grilled Burgers",
      alt: "burger",
      description: "All of our classic flaming grilled burgers.",
      button: "Burgers",
    },
    {
      title: "Chicken & More",
      description: "Feeling a different vibe? We have chicken for you.",
      button: "Chicken",
    },
    {
      title: "Sides",
      description: "Everything on the side that goes well with every order.",
      button: "Sides",
    },
    {
      title: "Sweets",
      description: "You can't miss this, our sweet products are here.",
      button: "Sweets",
    },
  ];
  return (
    <>
      <PageHeader title={""} description={""} />
      <Cards className="card-list">
        <CardItems
          title={MenuCards[0].title}
          src={FeaturedBurger}
          alt={MenuCards[0].alt}
          description={MenuCards[0].description}
          button={MenuCards[0].button}
        />
        <CardItems
          title={MenuCards[1].title}
          src={BurgerBundle}
          alt={MenuCards[1].alt}
          description={MenuCards[1].description}
          button={MenuCards[1].button}
        />
        <CardItems
          title={MenuCards[2].title}
          src={Burger}
          alt={MenuCards[2].alt}
          description={MenuCards[2].description}
          button={MenuCards[2].button}
        />
        <CardItems
          title={MenuCards[3].title}
          src={ChickenBurger}
          alt={MenuCards[3].alt}
          description={MenuCards[3].description}
          button={MenuCards[3].button}
        />
        <CardItems
          title={MenuCards[4].title}
          src={Sides}
          alt={MenuCards[4].alt}
          description={MenuCards[4].description}
          button={MenuCards[4].button}
        />
        <CardItems
          title={MenuCards[5].title}
          src={Sweets}
          alt={MenuCards[5].alt}
          description={MenuCards[5].description}
          button={MenuCards[5].button}
        />
      </Cards>
    </>
  );
};

export default Menu;
