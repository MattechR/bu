import "../../Styles/Header.css";

const Header = ({ title, description }) => {
  return (
    <div className="row">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="description row">
        <div className="col-12">{description}</div>
      </div>
    </div>
  );
};

export default Header;
