import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
const NavBar = () => {
	return (
		// <Navbar>
		// 	<Link to="/">Sobre Mi</Link>
		// 	<Link to="/contacto">Contacto</Link>
		// 	<Link to="/Trabajos">Trabajos</Link>
		// </Navbar>
		<Navbar sticky="top" expand="sm" collapseOnSelect bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#">Amir Velasquez</Navbar.Brand>
				<NavbarToggle aria-controls="responsive-navbar-nav" />
				<NavbarCollapse className="p-2">
					<Nav className="ms-auto">
						<Nav.Link href="/">Sobre Mi</Nav.Link>
						<Nav.Link href="/trabajos">Trabajos</Nav.Link>
						<Nav.Link href="/contacto">Contacto</Nav.Link>
					</Nav>
				</NavbarCollapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
