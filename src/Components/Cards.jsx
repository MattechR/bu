import "../Styles/Cards.css";

function Cards(card) {
  const classes = "cards " + card.className;

  return <div className={classes}>{card.children}</div>;
}

export default Cards;
