import { Link } from "react-router-dom";

function BackButton(props) {
  return (
    <Link to={props.to}>
      ← {props.children}
    </Link>
  );
}

export default BackButton;