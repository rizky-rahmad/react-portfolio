import React from "react"

export default function Portfolio() {
    return (
        <>

            <section id="portfolio" className="portfolio section">
                <div className="container section-title" data-aos="fade-up">
                    <h2>Portfolio</h2>
                </div>
                <div className="container">
                    <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
                        <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                            <li data-filter="*" className="filter-active">All</li>
                        </ul>
                        <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-website">
                                <img src="assets/img/portfolio/simongame.webp" className="img-fluid" loading="lazy" decoding="async"
                                    alt="Screenshot of Simon Game project" />
                                <div className="portfolio-info">
                                    <h4>Simon Game JavaScript</h4>
                                    <p>An interactive web-based Simon game that tests memory and concentration. Built with jQuery for
                                        simplified DOM manipulation</p>
                                    <a href="assets/img/portfolio/simongame.webp" data-gallery="portfolio-gallery-app"
                                        className="glightbox preview-link"
                                        title="An interactive web-based Simon game that tests memory and concentration. Built with jQuery for simplified DOM manipulation"><i
                                            className="bi bi-zoom-in"></i></a>
                                    <a href="https://rizky-rahmad.github.io/Simon-Game-JavaScript/" target="_blank" title="More Details"
                                        className="details-link"><i className="bi bi-link-45deg"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-website">
                                <img src="assets/img/portfolio/to-do-list.webp" className="img-fluid" loading="lazy" decoding="async"
                                    alt="Screenshot of To-Do List application project" />
                                <div className="portfolio-info">
                                    <h4>Node.js-To-Do-List</h4>
                                    <p>A full-stack To-Do List application. This project demonstrates CRUD operations (Create, Read, Update,
                                        Delete) using Node.js and Express. It connects to a PostgreSQL database to manage tasks and uses EJS
                                        for the front-end rendering. Key features include adding new tasks, deleting completed tasks, and
                                        editing existing ones.</p>
                                    <a href="assets/img/portfolio/to-do-list.webp" data-gallery="portfolio-gallery-branding"
                                        className="glightbox preview-link"
                                        title="A full-stack To-Do List application with CRUD operations using Node.js, Express, and PostgreSQL."><i
                                            className="bi bi-zoom-in"></i></a>
                                    <a href="https://github.com/rizky-rahmad/Node.js-To-Do-List" target="_blank" title="More Details"
                                        className="details-link"><i className="bi bi-link-45deg"></i></a>
                                </div>
                            </div> <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-website">
                                <img src="assets/img/portfolio/MI 1.webp" className="img-fluid" loading="lazy" decoding="async"
                                    alt="Screenshot of D3 Manajemen Informatika web profile" />
                                <div className="portfolio-info">
                                    <h4>Web Profile</h4>
                                    <p>D3 Manajemen Informatika</p>
                                    <a href="assets/img/portfolio/MI 1.webp" data-gallery="portfolio-gallery-branding"
                                        className="glightbox preview-link"
                                        title="Developing Web Profile for my College Major Office. Built in Drupal Framework and i'm using this as my Final Project"><i
                                            className="bi bi-zoom-in"></i></a>
                                    <a href="assets/img/portfolio/MI 1.webp" target="_blank" title="More Details" className="details-link"><i
                                        className="bi bi-link-45deg"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-website">
                                <img src="assets/img/portfolio/web1.webp" className="img-fluid"
                                    alt="Screenshot of AGC-SCOPUS 2019 conference website" loading="lazy" decoding="async" />
                                <div className="portfolio-info">
                                    <h4>Website AGC-SCOPUS 2019</h4>
                                    <p>AGC-SCOPUS 2019 - The 2nd ACEH GLOBAL CONFERENCE 2019</p>
                                    <a href="assets/img/portfolio/web1.webp" data-gallery="portfolio-gallery-product"
                                        className="glightbox preview-link"
                                        title="Developing a website Profile for an International Event as internship in 2019. Built with WordPress-based"><i
                                            className="bi bi-zoom-in"></i></a>
                                    <a href="https://arsip.agc-scopos.usk.ac.id/" target="_blank" title="More Details"
                                        className="details-link"><i className="bi bi-link-45deg"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}