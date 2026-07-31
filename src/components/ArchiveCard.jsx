import { Link } from "react-router-dom";
import "./ArchiveCard.css";
function ArchiveCard(props) {
    return(
        <Link to={props.to}>
        <div className="archive_card">
        <h2>{props.title}</h2>
            <p>{props.description}</p>

            </div>
            </Link>
    );
}
export default ArchiveCard;