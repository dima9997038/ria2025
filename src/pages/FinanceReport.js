import React from 'react';
import NavBarComponent from "../components/NavBarComponent";
import FooterComponent from "../components/FooterComponent";
import {Button, Col, Row, Table} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function FinanceReport(props) {
    const  navigate=useNavigate()

    function getAudit2023() {
        navigate("/audit2023")
    }
    function getAudit2019() {
        navigate("/audit2019")
    }
    function getAudit2022() {
        navigate("/audit2022")
    }
    function getAudit2020() {
        navigate("/audit2020")
    }
    function report2021() {
        navigate("/report2021")
    }

    return (
        <>
            <NavBarComponent/>

            <Row>

                <Col sm={2}>
                </Col>
                <Col sm={1}></Col>
                <Col sm={7}>
                    <h2 style={{color: "blue"}}>Финансовая документация</h2>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Название документа</th>
                            <th>Год</th>
                            <th>Просмотреть</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Аудиторское заключение</td>
                            <td>2023</td>
                            <td><Button variant="link" className="me-3" onClick={getAudit2023} >Заключение</Button></td>
                        </tr>
                        <tr>
                            <td>Аудиторское заключение</td>
                            <td>2022</td>
                            <td><Button variant="link" className="me-3"onClick={getAudit2022} >Заключение</Button></td>
                        </tr>
                        <tr>
                            <td>Аудиторское заключение</td>
                            <td>2020</td>
                            <td><Button variant="link" className="me-3" onClick={getAudit2020}>Заключение</Button></td>
                        </tr>
                        <tr>
                            <td>Аудиторское заключение</td>
                            <td>2019</td>
                            <td><Button variant="link" className="me-3" onClick={getAudit2019}>Заключение</Button></td>
                        </tr>
                        <tr>
                            <td>Годовой отчет</td>
                            <td>2021</td>
                            <td><Button variant="link" className="me-3" onClick={report2021} >Отчет</Button></td>
                        </tr>

                        </tbody>
                    </Table>


                </Col>
            </Row>

            <FooterComponent/>
        </>
    );
}

export default FinanceReport;