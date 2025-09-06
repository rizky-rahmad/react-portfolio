import React from "react";

export default function Resume() {
    return (
        <>
            <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Associate’s Degree</h4>
              <h5>2016 - 2021</h5>
              <p><em>Syiah Kuala University</em></p>
              <ul>
                <li>Graduated with GPA 3.18</li>
                <li>Already have some projects while studying in college</li>
                <li>Active joining College Organisation</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Full-Stack Web Developer Bootcamp</h4>
              <p><em>Udemy</em></p>
              <ul>
                <li>Relevant skills acquired: Advanced JavaScript (ES6), Node.js, Express.js with Node, APIs, Git,
                  GitHub, EJS, and PostgreSQL.</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Website Developer & IT Support</h4>
              <h5>2022 - 2024</h5>
              <p><em>Aceh Besar Prosecutor Office <br /> Aceh Besar District, Aceh Province, Indonesia </em></p>
              <ul>
                <li>Enhanced user experience and site functionality by managing and updating a WordPress-based website,
                  handling all content and maintenance.</li>
                <li>Designed and developed visual content for social media and web platforms, including banners, videos,
                  and infographics.</li>
                <li>Collaborated with teams to develop effective visual branding strategies.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Office Administrator & IT Support</h4>
              <h5>2021</h5>
              <p><em>Data Science & Artificial Intelligence Syiah Kuala University</em></p>
              <ul>
                <li>Streamlined operations by providing efficient IT support to staff and students, resolving technical
                  issues within a 24-hour window.</li>
                <li>Managed administrative tasks and assisted with digital content creation.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Website Developer</h4>
              <h5>2019</h5>
              <p><em>Social And Politics Science Syiah Kuala University</em></p>
              <ul>
                <li>Delivered a seamless user experience for over 100 attendees by designing and managing the official
                  conference website.</li>
                <li>Provided real-time content management and updates throughout the event, ensuring all information was
                  current.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}