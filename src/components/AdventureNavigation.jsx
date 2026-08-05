import { Link } from "react-router-dom";
import "./AdventureNavigation.css";
function AdventureNavigation (props) {
    return (
        <div className="adventure-navigation">
      <Link to={props.previousLink}>
    ← {props.previousTitle}
</Link>
  <Link to={props.nextLink}>
    {props.nextTitle} → 
      </Link>
      </div>

    );
}
export default AdventureNavigation;