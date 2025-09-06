import React from "react";
import Hero from "./Hero";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Contact from "./Contact";


export default function MainContent() {
    return (
        <>
            <main className="main">
                <Hero />
                <About />
                <Resume />
                <Portfolio />
                <Contact />
            </main>
            
        </>)
}