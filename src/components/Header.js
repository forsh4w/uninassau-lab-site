import React from 'react';
// CSS:
import '../css/Header.css';
// components:
import { Navbar, Nav, Container } from 'react-bootstrap';
// utils:
import useWindow from '../utils/useWindowSize';

export default function Header() {
    const window = useWindow();

    return (
        <div>
            <Navbar
                fixed="top"
                className="navbar-transparente"
                variant="dark"
                expand="lg"
                style={{ height: '90px' }}>
                <Container>
                    <Navbar.Brand href="#home">
                        Le Chronos Ristorant
                    </Navbar.Brand>

                    <Navbar.Toggle
                        className="navbar-toggle"
                        aria-controls="basic-navbar-nav"
                    />

                    <Navbar.Collapse
                        className="justify-content-end"
                        id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="#pratos">Pratos</Nav.Link>
                            <Nav.Link href="#about">Quem somos?</Nav.Link>
                            <Nav.Link href="#local">Local</Nav.Link>
                            <Nav.Link href="#contatos">Contatos</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
