
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
          <Navbar.Brand>Home</Navbar.Brand>
        </Link>
          <Nav className="me-auto">
          <NavDropdown title="Ngrams" id="basic-nav-dropdown">
          <Link  href="/ngram/single" passHref legacyBehavior>
              <NavDropdown.Item>Single</NavDropdown.Item>
              </Link>
              <Link  href="/ngram/duo" passHref legacyBehavior>
              <NavDropdown.Item>
                Duo
              </NavDropdown.Item>
              </Link>
              <Link  href="/ngram/multi" passHref legacyBehavior>
              <NavDropdown.Item>Multi</NavDropdown.Item>
              </Link>
            </NavDropdown>
            {/* <Link  href="/about" passHref legacyBehavior>
            <Nav.Link>Features</Nav.Link>
            </Link> */}
            {/* <Nav.Link href="#Co">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
        </>
    )

}