import React, {FC} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CarsPage from "../pages/CarsPage";
import ListAutoPage from "../pages/ListAutoPage";
import HomePage from "../pages/HomePage";
import AppNavBar from "./AppNavBar";

const AppBrowser = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path={'/'}            element={<HomePage/>} />
                    <Route path={'/cars'}        element={<CarsPage/>} />
                    <Route path={'/listauto'}   element={<ListAutoPage/>}/>
                </Routes>
        </BrowserRouter>
    );
};

export default AppBrowser;