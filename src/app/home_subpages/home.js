"use client";
import Image from "next/image";
import "../css/home.css";
import { useEffect, useState } from "react";
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

  const [isMobile, setIsMobile] = useState(true);

  // handle resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for resize events
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="home-page">
      <div
        className="home-container"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #000 40%, #fff 100%)",
        }}
      >
      </div>
    </div>
  );
}
