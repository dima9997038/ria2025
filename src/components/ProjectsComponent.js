import React from 'react';
import granitImg from '../img/projects/Granit.jpg'
import kolcova from '../img/projects/kolcova.jpg'
import naftan from '../img/projects/naftan.jpg'
import viljamsa from '../img/projects/viljamsa.jpg'
import railsLida from '../img/projects/railsLida.jpg'
import zavodRails from '../img/projects/zavodRails.jpg'
import minskEnergo from '..//img/projects/minskEnergo.jpg'
import fokLuchina from '..//img/projects/fokLuchina.jpg'
import droblenie from '../img/projects/droblenie.jpg'

function ProjectsComponent(props) {
    return (
        <section id="projects" className="projects">
            <div className="container" data-aos="fade-up">

                <div className="section-header">
                    <h2>Наши объекты</h2>
                    <p>Возведение и реконструкция объектов</p>
                </div>

                <div className="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry"
                     data-portfolio-sort="original-order">
                    <div className="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">

                        <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
                            <div className="portfolio-content h-100">
                                <img src={granitImg} className="img-fluid" alt=""/>
                                    <div className="portfolio-info">
                                        <h4>Возведение автодороги</h4>
                                        <p>РУП "Гранит"</p>
                                        <a href={granitImg} title="РУП Гранит"
                                           data-gallery="portfolio-gallery-remodeling"
                                           className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                        <a href="project-details.html" title="Подробнее" className="details-link"><i
                                            className="bi bi-link-45deg"></i></a>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
                            <div className="portfolio-content h-100">
                                <img src={kolcova} className="img-fluid" alt=""/>
                                    <div className="portfolio-info">
                                        <h4>Жилой комплекс</h4>
                                        <p>ул.Кольцова, г.Минск</p>
                                        <a href={kolcova} title="ул.Кольцова"
                                           data-gallery="portfolio-gallery-construction"
                                           className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                        <a href="project-details.html" title="Подробнее" className="details-link"><i
                                            className="bi bi-link-45deg"></i></a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
                            <div className="portfolio-content h-100">
                                <img src={naftan} className="img-fluid" alt=""/>
                                    <div className="portfolio-info">
                                        <h4>Реконструкция</h4>
                                        <p>ОАО Нафтан</p>
                                        <a href={naftan} title="Нафтан"
                                           data-gallery="portfolio-gallery-repairs"
                                           className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                        <a href="project-details.html" title="Подробнее" className="details-link"><i
                                            className="bi bi-link-45deg"></i></a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-design">
                            <div className="portfolio-content h-100">
                                <img src={viljamsa} className="img-fluid" alt=""/>
                                    <div className="portfolio-info">
                                        <h4>Снос объекта</h4>
                                        <p>ул.Вильямса</p>
                                        <a href={viljamsa} title="ул.Вильямса"
                                           data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i
                                            className="bi bi-zoom-in"></i></a>
                                        <a href="project-details.html" title="Подробнее" className="details-link"><i
                                            className="bi bi-link-45deg"></i></a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
                            <div className="portfolio-content h-100">
                                <img src={railsLida} className="img-fluid" alt=""/>
                                    <div className="portfolio-info">
                                        <h4>Реконструкция железнодорожного пути</h4>
                                        <p>Лида Гроднооблгаз</p>
                                        <a href={railsLida} title="Лида ЖД"
                                           data-gallery="portfolio-gallery-remodeling"
                                           className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                        <a href="project-details.html" title="Подробнее" className="details-link"><i
                                            className="bi bi-link-45deg"></i></a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
                            <div className="portfolio-content h-100">
                                <img src={zavodRails} className="img-fluid" alt=""/>
                                    <div className="portfolio-info">
                                        <h4>Реконструкция железнодорожного пути</h4>
                                        <p>Завод эффективных промышленных конструкций</p>
                                        <a href={zavodRails} title="ЗЭПК"
                                           data-gallery="portfolio-gallery-construction"
                                           className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                        <a href="project-details.html" title="Подробнее" className="details-link"><i
                                            className="bi bi-link-45deg"></i></a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
                            <div className="portfolio-content h-100">
                                <img src={minskEnergo} className="img-fluid" alt=""/>
                                    <div className="portfolio-info">
                                        <h4>Строительство АБК</h4>
                                        <p>ТЭЦ-2 Минскэнерго</p>
                                        <a href={minskEnergo} title="ТЭЦ-2"
                                           data-gallery="portfolio-gallery-repairs"
                                           className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                        <a href="project-details.html" title="Подробнее" className="details-link"><i
                                            className="bi bi-link-45deg"></i></a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-design">
                            <div className="portfolio-content h-100">
                                <img src={fokLuchina} className="img-fluid" alt=""/>
                                    <div className="portfolio-info">
                                        <h4>ФОК</h4>
                                        <p>ул.Лучины</p>
                                        <a href={fokLuchina} title="ФОК"
                                           data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i
                                            className="bi bi-zoom-in"></i></a>
                                        <a href="project-details.html" title="Подробнее" className="details-link"><i
                                            className="bi bi-link-45deg"></i></a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
                            <div className="portfolio-content h-100">
                                <img src={droblenie} className="img-fluid" alt=""/>
                                    <div className="portfolio-info">
                                        <h4>Снос объета</h4>
                                        <p>Дробление бетона</p>
                                        <a href={droblenie} title="СЧнос"
                                           data-gallery="portfolio-gallery-remodeling"
                                           className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                        <a href="project-details.html" title="Подробнее" className="details-link"><i
                                            className="bi bi-link-45deg"></i></a>
                                    </div>
                            </div>
                        </div>
                        {/*<div className="col-lg-4 col-md-6 portfolio-item filter-construction">*/}
                        {/*    <div className="portfolio-content h-100">*/}
                        {/*        <img src={constructionImg2} className="img-fluid" alt=""/>*/}
                        {/*            <div className="portfolio-info">*/}
                        {/*                <h4>Construction 3</h4>*/}
                        {/*                <p>Lorem ipsum, dolor sit amet consectetur</p>*/}
                        {/*                <a href="assets/img/projects/construction-3.jpg" title="Construction 3"*/}
                        {/*                   data-gallery="portfolio-gallery-construction"*/}
                        {/*                   className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>*/}
                        {/*                <a href="project-details.html" title="More Details" className="details-link"><i*/}
                        {/*                    className="bi bi-link-45deg"></i></a>*/}
                        {/*            </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-lg-4 col-md-6 portfolio-item filter-repairs">*/}
                        {/*    <div className="portfolio-content h-100">*/}
                        {/*        <img src={repairsImg3} className="img-fluid" alt=""/>*/}
                        {/*            <div className="portfolio-info">*/}
                        {/*                <h4>Repairs 3</h4>*/}
                        {/*                <p>Lorem ipsum, dolor sit amet consectetur</p>*/}
                        {/*                <a href="assets/img/projects/repairs-3.jpg" title="Repairs 2"*/}
                        {/*                   data-gallery="portfolio-gallery-repairs"*/}
                        {/*                   className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>*/}
                        {/*                <a href="project-details.html" title="More Details" className="details-link"><i*/}
                        {/*                    className="bi bi-link-45deg"></i></a>*/}
                        {/*            </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-lg-4 col-md-6 portfolio-item filter-design">*/}
                        {/*    <div className="portfolio-content h-100">*/}
                        {/*        <img src={designImg3} className="img-fluid" alt=""/>*/}
                        {/*            <div className="portfolio-info">*/}
                        {/*                <h4>Design 3</h4>*/}
                        {/*                <p>Lorem ipsum, dolor sit amet consectetur</p>*/}
                        {/*                <a href="assets/img/projects/design-3.jpg" title="Repairs 3"*/}
                        {/*                   data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i*/}
                        {/*                    className="bi bi-zoom-in"></i></a>*/}
                        {/*                <a href="project-details.html" title="More Details" className="details-link"><i*/}
                        {/*                    className="bi bi-link-45deg"></i></a>*/}
                        {/*            </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                    </div>
                </div>

            </div>
        </section>

);
}

export default ProjectsComponent;