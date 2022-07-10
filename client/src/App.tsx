import React from 'react';
import AppBrowser from "./conponents/AppBrowser";
import AppNavBar from "./conponents/AppNavBar";
import MenuDevExtreme from "./conponents/MenuDevExtreme";

const App = () => {


    //<AppNavBar/>
    return (
        <div>
            <MenuDevExtreme/>
            <AppBrowser/>
        </div>
    );
};

export default App;