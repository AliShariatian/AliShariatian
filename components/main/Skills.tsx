import { Frontend_skills, Others } from "@/constants";
import SkillDataProvider from "../sub/SkillDataProvider";

function Skills() {
   return (
      <section id="skills" className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20" style={{ transform: "scale(0.9)" }}>
         {/* skills */}
         <div className="flex items-center justify-around flex-wrap mt-4 gap-5">
            {Frontend_skills.map((skill, index) => (
               <SkillDataProvider key={skill.image} src={skill.image} width={skill.width} height={skill.height} index={index} title={skill.skill_name} />
            ))}
         </div>
         <div className="flex items-center justify-around flex-wrap mt-4 gap-5">
            {Others.map((skill, index) => (
               <SkillDataProvider key={skill.image} src={skill.image} width={skill.width} height={skill.height} index={index} title={skill.skill_name} />
            ))}
         </div>

         <div className="size-full absolute">
            <div className="size-full -z-10 opacity-30 absolute flex items-center justify-center bg-cover">
               <video className="w-full h-auto" preload="false" playsInline loop muted autoPlay src="/video/cards-video.webm" />
            </div>
         </div>
      </section>
   );
}

export default Skills;
