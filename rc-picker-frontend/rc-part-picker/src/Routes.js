import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "./components/productTrx"
import Home from "./components/Home";
import PartList from "./components/PartList";

// import Profile from "./components/Profile";


function Routers(){

    return (
        <Routes>
            <Route
                exact
                path="/"
                element={
                    <Home/>
                }
            />
            <Route
                exact
                path="/traxxas/all"
                element={
                    <Product/>
                }
            />
            <Route
                exact
                path="/traxxas/parts"
                element={
                    <PartList/>
                }
            />
        </Routes>
    )
}

export default Routers