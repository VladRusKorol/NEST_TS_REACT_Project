import React, {FC} from 'react';
import {Item} from "devextreme-react/form";
import Menu from "devextreme-react/menu";

const MenuDevExtreme: FC = () => {

    const onItemClick = (e:any) : void => {

        console.log(`start`)
        if(e.itemData.icon=== "home") window.location.href = 'http://localhost:3000';
        else if(e.itemData.icon=== "car") window.location.href = 'http://localhost:3000/cars';
        else if(e.itemData.icon=== "tableproperties") window.location.href = 'http://localhost:3000/listauto';

    }

    return (
        <Menu
            style={{font: "25px Times New Roman", color:"black"}}
            orientation="vertical" onItemClick={onItemClick}>
            <Item text="Домашняя страница" icon="home"/>
            <Item text="Работа с моделями" icon="car"/>
            <Item text="Работа с гос. номерами" icon="tableproperties"/>
        </Menu>
    );
};

export default MenuDevExtreme;