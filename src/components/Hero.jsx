import React from "react";

export default function Hero() {
    return (
        <>
            <section id="hero" className="hero section dark-background">
                <img src="/assets/img/FOTO.webp" alt="Professional portrait of Rahmad Rizki" data-aos="fade-in" />
                    <div className="container d-flex flex-column align-items-center justify-content-center text-center" data-aos="fade-up"
                        data-aos-delay="100">
                        <h2>RAHMAD RIZKI</h2>
                        <p><span className="typed" data-typed-items="FULL STACK DEVELOPER"></span></p>
                    </div>
            </section>
        </>
    )
}
