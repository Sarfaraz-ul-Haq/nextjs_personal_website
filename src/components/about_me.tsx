import { useId } from "react";
import Skills from "./skills";

function AboutMe({ data, skills }: any) {
  const { title, body }: any = data;
  const id = useId;

  return (
    <section>
      <h2 className="mb-6">{title}</h2>
      {body?.map((el: any, i: any) => (
        <p key={`${id}_${i}`} className="mb-6">
          {el}
        </p>
      ))}
      <Skills data={skills} />
    </section>
  );
}

export default AboutMe;
