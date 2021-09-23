import { Card, Button, ListGroupItem, ListGroup } from "react-bootstrap";

const CardComponent = ({ title, description, author, book_image }) => {
  return (
    <div>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={book_image} alt="img goes here" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{author}</ListGroupItem>
        <ListGroupItem>{description}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Link to similar suggestions</Card.Link>
      </Card.Body>
    </Card>
    </div>
  );
};

export default CardComponent;
