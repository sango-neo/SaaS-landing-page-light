"use client";
import productImg from "@/assets/product-image.png";
import prismImg from "@/assets/pyramid.png";
import tubeImg from "@/assets/tube.png";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateYPrism = useTransform(scrollYProgress, [0, 1], [250, -350]);
  const translateYTube = useTransform(scrollYProgress, [0, 1], [250, -350]);
  
  return (
    <section className="bg-gradient-to-b from-[#ffffff] to-[#d2dcff] py-20 overflow-x-hidden">
      <div className="container">
        <div className="section-heading">
          <div className="text-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">A more effective way to track progress</h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, responsive, SaaS website in just minutes with this template.
          </p>
        </div>
        <div className="relative">
          <Image 
            src={productImg} 
            alt="Product Image" 
            className="mt-10"
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