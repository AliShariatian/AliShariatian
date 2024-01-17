import Hero from "@/components/main/Hero";

function HomePage() {
   return (
      <main className="size-full">
         <div className="flex flex-col gap-20 h-[850px]">
            <Hero />
         </div>
      </main>
   );
}

export default HomePage;
