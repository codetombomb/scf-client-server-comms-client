import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
        <img
              alt="books logo"
              src="https://visualpharm.com/assets/489/Open%20Book-595b40b65ba036ed117d44fc.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/books/new">Add New Book</Nav.Link>
          <Nav.Link href="/books">Books</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </>
  )
}
export default NavBar