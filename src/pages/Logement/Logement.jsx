import { useParams} from "react-router-dom";
import logementsList from "../../datas/logementsList.json";
import Collapse from "../../components/Collapse/Collapse";
import Host from "../../components/Host/Host";
import Rating from "../../components/Rating/Rating";
import Tags from "../../components/Tags/Tags";
import Slideshow from "../../components/Slideshow/Slideshow";

function Logements() {
  const { id } = useParams();
  const logements = logementsList.filter((logement) => logement.id === id);
  const logement = logements[0];

  return (
    <div className="logement">
      <div className="slideshow">
        <Slideshow slides={logement.pictures}/>
      </div>

      <div className="logement-info">
        <div className="logement-details">
          <h1 className="logement-title">{logement.title}</h1>
          <div className="logement-place">{logement.location}</div>
          <div className="logement-tag"><Tags tags={logement.tags}/></div>
        </div>
      
      
        <div className="host">
          <div className="host-picture"><Host host={logement.host}/></div>
          <div className="host-rating"><Rating rating={logement.rating}/></div>
        </div>
      </div>

      <div className="collapse">
        <Collapse titre="Description" cssClasses="collapse-container">
          <p className="collapse-content">{logement.description}</p>
        </Collapse>
        <Collapse titre="Equipements" cssClasses="collapse-container">
          <ul className="collapse-content">
            {logement.equipments.map((equipment, index) => {
              return <li key={index}> {equipment}</li>;
            })}
          </ul>
        </Collapse>
      </div>

    </div>
    );
  };
  
export default Logements;