import { Link } from "react-router-dom";
import "./BooksCard.css";
function Bookscard (props) {
    return (
        <Link to={props.to}>
       <div className="books-card">
       
        <h2>{props.title}</h2>
        <p>{props.author}</p>
            <p>{props.about}</p>
           
        </div>
        </Link>
        

    );
   

}
export default Bookscard;




