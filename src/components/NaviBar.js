import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import './Header.css'

function NaviBar(props) {
    return (
        <header  className=" d-flex align-items-center navi-bar" >
            <Container className="container-fluid container-xl d-flex align-items-center" style={{ gap: "20px" }}>
                <Navbar id="navbar" className="navbar m-lg-auto "  sticky="top" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/" className="active fs-5 fw-bold font-monospace nav-link-navi_bar" >Главная</Link>
                            <Link to="/#services" className="fs-5 fw-bold font-monospace nav-link-navi_bar">Услуги</Link>
                            <Link to="/#projects" className="fs-5 fw-bold font-monospace nav-link-navi_bar">Ассортимент</Link>
                            <Link to="/about" className="fs-5 fw-bold font-monospace nav-link-navi_bar">О нас</Link>
                            <Link to="/news" className="fs-5 fw-bold font-monospace nav-link-navi_bar">Новости</Link>
                            <Link to="/doc" className="fs-5 fw-bold font-monospace nav-link-navi_bar">Документы</Link>
                            <Link to="/#footer" className="fs-5 fw-bold font-monospace nav-link-navi_bar">Контакты</Link>




                        </Nav>
                    </Navbar.Collapse>


                </Navbar>
            </Container>
        </header>
    );
}

export default NaviBar;