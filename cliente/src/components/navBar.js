import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


function Barra_navegador(){
    return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Inicio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/peliculas">Peliculas</Nav.Link>
            <Nav.Link href="#features">Directores</Nav.Link>
            <Nav.Link href="#pricing">Personajes</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    )
}


export default Barra_navegador