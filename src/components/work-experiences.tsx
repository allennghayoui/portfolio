import { type WorkExperienceType } from "@/data/work-experiences";
import { formatDate } from "@/utils";
import { DoubleArrowRightIcon } from "@radix-ui/react-icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import MarkdownRenderer from "@/components/markdown-renderer";

interface WorkExperiencesProps {
  workExperiences: WorkExperienceType[];
}

const WorkExperiences = ({ workExperiences }: WorkExperiencesProps) => {
  return (
    <>
      {workExperiences.length === 1 && (
        <div>
          {workExperiences.map((experience, index) => (
            <div
              key={index}
              className="flex h-full w-[18rem] flex-col items-start justify-between gap-6 bg-white px-6 py-4 text-slate-950 min-[480px]:w-[25rem]"
            >
              <h2 className="text-xl font-semibold">{experience.title}</h2>

              <h3 className="text-lg font-medium">{experience.company}</h3>

              <div className="flex flex-col items-start gap-2">
                <div className="flex flex-wrap gap-1">
                  {experience.technologies.map((technology, index) => (
                    <p
                      key={index}
                      className="bg-slate-900 px-2 text-sm text-white"
                    >
                      {technology}
                    </p>
                  ))}
                </div>

                <div className="flex w-full items-end justify-between">
                  <p className="text-sm font-normal">
                    {formatDate(experience.startDate)} -{" "}
                    {formatDate(experience.endDate)}
                  </p>

                  <Dialog>
                    <DialogTrigger className="flex items-center gap-2 hover:underline">
                      More details
                      <DoubleArrowRightIcon />
                    </DialogTrigger>

                    <DialogContent className="flex w-[18rem] flex-col items-start overflow-auto min-[400px]:w-[24rem] md:w-[40rem] lg:w-[50rem]">
                      <DialogHeader>
                        <DialogTitle className="text-xl text-slate-900">
                          {experience.title}
                        </DialogTitle>
                      </DialogHeader>
                      <DialogDescription className="text-justify text-lg">
                        <MarkdownRenderer markdown={experience.description} />
                      </DialogDescription>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {workExperiences.length > 1 && (
        <div className="grid w-[18rem] auto-rows-fr grid-cols-1 items-center justify-items-center gap-10 min-[480px]:w-[25rem] md:w-full md:grid-cols-2 xl:grid-cols-3">
          {workExperiences.map((experience, index) => (
            <div
              key={index}
              className="flex h-full w-full flex-col items-start justify-between gap-6 bg-white px-6 py-4 text-slate-950"
            >
              <h2 className="font-semibold md:text-xl">{experience.title}</h2>
              <h3 className="text-lg font-medium">{experience.company}</h3>

              <div className="flex flex-col items-start gap-2">
                <div className="flex flex-wrap gap-1">
                  {experience.technologies.map((technology, index) => (
                    <p
                      key={index}
                      className="bg-slate-900 px-2 text-sm text-white"
                    >
                      {technology}
                    </p>
                  ))}
                </div>

                <div className="flex w-full items-end justify-between">
                  <p className="text-sm font-normal">
                    {formatDate(experience.startDate)} -{" "}
                    {formatDate(experience.endDate)}
                  </p>

                  <Dialog>
                    <DialogTrigger className="flex items-center gap-2 hover:underline">
                      More details
                      <DoubleArrowRightIcon />
                    </DialogTrigger>

                    <DialogContent className="flex w-[18rem] flex-col items-start overflow-auto min-[400px]:w-[24rem] md:w-[40rem] lg:w-[50rem]">
                      <DialogHeader>
                        <DialogTitle className="text-xl text-slate-900">
                          {experience.title}
                        </DialogTitle>
                      </DialogHeader>
                      <DialogDescription className="text-justify text-lg">
                        <MarkdownRenderer markdown={experience.description} />
                      </DialogDescription>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default WorkExperiences;
