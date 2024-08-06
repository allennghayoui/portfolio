import Image from "next/image";
import Link from "next/link";

import { SocialType } from "@/data/socials";

interface SocialsProps {
  socials: SocialType[];
}

const Socials = ({ socials }: SocialsProps) => {
  return (
    <div className="grid w-full grid-cols-2 place-content-between justify-items-center gap-y-4 lg:grid-cols-4">
      {socials.map((social, index) => (
        <Link
          className="flex w-fit items-center gap-2 hover:underline"
          href={social.link}
          target="_blank"
          key={index}
        >
          <Image
            src={social.logo}
            alt={`${social.name} logo`}
            width={20}
            height={20}
          />
          <p>{social.handle}</p>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
