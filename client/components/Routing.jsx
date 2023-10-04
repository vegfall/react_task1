import React from "react";
import {Route, Routes} from "react-router-dom";
import FrontPage from "./FrontPage";
import QuizPage from "./QuizPage";

export default function Routing() {
    return <Routes>
        <Route path={"/"} element={<FrontPage />}></Route>
        <Route path={"/quiz"} element={<QuizPage />}></Route>
    </Routes>
};