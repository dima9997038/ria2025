import React from 'react';
import {Container, Nav, Navbar } from "react-bootstrap";
import logo from '../img/logo/logRia.jpg'
import './Header.css'
import {Link} from "react-router-dom";


function HeaderComponent(props) {
    return (
        <header id="header" className="header d-flex align-items-center">
            <Container className="container-fluid container-xl d-flex align-items-center" style={{ gap: "20px" }}>
                    <img src={logo} alt="" className="img-fluid" height="100" width='100'/>

                <Navbar id="navbar" className="navbar m-lg-auto "  sticky="top" expand="lg">

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#services" className="active fs-6 fw-bold font-monospace nav-link-custom" >Услуги</Nav.Link>
                            <Nav.Link href="#projects" className="fs-6 fw-bold font-monospace nav-link-custom">Ассортимент</Nav.Link>
                            <Link to="/about" className="fs-6 fw-bold font-monospace nav-link-custom">О нас</Link>
                            <Link to="/news" className="fs-6 fw-bold font-monospace nav-link-custom">Новости</Link>
                            <Link to="/doc" className="fs-6 fw-bold font-monospace nav-link-custom">Документы</Link>
                            <Nav.Link href="#footer" className="fs-6 fw-bold font-monospace nav-link-custom">Контакты</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>


                </Navbar>
            </Container>
        </header>
    );
}

export default HeaderComponent;