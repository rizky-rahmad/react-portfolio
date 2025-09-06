import React from "react";

export default function Footer() {

    const date = new Date();
    const year = date.getFullYear();
    return (
        <>
            <footer id="footer" className="footer accent-background">
                <div className="container">
                    <div className="copyright text-center ">
                        <p>© <span>Copyright 2019 - {year}</span> <strong className="px-1 sitename">Rahmad
                            Rizki</strong> <span>All Rights Reserved</span></p>
                    </div>
                    <div className="social-links d-flex justify-content-center">
                        <a href="https://www.instagram.com/rrizki912/" target="_blank" aria-label="Instagram"><i
                            className="bi bi-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/rahmad-rizki-1728a6186/" target="_blank" aria-label="LinkedIn"><i
                            className="bi bi-linkedin"></i></a>
                    </div>
                    <div className="credits">
                        Designed by Rahmad Rizki
                    </div>
                </div>
            </footer>

            <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"
                aria-label="Scroll to top"><i className="bi bi-arrow-up-short"></i></a>

            <div id="preloader"></div>

        
        </>
    )
}