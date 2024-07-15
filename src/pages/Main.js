// Main page
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";

// CSS
import '../css/Main.css';

function Main(){
    useEffect(() => {
        const loginCss = document.createElement('link');
        loginCss.rel = 'stylesheet';
        loginCss.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';

        document.head.appendChild(loginCss);

        return () => {
            document.head.removeChild(loginCss);
        }
    }, []);

    return(
        <div>
            <Header />
            <h1>Welcome Innolinc UI</h1>
            <Footer />
        </div>
    )
}

export default Main;