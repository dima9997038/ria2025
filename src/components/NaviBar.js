import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import logo from "../img/logo/logRia.jpg";
import {Link} from "react-router-dom";

function NaviBar(props) {
    return (
        <header  className=" d-flex align-items-center footer" >
            <Container className="container-fluid container-xl d-flex align-items-center" style={{ gap: "20px" }}>
                {/*<a href="index.html" className="logo d-flex align-items-center">*/}
                {/*<img src={logo} alt="" className="img-fluid" height="100" width='100'/>*/}
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
                            <Link to="/" className="active fs-5 fw-bold font-monospace nav-link-navi_bar" >Главная</Link>
                            <Link to="/" className="fs-5 fw-bold font-monospace nav-link-navi_bar">Ассортимент</Link>
                            <Link to="/" className="fs-5 fw-bold font-monospace nav-link-navi_bar">Контакты</Link>
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


                </Navbar>
            </Container>
        </header>
    );
}

export default NaviBar;