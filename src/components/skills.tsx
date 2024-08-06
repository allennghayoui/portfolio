interface SkillsProps {
  skills: string[];
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <div className="flex w-full flex-wrap gap-2">
      {skills.map((skill, index) => (
        <p className="bg-white px-2 text-slate-900" key={index}>
          {skill}
        </p>
      ))}
    </div>
  );
};

export default Skills;
