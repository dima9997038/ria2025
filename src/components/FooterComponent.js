import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import "./Footer.css";

function FooterComponent({setEmail}) {

    const handleInputChange = (e) => {

        setEmail(e.target.value);
    };
    return (
        <footer id="footer" className="footer">
            <div className="footer-content position-relative">
                <div className="container">
                    <div
                        className="pb-4 mb-4"
                        style={{borderBottom: "1px solid rgba(226, 175, 24, 0.5)"}}
                    >
                        <div className="row g-4">
                            <div className="col-lg-3">

                                <h1 className="mb-0" style={{color: "#32CD32"}}>РИАгрупп М</h1>
                                <p className=" mb-0" style={{color: "#FFD700"}}>Бумага и картон</p>

                            </div>
                            <div className="col-lg-6">
                                <div className="position-relative mx-auto">
                                    <input
                                        className="form-control border-0 w-100 py-3 px-4 rounded-pill"
                                        type="email"
                                        placeholder="Ваш Email" onChange={handleInputChange}
                                    />
                                    <Link to="/email">
                                        <button
                                            type="submit"
                                            className="btn  border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white"
                                            style={{top: "0", right: "0", backgroundColor: "#32CD32"}}
                                        >
                                            Отправить сообщение
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="d-flex justify-content-end pt-3">
                                    <a
                                        className="btn  btn-outline-secondary me-2 btn-md-square rounded-circle"
                                        href=""
                                    >
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a
                                        className="btn btn-outline-secondary me-2 btn-md-square rounded-circle"
                                        href=""
                                    >
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a
                                        className="btn btn-outline-secondary me-2 btn-md-square rounded-circle"
                                        href=""
                                    >
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                    <a
                                        className="btn btn-outline-secondary btn-md-square rounded-circle"
                                        href=""
                                    >
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-item">
                                <h4 className="text-light mb-3">Быстро и качественно</h4>
                                <p className="mb-4">
                                    Поставщик бумаги и картона с 1993 года
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex flex-column text-start footer-item">
                                <h4 className="text-light mb-3">Информация о нас</h4>
                                <a href="#">
                                    Главная страница
                                </a>
                                <a href="#projects">
                                    Ассортимент
                                </a>
                                <a href="#footer">
                                    Контакты
                                </a>

                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex flex-column text-start footer-item">
                                <h4 className="text-light mb-3">Наш ассортимент</h4>
                                <a href="#shop">
                                    Бумага офсетная в рулонах
                                </a>
                                <a href="#shop">
                                    Бумага легкая мелованная
                                </a>
                                <a href="#shop">
                                    Бумага суперкаландрированная
                                </a>
                                <a href="#shop">
                                    Бумага газетная
                                </a>
                                <a href="#shop">
                                    Бумага для офиса
                                </a>
                                <a href="#shop">
                                    Бумага упаковочная
                                </a>
                                <a href="#shop">
                                    Картон мелованный
                                </a>
                                <a href="#shop">
                                    Картон мелованный в листах
                                </a>


                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-item">
                                <h4 className="text-light mb-3">Контакты</h4>
                                <p>г.Минск ул.Краснозвездная 18-Б, офис 703,+375(17)284-35-25</p>
                                <p>Email: ria-opt@tut.by</p>
                                <p>Телефоны:</p>
                                <p> +375(17) 284-35-25</p>
                                <p>+375(17) 290-41-19(20)</p>
                                <p>+375(29) 659-99-87</p>
                                <p>+375(29) 578-35-25</p>
                                <p>+375(29) 639-99-80 Viber</p>
                                {/*<p>Payment Accepted</p>*/}
                                {/*<img src="img/payment.png" className="img-fluid" alt="" />*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-legal text-center position-relative">
                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong><span>ОАО «РИАгрупп М»</span></strong>. All Rights
                        Reserved
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