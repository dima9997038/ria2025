import React from 'react';
import NavBarComponent from "../components/NavBarComponent";
import FooterComponent from "../components/FooterComponent";
import {Container, Table} from "react-bootstrap";

function Contact(props) {
    return (
        <>
            <NavBarComponent/>
            <Container className="pt-3 py-2 mb-4">

                <h3>Открытое акционерное общество «Управление СтройМеханизации» </h3>
                <div className="p-3 mb-2 bg-info text-white"><h2>ТЕЛЕФОННЫЙ СПРАВОЧНИК</h2></div>
                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        <th><p className="text-white p-3 mb-2 bg-danger">Должность </p></th>
                        <th><p className="text-white p-3 mb-2 bg-danger">ФИО </p></th>
                        <th><p className="text-white p-3 mb-2 bg-danger">Телефон</p></th>
                        <th><p className="text-white p-3 mb-2 bg-danger">Факс</p></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td colSpan={4}>
                            <p className="text-center"><h3>АППАРАТ УПРАВЛЕНИЯ</h3></p>
                        </td>
                    </tr>
                    <tr>
                        <td>Директор</td>
                        <td><b>Савченко Григорий Алексеевич</b></td>
                        <td>
                            388 05 95
                        </td>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <td>Первый заместитель директора - главный инженер</td>
                        <td><b>Посудевский Владимир Васильевич</b></td>
                        <td>
                            369 24 37
                        </td>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <td>Заместитель директора по экономике и финансам</td>
                        <td><b>Злотник Марина Михайловна</b></td>
                        <td>
                            369-24-32
                        </td>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <td>Заместитель директора</td>
                        <td><b>Климович Юрий Валентинович</b></td>
                        <td>
                            369-24-32
                        </td>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <td>Секретарь</td>
                        <td><b>Куимова Светлана Александровна</b></td>
                        <td>
                            388 05 95
                        </td>
                        <td>
                            270 76 84
                        </td>
                    </tr>
                    <tr>
                        <td>Главный механик</td>
                        <td><b>Сущинский Валентин Викторович</b></td>
                        <td>
                            344-79-55
                        </td>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={4}>
                            <p className="text-center"><h3>БУХГАЛТЕРИЯ</h3></p>
                        </td>
                    </tr>
                    <tr>
                        <td>Главный бухгалтер</td>
                        <td><b>Белобоцкая Марина Антоновна</b>></td>
                        <td>
                            369 24 31
                        </td>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <td>Заместитель главного бухгалтера</td>
                        <td><b>Потомская Ирина Георгиевна</b>></td>
                        <td>
                            388 05 10
                        </td>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <td>Главный специалист по финансовым и
                            инвестиционным вопросам
                        </td>
                        <td><b>Попов Виталий Викторович</b>></td>
                        <td>
                            369 24 30
                        </td>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={4}>
                            <p className="text-center"><h3>АДМИНИСТРАТИВНО-ХОЗЯЙСТВЕННАЯ СЛУЖБА</h3></p>
                        </td>
                    </tr>
                    <tr>
                        <td>Специалист по кадрам</td>
                        <td><b>Баранова Виктория Владимировна</b>></td>
                        <td>
                            369 24 35
                        </td>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={4}>
                            <p className="text-center"><h3>ПЛАНОВО-ЭКОНОМИЧЕСКИЙ ОТДЕЛ</h3></p>
                        </td>
                    </tr>
                    <tr>
                        <td>Начальник отдела</td>
                        <td><b>Ивашко Екатерина Григорьевна</b>></td>
                        <td>
                            369 24 33
                        </td>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={4}>
                            <p className="text-center"><h3>ПРОИЗВОДСТВЕННО-ТЕХНИЧЕСКИЙ ОТДЕЛ</h3></p>
                        </td>
                    </tr>
                    <tr>
                        <td>Начальник отдела</td>
                        <td><b>Дайлидо Василий Валерьянович</b>></td>
                        <td>
                            369 24 34
                        </td>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={4}>
                            <p className="text-center"><h3>МАТЕРИАЛЬНО-ТЕХНИЧЕСКИЙ СЕКТОР</h3></p>
                        </td>
                    </tr>
                    <tr>
                        <td>Начальник сектора</td>
                        <td><b>Грабовский Игорь Анатольевич</b>></td>
                        <td>
                            369 24 30
                        </td>
                        <td>270 76 89
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </Container>
            <FooterComponent/>
        </>
    );
}

export default Contact;