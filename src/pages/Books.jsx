import BackButton from "../components/BackButton";
import Bookscard from "../components/Bookscard";
import "./Books.css";

function Books() {
  return (
    <main className="books">

      <h1>📚 Books</h1>

      <p>
        From the first page to the last, these books taught me, challenged me,
        and educated me. They each stayed with me long after the story ended.
      </p>

      <Bookscard
        title="Unbowed: A Memoir"
        author="Wangari Maathai"
        about="This is a book about a woman named Wangari Muta Maathai. She won a Nobel Prize in the year 2004. She fought for the environment and founded the Green Belt Movement. In 2003 she was appointed as the assistant minister for the environment."
      />

      <Bookscard
        title="The Alchemist"
        author="Paulo Coelho"
        about="This is a book about a shepherd boy named Santiago. He leaves that life behind in pursuit of treasure."
      />

      <Bookscard
        title="Dead Certain"
        author="Adam Mitzner"
        about="March, 2026"
      />

      <Bookscard
        title="Broken"
        author="Fatima Bala"
        about="April, 2026"
      />

      <Bookscard
        title="Verity"
        author="Colleen Hoover"
        about="May, 2026"
      />

      <Bookscard
        title="Reminders of Him"
        author="Colleen Hoover"
        about="May, 2026"
      />

      <Bookscard
        title="The Score"
        author="Elle Kennedy"
        about="June, 2026"
      />

      <Bookscard
        title="The Silent Patient"
        author="Alex Michaelides"
        about="June, 2026"
      />

      <Bookscard
        title="Gone Girl"
        author="Gillian Flynn"
        about="July, 2026"
      />

      <Bookscard
        title="The Goal"
        author="Elle Kennedy"
        about="July, 2026"
      />

      <BackButton to="/dashboard">
        Dashboard
      </BackButton>

    </main>
  );
}

export default Books;