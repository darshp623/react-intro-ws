"use client";
import "../css/home.css";
import { useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="home-page" style={{ background: "radial-gradient(125% 125% at 50% 10%, #000 40%, rgb(0, 155, 227) 100%)",}}>
      <div className="home-container">
        {/* Profile Picture Section */}
        <div className="section__pic-container" data-aos="fade-right">
          <img src="./profile-pic.PNG" alt="Darsh Patel's Profile Picture" />
        </div>
        
        {/* Text Section */}
        <div className="section__text" data-aos="fade-left">
          <p className="section__text__p1 light-mode-text">Hello, I'm</p>
          <h1 className="title">Darsh Patel</h1>
          <p className="section__text__p2 light-mode-text">Computer Science Undergrad</p>

          {/* Button Container */}
          <div className="btn-container">
            <button className="btn btn-color-1" onClick={() => window.open('./assets/resume.pdf')}>
              Download CV
            </button>
            <button className="btn btn-color-2" onClick={() => location.href = './#contact'}>
              Contact Info
            </button>
          </div>

          {/* Social Links */}
          <div id="socials-container">
            <img src="./linkedin.png" alt="LinkedIn" className="icon" onClick={() => window.open('https://www.linkedin.com/in/darshp623/')}/>
            <img src="./github.PNG" alt="GitHub" className="icon" onClick={() => window.open('https://github.com/darshp623/')}/>
          </div>
        </div>
      </div>
    </div>
  );
}

