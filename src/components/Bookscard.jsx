import "./BooksCard.css";

function Bookscard({ title, author, about }) {
  return (
    <article className="books-card">

      <h2>{title}</h2>

      <p className="book-author">
        {author}
      </p>

      <p className="book-about">
        {about}
      </p>

    </article>
  );
}

export default Bookscard;