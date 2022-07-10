import React, {FC} from 'react';

const HomePage:FC = () => {

    return (
        <div>
             <br/>
                <h1 style={{textAlign:"center"}}> Домашная страница</h1>
            <br/>
            <hr/>
            <header>
                <p style={{textIndent: "25px", fontSize: "30px", width:"1250px", textAlign: "justify"}}>
                    Данное приложение было разработано с применением языка программирования TypeScript,
                    базой данных MicroSoft SQL 2018, фреймворка для создания масштабируемых серверных приложений - Nest.js,
                    и библиотекой JavaScript для создания пользовательских интерфейсов - React.js +  обширная коллекция
                    высокопроизводительных и адаптивных компонентов пользовательского интерфейса DevExtreme by DevExpress (Menu, DataGrid, Popup, Form, Lookup, CustomeStore и т.д.).
                </p>
                <p style={{textIndent: "25px", fontSize: "30px", width:"1250px", textAlign: "justify"}}>
                    На странице "Работа с моделями" представлена функциональная таблица для работы с информацией об автомобилях. В качестве функционала реализовано
                    добавление и удаление записей, которые также отражаются в БД. На кнопке добавления записи необходимо заполнить соответствующие поля.
                </p>
                <p style={{textIndent: "25px", fontSize: "30px", width:"1250px", textAlign: "justify"}}>
                На странице "Работа с гос.номерами" представлена функциональная таблица для работы с информацией об автомобилях имеющих государственней регистрационный номер. В качестве функционала реализовано
                добавление и удаление записей, которые также отражаются в БД. Таблица также имеет ссылку на модель автомобиля, из предыдущей таблицы.
                В форме добавление записи в таблицу реализован выпадающий список моделей автомобилей из таблицы "Работа с моделями". При выборе модели и приданию государственного номера,
                    в тублице отображается соотвествующая запись, а в БД заносится запись с соотвествующим id модели.
            </p>
                <footer style={{width: "1250px",	height: "100px",outline: "2px solid #000"}}>
                    P.S. Тут могла бы быть ваша реклама :)
                </footer>

            </header>
        </div>
    );
};

export default HomePage;