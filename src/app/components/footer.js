"use client";
import "../css/footer.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import SectionTitle from "../components/title";

export default function Footer() {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    function Track({ title, link, children }) {
        return (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="track-item" data-aos="fade-in">
                {children}
                <h1 className="track-title">{title}</h1>
            </div>
          </a>
        );
    }

    return (
        <div className="footer-page">
            <div className="footer-content" data-aos="fade-in">
                <div className="tracks flex"> {/* adjusted the className styling for centering on mobile for tracks */}
                    <Track title="TWITTER" link="https://x.com/darsh623">
                        <img src="/twitter.png" alt="twitter-png" className="track-image"/>
                    </Track>
                    <Track title="INSTAGRAM" link="https://www.instagram.com/darsh._.p">
                        <img src="/instagram.png" alt="insta-png" className="track-image"/>
                    </Track>
                    <Track title="GITHUB" link="https://github.com/darshp623/react-intro-ws">
                        <img src="/github.PNG" alt="github-png" className="track-image"/>
                    </Track>
                </div>
                <div className="footer-info">
                    <p>&copy; 2024 [insert name]. All Rights Reserved.</p>
                    <p className="mt-2">
                      <a href="#" className="footer-link">Privacy Policy</a> |
                      <a href="#" className="footer-link">Terms of Service</a> |
                      <a href="mailto:dpatel37@umbc.edu" className="footer-link">Contact Me</a>
                    </p>
                </div>
            </div>
        </div>
    )
};
