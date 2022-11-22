import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import pic from "../images/me.jpg";
import { Link } from "react-scroll";

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="sticky-top navbar-style"
      style={{ position: "sticky", top: "0" }}
      width={"500px"}
    >
      <Container>
        <img
          src={pic}
          class="rounded-circle mx-2"
          alt="Vishakha Yadav"
          width={"50rem"}
        />
        <Navbar.Brand href="#home">Vishakha.</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Link to="/" spy={true} smooth={true} offset={50} duration={500}>
              <Nav.Link>Home</Nav.Link>
            </Link>

            <Link to="Project" spy={true} smooth={true} duration={500}>
              <Nav.Link>My Projects</Nav.Link>
            </Link>
            <Link
              to="AboutMe"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <Nav.Link>About Me</Nav.Link>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <Nav.Link>Contact Me</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
