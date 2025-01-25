import React from 'react';
import constructionImg1 from '..//img/construction/constructions-1.jpg'
import constructionImg2 from '..//img/construction/constructions-2.jpg'
import constructionImg3 from '..//img/construction/constructions-3.jpg'
import constructionImg4 from '..//img/construction/constructions-4.jpg'

function ConstructionsComponent(props) {
    return (
        <section id="constructions" className="constructions">
            <div className="container" data-aos="fade-up">
                <div className="section-header">
                    <h2>Constructions</h2>
                    <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt
                        quis dolorem dolore earum</p>
                </div>
                <div className="row gy-4">
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="card-item">
                            <div className="row">
                                <div className="col-xl-5">
                                    <div className="card-bg"
                                         style={{backgroundImage: `url(${constructionImg1})`}}></div>
                                </div>
                                <div className="col-xl-7 d-flex align-items-center">
                                    <div className="card-body">
                                        <h4 className="card-title">Eligendi omnis sunt veritatis.</h4>
                                        <p>Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem
                                            placeat deleniti adipisci. Cum delectus doloribus non veritatis. Officia
                                            temporibus illo magnam. Dolor eos et.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="card-item">
                            <div className="row">
                                <div className="col-xl-5">
                                    <div className="card-bg"
                                         style={{backgroundImage: `url(${constructionImg2})`}}></div>
                                </div>
                                <div className="col-xl-7 d-flex align-items-center">
                                    <div className="card-body">
                                        <h4 className="card-title">Possimus ut sed velit assumenda</h4>
                                        <p>Sunt deserunt maiores voluptatem autem est rerum perferendis rerum
                                            blanditiis. Est laboriosam qui iste numquam laboriosam voluptatem
                                            architecto. Est laudantium sunt at quas aut hic. Eum dignissimos.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="card-item">
                            <div className="row">
                                <div className="col-xl-5">
                                    <div className="card-bg"
                                         style={{backgroundImage: `url(${constructionImg3})`}}></div>
                                </div>
                                <div className="col-xl-7 d-flex align-items-center">
                                    <div className="card-body">
                                        <h4 className="card-title">Error beatae dolor inventore aut</h4>
                                        <p>Dicta porro nobis. Velit cum in. Nesciunt dignissimos enim molestiae facilis
                                            numquam quae quaerat ipsam omnis. Neque debitis ipsum at architecto officia
                                            laboriosam odit. Ut sunt temporibus nulla culpa.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                        <div className="card-item">
                            <div className="row">
                                <div className="col-xl-5">
                                    <div className="card-bg"
                                         style={{backgroundImage: `url(${constructionImg4})`}}></div>
                                </div>
                                <div className="col-xl-7 d-flex align-items-center">
                                    <div className="card-body">
                                        <h4 className="card-title">Expedita voluptas ut ut nesciunt</h4>
                                        <p>Aut est quidem doloremque voluptatem magnam quis excepturi vero quia. Eum eos
                                            doloremque architecto illo at beatae dolore. Fugiat suscipit et sint ratione
                                            dolores. Aut aliquid ea dolores libero nobis.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default ConstructionsComponent;