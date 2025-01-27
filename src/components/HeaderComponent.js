import React from 'react';
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import logo from '../img/logo/logRia.jpg'
import {Link} from "react-router-dom";


function HeaderComponent(props) {
    return (
        <header id="header" className="header d-flex align-items-center">
            <Container className="container-fluid container-xl d-flex align-items-center justify-content-between">
                {/*<a href="index.html" className="logo d-flex align-items-center">*/}
                    <img src={logo} alt="" className="img-fluid" height="80" width='80'/>
                {/*</a>*/}
                <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li>
                            <a href="/" className="active"> Главная </a>
                        </li>
                        {/*<li>*/}
                        {/*    <a href="#projects">О нас</a>*/}
                        {/*</li>*/}
                        <li>
                            <a href="#services">Услуги</a>
                        </li>
                        <li>
                            <a href="#projects">Ассортимент</a>
                        </li>
                        <li>
                            <a href="#footer">Контакты</a>
                        </li>

                    </ul>
                </nav>
            </Container>
        </header>
    );
}

export default HeaderComponent;