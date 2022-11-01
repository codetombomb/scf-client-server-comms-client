import { useState } from "react";
import "./NewBookForm.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function NewBookForm() {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    description: "",
    cover_image_url: "",
  });

  const handleInputChange = (e) => {
    const bookStateCopy = { ...bookData };
    bookStateCopy[e.target.name] = e.target.value;
    setBookData(bookStateCopy);
  };

  return (
    <div className="new-book-form-container">
      <Form className="new-book-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            name="title"
            value={bookData.title}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Author"
            name="author"
            value={bookData.author}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter book description"
            name="description"
            value={bookData.description}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicBookCoverURL">
          <Form.Label>Book Cover URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Book Cover URL"
            name="cover_image_url"
            value={bookData.cover_image_url}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default NewBookForm;
