import React, { use, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrc = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrc);

    return () => {
      window.removeEventListener("resize", handleVideoSrc);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 });
    gsap.to("#cta", { opacity: 1, delay: 2, y: -50 });
  });

  return (
    <section className="w-full nav-height bg-black relative flex-center flex-col ">
      <div className="h-5/6 w-full flex-center flex-col gap-7">
        <p id="hero" className="hero-title ">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video autoPlay loop muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20 gap-4"
      >
        <a
          href="#highlights"
          className=" bg-blue-500 w-20 h-8 text-white text-center  rounded-2xl font-normal text-xl "
        >
          Buy
        </a>

        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
