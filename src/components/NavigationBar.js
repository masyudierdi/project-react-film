import { Navbar, Container, Nav, NavLink, NavbarBrand } from "react-bootstrap";

const NavigationBar = () => {
   return (
      <div>
         <Navbar variant="dark">
            <Container>
               <NavbarBrand href="/">ErdiFilms</NavbarBrand>
               <Nav>
                  <Nav.Link href="#trending">TRENDING</Nav.Link>
                  <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
               </Nav>
            </Container>
         </Navbar>
      </div>
   );
};

export default NavigationBar;
