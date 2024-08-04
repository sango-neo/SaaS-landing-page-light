import ArrowRight from "@/assets/arrow-right.svg";
import Image from "next/image";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-md border-b border-white/20 z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">Streamline your workflow and boost your productivity</p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="w-5 h-5 inline-flex justify-center items-center mt-[0.5px]" />
        </div>
      </div>
      <div className="py-5">
      <div className="container">
        <div className="flex items-center justify-between">
          <Image src={Logo} alt="Saas Logo" height={40} width={40}/>
          <MenuIcon className="h-5 w-5 md:hidden" />
          <nav className="hidden md:flex gap-6 text-black/60 items-center">
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Customers</a>
            <a href="#">Updates</a>
            <a href="#">Help</a>
            <button className="btn btn-primary">Get for free</button>
          </nav>
        </div>
      </div>
    </div>
  </header>
  )
} 
