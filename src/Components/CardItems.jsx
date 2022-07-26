import "./CardItems.css";
import Cards from "./Cards";

function CardItems(props) {
  return (
    <div>
      <Cards className="card-title">
        <div>
          <img className="card-image" src={props.src} alt={props.alt} />
          <h2>{props.title}</h2>
        </div>
      </Cards>
    </div>
  );
}

export default CardItems;
