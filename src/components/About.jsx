import React from "react";


function About() {
    return (
        <>
            <section id="about" className="about section">
                <div className="container" 
                data-aos="fade-up" data-aos-delay="100"
                >
                    <div className="row gy-4">
                        <div className="col-md-6">
                            <div className="row justify-content-between gy-4">
                                <div className="col-lg-5">
                                    <img src="assets/img/profile-img.webp" className="img-fluid" loading="lazy" decoding="async"
                                        alt="Profile picture of Rahmad Rizki" style={{width: '200px'}}/>
                                </div>
                                <div className="col-lg-7 about-info">
                                    <p><strong>Name: </strong> <span>Rahmad Rizki</span></p>
                                    <p><strong>Address: </strong><span>Central Jakarta, Jakarta, Indonesia</span></p>
                                    <p><strong>Profile: </strong> <span>Full Stack Developer</span></p>
                                    <p><strong>Email: </strong> <span>rizky.business7@gmail.com</span></p>
                                    <p><strong>Phone: </strong> <span>(+62) 823-65434655</span></p>
                                </div>
                            </div>
                            <div className="skills-content skills-animation">
                                <h5>Key Skills</h5>
                                <ul>
                                    <li><strong>Front-End:</strong> HTML5, CSS3, Bootstrap, JavaScript (ES6), jQuery, DOM Manipulation, EJS
                                    </li>
                                    <li><strong>Back-End:</strong> Node.js, Express.js, RESTful APIs</li>
                                    <li><strong>Databases:</strong> PostgreSQL</li>
                                    <li><strong>Tools & Technologies:</strong> Git, GitHub, Command Line, NPM</li>
                                    <li><strong>Design & Others:</strong> UI/UX Design, Graphic Design, Adobe Creative Suite (Photoshop,
                                        Illustrator), Figma, WordPress</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-me">
                                <h4>About me</h4>
                                <p>
                                    A highly-motivated and detail-oriented Full-Stack Web Developer with a strong foundation in both
                                    front-end and back-end technologies, including HTML, CSS, JavaScript (ES6), Node.js, and PostgreSQL.
                                    Proven ability to build and deploy functional, user-centric web applications. Combines comprehensive
                                    training from a rigorous full-stack bootcamp with experience in building dynamic web applications. Eager
                                    to apply newly acquired back-end skills to create robust and scalable web solutions while collaborating
                                    effectively in a team environment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;