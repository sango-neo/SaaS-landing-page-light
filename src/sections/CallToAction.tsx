"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import starImg from "@/assets/star.png";
import springImg from "@/assets/spring.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateYStar = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const translateYSpring = useTransform(scrollYProgress, [0, 1], [150, -50]);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#d2dcff] py-20 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <div className="flex justify-center items-center mb-5 relative w-full">
            <div data-video-cover className="absolute w-full h-full bg-transparent z-20"></div>
            {/* <video autoPlay loop width={48} height={48}>
              <source src="/cta-sphere.webm" type="video/webm" />
            </video> */}
            {/* <video autoPlay loop width={150} height={150}>
              <source src="/phone.mp4" type="video/webm" />
            </video> */}
            <Image src={"/phone.gif"} alt="phone" width={150} height={150}/>
          </div>
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
          <motion.img
            style={{
              translateY: translateYStar
            }}
           src={starImg.src} alt="Star Image" width={320} className="absolute -left-[330px] -top-[137px]" />
          <motion.img
            style={{
              translateY: translateYSpring,
            }}
            src={springImg.src} alt="Spring Image" width={320} className="absolute -right-[310px] -top-[19px]" />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
