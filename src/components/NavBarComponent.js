import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import logo from '../img/logo/logRia.jpg'
import {Link} from "react-router-dom";

function NavBarComponent(props) {
    return (

        <Navbar expand="lg" bg="dark" variant="dark">
            {/*<i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>*/}
            {/*<i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>*/}
            <Container className="container-fluid container-xl d-flex align-items-center justify-content-between">
                <Navbar.Brand href='/'>
                    <img
                        src={logo}
                        height="150"
                        width="150"
                        className='img-fluid'
                        alt="Logo"
                    />

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {/*<Navbar.Collapse id="basic-navbar-nav">*/}
                    {/*<Nav className="me-auto">*/}
                    {/*    <Nav.Link href="/">Home</Nav.Link>*/}
                    {/*    <Nav.Link href="/link">Link</Nav.Link>*/}
                    {/*</Nav>*/}
                    <ul>
                        <li className="mx-3">
                            <a href="/" className="active"> Главная </a>
                        </li>
                        {/*<li className="mx-3">*/}
                        {/*    <a href="#">О нас</a>*/}
                        {/*</li>*/}
                        {/*<li className="mx-3">*/}
                        {/*    <a href="#services">Наши услуги</a>*/}
                        {/*</li>*/}
                        {/*<li className="mx-3">*/}
                        {/*    <a href="#projects">Наши объекты</a>*/}
                        {/*</li>*/}
                        {/*<li className="mx-3">*/}
                        {/*    <a href="#">Контакты</a>*/}
                        {/*</li>*/}
                        <li className="dropdown mx-3">
                            <a href="#">
                                <span>Информация</span>{" "}
                                <i className="bi bi-chevron-down dropdown-indicator"></i>
                            </a>
                            <ul>
                                <li>
                                    <Link to="/sertificate">Сертификаты</Link>
                                </li>
                                <li>
                                    <Link to="/fin">Финансовая отчетность</Link>
                                </li>
                                <li>
                                    <Link to="/coruption">Борьба с корупцией</Link>
                                </li>
                                <li>
                                    <Link to="/profUnion">Профсоюзная жизнь</Link>
                                </li>
                                <li>
                                    <a href="#">Техника безопасности</a>
                                </li>
                                <li>
                                    <a href="#">Вакансии</a>
                                </li>
                            </ul>
                        </li>

                    </ul>
                {/*</Navbar.Collapse>*/}
            </Container>
        </Navbar>
    );
}

export default NavBarComponent;