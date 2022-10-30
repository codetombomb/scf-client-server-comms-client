import './App.css';
import { useEffect, useState } from 'react';
import BooksContainer from './components/BooksContainer/BooksContainer';

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then(response => response.json())
      .then(books => setBooks([...books]))
    },[])

  return (
    <div className="App">
      <BooksContainer books={books} hello="hello"/>
    </div>
  );
}
// BooksContainer({books: [...]})

export default App;
