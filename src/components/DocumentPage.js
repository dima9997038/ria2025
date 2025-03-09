import React from 'react';
import { Col, Container, Image, Row} from "react-bootstrap";
import registration from '../img/docs/registration.jpg'
import kama from '../img/docs/sertificat-kama.jpg'
import declaration from '..//img/docs/declaration.jpg'
import kamaOffset from '../img/docs/BUMAGA_OFSETNAYa_final.jpg'
import kamaOffsetPuH from '../img/docs/BUMAGA_OFSETNAYa_PUHLAYa_final.jpg'
import LwcUltraBright from '../img/docs/LWC_Ural_Bright.jpg'
import LwcUltraBrightSatin from '../img/docs/LWC_Ural_Bright_Satin_Plus.jpg'
import kamaMel0 from '../img/docs/KAMA_legkomelovannaya-images-0.jpg'
import kamaMel1 from '../img/docs/KAMA_legkomelovannaya-images-1.jpg'
import kamaBright0 from '../img/docs/KAMA_BRIGHT GC1-images-0.jpg'
import kamaBright1 from '../img/docs/KAMA_BRIGHT GC1-images-1.jpg'
import kamaPharma from '../img/docs/KAMA_PHARMA GC 1.jpg'
import kamaProject from '../img/docs/KAMA_PROJECT GC 2.jpg'
import kamaStrong from '../img/docs/KAMA_STRONG GC 2-images-0.jpg'
import kamaStrong1 from '../img/docs/KAMA_STRONG GC 2-images-1.jpg'
import sertKama52 from '../img/docs/sertKama52.jpg'
import letterKama from '../img/docs/letterKama.jpg'
import letterGoszn from '../img/docs/letterGoszn.jpg'
import letterGoszn2 from '../img/docs/letterGoszn2.jpg'
import bdm8 from '../img/docs/bdm8.jpg'
import letterVolga from '../img/docs/letterVolga.jpg'

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
                        <Image src={kamaOffset} height="400"/>
                    </Col>
                    <Col md="auto">
                        <Image src={kamaOffsetPuH} height="400"/>
                    </Col>
                    <Col md="auto">
                        <Image src={LwcUltraBright} height="400"/>
                    </Col>
                    <Col md="auto">
                        <Image src={LwcUltraBrightSatin} height="400"/>
                    </Col>
                    <Col md="auto">
                        <Image src={kamaMel0} height="500"/>
                    </Col>
                    <Col md="auto">
                        <Image src={kamaMel1} height="500"/>
                    </Col>
                    <Col md="auto">
                        <Image src={kamaBright0} height="400"/>
                    </Col>
                    <Col md="auto">
                        <Image src={kamaBright1} height="400"/>
                    </Col>
                    <Col md="auto">
                        <Image src={kamaPharma} height="400"/>
                    </Col>
                    <Col md="auto">
                        <Image src={kamaProject} height="400"/>
                    </Col>
                    <Col md="auto">
                        <Image src={kamaStrong} height="400"/>
                    </Col>
                    <Col md="auto">
                        <Image src={kamaStrong1} height="400"/>
                    </Col>
                    <Col md="auto">
                        <Image src={sertKama52} height="500"/>
                    </Col>
                    <Col md="auto">
                        <Image src={declaration} height="500"/>
                    </Col>
                    <Col md="auto">
                        <Image src={letterKama} height="500"/>
                    </Col>
                    <Col md="auto">
                        <Image src={letterGoszn} height="500"/>
                    </Col>
                    <Col md="auto">
                        <Image src={letterGoszn2} height="500"/>
                    </Col>
                    <Col md="auto">
                        <Image src={bdm8} height="500"/>
                    </Col>
                    <Col md="auto">
                        <Image src={letterVolga} height="500"/>
                    </Col>

                </Row>
            </Container>


        </>
    );
}

export default DocumentPage;