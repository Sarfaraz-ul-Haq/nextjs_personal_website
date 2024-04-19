import AboutMe from "@/components/about_me";
import { aboutMe, skills } from "@/data/page";
import ProfessionalExperience from "@/components/professional_experience";
import { professionalData } from "@/data/page";

export default function Home() {
  return (
    <div>
      <AboutMe data={aboutMe} skills={skills} />
      <ProfessionalExperience data={professionalData} />
    </div>
  );
}
