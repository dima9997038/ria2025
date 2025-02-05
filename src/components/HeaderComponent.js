import React from 'react';
import {Col, Container, Nav, Navbar, Row,Offcanvas,  NavDropdown } from "react-bootstrap";
import logo from '../img/logo/logRia.jpg'
import {Link} from "react-router-dom";
import './Header.css'


function HeaderComponent(props) {
    return (
        <header id="header" className="header d-flex align-items-center">
            <Container className="container-fluid container-xl d-flex align-items-center" style={{ gap: "20px" }}>
                {/*<a href="index.html" className="logo d-flex align-items-center">*/}
                    <img src={logo} alt="" className="img-fluid" height="100" width='100'/>
                {/*</a>*/}
                {/*<i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>*/}
                {/*<i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>*/}
                <Navbar id="navbar" className="navbar m-lg-auto "  sticky="top" expand="lg">
                    {/*<Navbar.Brand href="/">*/}
                    {/*    <img*/}
                    {/*        src={logo}*/}
                    {/*        alt="Logo"*/}
                    {/*        width="100"*/}
                    {/*        height="100"*/}
                    {/*        className="d-inline-block align-top"*/}
                    {/*    />*/}
                    {/*</Navbar.Brand>*/}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    {/* Navbar Links */}
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* Home Link */}
                            {/*<Nav.Link href="#home">Home</Nav.Link>*/}

                            {/* About Link */}
                            <Nav.Link href="#services" className="active fs-5 fw-bold font-monospace nav-link-custom" >Услуги</Nav.Link>
                            <Nav.Link href="#projects" className="fs-5 fw-bold font-monospace nav-link-custom">Ассортимент</Nav.Link>
                            <Nav.Link href="#footer" className="fs-5 fw-bold font-monospace nav-link-custom">Контакты</Nav.Link>
                            {/* Dropdown Menu */}
                            {/*<NavDropdown title="Services" id="basic-nav-dropdown">*/}
                            {/*    <NavDropdown.Item href="#service">Услуги</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href="#service2">Service 2</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href="#service3">Service 3</NavDropdown.Item>*/}
                            {/*    /!*<NavDropdown.Divider />*!/*/}
                            {/*    /!*<NavDropdown.Item href="#more-services">More Services</NavDropdown.Item>*!/*/}
                            {/*</NavDropdown>*/}
                        </Nav>

                        {/* Right-Aligned Links */}
                        {/*<Nav>*/}
                        {/*    <Nav.Link href="#login">Login</Nav.Link>*/}
                        {/*    <Nav.Link href="#signup">Sign Up</Nav.Link>*/}
                        {/*</Nav>*/}
                    </Navbar.Collapse>

                    {/*<Navbar.Brand href="/">*/}
                    {/*    <img*/}
                    {/*        src={logo}*/}
                    {/*        alt="Logo"*/}
                    {/*        width="100"*/}
                    {/*        height="100"*/}
                    {/*        className="d-inline-block align-top"*/}
                    {/*    />*/}
                    {/*</Navbar.Brand>*/}
                    {/*<Navbar.Toggle aria-controls="offcanvasNavbar" />*/}
                    {/*<Navbar.Offcanvas*/}
                    {/*    id="offcanvasNavbar"*/}
                    {/*    aria-labelledby="offcanvasNavbarLabel"*/}
                    {/*    placement="end"*/}
                    {/*>*/}
                    {/*    <Offcanvas.Header closeButton>*/}
                    {/*        <Offcanvas.Title id="offcanvasNavbarLabel">*/}
                    {/*            Меню*/}
                    {/*        </Offcanvas.Title>*/}
                    {/*    </Offcanvas.Header>*/}

                    {/*</Navbar.Offcanvas>*/}
                    {/*<Offcanvas.Body>*/}
                    {/*    <Nav className="justify-content-end flex-grow-1 pe-3 ulnode">*/}
                    {/*        <Nav.Link className=" a li nav-link" href="/">Главная</Nav.Link>*/}
                    {/*        <Nav.Link className="li" href="#services">Услуги</Nav.Link>*/}
                    {/*        <Nav.Link className="li" href="#projects">Ассортимент</Nav.Link>*/}
                    {/*        <Nav.Link className="li" href="#footer">Контакты</Nav.Link>*/}
                    {/*    </Nav>*/}
                    {/*</Offcanvas.Body>*/}
                    {/*<ul>*/}
                    {/*    <li>*/}
                    {/*        <a href="/" className="active"> Главная </a>*/}
                    {/*    </li>*/}
                    {/*    /!*<li>*!/*/}
                    {/*    /!*    <a href="#projects">О нас</a>*!/*/}
                    {/*    /!*</li>*!/*/}
                    {/*    <li>*/}
                    {/*        <a href="#services">Услуги</a>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <a href="#projects">Ассортимент</a>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <a href="#footer">Контакты</a>*/}
                    {/*    </li>*/}

                    {/*</ul>*/}

                </Navbar>
            </Container>
        </header>
    );
}

export default HeaderComponent;