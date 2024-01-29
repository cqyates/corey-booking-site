import { Navbar, Nav, Container } from 'react-bootstrap';
import "./style.css"
import { Link } from 'react-router-dom';
const HeaderNav = () => {
  return (
    <Navbar className="navbar" expand="md">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar" className="d-flex flex-row">
          <Nav className="ml-auto d-flex" style={{ width: "100%", justifyContent: "space-around"}}>
  
              <Nav.Link className="nav-link" as={Link} to="/corey-booking-site/book">
                Book a Session
              </Nav.Link>
              <Nav.Link className="nav-link" as={Link} to="/corey-booking-site">
                Learn More
              </Nav.Link>
             
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNav;
