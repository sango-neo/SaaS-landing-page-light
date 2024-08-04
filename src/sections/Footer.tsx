import logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import SocialInsta from "@/assets/social-insta.svg";

import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#bcbcbc] text-sm pt-20 pb-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:w-full before:h-full before:bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd9b,#c2f0b1,#2fd8fe)] before:blur before:absolute">
          <Image src={logo} alt="Footer Logo" height={40} className="relative"/>
        </div>
        <nav className="flex flex-col gap-6 mt-10 md:flex-row md:justify-center">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-10">
          <SocialX />
          <SocialLinkedIn />
          <SocialPin />
          <SocialYoutube />
          <SocialInsta />
        </div>
        <p className="mt-6">&copy; 2024 Your Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}
