import React from 'react';

function ServicesComponent(props) {
    return (
        <section id="services" className="services section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-header">
                    <h2>Наши услуги</h2>
                    <p>ОАО «Управление СтройМеханизации» специализируется на выполнении многопрофильных механизированных и строительно-монтажных работ</p>
                </div>

                <div className="row gy-4">

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="service-item  position-relative">
                            <div className="icon">
                                <i className="fa-solid fa-mountain-city"></i>
                            </div>
                            <h3>Возведение сооружений</h3>
                            <p> Возведение сооружений промышленного и гражданского назначения</p>
                            {/*<a href="service-details.html" className="readmore stretched-link">Подробнее <i*/}
                            {/*    className="bi bi-arrow-right"></i></a>*/}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <i className="fa-solid fa-arrow-up-from-ground-water"></i>
                            </div>
                            <h3>Строительство</h3>
                            <p>Строительство зданий и сооружений</p>
                            {/*<a href="service-details.html" className="readmore stretched-link">Подробнее <i*/}
                            {/*    className="bi bi-arrow-right"></i></a>*/}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <i className="fa-solid fa-compass-drafting"></i>
                            </div>
                            <h3>Демонтаж</h3>
                            <p>Демонтаж зданий и сооружений</p>
                            {/*<a href="service-details.html" className="readmore stretched-link">Подробнее <i*/}
                            {/*    className="bi bi-arrow-right"></i></a>*/}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <i className="fa-solid fa-trowel-bricks"></i>
                            </div>
                            <h3>Переработка </h3>
                            <p>Дробление и переработка строительных отходов</p>
                            {/*<a href="service-details.html" className="readmore stretched-link">Подробнее <i*/}
                            {/*    className="bi bi-arrow-right"></i></a>*/}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <i className="fa-solid fa-helmet-safety"></i>
                            </div>
                            <h3>Аренда</h3>
                            <p>Предоставление в аренду строительных машин и механизмов, в том числе грузоподъемной, землеройной и другой техники. сдача в аренду производственных помещений, складов, открытых площадок.</p>
                            {/*<a href="service-details.html" className="readmore stretched-link">Подробнее <i*/}
                            {/*    className="bi bi-arrow-right"></i></a>*/}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <i className="fa-solid fa-arrow-up-from-ground-water"></i>
                            </div>
                            <h3>Услуги автотранспорта</h3>
                            <p>Предоставление услуг автотранспортной техники</p>
                            {/*<a href="service-details.html" className="readmore stretched-link">Подробнее <i*/}
                            {/*    className="bi bi-arrow-right"></i></a>*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesComponent;