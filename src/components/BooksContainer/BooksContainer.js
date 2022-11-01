import BookCard from "../BookCard/BookCard";
import './BooksContainer.css'

function BooksContainer({ books }) {
  return (
    <div className="books-container">
      {books.map((book) => {
        return (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            description={book.description}
            coverUrl={book.cover_image_url}
          />
        );
      })}
    </div>
  );
}
export default BooksContainer;
