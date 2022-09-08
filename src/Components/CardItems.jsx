import "../Styles/CardItems.css";
import Cards from "./Cards";

function CardItems(props) {
  return (
    <>
      <Cards>
        <div className="card">
          <img
            classNameName="card-img"
            src={props.src}
            alt={props.alt}
            style={{
              height: 250,
              boxShadow: "0px 0px 10px 10px rgb(245, 226, 226)",
              borderRadius: "5px",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a href="#" className="btn btn-primary bg-danger">
              {props.button}
            </a>
          </div>
        </div>
      </Cards>
    </>
  );
}

export default CardItems;
