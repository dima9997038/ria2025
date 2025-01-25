import React from 'react';
import NavBarComponent from "../components/NavBarComponent";
import {Col, Container, Row, Table} from "react-bootstrap";
import FooterComponent from "../components/FooterComponent";
import {Link} from "react-router-dom";

function PrivateQuestion(props) {
    return (
        <>
            <NavBarComponent/>
            <Container className="pt-3 py-2 mb-4">
                <Row>
                    <Col md={8}>
                        <Row>
                            <p className="text-white p-3 mb-2 bg-primary"><h2>Личный прием</h2></p>
                        </Row>
                        <h3>График личного приема граждан по личным вопросам руководством ОАО «УправлениеСтройМеханизации» </h3>
                        <Table>
                            <thead>
                            <tr>
                                <th><p className="text-white p-3 mb-2 bg-danger">Должность </p></th>
                                <th><p className="text-white p-3 mb-2 bg-danger">ФИО </p></th>
                                <th><p className="text-white p-3 mb-2 bg-danger">День</p></th>
                                <th><p className="text-white p-3 mb-2 bg-danger">Время</p></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Директор</td>
                                <td><b>Савченко Григорий Алексеевич</b></td>
                                <td>
                                    <p>10.06.2024</p>
                                    <p>08.07.2024</p>
                                    <p>12.08.2024</p>
                                    <p>09.09.2024</p>
                                    <p>14.10.2024</p>
                                    <p>11.11.2024</p>
                                    <p>09.12.2024</p>
                                </td>
                                <td>16.00 -
                                    20.00
                                </td>
                            </tr>
                            <tr>
                                <td>Первый заместитель директора - главный инженер</td>
                                <td><b>Посудевский Владимир Васильевич</b></td>
                                <td>
                                    <p>19.06.2024</p>
                                    <p>17.07.2024</p>
                                    <p>14.08.2024</p>
                                    <p>18.09.2024</p>
                                    <p>16.10.2024</p>
                                    <p>20.11.2024</p>
                                    <p>18.12.2024</p>
                                </td>
                                <td>08.00 -
                                    12.00</td>
                            </tr>
                            <tr>
                                <td>Заместитель директора</td>
                                <td><b>Климович Юрий Валентинович</b></td>
                                <td>
                                    <p>27.06.2024</p>
                                    <p>25.07.2024</p>
                                    <p>29.08.2024</p>
                                    <p>26.09.2024</p>
                                    <p>24.10.2024</p>
                                    <p>21.11.2024</p>
                                    <p>26.12.2024</p>
                                </td>
                                <td>08.00 -
                                    12.00</td>
                            </tr>
                            </tbody>
                        </Table>
                        <br/>
                        <br/>
                        <h3>График проведения «прямых телефонных линий» руководством ОАО «Управление СтройМеханизации» </h3>

                        <Table>
                            <thead>
                            <tr>
                                <th><p className="text-white p-3 mb-2 bg-danger">Должность </p></th>
                                <th><p className="text-white p-3 mb-2 bg-danger">ФИО </p></th>
                                <th><p className="text-white p-3 mb-2 bg-danger">День</p></th>
                                <th><p className="text-white p-3 mb-2 bg-danger">Время</p></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Директор</td>
                                <td><b>Савченко Григорий Алексеевич телефон <u>+375 33 357 04 35</u></b></td>
                                <td>
                                    <p>22.06.2024</p>
                                    <p>20.07.2024</p>
                                    <p>24.08.2024</p>
                                    <p>21.09.2024</p>
                                    <p>19.10.2024</p>
                                    <p>23.11.2024</p>
                                    <p>21.12.2024</p>
                                </td>
                                <td>16.00 -
                                    20.00
                                </td>
                            </tr>

                            </tbody>
                        </Table>
                    </Col>
                    <Col md={1}></Col>
                    <Col md={3}>
                        <Row>
                            <p className="text-white p-3 mb-2 bg-danger"><h2><Link to="/contacts">Телефонный справочник</Link></h2></p>
                        </Row>
                    </Col>
                </Row>
            </Container>


            <FooterComponent/>
        </>
    );
}

export default PrivateQuestion;