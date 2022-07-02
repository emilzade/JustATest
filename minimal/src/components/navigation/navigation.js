import React from "react";

import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Academia from "../../pages/Academia/Academiya";
import Layout from "../../pages/Layout/Layout";

function Navigation(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}></Route>
            <Route path="Academia" element={<Academia/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}
export default Navigation;