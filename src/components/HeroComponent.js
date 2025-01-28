import React from 'react';
import background1 from "../img/hero-carousel/library.jpg";
import background6 from "../img/hero-carousel/church.png";
import background7 from "../img/hero-carousel/avenue.png";
import background8 from "../img/hero-carousel/river.png";
import background9 from "../img/hero-carousel/victory.png";

function HeroComponent(props) {
    return (
        <section id="hero" className="hero">

            <div className="info d-flex align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h3 style={{color:"yellow"}} data-aos="fade-down">Официальный торговый представитель в  Беларуси - ООО&nbsp;«КАМА», АО&nbsp;«ГОЗНАК» ЦБК&nbsp;г.Краснокамск, АО&nbsp;«Волга», ЦБК&nbsp;«Кондопога»</h3>
                            <p data-aos="fade-up"><h2>Ваш поставщик бумаги и картона с 1993 года</h2></p>
                            {/*<a data-aos="fade-up" data-aos-delay="200" href="#projects"*/}
                            {/*   className="btn-get-started">Купить сейчас</a>*/}
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