


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
      <section className="hero w-full h-96 bg-center bg-cover bg-no-repeat rounded-lg flex flex-col justify-center items-center text-4xl -mb-10" style={heroBgStyle}>
        <p className="">Where movement</p>
           <p>meets mindfulness</p>
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
      <section className="content min-h-72 p-6 bg-white bg-opacity-60 rounded-lg mb-10 flex items-center justify-between">
        <h2 className="text-lg w-1/2 sm:text-2xl md:text-center">Your journey with us</h2>
        <p className="text-sm w-1/2 font-sans font-extralight md:text-lg">From your very first session to mastering advanced moves, we’re here to guide you every step of the way. 
Our personalized approach ensures your Pilates journey is tailored to your needs, helping you grow stronger, healthier, and more confident.</p>
      </section>
      
      <section className="classes min-h-96 bg-white bg-opacity-60 rounded-lg mb-10">
        <div className="classes-container grid grid-cols-3 p-4">
          <div className="relative inline-block">
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
        <p className="text-center pb-6 pt-2 font-sans text-lg md:text-2xl font-extralight">"Strengthen, Stretch, Shine – with Pilates."</p>
        </section> 
      <section className="testimonials classes min-h-96 bg-white bg-opacity-60 rounded-lg mb-10">
        <p></p>
        <p></p>
        <p></p>
      </section>
      <section className="contact content min-h-72 bg-white bg-opacity-60 rounded-lg mb-10">
        <img/>
        <div>
          <h3></h3>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </section>
    </div>
  );
}

export default App;




