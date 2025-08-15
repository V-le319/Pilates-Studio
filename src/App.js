
import './App.css';


const heroBgStyle = {
  backgroundImage: "url('/img/421b324a8b94fb619221b444f637dad7.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-custom-pink px-4 py-2">
      <header className="flex justify-between items-center mb-2">
        <p>Pilates Studio</p>
        <button className="bg-custom-button text-white hover:bg-white duration-300 hover:text-custom-button p-2 h-6 w-30 flex items-center font-sans text-sm rounded-3xl m-0 leading-none">Explore Classes -></button>
      </header>
      <div className="flex flex-col items-center min-w-full">
    <section className="hero w-full h-96 bg-center bg-cover bg-no-repeat text-white rounded-lg flex flex-col justify-center items-center text-4xl text-shadow-sm md:text-6xl -mb-10" style={heroBgStyle}>
          <p className="slide-in-left self-start ml-10 md:ml-52">Where movement</p>
           <p className="slide-in-right self-end mr-10 md:mr-52 ">meets mindfulness</p>
      </section>
          <button className="h-20 w-20 relative bg-custom-pink hover:bg-custom-button duration-300 rounded-full mb-0 flex items-center justify-center">
            <svg className="h-10 w-10 hover:border-white" viewBox="0 0 113 113" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="arrow-fill" d="M85.5511 63.4583H0.833374V49.5417H85.5511L46.5844 10.575L56.5 0.833344L112.167 56.5L56.5 112.167L46.5844 102.425L85.5511 63.4583Z" fill="#5C262F"/>
          </svg>
            <style jsx>{`
    button:hover .arrow-fill {
      fill: white !important;
      transition: "fill 3s ease" 
    }
           `}</style>
            </button>
      </div>
        
    <section className="content min-h-72 p-10 md:p-20 bg-white bg-opacity-60 rounded-lg mb-8 flex items-center justify-between gap-6">
          <h2 className="text-lg w-1/2 sm:text-2xl md:text-center">Your journey with us</h2>
          <p className="text-sm w-1/2 font-sans font-extralight md:text-lg">From your very first session to mastering advanced moves, we’re here to guide you every step of the way. 
Our personalized approach ensures your Pilates journey is tailored to your needs, helping you grow stronger, healthier, and more confident.</p>
      </section>
      
    <section className="classes min-h-96 bg-white bg-opacity-60 rounded-lg mb-8">
        <div className="classes-container grid grid-cols-3 gap-4 p-4">
          <div className="relative inline-block">
            <p className="p-2 text-sm flex items-center justify-center absolute top-3 py-1 rounded-tr-xl rounded-br-xl bg-white bg-opacity-60">Class 1</p>
        <img src="/img/Yoga Pose Close-Up.png" className=" block h-auto max-w-full"/>
                <button className="absolute bottom-3 right-3 px-3 py-1 bg-custom-pink hover:bg-custom-button duration-300 rounded-full flex items-center justify-center">
        <svg className="h-4 w-4 hover:border-white" viewBox="0 0 113 113" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className="arrow-fill" d="M85.5511 63.4583H0.833374V49.5417H85.5511L46.5844 10.575L56.5 0.833344L112.167 56.5L56.5 112.167L46.5844 102.425L85.5511 63.4583Z" fill="#5C262F"/>
</svg>
 <style jsx>{`
    button:hover .arrow-fill {
      fill: white !important;
      transition: "fill 3s ease" 
    }
  `}</style>
</button>

        </div>
        <div className="relative inline-block">
            <p className="p-2 text-sm flex items-center justify-center absolute top-3 py-1 rounded-tr-xl rounded-br-xl bg-white bg-opacity-60">Class 2</p>
        <img src="/img/1200.png" className=" block h-auto max-w-full"/>
        <button className="absolute bottom-3 right-3 px-3 py-1 bg-custom-pink hover:bg-custom-button duration-300 rounded-full flex items-center justify-center"> 
          {/* bottom-3 and right-3 create a tighter but even margin. */}
          {/* px-3 py-1 gives the button internal padding instead of fixed height. */}
          {/* Avoid hardcoding h-6 w-16 if symmetry is critical — padding is more reliable visually. */}
        <svg className="h-4 w-4 hover:border-white" viewBox="0 0 113 113" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className="arrow-fill" d="M85.5511 63.4583H0.833374V49.5417H85.5511L46.5844 10.575L56.5 0.833344L112.167 56.5L56.5 112.167L46.5844 102.425L85.5511 63.4583Z" fill="#5C262F"/>
</svg>
 <style jsx>{`
    button:hover .arrow-fill {
      fill: white !important;
      transition: "fill 3s ease" 
    }
  `}</style>
</button>
      
        </div>
        <div className="relative inline-block">
            <p className="p-2 text-sm flex items-center justify-center absolute top-3 py-1 rounded-tr-xl rounded-br-xl bg-white bg-opacity-60">Class 3</p>
        <img src="/img/Yoga Pose in Sage Green.png" className=" block h-auto max-w-full"/>
        <button className="absolute bottom-3 right-3 px-3 py-1 bg-custom-pink hover:bg-custom-button duration-300 rounded-full flex items-center justify-center">
        <svg className="h-4 w-4 hover:border-white" viewBox="0 0 113 113" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className="arrow-fill" d="M85.5511 63.4583H0.833374V49.5417H85.5511L46.5844 10.575L56.5 0.833344L112.167 56.5L56.5 112.167L46.5844 102.425L85.5511 63.4583Z" fill="#5C262F"/>
</svg>
 <style jsx>{`
    button:hover .arrow-fill {
      fill: white !important;
      transition: "fill 3s ease" 
    }
  `}</style>
</button>
        </div>
        </div>
        <p className="text-center pb-6 pt-2 md:pb-12 md:pt-6 font-sans text-lg md:text-2xl font-extralight">"Strengthen, Stretch, Shine – with Pilates."</p>
        </section> 
      
    <section className="testimonials classes min-h-96 bg-white bg-opacity-60 rounded-lg mb-8 p-8 md:p-20 flex flex-col gap-6 items-center justify-center md:grid grid-cols-3">
        <p className="text-sm text-left font-sans font-extralight">⭐⭐⭐⭐⭐<br></br>
“The instructors are amazing and really helped me improve my strength and flexibility. Love every session!”</p>
        <p className="text-sm font-sans text-left font-extralight">⭐⭐⭐⭐⭐<br></br>
“A welcoming space with personalized attention. Pilates here transformed my posture and energy levels.”</p>
        <p className="text-sm font-sans text-left font-extralight">⭐⭐⭐⭐⭐<br></br>
“Great workouts that are challenging but doable. I feel stronger and more balanced after every class.”</p>
      </section>

  <section className="instructors min-h-96 bg-white bg-opacity-60 rounded-lg mb-8 flex flex-col items-center justify-center p-10 text-2xl font-sans font-thin">
        <h2>Meet Our Instructors</h2>
        <div className="grid grid-cols-5 gap-4">
          <img className="h-32 w-32 rounded-full bg-white"/>
          <img className="h-32 w-32 rounded-full bg-white"/>
          <img className="h-32 w-32 rounded-full bg-white"/>
          <img className="h-32 w-32 rounded-full bg-white"/>
          <img className="h-32 w-32 rounded-full bg-white"/>
      </div>
    </section>
      
    <section className="contact max-w-screen py-10 px-4 min-h-72 bg-white bg-opacity-60 rounded-lg mb-8 flex flex-wrap items-start justify-center md:grid-cols-2 gap-10">
      <div className="flex flex-col">
            <img src="/img/What_is_pilates_desktop.jpg" className="w-full max-w-md mb-4"/>
        <div className="infos text-sm font-extralight flex flex-col gap-2">
          <h3 className="font-sans text-2xl text-arrow-color pb-2">Let's Connect!</h3>
          <div className="flex gap-4">
            <img src="/img\home.png" className="h-6 w-6" />
            <p>1257 Willow Street, Suite 302, San Diego, CA 92103</p>
          </div>
          <div className="flex gap-4">
            <img src="/img\phone.png" className="h-5 w-5"/>
            <p>(619) 555-8721</p>
          </div>
          <div className="flex gap-4">
            <img src="/img\@.png" className="h-5 w-5"/>
            <p>www.corebalancepilates.com</p>
            </div>
          <div className="flex gap-4">
            <img src="/img\fb.png" className="h-5 w-5"/>
            <p>corebalancepilates</p>
          </div>
          <div className="flex gap-4">
            <img src="/img\logo-instagram 1.png" className="h-5 w-5"/>
            <p>corebalancepilates</p>
        </div>
      </div>
      </div>
      <div className="flex flex-col justify-start items-center">
        <form className="mt-6 flex flex-col gap-2 mb-4">
          <h3 className="text-2xl font-sans font-normal">We’d love to hear from you!</h3>
          <p className="text-xs font-extralight italic font-sans mb-4">Please fill out the form below and we’ll get back to you as soon as possible</p>
          
          <label className="text-sm font-sans">Full Name:</label>
            <input className="h-6 w-96 rounded-md" placeholder="Your name" type="text" required/>
          
          <label className="text-sm font-sans">Email Address:</label>
            <input className="h-6 w-96 rounded-md"  placeholder="Your email" type="email" required/>
          
          <label className="text-sm font-sans">Phone Number:</label>
            <input className="h-6 w-96 rounded-md" placeholder="your number" type="number" required/>
          
          <label className="text-sm font-sans">Sqpecial Request</label>
            <input className="h-20 w-96 p-2 rounded-lg text-left flex items-start" placeholder="Please type your request here"/>
        </form>
        <button type="submit" className="h-10 w-96 text-center text-white font-semibold text-xl bg-custom-button rounded-2xl hover:bg-hover-color duration-300">Submit</button>
     </div>
      </section>
    </div>  
  );
}

export default App;




