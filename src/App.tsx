import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import { getBooks } from "./services/Books";
import { BookDto } from "./services/Books/dto";
import { Container } from "react-bootstrap";


function App() {
  const [books, setBooks] = useState<BookDto[]>([]);

  useEffect(() => {
    getBooks()
      .then((res) => setBooks(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <p>Livros</p>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book.abbrev.pt} - {book.author}
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default App;
