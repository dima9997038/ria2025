import React from 'react';
import logo from '../img/logo/logRia.jpg'; // Укажите путь к вашему логотипу

const AboutPage = () => {
    return (
        <div style={styles.container}>
            {/* Шапка с логотипом */}
            <header style={styles.header}>
                <img src={logo} alt="Логотип ООО «РИАгрупп М»" style={styles.logo}   />
            </header>

            <h1 style={styles.heading}>О нас</h1>
            <p style={styles.paragraph}>
                Компания <span style={styles.highlight}>ООО «РИАгрупп М»</span> — одна из структур холдинга «РИА», которая успешно ведет оптовую торговлю различными видами бумажной продукции и картонов. Мы являемся официальными торговыми представителями (дистрибьюторами) нескольких крупнейших российских целлюлозно-бумажных комбинатов.
            </p>

            <h2 style={styles.subHeading}>Наша продукция</h2>
            <p style={styles.paragraph}>Мы поставляем широкий ассортимент бумажной продукции, включая:</p>
            <ul style={styles.list}>
                <li>Газетные, офсетные, мелованные и упаковочные бумаги;</li>
                <li>Мелованные картоны;</li>
                <li>Офисные товары: офисная листовая бумага, рулоны для принтеров, термобумага для факса, блоки для записей, потребительская бумага и канцелярские товары.</li>
            </ul>
            <p style={styles.paragraph}>Вся продукция доступна как в рулонах, так и в нарезанном формате, исходя из потребностей наших клиентов.</p>

            <h2 style={styles.subHeading}>Наши партнёры</h2>
            <p style={styles.paragraph}>Мы сотрудничаем с ведущими производителями бумажной продукции, такими как:</p>
            <ul style={styles.list}>
                <li>АО "ГОЗНАК" РФ (филиал Краснокамская бумажная фабрика) — поставщик жиростойких и влагопрочных бумаг;</li>
                <li>ООО "КАМА" — производитель мелованных картонов серий GC1, GC2, UC1 и других.</li>
            </ul>
            <p style={styles.paragraph}>
                Подробнее о продукции ООО "КАМА" вы можете узнать на их официальном сайте:{" "}
                <a href="https://cbk-kama.com/" target="_blank" rel="noopener noreferrer" style={styles.link}>
                    cbk-kama.com
                </a>.
            </p>

            <h2 style={styles.subHeading}>Наши преимущества</h2>
            <ul style={styles.list}>
                <li>Широкий ассортимент продукции в наличии на складе в г. Минске;</li>
                <li>Оперативная доставка и индивидуальный подход к каждому клиенту;</li>
                <li>Долгосрочные партнёрские отношения и гибкие условия сотрудничества.</li>
            </ul>

            <h2 style={styles.subHeading}>Наш девиз</h2>
            <p style={styles.paragraph}>
                <span style={styles.highlight}>«К УСПЕХУ С НАДЕЖНЫМИ ПАРТНЕРАМИ»</span> — это не просто слова, а принцип нашей работы. Мы всегда готовы идти навстречу пожеланиям наших клиентов и предлагать решения, которые помогут им достичь успеха.
            </p>


        </div>
    );
};

const styles = {
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
        color: '#333',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
    },
    logo: {
        height: '100px', // Настройте высоту логотипа
        marginRight: '100px',
    },
    heading: {
        textAlign: 'center',
        color: '#32CD32',
        marginBottom: '20px',
    },
    subHeading: {
        color: '#FFD700',
        marginTop: '30px',
        marginBottom: '15px',
    },
    paragraph: {
        marginBottom: '15px',
    },
    list: {
        listStyleType: 'disc',
        marginLeft: '20px',
        marginBottom: '15px',
    },
    highlight: {
        fontWeight: 'bold',
        color: '#32CD32',
    },
    contactInfo: {
        backgroundColor: '#e6f2ff',
        padding: '15px',
        borderRadius: '5px',
        marginTop: '20px',
    },
    link: {
        color: '#004080',
        textDecoration: 'none',
    },
};

export default AboutPage;