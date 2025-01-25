import React from 'react';

function ServicesComponent(props) {
    return (
        <section id="services" className="services section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-header">
                    <h2>Наш комплекс услуг</h2>
                    <p><h4>РИАгруппМ надежный и проверенный партнер на рынке бумаги и картона</h4> </p>
                </div>

                <div className="row gy-4">

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="service-item  position-relative">
                            <div className="icon">
                                <i className="fa-solid fa-car-side"></i>
                            </div>
                            <h3>Доставка</h3>
                            <p> Доставка оптовым покупателям</p>
                            {/*<a href="service-details.html" className="readmore stretched-link">Подробнее <i*/}
                            {/*    className="bi bi-arrow-right"></i></a>*/}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <i className="fa-solid fa-handshake"></i>
                            </div>
                            <h3>Персональный подход</h3>
                            <p>Подберем вам самое выгодное предложение </p>
                            {/*<a href="service-details.html" className="readmore stretched-link">Подробнее <i*/}
                            {/*    className="bi bi-arrow-right"></i></a>*/}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <i className="fa-solid fa-heart"></i>
                            </div>
                            <h3>Доверие</h3>
                            <p>Добросовестно выполняем свои обязательства</p>
                            {/*<a href="service-details.html" className="readmore stretched-link">Подробнее <i*/}
                            {/*    className="bi bi-arrow-right"></i></a>*/}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <i className="fa-solid fa-phone-alt"></i>
                            </div>
                            <h3>Коммуникацмм </h3>
                            <p>Всегда на связи</p>
                            {/*<a href="service-details.html" className="readmore stretched-link">Подробнее <i*/}
                            {/*    className="bi bi-arrow-right"></i></a>*/}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <i className="fa-solid fa-helmet-safety"></i>
                            </div>
                            <h3>Гарантия поставок</h3>
                            <p>Прямые связи с производителем</p>
                            {/*<a href="service-details.html" className="readmore stretched-link">Подробнее <i*/}
                            {/*    className="bi bi-arrow-right"></i></a>*/}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <i className="fa-solid fa-arrow-up-from-ground-water"></i>
                            </div>
                            <h3>Долгосрочное сотрудничество</h3>
                            <p>Поставляем бумагу и картон с 1993 года</p>
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