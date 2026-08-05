import BackButton from "../components/BackButton";
import Bookscard from "../components/Bookscard";
import "./Books.css";
function Books () {
    return (
        <main className="books">
           
            <h1>📚Books</h1>
<p>  From the first page to the last, these books taught me, challenged me, and educated me. They each stayed with me long after the story ended.
</p>

<Bookscard
      title="Unbowed:A memoir"
      author="Wangari Maathai"
      about="This is a book about a woman named Wangari Muta Maathai. She won a nobel prize in the year 2004. She fought for the for the environment and founded the Green Belt movement. In 2003 she was appointed as the assistant minister for the environment."
      />

       <Bookscard
      title="The alchemist"
      author="Paul Coelho"
      about="This is a book about a sherpheard boy named Santiago. He leaves that life behind in pursuit of treasure. "
      
       />

       <Bookscard
      title="Dead certain"
      author="Adam Mitzner"
      about="March,2026"
      
       />

        <Bookscard
      title="Broken"
      author="Fatima Bala"
      about="April,2026"
     
       />

       <Bookscard
      title="Verity"
      author="Collen Hoover"
      about="May, 2026"
      
       />
       <Bookscard
      title="Reminders of him"
      author="Collen Hoover"
      about="May,2026"
      
       />

       <Bookscard
      title="The score"
      author="Elle Kennedy"
      about="June,2026"
      
       />

       <Bookscard
      title="The silent patient"
      authot="Alex Michaelides"
      about="June,2026"
      
       />

       <Bookscard
      title="The gone girl"
      author="Gillian Flynn"
      about="July,2026"
     
       />

       <Bookscard
      title="The goal"
      author="Elle Kennedy"
      about="July,2026"
      
       />

      


<BackButton to="/dashboard">
  Dashboard
</BackButton>
        </main>
    );

}
export default Books;