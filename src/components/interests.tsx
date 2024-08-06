interface InterestsProps {
  interests: string[];
}

const Interests = ({ interests }: InterestsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {interests.map((interest, index) => (
        <p key={index} className="bg-white px-2 text-slate-900">
          {interest}
        </p>
      ))}
    </div>
  );
};

export default Interests;
