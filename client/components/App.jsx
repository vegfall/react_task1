import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Routing from "./Routing";
import {BrowserRouter} from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <header>
                <Header />
            </header>
            <main>
                <Routing />
            </main>
            <footer>
                <Footer />
            </footer>
        </BrowserRouter>
    )
};