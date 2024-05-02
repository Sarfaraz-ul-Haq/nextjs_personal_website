interface ProfessionalExperienceProps {
  title: string;
  projects: {
    name: string;
    description: string;
    current: boolean;
  }[];
}

function ProfessionalExperience({
  data,
}: {
  data: ProfessionalExperienceProps;
}) {
  const { title, projects } = data;
  return (
    <section>
      <h2 className="mb-6"> {title}</h2>
      <div className="flex flex-col gap-6">
        {projects.map(({ name, description, current }: any) => (
          <div key={name} className="flex flex-col rounded-lg">
            <span
              className={`h-2 ${current ? "bg-green-500" : "bg-gray-200"}`}
            />
            <div className="bg-gray-100 p-6 drop-shadow-md">
              <h3 className="font-bold">{name}</h3>
              <p className="mt-2">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProfessionalExperience;
