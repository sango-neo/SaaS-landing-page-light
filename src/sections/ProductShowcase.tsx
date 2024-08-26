"use client";
import productImg from "@/assets/product-image.png";
import prismImg from "@/assets/pyramid.png";
import tubeImg from "@/assets/tube.png";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imgRef = useRef(null);
  const { scrollYProgress: scrollYProgress3D } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: scrollYProgressHeading } = useScroll({
    target: headingRef,
    offset: ["start end", "end 70%"],
  });
  const { scrollYProgress: scrollYProgressImg } = useScroll({
    target: imgRef,
    offset: ["start end", "end 90%"],
  });

  const translateYPrism = useTransform(scrollYProgress3D, [0, 1], [250, -350]);
  const translateYTube = useTransform(scrollYProgress3D, [0, 1], [250, -350]);

  const opa = useTransform(scrollYProgressHeading, [0, 1], [0, 1]);
  const translateY = useTransform(scrollYProgressHeading, [0, 1], [100, 0]);

  const scaleProduct = useTransform(scrollYProgressImg, [0, 1], [0.85, 1]);
  
  return (
    <section className="bg-gradient-to-b from-[#ffffff] to-[#d2dcff] py-20 overflow-x-hidden">
      <div className="container">
        <div className="section-heading" ref={headingRef}>
          <motion.div className="text-center"
              style={{
                opacity: opa,
                translateY: translateY,
              }}
          >
            <div className="tag">Boost your productivity</div>
          </motion.div>
          <motion.h2 className="section-title mt-5"
            style={{
              opacity: opa,
              translateY: translateY,
            }}
          >A more effective way to track progress</motion.h2>
          <motion.p className="section-description mt-5"
            style={{
              opacity: opa,
              translateY: translateY,
            }}
          >
            Effortlessly turn your ideas into a fully functional, responsive, SaaS website in just minutes with this template.
          </motion.p>
        </div>
        <div className="relative" ref={imgRef}>
          <motion.img 
            src={productImg.src} 
            alt="Product Image" 
            className="mt-10"
            style={{
              scale: scaleProduct,
            }}
          /> 
          <motion.img 
            src={prismImg.src}
            alt="Presentational Image"
            className="hidden md:block absolute -right-36 -top-32"
            width={200}
            style={{
              translateY: translateYPrism,
            }}
          /> 
          <motion.img 
            src={tubeImg.src} 
            alt="Presentational Image" 
            className="hidden md:block absolute bottom-24 -left-36"
            width={200}
            style={{
              translateY: translateYTube,
            }}
          /> 
        </div>
      </div>
    </section>
  )
}