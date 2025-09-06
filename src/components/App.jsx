import React, { useEffect } from "react";
import Header from "./Header";
import useBodyClass from "./UseBodyClass";
import NavbarMenu from "./NavbarMenu";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import MainContent from "./MainContent";

function App() {
    useBodyClass('index-page')
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });

        const script = document.createElement("script");
        script.src = "/assets/js/main.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };

    }, []);


    return (
        <>
            <Header />
            <NavbarMenu />
            <MainContent />
            <Footer />
        </>
    )
}

export default App;