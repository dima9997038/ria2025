import React from 'react';
import {Col, Form, Row} from "react-bootstrap";

function GetStartedComponent(props) {
    return (
        <section id="get-started" className="get-started section-bg">
            <div className="container">
                <Row className="row justify-content-between gy-4">
                    <Col className="col-lg-6 d-flex align-items-center" data-aos="fade-up">
                        <div className="content">
                            <h3>Ждем Ваших сообщений. Каждое Ваше обращение или предложение очень важно для нас.</h3>
                            <p> Мы благодарны за каждое Ваше обращение или отзыв о нашей работе </p>
                        </div>
                    </Col>
                    <Col className="col-lg-5" data-aos="fade">
                        <Form action="forms/quote.php" method="post" className="php-email-form">
                            <h3>Заполните пожалуста форму и отправьте Ваше сообщение.</h3>
                            <p>В соответствии с Законом об обработке персональных данных при отправке нам сообщение Вы даете разреешение на обработку персональных данных </p>
                            <Row className="row gy-3">
                                <Col className="col-md-12">
                                    <Form.Control type="text" name="name" className="form-control" placeholder="Ваше имя и фамилия"
                                                  required></Form.Control>
                                </Col>
                                <Col className="col-md-12">
                                    <Form.Control type="email" name="email" className="form-control" placeholder="Email"
                                                  required></Form.Control>
                                </Col>
                                <Col className="col-md-12">
                                    <Form.Control type="text" name="phone" className="form-control" placeholder="Телефон"
                                                  required></Form.Control>
                                </Col>
                                <Col className="col-md-12">
                                    <Form.Control as="textarea" name="message" className="form-control" rows="6"
                                                  placeholder="Сообщение" required></Form.Control>
                                </Col>
                                <Col className="col-md-12 text-center">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your quote request has been sent successfully. Thank
                                        you!
                                    </div>
                                    <button type="submit">Отправить</button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default GetStartedComponent;