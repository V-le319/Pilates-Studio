import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ClassesPage = () => {
        const Instructors = [
            {
                name:"Ava" ,
                img: `${process.env.PUBLIC_URL}/img/Athletic Woman Portrait.png`,
                bio:"Certified in STOTT Pilates® Matwork & Reformer, Ava brings over 8 years of experience in rehabilitative and athletic Pilates. She specializes in posture correction and pre/post-natal care.",
            },
            {
                name:"Kat" ,
                img: `${process.env.PUBLIC_URL}/img/Woman by the Sea.png`,
                bio:"Kat holds a BASI Pilates® Comprehensive Certification and is a licensed sports therapist. She combines functional movement with Pilates to support injury recovery and athletic performance.",
            },
            {
                name:"Natalie" ,
                img:`${process.env.PUBLIC_URL}/img/Woman Practicing Yoga.png`,
                bio:"Natalie is a Peak Pilates® Level II Certified Instructor with additional training in barre and yoga. She focuses on mindful movement and flexibility for all levels.",
            },
            {
                name:"Maya" ,
                img:`${process.env.PUBLIC_URL}/img/Elegant Studio Portrait.png`,
                bio:"With Polestar Pilates® Studio Certification and a background in dance, Maya blends fluid, precise movement with core strength training. She’s passionate about spine health and mobility.",
            },
            {
                name:"Olivia" ,
                img:`${process.env.PUBLIC_URL}/img/Serene Woman in Athletic Wear.png`,
                bio:"Oliviais comprehensively certified through Balanced Body® and holds a degree in Kinesiology. She specializes in Pilates for both men and women.",
            },
            {
                name:"Sophie" , 
                img:`${process.env.PUBLIC_URL}/img/Focused Fitness Activity.png`,
                bio:"Sphie is a Power Pilates® Certified Instructor and licensed physiotherapist. She integrates clinical knowledge with classical Pilates to support clients with chronic pain and post-surgical rehab.",
            },
        ];
             
        const[showButton, setShowButton] = useState(false);
        const[scrolling, setScrolling] = useState(false);
        let scrollTimeout = null;

        useEffect(() => {
          const handleScroll = () => {
            setShowButton(false); //hide while scrolling
            setScrolling(true);

            if(scrollTimeout) {
              clearTimeout(scrollTimeout);
            }
            scrollTimeout = setTimeout(() => {
              setScrolling(false);
              setShowButton(true);
              }, 2000) //set timeout to show Up button after 2 seconds without scrolling
            }
            window.addEventListener('scroll', handleScroll);
            return() => {
              window.removeEventListener('scroll', handleScroll);
              clearTimeout(scrollTimeout);
            }
        }, []);
        const scrollToTop = () => {
          window.scrollTo({top: 0, behavior: 'smooth'})
        }

        
  return (
    <div className="min-h-screen flex flex-col bg-custom-pink">
        <header className="w-full h-10 bg-custom-button text-white text-lg flex justify-center items-center">
           <Link to="/">
            <h1 className=" hover:text-hover-color duration-300">CorePilates</h1>
            </Link>
        </header>
        
     <main className="px-4"> 
        <div id="classes" className="classes min-h-[600px] md:h-screen py-10 px-2 bg-white bg-opacity-60 h-auto max-w-full rounded-lg flex flex-col gap-10 items-stretch md:grid md:grid-cols-3">
            <section id="class1" className="grid grid-cols-2 gap-4 h-auto w-auto ">
                    <img src={`${process.env.PUBLIC_URL}/img/Yoga Pose Close-Up.png`} className="w-full h-full object-cover max-h-[400px] rounded-lg"/>
                <div>
                    <h1 className="text-lg h-10 rounded-lg bg-hover-color bg-opacity-40 font-sans font-light flex justify-center items-center">Beginner</h1>
                <div className="class1 font-extralight text-sm font-sans">
                    <p className="mb-2">This class introduces the fundamentals of Pilates, focusing on breathing, alignment, and basic control.</p>
                    <p className="mb-1 font-semibold">Schedule:</p>
                    <ul className="list-disc pl-4">
                        <li>Monday & Wednesday: 9:00 AM – 10:00 AM</li>
                        <li>Saturday: 10:30 AM – 11:30 AM</li>
                    </ul>
                    <p className="mt-2 font-semibold">Techniques:</p>
                    <ul className="list-disc pl-4">
                        <li>Breathing & Core Engagement</li>
                        <li>Mat Fundamentals</li>
                        <li>Neutral Spine Awareness</li>
                    </ul>
                </div>
                </div>
            </section>
            
            <section id="class2" className="grid grid-cols-2 gap-4 h-auto w-auto">
                    <img src={`${process.env.PUBLIC_URL}/img/1200.png`} className="w-full h-full object-cover max-h-[400px] rounded-lg"/>
                <div>
                    <h1 className="text-lg h-10 rounded-lg bg-hover-color bg-opacity-40 font-sans font-light flex justify-center items-center">Intermediate</h1>
                <div className="class1 font-extralight text-sm font-sans">
                    <p className="mb-2">This class sets on building strength and flexibility with faster-paced, dynamic Pilates focusing on breath and control.</p>
                    <p className="mb-1 font-semibold">Schedule:</p>
                        <ul className="list-disc pl-4">
                            <li>Tuesday & Thursday: 6:00 PM – 7:00 PM</li>
                            <li>Sunday: 9:00AM – 10:00 AM</li>
                        </ul>
                    <p className="mt-2 font-semibold">Techniques:</p>
                        <ul className="list-disc pl-4">
                            <li>Flow sequences</li>
                            <li>Resistance bands</li>
                            <li>Postural alignment</li>
                        </ul>
                </div>
                </div>
            </section>
            
            <section id="class3" className="grid grid-cols-2 gap-4 h-auto w-auto">
                    <img src={`${process.env.PUBLIC_URL}/img/Yoga Pose in Sage Green.png`} className="w-full h-full object-cover max-h-[400px] rounded-lg"/>
                <div>
                    <h1 className="text-lg h-10 rounded-lg bg-hover-color bg-opacity-40 font-sans font-light flex justify-center items-center">Advanced</h1>
                <div className="class1 font-extralight text-sm font-sans">
                    <p className="mb-2">Challenge your core and endurance with complex Pilates routines and advanced movements.</p>
                    <p className="mb-1 font-semibold">Schedule:</p>
                        <ul className="list-disc pl-4">
                            <li>Wednesday & Friday: 7:00 – 8:00 PM</li>
                            <li>Saturday: 8:00 – 9:00 AM</li>
                        </ul>
                    <p className="mt-2 font-semibold">Techniques:</p>
                        <ul className="list-disc pl-4">
                            <li>Full mat series</li>
                            <li>Precision flow</li>
                            <li>Deep core strengthening</li>
                        </ul>
                </div>
                </div>
            </section>
        </div>

         <blockquote className="py-24 md:py-40 bg-custom-pink bg-opacity-10 flex justify-center items-center text-xl md:text-2xl text-center font-serif italic text-custom-button">
                <p>“Balance isn’t something you find — it’s something you create.”</p>
            </blockquote>

        <div className="intructors bg-white bg-opacity-60 rounded-lg px-2" id="instructors">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-6 py-10 md:py-14 text-lg font-sans">
         {Instructors.map((inst, i) => (
            <div key={i} className="flex flex-col items-center p-4">
              <img
                src={inst.img}
                alt="instructor picture"
                className="h-32 w-32 rounded-full bg-white object-cover"
                />
              <p className="pb-4">{inst.name}</p>
              <p className="text-sm font-extralight">{inst.bio}</p>
            </div>
         ))
         }
      </div>
        </div>
    </main>  
          
          <div className="flex justify-center items-center">
         {showButton && (
            <button className= "fixed bottom-4 md:bottom-11 h-16 w-16 rounded-full border-2 border-hover-color hover:border-white duration-300 flex justify-center items-center" onClick={scrollToTop}>
                <img src={`${process.env.PUBLIC_URL}/img/Vector.svg`} className="h-6 w-6"/>
            </button>
            )}
        </div>
        <footer className="h-10 max-w-screen bg-custom-button text-custom-pink text-opacity-60 text-sm font-sans flex justify-center items-center">
        <p>Copyright 2025 Website by{' '} 
        <a href="https://instagram.com/sleepymolecule" target="_blank" rel="noopener noreferrer" className="text-purple-400">VincyLe</a>
        </p>
        </footer>
    </div>
  );
};

export default ClassesPage;
