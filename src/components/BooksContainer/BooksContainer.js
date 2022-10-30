import BookCard from "../BookCard/BookCard";

function BooksContainer({ books }) {
  return (
    <div>
      {[<BookCard></BookCard>, <BookCard></BookCard>, <BookCard></BookCard>]}
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
