"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import CogImg from "@/assets/cog.png";
import CylinderImg from "@/assets/cylinder.png";
import NoodleImg from "@/assets/noodle.png";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateYCyl = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const translateYNoodle = useTransform(scrollYProgress, [0, 1], [120, -120]);

  // useMotionValueEvent(scrollYProgress, "change", (latestValue) => console.log(latestValue)) //to check the value as you scroll

  return (
    <section ref={heroRef} className="pt-8 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_75%)] overflow-x-clip md:pt-5 md:pb-10">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]"
          >
              <motion.div className="tag"
                initial={{ opacity: 0, translateX: 50 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              >Version 2.0 is here</motion.div>
              <motion.h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent webkit-bg-clip-text mt-6 md:text-7xl"
                initial={{ opacity: 0, translateX: 50 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              >
                Pathway to productivity
              </motion.h1>
              <motion.p className="text-xl text-[#010d3e] tracking-tight mt-6"
                initial={{ opacity: 0, translateX: 50 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
              >Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate successes.</motion.p>
              <motion.div className="flex gap-1 items-center mt-[30px]"
                initial={{ opacity: 0, translateX: 50 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
              >
                <button className="btn btn-primary">Get for free</button>
                <button className="btn btn-text gap-1">
                  <span>Learn more</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </motion.div>
          </div>
          <motion.div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 md:relative"
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.75, delay: 1, ease: "easeInOut" }}
          >
            <motion.img 
              src={CogImg.src} alt="Cog Image" 
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-45, 20]
              }}  
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2.5,
                ease: "easeInOut",
                delay: 1.75,
              }}
            />

            <motion.img 
              src={CylinderImg.src} 
              alt="Cylinder Image" 
              width={180} 
              height={180} 
              className="hidden md:block md:absolute -top-10 -left-24"
              style={{
                translateY: translateYCyl,
              }}  
            />
            <motion.img 
              src={NoodleImg.src} 
              alt="Noodle Image" 
              width={180} 
              className="hidden lg:block absolute top-[560px] left-[460px]"
              style={{
                rotate: 30,
                translateY: translateYNoodle,
              }}
              />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
