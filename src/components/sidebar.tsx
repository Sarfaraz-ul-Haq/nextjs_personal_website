import Image from "next/image";
import pic from "@/assets/images/pic.jpg";
import { LinkedIn, GitHub, Email, Medium } from "@/assets/icons";

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
        <h1 className="mb-3">{name}</h1>
        <h2 className="mb-8 text-gray-500">{role}</h2>
        <p className="text-gray-500">{education} </p>
        <div className="text-center mb-4 mt-4 sm:mt-8">
          <h2 className="mb-2 text-gray-500">Contact Me</h2>
          <div className="flex flex-row justify-center gap-2">
            <a
              className="icons-contactme text-blue-500"
              target="_blank"
              href={contactLinks?.[0]}
              aria-label="LinkedIn Link"
            >
              <LinkedIn />
            </a>
            <a
              className="icons-contactme text-white"
              target="_blank"
              href={contactLinks?.[1]}
              aria-label="GitHub Link"
            >
              <GitHub />
            </a>
            <a
              className="icons-contactme text-red-800"
              target="_blank"
              href={contactLinks?.[2]}
              aria-label="Email Link"
            >
              <Email />
            </a>
            <a
              className="icons-contactme text-white"
              target="_blank"
              href={contactLinks?.[3]}
              aria-label="Medium Link"
            >
              <Medium />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
