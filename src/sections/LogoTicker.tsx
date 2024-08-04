"use client";
import acmeLogo from "@/assets/logo-acme.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import quantuamLogo from "@/assets/logo-quantum.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 bg-white md:py-12">
      <div className="container">
        <div className="flex overflow-hidden [-webkit-mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div 
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image alt="Acme Logo" src={acmeLogo} className="logo-ticker-image" />
            <Image alt="Echo Logo" src={echoLogo} className="logo-ticker-image" />
            <Image alt="Celestial Logo" src={celestialLogo} className="logo-ticker-image" />
            <Image alt="Pulse Logo" src={pulseLogo} className="logo-ticker-image" />
            <Image alt="Apex Logo" src={apexLogo} className="logo-ticker-image" />
            <Image alt="Quantuam Logo" src={quantuamLogo} className="logo-ticker-image" />

            {/* Second group of logos for animation */}
            <Image alt="Acme Logo" src={acmeLogo} className="logo-ticker-image" />
            <Image alt="Echo Logo" src={echoLogo} className="logo-ticker-image" />
            <Image alt="Celestial Logo" src={celestialLogo} className="logo-ticker-image" />
            <Image alt="Pulse Logo" src={pulseLogo} className="logo-ticker-image" />
            <Image alt="Apex Logo" src={apexLogo} className="logo-ticker-image" />
            <Image alt="Quantuam Logo" src={quantuamLogo} className="logo-ticker-image" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
