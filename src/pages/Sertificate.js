import React from 'react';
import FooterComponent from "../components/FooterComponent";
import { Col, Container, Image, Row} from "react-bootstrap";
import NavBarComponent from "../components/NavBarComponent";
import isoImg from '../img/sertificate/iso.jpg'
import isoEngImg from '../img/sertificate/isoEng.jpg'

function Sertificate(props) {
    return (
        <>

            <NavBarComponent/>
            <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
                <Row>

                    <Col md="auto">
                        <Image src={isoImg} height='500' />
                    </Col>
                    <Col md="auto">
                        <Image src={isoEngImg} height="500"/>
                    </Col>

                </Row>
            </Container>
            <FooterComponent/>


        </>

    );
}

export default Sertificate;