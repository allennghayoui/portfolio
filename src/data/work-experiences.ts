export type WorkExperienceType = {
  title: string;
  company: string;
  description: string;
  technologies: string[];
  startDate: Date;
  endDate: Date;
};

export const workExperiences: WorkExperienceType[] = [
  {
    title: "Full-Stack Web Development Internship",
    company: "Cellular Fitness",
    description:
      "Built the World Sports Rankings website using `Express.js` and `Next.js`. \
      Desgined the `PostgreSQL` database and used the `Prisma ORM` to interact \
      with it from the application code. I learned to use various `AWS` services \
      such as `Elastic Beanstalk`, `Amazon Aurora`, and `Amazon Cognito`.",
    technologies: [
      "Next.js",
      "Express.js",
      "TailwindCSS",
      "PostgreSQL",
      "Prisma ORM",
      "AWS",
    ],
    startDate: new Date("2023-06-01"),
    endDate: new Date("2023-11-01"),
  },
];
