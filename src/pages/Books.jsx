import BackButton from "../components/BackButton";
import { Link } from "react-router-dom";
function Books () {
    return (
        <main>
           
            <h1>📚Books</h1>
<p>  From the first page to the last, these books taught me, challenged me, and educated me. They each stayed with me long after the story ended.
</p>
<BackButton to="/dashboard">
  Dashboard
</BackButton>
        </main>
    );

}
export default Books;