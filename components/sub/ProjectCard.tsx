import Image from "next/image";

interface Props {
   src: string;
   title: string;
   description: string;
}

function ProjectCard({ src, title, description }: Props) {
   return (
      <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
         <Image src={src} width={500} height={500} alt={title} title={title} className="w-full object-contain" />
         <div className="relative p-4">
            <h2 className="text-2xl font-semibold text-white ">{title}</h2>
            <p className="mt-2 text-gray-300">{description}</p>
         </div>
      </div>
   );
}

export default ProjectCard;
