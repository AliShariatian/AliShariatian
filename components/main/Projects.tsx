import ProjectCard from "../sub/ProjectCard";

function Projects() {
   return (
      <section className="flex flex-col items-center justify-center py-20">
         <h4 className="font-semibold text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">My Projects</h4>
         <div className="size-full flex flex-col md:flex-row gap-10 px-10">
            <ProjectCard src="/img/Personal-portfolio.jpg" title="Personal Portfolio" description="Personal Portfolio for write blog and show projects."/>
         </div>
      </section>
   );
}

export default Projects;
