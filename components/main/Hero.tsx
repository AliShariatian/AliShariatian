import HeroContent from "../heroContent/HeroContent";

function Hero() {
   return (
      <div className="relative flex flex-col h-full w-full">
         <video autoPlay muted loop className="absolute -top-[295px] md:top-[-350px] left-0 w-full h-full object-cover rotate-180 z-[1]">
            <source src="/video/blackhole.webm" type="video/webm" />
         </video>
         <HeroContent />
      </div>
   );
}

export default Hero;
