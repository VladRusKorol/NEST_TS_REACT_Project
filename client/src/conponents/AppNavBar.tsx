import React, {FC} from 'react';
const AppNavBar  = () => {
    return (
        <div>
            <ul>
                <li><a href="http://localhost:3000">Домашняя страница</a></li>
                <li><a href="http://localhost:3000/cars">Список моделей</a></li>
                <li><a href="http://localhost:3000/listauto">Список автомобилей </a></li>
            </ul>
        </div>
    );
};

export default AppNavBar;