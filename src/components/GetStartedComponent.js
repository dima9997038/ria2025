import React, {useEffect, useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import {Col, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

function GetStartedComponent({ email,setEmail }) {
    const [hidden, setHidden] = useState(false);

    const form = useRef();
    function sendEmail(e) {
        e.preventDefault()
        emailjs
            .sendForm(
                "service_8e4m9bj",
                "template_xd5vcoo",
                form.current,
                "rrk3AplySzAd8uJ_9"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                    setHidden(true);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    }

    useEffect(() => {
        console.log(email)
    });

    const changeEmail = (e) => {

        setEmail(e.target.value);
    };

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
                        <Form ref={form} className="php-email-form" onSubmit={sendEmail}>
                            <h3>Заполните пожалуста форму и отправьте Ваше сообщение.</h3>
                            <p>В соответствии с Законом об обработке персональных данных при отправке нам сообщение Вы даете разреешение на обработку персональных данных </p>
                            <Row className="row gy-3">
                                <Col className="col-md-12">
                                    <Form.Control type="text" name="user_name" className="form-control" placeholder="Ваше имя и фамилия"
                                                  required></Form.Control>
                                </Col>
                                <Col className="col-md-12">
                                    <Form.Control type="email" name="user_email" className="form-control" placeholder="Email" value={email} onChange={changeEmail}
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
                                    <div className="loading">Отправка</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Ваш запрос был успешно отправлен. Спасибо!
                                    </div>
                                    {!hidden ?
                                        (
                                            <Form.Control type="submit" value="Отправить" ></Form.Control>
                                        ):<></>

                                    }
                                </Col>
                                <Col className="col-md-12 text-center">

                                    <Button href="/" variant={"warning"} >Вернуться на главную страницу</Button>
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