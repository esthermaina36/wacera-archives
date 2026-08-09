import { Link } from "react-router-dom";
import "./JourneyButton.css";
function JourneyButton() {
    return (
        <Link to="/dashboard" className="journey-button">
    Journey Begins
</Link>
    );

}
export default JourneyButton;

