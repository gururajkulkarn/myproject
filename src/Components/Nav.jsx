import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Topnav() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='m-5'>
      <Container>
        <Navbar.Brand href="/" style={{fontWeight:"bold"}}>MyWebsite</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/youtube">YouTube</Nav.Link>
            <Nav.Link href="/pics">Images</Nav.Link>
            <Nav.Link href="/weather">Weather</Nav.Link>
            <Nav.Link href="/motivation">Motivation</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
            <Nav.Link href="/mywebsite">MyWebsite</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  );
}

export default Topnav;