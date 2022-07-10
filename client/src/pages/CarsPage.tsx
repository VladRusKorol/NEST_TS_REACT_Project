import React, {FC} from 'react';
import CustomStore from 'devextreme/data/custom_store';
import {ICar} from "../types/types";
import axios from "axios";
//import 'devextreme/dist/css/dx.light.css';
import DataGrid, {Column, Editing, Popup, Form} from "devextreme-react/data-grid";
import {Item} from 'devextreme-react/form';
const CarsPage: FC = () => {

    const url: string = 'http://localhost:3001/cars';

    const store = new CustomStore<ICar> ({

        /*Кэширование данных позволяет CustomStore уменьшить количество запросов данных.
        С другой стороны, кэшированные данные и данные в вашем источнике могут не синхронизироваться.
        Если в вашем сценарии важно поддерживать их синхронизацию, отключите кэширование данных,
        задав для свойства cacheRawData значение false.
        В этом случае CustomStore будет отправлять запрос данных при каждом вызове функций load, byKey и totalCount.*/
        cacheRawData: false, // кэширование данных

        /*Указывает функцию, которая выполняется, когда хранилище выдает ошибку. Тип: Функция*/
        errorHandler: (error: Error) => {console.log(error)},

        /*Задает пользовательскую реализацию метода вставки (значения) .*/
        insert(values: ICar): PromiseLike<ICar> {
            //возвразаем фетч fetch() позволяет вам делать запросы указываем URL и потом настройки
            return fetch(url, {
                //Метод отправки данных на сервер
                method: "POST",
                //Метод JSON. stringify() преобразует значение JavaScript в строку JSON,
                // возможно с заменой значений, если указана функция замены,
                // или с включением только определённых свойств, если указан массив замены
                body: JSON.stringify(values),
                //Content-type: application/json; charset=utf-8 обозначает содержимое,
                // которое должно быть в формате JSON, закодированное в кодировке символов UTF-8.
                // Назначение кодировки несколько избыточно для JSON, поскольку кодировка по умолчанию (только?)
                // Для JSON - это UTF-8. Таким образом, в этом случае получающий сервер, по-видимому, счастлив, зная,
                // что он имеет дело с JSON и предполагает, что кодировка UTF-8 по умолчанию, почему он работает
                // с заголовком или без него.
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then();//в случае ошибки выбрасываем функцию обработки ошибки
        },

        //Ключом задаем id объета
        key: "id",

        /// пользовательская реализация функции загрузки данных
        load: function() {
            return axios.get<ICar>(url);
        },

        /*Укажите это свойство в зависимости от поведения, которое вы реализовали для функции
        загрузки. Если эта функция отправляет свойства формирования данных на сервер и извлекает
        обработанные данные, тогда loadMode должен быть «обработан».
        Если функция загрузки просто получает необработанные необработанные данные с сервера,
        установите для loadMode значение «raw». В этом случае необработанные данные будут обрабатываться
        на клиенте автоматически.*/
        loadMode: 'processed',


        /*Функция, которая выполняется после добавления элемента данных в хранилище.*/
        /*
        onInserted(values: ICar, key: number): void {
            console.log('Данные успешно добавлены')
        },
        */
        /*Функция, которая выполняется перед добавлением элемента данных в хранилище.*/
        /*
        onInserting(values: ICar): void {
            console.log('Пытаемся добавить данные')
        },


        onLoaded(result: Array<ICar>, loadOptions: LoadOptions<ICar>): void {
            console.log('onLoaded')
        },
        */

        /*
                onLoading(loadOptions: LoadOptions<ICar>): void {
                },
                onModified(p0) {
                },
                onModifying(p0) {
                },
                onPush(changes: Array<ICar>): void {
                },
                onRemoved(key: any): void {
                },
                onRemoving(key: any): void {
                },
                onUpdated(key: any, values: ICar): void {
                },
                onUpdating(key: any, values: ICar): void {
                },
                    */

        /*Удаляет элемент данных с определенным ключом из хранилища.*/
        remove: function (id: any): PromiseLike<void> {
            console.log("id")
            console.log(id)
            return fetch(url, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({Id: id}),
            })
                .then(res => res.text()) // or res.json()
                .then(res => console.log(res))
        },

        /*
        totalCount(loadOptions: { filter?: FilterDescriptor | Array<FilterDescriptor>; group?: GroupDescriptor<ICar> | Array<GroupDescriptor<ICar>> }): PromiseLike<number> {
            return Promise.resolve(0);
        },


        update(key: any, values: ICar): PromiseLike<any> {
            return Promise.resolve(undefined);
        },
            */

        useDefaultSearch: false,

    })

    /*
    const dataSource= createStore ({
        key: 'id',
        loadUrl: url,
        insertUrl: url,
        updateUrl: url,
        deleteUrl: url
    });
*/



    return (
        <div>
            <br/> <h1> Работа с моделями</h1><br/>
        <DataGrid
            style={{fontSize: "20px", background: "rgba(30,162,164,0.5)", font: "20px Times New Roman", color:"black"}}
            dataSource={store}
            keyExpr="id"
            allowColumnResizing = {true}
            allowColumnReordering={true}>
            <Column dataField="id" caption='ID' width="50"/>
            <Column dataField="name" caption="Полное название модели" width="450"/>
            <Column dataField="vin" caption="VIN номер автомобиля" width="350"/>

            <Editing
                allowAdding={true}
                allowDeleting={true}
                mode="popup">

                <Popup title="Добавление модели авто" showTitle={true} width="750px" height="350px" />
                <Form>
                    <Item itemType="group" colCount={1} colSpan={2}>
                        <Item dataField="name"/>
                        <Item dataField="vin"/>
                    </Item>
                </Form>
            </Editing>



        </DataGrid>
        </div>
    );
};

export default CarsPage;