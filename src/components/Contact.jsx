import React from "react";

export default function Contact() {
    return (
        <>
            <section id="contact" className="contact section">
                <div className="container section-title" data-aos="fade-up">
                    <h2>Contact</h2>
                </div>
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="info-wrap" data-aos="fade-up" data-aos-delay="200">
                        <div className="row gy-5">
                            <div className="col-lg-4">
                                <div className="info-item d-flex align-items-center">
                                    <a href="https://www.google.com/maps/search/?api=1&query=Central+Jakarta,+Indonesia" target="_blank"><i
                                        className="bi bi-geo-alt flex-shrink-0"></i></a>
                                    <div>
                                        <h3>Address</h3>
                                        <p>Central Jakarta, Indonesia</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="info-item d-flex align-items-center">
                                    <a href="https://wa.me/6282365434655" target="_blank"><i className="bi bi-telephone flex-shrink-0"></i></a>
                                    <div>
                                        <h3>Call Me</h3>
                                        <p>+62 823 6543 4655</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="info-item d-flex align-items-center">
                                    <i className="bi bi-envelope flex-shrink-0"></i>
                                    <div>
                                        <h3>Email</h3>
                                        <p>rizky.business7@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}