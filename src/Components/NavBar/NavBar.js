import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './NavBar.module.css';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {

    const countries = ['USA' , 'France' , 'Germany' , 'Italy' , 'Egypt' ] ;
    //   {/* us  fr de it  eg */}

  return (
    <Navbar collapseOnSelect className="bg-danger bg-gradient fw-bolder border-2 border-bottom border-black  ">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={` ${styles.navLink} mx-auto text-capitalize `}>

           { countries? countries.map((country , index)=>{
            return  <NavDropdown title={country} key={index} id="navbarScrollingDropdown">
              
              <div className={styles.dropDown}>
              <NavDropdown.Item href="#action3">business</NavDropdown.Item>
              <NavDropdown.Item href="#action3">health</NavDropdown.Item>
              <NavDropdown.Item href="#action3">science</NavDropdown.Item>
              <NavDropdown.Item href="#action3">sports</NavDropdown.Item>
              <NavDropdown.Item href="#action3">technology</NavDropdown.Item>
              <NavDropdown.Item href="#action3">entertainment</NavDropdown.Item>

              <NavDropdown.Divider />
              
              <NavDropdown.Item href="#action5">
              general
              </NavDropdown.Item>
              </div>

            </NavDropdown>
           }) : ''}

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavBar;