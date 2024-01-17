import Image from "next/image";
import Link from "next/link";

interface Props {
   src: string;
   link: string;
   title: string;
   description: string;
}

function ProjectCard({ src, link, title, description }: Props) {
   return (
      <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
         <Link href={link} target="_blank">
            <Image src={src} width={500} height={500} alt={title} title={title} className="w-full object-contain transition duration-400 ease-out hover:scale-105" />
         </Link>
         <div className="relative p-4 flex flex-col gap-3">
            <h2 className="text-2xl font-semibold text-white">{title}</h2>
            <p className="text-gray-300">{description}</p>
            <Link href={link} target="_blank" className="w-fit mt-3 py-2 px-14 button-primary text-white text-center cursor-pointer rounded-lg">
               Visit Live
            </Link>
         </div>
      </div>
   );
}

export default ProjectCard;
