import CardComponent from "../components/CardComponent.js";
import React, { useEffect, useState } from "react";
import './BookContainer.css';
import { Card } from "react-bootstrap";

//returns 15 books
const HomeBooksAPI = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=D4oFfvNNYXE1xuXvVrb7ldJi34aceIZc`

const BookContainer = () => {

    //why books and set books?
  //why useState with an empty array?
  const [ books, setBooks ] = useState([]);

  //research useeffect and .then/promise/async await
  useEffect(() => {
    fetch(HomeBooksAPI)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.results.books);
      });
  }, []);

  //why need books.length to make books.map work?
  return (
    <div>
      in book container
      {books.length > 0 && books.map((book) => <CardComponent />)}
    </div>
  );
};

export default BookContainer;
