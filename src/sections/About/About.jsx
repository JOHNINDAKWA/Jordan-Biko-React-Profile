import React from "react";
import AboutImage from "../../assests/biko1.jpg";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Card from "../../components/Card";
import data from "./Data";
import './About.css'

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <img src={AboutImage} alt="About Image" className="about__portrait"/>
        </div>
      
      <div className="about__right">
        <h2>About Me</h2>
        <div className="about__cards">
          {
            data.map(item => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))
          }
        </div>
        <p>
          Building projects my clients love have always been my passion. Being
          in the web development industry for over 3 years and serving more than
          70 happy clients worldwide, I'm always motivated to do more!
        </p>
        <p>
          Hi, my name is Jordan Biko from Nairobi, Kenya. I'm a full-stack web
          developer with a Bachelors degree in Computer Science. My top priority
          is to get your business online the right way, giving you
          industry-standard design and all the functionality you need to operate
          smoothly online. Get in touch today with the details of your project
          let's get started! Check out my resume below!
        </p>
        <a href="/" className="btn primary">Download CV <FaCloudDownloadAlt /></a>
      </div>
      </div>
    </section>
  );
};

export default About;
