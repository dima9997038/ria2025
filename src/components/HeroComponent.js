import React from 'react';
import background1 from "../img/hero-carousel/hero-carousel-1.jpg";
import background6 from "../img/hero-carousel/hero-carousel-6.jpg";
import background7 from "../img/hero-carousel/hero-carousel-7.jpg";
import background8 from "../img/hero-carousel/hero-carousel-8.jpg";
import background9 from "../img/hero-carousel/hero-carousel-9.jpg";

function HeroComponent(props) {
    return (
        <section id="hero" className="hero">

            <div className="info d-flex align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h2 data-aos="fade-down">ОАО «Управление <span>СтройМеханизации</span>»</h2>
                            <p data-aos="fade-up"><h2>Мы строим Ваше будущее</h2></p>
                            <a data-aos="fade-up" data-aos-delay="200" href="#projects"
                               className="btn-get-started">Вперед с нами</a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">

                <div className="carousel-item active" style={{backgroundImage: `url(${background1})`}}></div>
                <div className="carousel-item" style={{backgroundImage: `url(${background6})`}}></div>
                <div className="carousel-item" style={{backgroundImage: `url(${background7})`}}></div>
                <div className="carousel-item" style={{backgroundImage: `url(${background8})`}}></div>
                <div className="carousel-item" style={{backgroundImage: `url(${background9})`}}></div>

                <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                </a>

                <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                </a>

            </div>

        </section>
    );
}

export default HeroComponent;