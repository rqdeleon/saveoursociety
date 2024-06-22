'use client'
import Image from "next/image";
import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Progress } from "@/components/ui/progress"
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
export default function Projects(){
  const [progress, setProgress] = React.useState(13)
 
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])
  
  const projectData = [
    {
      name: 'bless',
      description:'Help to raise valuable donations for Kids',
      image: '/assets/img/bless-img/bless-5.jpg',
      category:'Children',
      link:'#',
      goal: '2 Million'
    },
    {
      name: 'feding',
      description:'Help to raise valuable donations for Kids',
      image: '/assets/img/bless-img/bless-1.jpg',
      category:'Charity',
      link:'#',
      goal: '500 thousand'
    },
]

  
  return(
    <section className="container">
          <div className="w-full h-screen flex flex-col items-center justify-center" >
            <header className="text-center">
              <h3 className="text-5xl font-bold">Organization Causes</h3>
              <p className="text-xl">Protect and enhance poverty.</p>
            </header>
            <Carousel
              opts={{ align: "start", }}
              className="relative w-full group"
            >
              <CarouselContent>
                {projectData.map((project) => (
                  <CarouselItem key={project.name} className="flex aspect-square items-center justify-center p-6 lg:basis-1/2 px-10">
                    <article className="relative w-full h-[650px] md:h-[550px] overflow-hidden" >
                      <div className={cn("relative w-full h-full overflow-hidden z-0 cursor-pointer ",`group/${project.name}`)}>
                        <Image
                          src={project.image}
                          alt="profile image"
                          fill
                          className={cn('object-cover transition delay-300 duration-500 ', `group-hover/${project.name}:scale-150`)}
                        />
                        <div id="overlay" className="absolute w-full h-full top-0 left-0 bg-slate-800/40 z-10"></div>
                      </div>
                      <Badge className="absolute top-12 left-5 h-12 z-30 uppercase text-sm">
                        {project.category}
                      </Badge>
                      <div className="absolute bottom-3 left-7 z-30 flex flex-col gap-y-4 px-4 mb-4">
                        <h3 className="text-3xl font-semibold text-secondary dark:text-white" >
                          {project.description}
                        </h3>
                        <div>
                          <h4 className="text-3xl text-primary uppercase ">
                            ₱{project.goal}
                          </h4>
                          <span className="uppercase text-secondary text-lg font-semibold dark:text-white">donation goal</span>
                        </div>
                        <Progress value={progress} className="w-full" />
                      </div>
                    </article>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute top-0 left-0 w-full h-full hidden group-hover:block transition-all duration-500">
                <CarouselPrevious className="left-12 h-12 w-12" />
                <CarouselNext className="right-14 h-12 w-12"/>
              </div>
            </Carousel>
              <Button className="rounded-none text-xl p-10 bg-primary hover:bg-secondary hover:text-secondary-foreground text-secondary mt-20">  
                <a href="#">MORE CAUSES</a>
              </Button>
            </div>
    </section>
  );
}