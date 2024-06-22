'use client'

import MainNav from "./main-nav";
import { Button } from "../ui/button";
import { siteInfo } from "@/siteinfo";

export default function Header(){

  return(
    <>
      <MainNav />
      <section className=" bg-primary/80 bg-cover bg-center py-36 md:py-40" style={{backgroundImage:"url('/assets/img/banner.jpg')"} }>
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-4">
            <span className="text-xs tracking-wider uppercase mb-2">save our society</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Empowering Communities, One Child at a Time</h2>
            <p className="text-base md:text-lg mb-8">Join us in providing free education, counseling, and disaster relief to those in need.</p>
            <div className="flex space-x-4 mt-10 ">
              <Button 
                className="font-bold uppercase text-secondary border-2 border-primary w-full px-8 py-6 rounded-none text-nowrap"
              >
                <a href="#">Contact us</a>
              </Button>
              
              <Button 
                variant="outline"
                className="font-bold uppercase text-primary border-2 border-primary w-full px-8 py-6  rounded-none text-nowrap"
              >
                <a href={siteInfo.donation} target="__blank" >Donate now</a>
              </Button>
            </div>
          </div>
      </section>
    </>

  );
}