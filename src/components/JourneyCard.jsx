import { Link } from "react-router-dom";
import "./JourneyCard.css";
function JourneyCard (props) {
    return (
        <Link to={props.to}>
       <div className="journey-card">
       { props.image && (
      <img src={props.image} alt={props.title} />
       )
    }
        <h2>{props.title}</h2>
        <p>{props.date}</p>
            <p>{props.summary}</p>
           <p>Read Journey →</p>
        </div>
        </Link>
        

    );
   

}
export default JourneyCard;




