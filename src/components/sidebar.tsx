import linkedinIcon from "@/assets/icons/linkedin.svg";
import githubIcon from "@/assets/icons/github.svg";
import emailIcon from "@/assets/icons/email.svg";
import mediumIcon from "@/assets/icons/medium.svg";

import Image from "next/image";
import pic from "@/assets/images/pic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar({ data }: { data: any }) {
  const { name, role, education, contactLinks } = data;
  return (
    <div className="bg-black flex flex-col content-between w-full h-auto sm:h-screen sm:justify-around sm:w-1/3 sm:fixed">
      <div className="flex flex-col p-10 items-center">
        <Image
          className="rounded-full h-full mb-6"
          priority
          width={300}
          height={300}
          src={pic}
          alt="1"
          aria-label="spaceship"
        />
        <h1 className="mb-3 text-yellow-600">{name}</h1>
        <h2 className="mb-8 text-gray-400">{role}</h2>
        <p className="text-gray-400">{education} </p>
        <div className="text-center mb-4 mt-4 sm:mt-8">
          <h2 className="mb-2 text-gray-400">Contact Me</h2>
          <div className="flex flex-row justify-center gap-2">
            <a
              className="icons-contactme"
              href={contactLinks?.[0]}
              aria-label="LinkedIn Link"
              target="_blank"
            >
              <Image
                src={linkedinIcon}
                alt="LinkedIn Icon"
                width={24}
                height={24}
              />
            </a>

            <a
              className="icons-contactme"
              href={contactLinks?.[1]}
              aria-label="GitHub Link"
              target="_blank"
            >
              <Image
                src={githubIcon}
                alt="GitHub Icon"
                width={24}
                height={24}
              />
            </a>
            <a
              className="icons-contactme"
              href={contactLinks?.[2]}
              target="_blank"
              aria-label="Email Link"
            >
              <Image src={emailIcon} alt="Email Icon" width={24} height={24} />
            </a>
            <a
              className="icons-contactme"
              href={contactLinks?.[3]}
              target="_blank"
              aria-label="Medium Link"
            >
              <Image
                src={mediumIcon}
                alt="Medium Icon"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
