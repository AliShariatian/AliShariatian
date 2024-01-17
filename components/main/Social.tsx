import Image from "next/image";
import { Socials } from "@/constants";

function Social() {
   return (
      <>
         {Socials.map((social) => (
            <a href={social.link} key={social.name} target="_blank">

               <Image  src={social.src} width={30} height={30} alt={`Ali Shariatian ${social.name}`} title={`My ${social.name}`} className="invert cursor-pointer" />
            </a>
         ))}
      </>
   );
}

export default Social;
