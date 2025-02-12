import React from 'react';
import './NewsPage.css'; // Подключаем файл стилей

function NewsPage(props) {
    return (
        <div className="news-container">
            <h1 className="news-title">Новости</h1>
            <ul className="news-list">
                <li className="news-item">
                    Продукцию нашего партнера ООО «КАМА» - картон мелованный Pharma высоко оценили на Федеральном уровне РФ.
                </li>
                <li className="news-item">
                    Очередное пополнение склада ООО «РИАгрупп М» новыми видами бумаг – офсет 45 гр. ООО «КАМА».
                </li>
                <li className="news-item">
                    Новая дисконтная программа для Покупателей по легкомелованным бумагам стартовала с 10-02-2025 г.
                </li>
                <li className="news-item">
                    По итогу 2024 года продукция партнера газетная бумага АО «Волга» включена в номинацию 100 лучших продуктов 2024 года.
                </li>
            </ul>
        </div>
    );
}

export default NewsPage;