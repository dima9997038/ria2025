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
                <li className="news-item">
                    Hовые поступления картона PHARMA на склад в г.Минске – расширена гамма размеров и плотностей.
                </li>
                <li className="news-item">
                    ООО «РИАгрупп М» возвращается к приему и выполнению полиграфиических заказов – на старте всегда скидки – обращайтесь через новый сайт компании.
                </li>
                <li className="news-item">
                    Пополнение склада ООО «РИАгрупп М» в Минске широкой гаммой картонов ООО «КАМА» - по массе кВ. метра, а так же по  форматам. ВСЕ – ЗАВОДСКАЯ РЕЗКА.
                </li>
                <li className="news-item">
                    Процесс изготовления и поставки клиентам полиграфических заказов на своей бумаге – ПОШЕЛ. Надеемся на значительное увеличение их в ближайшее время.
                </li>
            </ul>
        </div>
    );
}

export default NewsPage;