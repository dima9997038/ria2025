import React from 'react';
import {Link} from "react-router-dom";

function FooterComponent(props) {
    return (
        <footer id="footer" className="footer">
            <div className="footer-content position-relative">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 col-md-6">
                            <div className="footer-info">
                                <h3>ОАО «Управление СтройМеханизации» </h3>
                                <p>
                                    Республика Беларусь г.Минск <br/>
                                    ул.Серова д.28, корп. 2<br/><br/>
                                    <strong>Телефон:</strong>+375 17 388 05 95<br/>
                                    <strong>Факс:</strong> +375 17 270 76 84 <br/>
                                    <strong>Email:</strong> usm_info@mail.ru <br/>
                                </p>
                                <div className="social-links d-flex mt-3">
                                    <a href="#" className="d-flex align-items-center justify-content-center"><i
                                        className="bi bi-twitter"></i></a>
                                    <a href="#" className="d-flex align-items-center justify-content-center"><i
                                        className="bi bi-facebook"></i></a>
                                    <a href="#" className="d-flex align-items-center justify-content-center"><i
                                        className="bi bi-instagram"></i></a>
                                    <a href="#" className="d-flex align-items-center justify-content-center"><i
                                        className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Полезные ссылки</h4>
                            <ul>
                                <li><a href="/">Главная</a></li>
                                <li><a href="#">О нас</a></li>
                                <li><a href="#services">Наши услуги</a></li>
                                <li><a href="#projects">Наши проекты</a></li>
                                <li> <Link to="/contacts">Контакты</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Наши услуги</h4>
                            <ul>
                                <li><a href="#services">Возведение сооружений</a></li>
                                <li><a href="#services">Строительство</a></li>
                                <li><a href="#services">Демонтаж зданий и сооружений</a></li>
                                <li><a href="#services">Переработка строительных отходов</a></li>
                                <li><a href="#services">Аренда</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Информация</h4>
                            <ul>
                                <li><a href="/sertificate">Сертификаты</a></li>
                                <li><a href="/fin">Финансовая отчетность</a></li>
                                <li>
                                    <Link to="/coruption">Борьба с корупцией</Link>
                                </li>
                                <li><a href="#">Профсоюзная жизнь</a></li>
                                <li><a href="#">Техника безопасности</a></li>
                                <li><a href="https://rec.gov.by/ru/election-schedule-ru/view/elections-2025-president">Выборы</a></li>
                            </ul>
                        </div>
                        {/*<div className="col-lg-2 col-md-3 footer-links">*/}
                        {/*    <h4>Nobis illum</h4>*/}
                        {/*    <ul>*/}
                        {/*        <li><a href="#">Ipsam</a></li>*/}
                        {/*        <li><a href="#">Laudantium dolorum</a></li>*/}
                        {/*        <li><a href="#">Dinera</a></li>*/}
                        {/*        <li><a href="#">Trodelas</a></li>*/}
                        {/*        <li><a href="#">Flexo</a></li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}

                    </div>
                </div>
            </div>

            <div className="footer-legal text-center position-relative">
                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong><span>ОАО «Управление СтройМеханизации»</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by dzmitrydubouski2@gmail.com
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default FooterComponent;