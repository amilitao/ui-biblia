import { FunctionComponent } from "react";
import { Container, Navbar } from "react-bootstrap";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src="biblia_logo.svg" width={50} height={40} /> Minha Bíblia
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Em desenvolvimento por: Adriano Militão</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
