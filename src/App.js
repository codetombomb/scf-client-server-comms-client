import "./App.css";
import { useEffect, useState } from "react";
import BooksContainer from "./components/BooksContainer/BooksContainer";
import { Routes, Route } from "react-router-dom";
import NewBookForm from "./components/NewBookForm/NewBookForm";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((response) => response.json())
      .then((books) => setBooks([...books]));
  }, []);

  const handleAddBook = (bookData) => {
    debugger
  }

  return (
    <div className="App">
      <NavBar />
      <h1>My Reading List</h1>
      <Routes>
        <Route path="/books" element={<BooksContainer books={books} hello="hello" />} />
        <Route path="/books/new" element={<NewBookForm onAddBook={handleAddBook}/>} />
      </Routes>
    </div>
  );
}

export default App;
