import CardComponent from "../components/CardComponent.js";
import { useEffect, useState } from "react";
import './BookContainer.css';
import { Card } from "react-bootstrap";

const HomeBooksAPI = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=D4oFfvNNYXE1xuXvVrb7ldJi34aceIZc`

const BookContainer = () => {

  const [ books, setBooks ] = useState([]);

  useEffect(() => {
    fetch(HomeBooksAPI)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBooks(data);
      });
  }, []);

  return (
    <div>
      {books.length > 0 && books.map((book) => <Card />)}
    </div>
  );
};

export default BookContainer;
