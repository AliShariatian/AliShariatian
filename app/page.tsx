import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";

function HomePage() {
   return (
      <main className="size-full">
         <div className="flex flex-col gap-20">
            <Hero />
            <Skills />
         </div>
      </main>
   );
}

export default HomePage;
