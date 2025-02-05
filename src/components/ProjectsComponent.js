import React from 'react';
import cartonMel from '../img/projects/bum/carton-mel.jpg'
import packingPaperImg from '../img/projects/bum/packing-paper2.png'
import cartonRoll from '../img/projects/bum/carton-roll.jpg'
import officePaperImg from '../img/projects/bum/paperOffice2.jpg'
import bumGaz from '../img/projects/bum/bum-gaz.jpg'
import lightCoaterPaperImg from '../img/projects/bum/light-coated-paper.png'
import officePaperRollImg from '../img/projects/bum/office-paper-roll.png'
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';

function ProjectsComponent(props) {
    return (
        <section id="projects" className="projects">
            <div className="container" data-aos="fade-up">

                <div className="section-header">
                    <h2>Наш ассортимент</h2>
                    <p>Бумага и картон</p>
                </div>

                <div className="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry"
                     data-portfolio-sort="original-order">
                    <div className="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">

                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <Card border="warning" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:'35rem'}}>

                                <Card.Img variant="top" src={officePaperRollImg} />
                                <div
                                    className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                    style={{ top: "10px", left: "10px" }}
                                >
                                    Бумага
                                </div>
                                <Card.Body >

                                    <Card.Title ><h4>Бумага офсетная в рулонах</h4></Card.Title>
                                    <Card.Text >
                                        Бумага офсетная в рулонах. Офсет производство ООО&nbsp;«КАМА» и АО&nbsp;ГОЗНАК&nbsp;г.Краснокамск
                                    </Card.Text>


                                </Card.Body>
                                <Card.Footer className="bg-transparent border-0">
                                    <Card.Text  >
                                        <p className="text-dark fs-5 fw-bold mb-0">Цена договорная</p>
                                    </Card.Text>
                                    <Link to="/email">
                                        <Button  variant="outline-warning" style={{fontStyle:"italic", fontWeight:'bold', color:"#32CD32"}} className=" rounded-pill px-3"> <i className="fa fa-shopping-bag me-2 "></i>Заказать</Button>
                                    </Link>
                                </Card.Footer>
                            </Card>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <Card border="warning" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:'35rem'}}>

                                <Card.Img variant="top" src={lightCoaterPaperImg} />
                                <div
                                    className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                    style={{ top: "10px", left: "10px" }}
                                >
                                    Бумага
                                </div>
                                <Card.Body >

                                    <Card.Title ><h4>Бумага легко мелованная</h4></Card.Title>
                                    <Card.Text >
                                        Бумага легкая мелованная в рулонах. Производство  ООО&nbsp;"КАМА"
                                    </Card.Text>


                                </Card.Body>
                                <Card.Footer className="bg-transparent border-0">
                                    <Card.Text  >
                                        <p className="text-dark fs-5 fw-bold mb-0">Цена договорная</p>
                                    </Card.Text>
                                    <Link to="/email">
                                        <Button  variant="outline-warning" style={{fontStyle:"italic", fontWeight:'bold', color:"#32CD32"}} className=" rounded-pill px-3"> <i className="fa fa-shopping-bag me-2 "></i>Заказать</Button>
                                    </Link>
                                </Card.Footer>
                            </Card>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <Card border="warning" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:'35rem'}}>

                                <Card.Img variant="top" src={officePaperRollImg} />
                                <div
                                    className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                    style={{ top: "10px", left: "10px" }}
                                >
                                    Бумага
                                </div>
                                <Card.Body >

                                    <Card.Title ><h4>Бумага  <span>супер каландрированная </span></h4></Card.Title>
                                    <Card.Text >
                                        Бумага суперкаландрированная в рулонах. Производство ООО&nbsp;«КАМА»
                                    </Card.Text>


                                </Card.Body>
                                <Card.Footer className="bg-transparent border-0">
                                    <Card.Text  >
                                        <p className="text-dark fs-5 fw-bold mb-0">Цена договорная</p>
                                    </Card.Text>
                                    <Link to="/email">
                                        <Button  variant="outline-warning" style={{fontStyle:"italic", fontWeight:'bold', color:"#32CD32"}} className=" rounded-pill px-3"> <i className="fa fa-shopping-bag me-2 "></i>Заказать</Button>
                                    </Link>
                                </Card.Footer>
                            </Card>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <Card border="warning" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:'35rem'}}>

                                <Card.Img variant="top" src={bumGaz} />
                                <div
                                    className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                    style={{ top: "10px", left: "10px" }}
                                >
                                    Бумага
                                </div>
                                <Card.Body >

                                    <Card.Title ><h4>Бумага газетная</h4></Card.Title>
                                    <Card.Text >
                                        Бумага газетная в рулонах. Производство АО&nbsp;"Волга" и  АО&nbsp;"Кондопожский ЦБК"
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="bg-transparent border-0">
                                    <Card.Text  >
                                        <p className="text-dark fs-5 fw-bold mb-0">Цена договорная</p>
                                    </Card.Text>
                                    <Link to="/email">
                                        <Button  variant="outline-warning" style={{fontStyle:"italic", fontWeight:'bold', color:"#32CD32"}} className=" rounded-pill px-3"> <i className="fa fa-shopping-bag me-2 "></i>Заказать</Button>
                                    </Link>
                                </Card.Footer>
                            </Card>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <Card border="warning" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:'35rem'}}>

                                <Card.Img variant="top" src={officePaperImg} />
                                <div
                                    className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                    style={{ top: "10px", left: "10px" }}
                                >
                                    Бумага
                                </div>
                                <Card.Body >

                                    <Card.Title ><h4>Бумага для офиса</h4></Card.Title>
                                    <Card.Text >
                                        Офисная бумага формат А4 и А3
                                    </Card.Text>


                                </Card.Body>
                                <Card.Footer className="bg-transparent border-0">
                                    <Card.Text  >
                                        <p className="text-dark fs-5 fw-bold mb-0">Цена договорная</p>
                                    </Card.Text>
                                    <Link to="/email">
                                        <Button  variant="outline-warning" style={{fontStyle:"italic", fontWeight:'bold', color:"#32CD32"}} className=" rounded-pill px-3"> <i className="fa fa-shopping-bag me-2 "></i>Заказать</Button>
                                    </Link>
                                </Card.Footer>
                            </Card>

                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <Card border="warning" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:'35rem'}}>

                                <Card.Img variant="top" src={packingPaperImg} />
                                <div
                                    className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                    style={{ top: "10px", left: "10px" }}
                                >
                                    Бумага
                                </div>
                                <Card.Body >

                                    <Card.Title ><h4>Бумага упаковочная</h4></Card.Title>
                                    <Card.Text >
                                        Бумага упаковочная производства АО&nbsp;"ГОЗНАК" ф-л&nbsp;Краснокамская бумажная фабрика
                                    </Card.Text>


                                </Card.Body>
                                <Card.Footer className="bg-transparent border-0">
                                    <Card.Text  >
                                        <p className="text-dark fs-5 fw-bold mb-0">Цена договорная</p>
                                    </Card.Text>
                                    <Link to="/email">
                                        <Button  variant="outline-warning" style={{fontStyle:"italic", fontWeight:'bold', color:"#32CD32"}} className=" rounded-pill px-3"> <i className="fa fa-shopping-bag me-2 "></i>Заказать</Button>
                                    </Link>
                                </Card.Footer>
                            </Card>

                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <Card border="warning" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:'35rem'}}>

                                <Card.Img variant="top" src={cartonRoll} />
                                <div
                                    className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                    style={{ top: "10px", left: "10px" }}
                                >
                                    Картон
                                </div>
                                <Card.Body >

                                    <Card.Title ><h4>Картон мелованный</h4></Card.Title>
                                    <Card.Text >
                                        Мелованные картоны массой от 190 до 350 гр.кв.м. производства ООО&nbsp;"КАМА" и Добрушской бумажной фабрики
                                    </Card.Text>


                                </Card.Body>
                                <Card.Footer className="bg-transparent border-0">
                                    <Card.Text  >
                                        <p className="text-dark fs-5 fw-bold mb-0">Цена договорная</p>
                                    </Card.Text>
                                    <Link to="/email">
                                        <Button  variant="outline-warning" style={{fontStyle:"italic", fontWeight:'bold', color:"#32CD32"}} className=" rounded-pill px-3"> <i className="fa fa-shopping-bag me-2 "></i>Заказать</Button>
                                    </Link>
                                </Card.Footer>
                            </Card>

                        </div>

                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <Card border="warning" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:'35rem'}}>

                                <Card.Img variant="top" src={cartonMel} />
                                <div
                                    className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                    style={{ top: "10px", left: "10px" }}
                                >
                                    Картон
                                </div>
                                <Card.Body >

                                    <Card.Title ><h4>Картон мелованный в листах</h4></Card.Title>
                                    <Card.Text >
                                        Картон мелованный в листах 190-350 гр/кв.м производства ООО&nbsp;"КАМА" и Добрушской бумажной фабрики
                                    </Card.Text>


                                </Card.Body>
                                <Card.Footer className="bg-transparent border-0">
                                    <Card.Text  >
                                        <p className="text-dark fs-5 fw-bold mb-0">Цена договорная</p>
                                    </Card.Text>
                                    <Link to="/email">
                                        <Button  variant="outline-warning" style={{fontStyle:"italic", fontWeight:'bold', color:"#32CD32"}} className=" rounded-pill px-3"> <i className="fa fa-shopping-bag me-2 "></i>Заказать</Button>
                                    </Link>
                                </Card.Footer>
                            </Card>

                        </div>

                    </div>
                </div>

            </div>
        </section>

);
}

export default ProjectsComponent;