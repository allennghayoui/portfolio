import Certificates from "@/components/certificates";
import Interests from "@/components/interests";
import ProfilePicture from "@/components/profile-picture";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Socials from "@/components/socials";
import WorkExperiences from "@/components/work-experiences";
import { certificates } from "@/data/certificates";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { socials } from "@/data/socials";
import { interests } from "@/data/interests";
import { workExperiences } from "@/data/work-experiences";

export default function Home() {
  return (
    <main className="flex size-full flex-col items-center gap-20 px-2 py-24 sm:px-10 xl:px-20 2xl:px-60">
      <div className="flex size-full flex-col items-center gap-10">
        <div className="flex w-fit items-center gap-4 px-10 min-[350px]:gap-14 lg:px-20">
          <ProfilePicture />
          <h1 className="text-4xl font-black sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            ALLEN NGHAYOUI
          </h1>
        </div>

        <Socials socials={socials} />
      </div>

      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold">About Me</h1>
          <hr className="w-80" />
        </div>

        <p className="px-5 text-justify sm:px-0 sm:text-lg">
          I've been interested in technology and computers for as long as I can
          remember. At age 13, I saved up some money and purchased the parts I
          needed to build my first custom PC. Two years later, I enrolled in a
          Python summer camp, where I wrote my first lines of code. In reality I
          started a week early because I couldn't contain my excitement. From
          there, it was clear that I would major in Computer Science.
          Information Security stood out from all the possible career paths as
          it constantly presents new challenges that would satisfy my curiousity
          and combines creative problem-solving, attention to detail, and
          analytical thinking.
        </p>
      </div>

      <div className="flex w-full flex-col items-center gap-4">
        <h1 className="text-4xl font-bold">Education</h1>
        <hr className="w-80" />
        <div className="flex w-full flex-col items-start gap-4">
          <div className="flex flex-col items-start">
            <h3 className="font-medium sm:text-lg">
              Notre Dame University - Louaize (Sept 2021 - July 2024)
            </h3>
            <h3 className="text-xl font-semibold sm:text-3xl">
              Bachelor of Science in Computer Science
            </h3>
          </div>
          <div className="flex w-full flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-10">
            <p className="sm:text-lg">GPA: 3.99/4.0</p>
            <p className="sm:text-lg">Honors: Summa Cum Laude</p>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold">Experience</h1>
          <hr className="w-80" />
        </div>
        <WorkExperiences workExperiences={workExperiences.toReversed()} />
      </div>

      <div className="flex w-full flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold">Projects</h1>
          <hr className="w-80" />
        </div>
        <Projects projects={projects.toReversed()} />
      </div>

      <div className="flex w-full flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold">Certificates</h1>
          <hr className="w-80" />
        </div>
        <Certificates certificates={certificates.toReversed()} />
      </div>

      <div className="flex w-full flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold">Technologies and Skills</h1>
          <hr className="w-80" />
        </div>

        <Skills skills={skills} />
      </div>

      <div className="flex w-full flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold">Interests</h1>
          <hr className="w-80" />
        </div>

        <Interests interests={interests} />
      </div>
    </main>
  );
}
