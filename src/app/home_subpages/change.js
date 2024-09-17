"use client";

import "../css/change.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import SectionTitle from "../components/title";

export default function Change() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    function Track({ title, desc, children }) {
        return (
            <div className="p-4 flex flex-col items-center w-64 rounded-lg border-transparent
             hover:border-white/20 hover:shadow-lg backdrop-blur-sm cursor-default transition-all duration-300 " data-aos="fade-up">
                {children}
                <h1 className="text-2xl mb-1 uppercase font-extrabold light-mode-text">{title}</h1> {/* Apply class here */}
                <p className="text-center mb-5 font-medium light-mode-text">{desc}</p> {/* Apply class here */}
            </div>
        );
    }

    return (
        <div className="change-page">
            <div className="change-content">
                <div className="change-section-title light-mode-text" data-aos="fade-up"> 
                    <SectionTitle title="CHANGE" />
                </div>
            </div>
        </div>
    );
}
