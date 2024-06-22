'use client'
import { NotebookPen, HeartHandshake, BriefcaseMedical } from "lucide-react";

import { Button } from "../ui/button";

export default function Mission(){

  return(
    <section className="bg-white py-12">
      <header className="w-full relative overflow-hidden bg-slate-700 py-12 bg-cover bg-center" style={{backgroundImage: "url(/assets/img/bless-img/bless-10.jpg)"}}>
        <div className="relative container text-center py-24 justify-center flex flex-col lg:flex-row gap-x-24 lg:text-start z-30">
          <div>
            <p className="uppercase text-xl text-primary pb-8">Our Programs | Save Our Society SOS</p>
            <h3 className="text-5xl font-bold text-white leading-snug">
              Some People Need Help And We Give It!
            </h3>
            <p className="mt-11 text-xl text-white">
             Explore the various programs of Save Our Society - SOS including free education for children, parental counseling, and humanitarian aid during disasters.
            </p>
          </div>

          <Button className="rounded-none text-xl p-10 bg-primary hover:bg-secondary hover:text-secondary-foreground text-secondary mt-20">  
            <a href="#">DISCOVER MORE</a>
          </Button>
        </div>
        <div id="overlay" className="absolute top-0 left-0 w-full h-[120%] bg-slate-700/70 z-0"></div>
      </header>
      <div className="pt-14 bg-primary">
        <div className="container">
        <div className="my-10">
          <h3 className="text-5xl font-bold text-center text-slate-800">
            Multiple Programs & Events
          </h3>
        </div>

        <div className="bg-white shadow-md mb-8">
            <div className="flex items-center space-x-4 p-7">
              <div className="rounded-full w-[150px] p-7 border-2 border-primary text-primary">
                <NotebookPen  className="w-full h-full"/>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800">
                  Education Program 
                </h3>
                <p className="text-slate-800">Our education program offers free academic instruction to children in underprivileged communities. We focus on providing quality education that empowers children to achieve their full potential and break the cycle of poverty.</p>
              </div>
            </div>
        </div>

        <div className="bg-white shadow-md mb-8">
            <div className="flex items-center space-x-4 p-7">
              <div className="rounded-full w-[150px] p-7 border-2 border-primary text-primary">
                <HeartHandshake  className="w-full h-full"/>
              </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Counselling and Support
                  </h3>
                  <p className="text-slate-800">We provide counseling and support to parents, helping them to encourage their children’s education and well-being. Our goal is to strengthen families and build supportive community networks</p>
                </div>
            </div>
        </div>

        <div className="bg-white shadow-md mb-8">
            <div className="flex items-center space-x-4 p-7">
              <div className="rounded-full w-[150px] p-7 border-2 border-primary text-primary">
                <BriefcaseMedical  className="w-full h-full"/>
              </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Humanitarian Aid
                  </h3>
                  <p className="text-gray-600">JText: In times of natural disasters, SOS steps in to provide critical humanitarian aid. Our efforts include distributing food, water, medical supplies, and offering shelter to those affected.</p>
                </div>
            </div>
        </div>
        </div>
      </div>
    </section>
  );

}