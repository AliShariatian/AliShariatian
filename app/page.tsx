import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

function HomePage() {
   return (
      <main className="size-full">
         <div className="flex flex-col gap-20">
            <Hero />
            <Skills />
            <Projects />
         </div>
      </main>
   );
}

export default HomePage;
