import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../components/home/Home";
import UserCad from "../components/userCad/UserCad";
import Services from "../components/service/Service"
import UserLogin from "../components/userLogin/UserLogin"
import About from "../components/info/About"


export default props => (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<UserCad />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/services" element={<Services />} />
        <Route path="/info" element={<About />} />
        <Route path="*" element={<Home />} />
    </ Routes>
);
