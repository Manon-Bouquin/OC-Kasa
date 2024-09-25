import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link className="cardsLogements text-white" to={`/logement/${props.id}`}>
        <div id={`cardLogements-${props.id}`}>
            <img src={props.cover} alt="" />
            <h2>{props.title}</h2>
        </div>
    </Link>
  );
};

export default Card;