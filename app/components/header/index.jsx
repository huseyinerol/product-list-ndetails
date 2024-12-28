import { Container, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar className="bg-body-tertiary header">
      <Container>
        <Navbar.Brand href="/">
          <i className="bi bi-check-circle-fill"></i>{" "}
          Akakçe Ürünler
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
export default Header;