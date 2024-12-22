
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Router from 'next/router';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { NavDropdown } from 'react-bootstrap';
export default function AppNav(){
    const router = useRouter();
    return(

        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Link  href="/" passHref legacyBehavior>
          <Navbar.Brand href="/">Home</Navbar.Brand>
        </Link>
          <Nav className="me-auto">
          <NavDropdown title="Ngrams" id="basic-nav-dropdown">
          <Link  href="ngram/single" passHref legacyBehavior>
              <NavDropdown.Item href="ngram/single">Single</NavDropdown.Item>
              </Link>
              <NavDropdown.Item href="ngram/duo">
                Duo
              </NavDropdown.Item>
              <NavDropdown.Item href="ngram/multi">Multi</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#About">Features</Nav.Link>
            {/* <Nav.Link href="#Co">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
        </>
    )

}