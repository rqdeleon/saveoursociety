'use client'

import Image from "next/image";

import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import { siteInfo } from "@/siteinfo";

export default function About(){
  var images = []  
  for(var i = 1; i<=10; i++){
    images.push(`/assets/img/bless-img/bless-${i}.jpg`)
  }

  return(
    <section className="bg-white py-12 bg-cover bg-center" style={{backgroundImage:"url(/assets/img/bg-help.jpg)"}}>
      <div className="container grid grid-cols-1 md:grid-cols-2 grid-c  mx-auto text-center pb-16">
          <div className="md:text-end md:mr-8 mt-16 md:mt-0 leading-snug">
              <div>
                  <h3 className="text-4xl font-bold ">5,238</h3>
                  <p className="text-gray-600">Children educated for free</p>
                  <span className="inline-block border-b-2 border-primary/70 my-4 w-20"></span>
              </div>
              <div>
                  <h3 className="text-4xl font-bold ">1533</h3>
                  <p className="text-gray-600">Families supported through counseling</p>
                  <span className="inline-block border-b-2 border-primary/70 my-4 w-20"></span>
              </div>
              <div>
                <h3 className="text-4xl font-bold ">7</h3>
                <p className="text-gray-600">Regions, Active in disaster relief</p>
              </div>
          </div>
          <div className="mt-16 md:mt-0 ">
            <h2 
              className="text-4xl font-bold text-gray-800 uppercase md:text-start leading-10"
            >
              We Are World Wide Organization
            </h2>
            <p className="text-gray-600 mt-5 max-w-2xl mx-auto md:text-start leading-7">
              Save Our Society &#40;SOS&#41; is dedicated to transforming lives by offering free academic education to children in underprivileged communities and providing counseling and support to their families. We also extend our hands in times of natural disasters to offer critical humanitarian aid. Together, we can build a brighter future for everyone.
            </p>
            <Button 
              className="font-bold uppercase text-secondary border-2 border-primary px-8 py-6 rounded-none text-nowrap mt-12"
              >
                  <a href={siteInfo.donation} target="__blank">Donate now</a>
            </Button>
          </div>
      </div>

      <div className="grid px-7 bg-primary py-20 overflow-hidden w-[80%] mx-auto">
        <header className=" flex flex-col items-center gap-y-4">
          <span className="bg-secondary text-primary uppercase tracking-tight text-xs px-4 py-2 rounded-sm font-semibold mb-4">sponsor&nbsp;&nbsp; project&nbsp;&nbsp;  <i>bless</i></span>

          <h3 className="text-4xl text-center tracking-wide text-secondary uppercase">Help children to overcome illeteracy</h3>
          <Button variant="outline" className="rounded-none p-4 bg-primary text-secondary my-9">  
            <a href={siteInfo.donation}>Donate now</a>
          </Button>
        </header>
        
        <section className="w-full">
          <Carousel
            opts={{
              align:"start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              })
            ]}
            className="w-full"
          >
            <CarouselContent>
                {
                  images.map((img)=>(
                    <CarouselItem 
                      key={img} 
                      className="w-full h-full"
                    >
                      <div className="relative w-full h-[350px] md:h-[550px] rounded-lg overflow-hidden">
                        <Image 
                          src={img} 
                          fill 
                          objectFit="cover" 
                          alt="bless image" 
                        />
                      </div>
                    </CarouselItem>
                  ))
                }

            </CarouselContent>
          </Carousel>
        </section>
      </div>
     
    </section>
  );
}