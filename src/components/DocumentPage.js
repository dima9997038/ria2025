import React from 'react';
import { Col, Container, Image, Row} from "react-bootstrap";
import registration from '../img/docs/registration.jpg'
import kama from '..//img/docs/sertificat-kama.jpg'
import kama2 from '..//img/docs/kama2.jpg'
import kama3 from '..//img/docs/kama3.jpg'
import gosgnak_trust from '..//img/docs/gosgnak-trust.jpg'
import declaration from '..//img/docs/declaration.jpg'
import sertificat from '..//img/docs/sertificat.jpg'
import kind from '..//img/docs/kind.jpg'
import kondopoga from '..//img/docs/kondopoga.jpg'
import letterGosznak from '..//img/docs/letterGosznak.jpg'

function DocumentPage(props) {
    return (
        <>


            <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
                <Row>

                    <Col md="auto">
                        <Image src={registration} height='500' />
                    </Col>
                    <Col md="auto">
                        <Image src={kama} height="500"/>
                    </Col>
                    <Col md="auto">
                        <Image src={gosgnak_trust} height="500"/>
                    </Col>
                    <Col md="auto">
                        <Image src={kama2} height="500"/>
                    </Col>
                    <Col md="auto">
                        <Image src={kama3} height="500"/>
                    </Col>
                    <Col md="auto">
                        <Image src={declaration} height="500"/>
                    </Col>
                    <Col md="auto">
                        <Image src={sertificat} height="500"/>
                    </Col>
                    <Col md="auto">
                        <Image src={kind} height="500"/>
                    </Col>
                    <Col md="auto">
                        <Image src={kondopoga} height="500"/>
                    </Col>
                    <Col md="auto">
                        <Image src={letterGosznak} height="500"/>
                    </Col>
                </Row>
            </Container>


        </>
    );
}

export default DocumentPage;