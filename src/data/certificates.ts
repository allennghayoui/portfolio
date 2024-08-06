type CompanyType = {
  name: string;
  logo: string;
};

export type CertificateType = {
  title: string;
  link?: string;
  dateIssued: Date;
  companies: CompanyType[];
};

export const certificates: CertificateType[] = [
  {
    title: "Machine Learning Specialization",
    link: "https://www.coursera.org/account/accomplishments/specialization/9QVUR2MAGXWR",
    dateIssued: new Date("2023-06-14"),
    companies: [
      {
        name: "DeepLearning.AI",
        logo: "https://utfs.io/f/0fc35f84-b86f-4564-b14e-ce73f6dcf097-87fe93.png",
      },
      {
        name: "Stanford University",
        logo: "https://utfs.io/f/c4f2e124-6177-4ae2-b64c-c096a3f811e0-xfpzrq.png",
      },
    ],
  },
  {
    title: "Deep Learning Specialization",
    link: "https://www.coursera.org/account/accomplishments/specialization/KNWJSSJQEV2C",
    dateIssued: new Date("2023-09-04"),
    companies: [
      {
        name: "DeepLearningAI",
        logo: "https://utfs.io/f/0fc35f84-b86f-4564-b14e-ce73f6dcf097-87fe93.png",
      },
    ],
  },
  {
    title: "Foundations of Cybersecurity",
    link: "https://www.coursera.org/account/accomplishments/verify/LHU8K937S67F",
    dateIssued: new Date("2023-12-29"),
    companies: [
      {
        name: "Google",
        logo: "https://utfs.io/f/85d4e005-277f-4493-a26a-34cad9d3ab5b-l2dnoy.png",
      },
    ],
  },
  {
    title: "Play It Safe: Manage Security Risks",
    link: "https://www.coursera.org/account/accomplishments/verify/UHKYXFQHHKAJ",
    dateIssued: new Date("2024-01-04"),
    companies: [
      {
        name: "Google",
        logo: "https://utfs.io/f/85d4e005-277f-4493-a26a-34cad9d3ab5b-l2dnoy.png",
      },
    ],
  },
  {
    title: "Connect and Protect: Networks and Network Security",
    link: "https://www.coursera.org/account/accomplishments/verify/25DGBTWA6EQF",
    dateIssued: new Date("2024-01-14"),
    companies: [
      {
        name: "Google",
        logo: "https://utfs.io/f/85d4e005-277f-4493-a26a-34cad9d3ab5b-l2dnoy.png",
      },
    ],
  },
  {
    title: "Tools of the Trade: Linux and SQL",
    link: "https://www.coursera.org/account/accomplishments/verify/ZX6HVZJ82Z28",
    dateIssued: new Date("2024-01-23"),
    companies: [
      {
        name: "Google",
        logo: "https://utfs.io/f/85d4e005-277f-4493-a26a-34cad9d3ab5b-l2dnoy.png",
      },
    ],
  },
];
