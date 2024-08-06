export type ProjectType = {
  title: string;
  description: string;
  technologies: string[];
  videoDemoUri?: string;
  githubLink?: string;
  startDate: Date;
  endDate: Date;
};

export const projects: ProjectType[] = [
  {
    title: "Mean Reversion Stock Trading Bot",
    description:
      'I built this project during my first year as a Computer Science student. \
    This trading bot uses the "Mean Reversion" trading strategy to determine \
    whether to purchase or sell the specified stock. The trading bot uses the `TWS API` \
    provided by the Interactive Brokers platform.',
    technologies: ["Python", "TWS API", "Numpy", "TA-Lib"],
    githubLink: "https://github.com/allennghayoui/trading-bot-mean-reversion",
    startDate: new Date("2022-12-18"),
    endDate: new Date("2023-02-12"),
  },
  {
    title: "CodeAssist: AI-Enabled Programming Education Platform",
    description:
      "**CodeAssist** is a Web platform that focuses on providing instant \
    personalized hints and feedback for novice programmers through a chatbot interface. \
    The students can ask for a hint from the **CodeAssist** chatbot which uses the \
    exercise context such as the exercise given, programming concepts, and student's \
    code in combination with the student's query to provide the best hint for the student. \
    The chatbot refuses to give the explicit solution code or answer questions unrelated to \
    the programming domain. Students also get visual feedback when they run their code through \
    a simulator created by the instructor to help student further understand the functionality \
    of their code. The chatbot is powered by a fine-tuned `GPT3.5 Turbo` model from `OpenAI` with a custom dataset. \
    I used `judge0` for running the solution code by appending the student's code to unit tests defined \
    by the instructor.",
    technologies: [
      "Next.js",
      "TailwindCSS",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "OpenAI API",
      "judge0",
    ],
    videoDemoUri: "https://youtu.be/ZBoJ5Ihxt20",
    githubLink: undefined,
    startDate: new Date("2023-12-23"),
    endDate: new Date("2024-07-29"),
  },
];
