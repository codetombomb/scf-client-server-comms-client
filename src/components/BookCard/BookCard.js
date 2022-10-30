import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BookCard({ title, author, description, coverUrl }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={coverUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <p>Written by <em>{author}</em></p>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">Add to reading list</Button>
      </Card.Body>
    </Card>
  );
}
export default BookCard;
