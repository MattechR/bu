import "../Styles/Menu.css";
import Cards from "./Cards";
import CardItems from "./CardItems";
import DeliveryIcon from "./Img/DeliveryIcon.png";
import TakeAwayIcon from "./Img/TakeAwayIcon.jpg";
import PageHeader from "./Common/PageHeader";

const Order = () => {
  const OrderCards = [
    {
      title: "Delivery",
      alt: "Delivery",
      description: "We can deliver your order over here.",
      button: "Order now",
    },
    {
      title: "Take Away",
      alt: "Take Away",
      description: "Come over to take away your order.",
      button: "Order now",
    },
  ];

  return (
    <>
      <PageHeader title={""} description={""} />
      <Cards className="card-list">
        <CardItems
          title={OrderCards[0].title}
          src={DeliveryIcon}
          alt={OrderCards[0].alt}
          description={OrderCards[0].description}
          button={OrderCards[0].button}
        />
        <CardItems
          title={OrderCards[1].title}
          src={TakeAwayIcon}
          alt={OrderCards[1].alt}
          description={OrderCards[1].description}
          button={OrderCards[1].button}
        />
      </Cards>
    </>
  );
};

export default Order;
