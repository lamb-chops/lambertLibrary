import { Card, Button, ListGroupItem, ListGroup } from "react-bootstrap";

const CardComponent = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="" alt="img goes here" />
      <Card.Body>
        <Card.Title>Book Title Test</Card.Title>
        <Card.Text>Book description will go in card text</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Book Auther</ListGroupItem>
        <ListGroupItem>Maybe date written here?</ListGroupItem>
        <ListGroupItem>Genre</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Link to similar suggestions</Card.Link>
        <br></br>
        <Card.Link href="#">Or a button with more deets instead?</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
