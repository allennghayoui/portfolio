import { type ProjectType } from "@/data/projects";
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
import Link from "next/link";
import { formatDate } from "@/utils";

interface ProjectsProps {
  projects: ProjectType[];
}

const Projects = ({ projects }: ProjectsProps) => {
  if (projects.length === 0) return;

  return (
    <>
      {projects.length === 1 && (
        <div>
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex h-full w-[25rem] flex-col items-start justify-between gap-6 bg-white px-6 py-4 text-slate-950"
            >
              <h2 className="text-xl font-semibold">{project.title}</h2>

              <div className="flex flex-col items-start gap-2">
                <div className="flex flex-col items-start gap-2">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((technology, index) => (
                      <p
                        key={index}
                        className="bg-slate-900 px-2 text-sm text-white"
                      >
                        {technology}
                      </p>
                    ))}
                  </div>

                  {project.videoDemoUri ? (
                    <div className="flex w-full flex-col items-start gap-2">
                      <div className="flex w-full items-center justify-between">
                        <Link
                          href={project.videoDemoUri}
                          className="hover:underline"
                        >
                          Video Demo
                        </Link>

                        <Dialog>
                          <DialogTrigger className="flex items-center gap-2 hover:underline">
                            More details
                            <DoubleArrowRightIcon />
                          </DialogTrigger>

                          <DialogContent className="flex w-[50rem] flex-col items-start">
                            <DialogHeader>
                              <DialogTitle className="text-xl text-slate-900">
                                {project.title}
                              </DialogTitle>
                            </DialogHeader>
                            <DialogDescription className="text-justify text-lg">
                              <MarkdownRenderer
                                markdown={project.description}
                              />
                            </DialogDescription>
                          </DialogContent>
                        </Dialog>
                      </div>

                      <p className="text-sm">
                        {formatDate(project.startDate)} -{" "}
                        {formatDate(project.startDate)}
                      </p>
                    </div>
                  ) : (
                    <div className="flex w-full items-center justify-between">
                      <p className="text-sm">
                        {formatDate(project.startDate)} -{" "}
                        {formatDate(project.startDate)}
                      </p>

                      <Dialog>
                        <DialogTrigger className="flex items-center gap-2 hover:underline">
                          More details
                          <DoubleArrowRightIcon />
                        </DialogTrigger>

                        <DialogContent className="flex w-[50rem] flex-col items-start">
                          <DialogHeader>
                            <DialogTitle className="text-xl text-slate-900">
                              {project.title}
                            </DialogTitle>
                          </DialogHeader>
                          <DialogDescription className="text-justify text-lg">
                            <MarkdownRenderer markdown={project.description} />
                          </DialogDescription>
                        </DialogContent>
                      </Dialog>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {projects.length > 1 && (
        <div className="grid w-full grid-cols-1 items-center justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex h-full w-full flex-col items-start justify-between gap-6 bg-white px-6 py-4 text-slate-950"
            >
              <h2 className="font-semibold md:text-xl">{project.title}</h2>

              <div className="flex w-full flex-col items-start gap-2">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((technology, index) => (
                    <p
                      key={index}
                      className="bg-slate-900 px-2 text-xs text-white md:text-sm"
                    >
                      {technology}
                    </p>
                  ))}
                </div>

                {project.videoDemoUri ? (
                  <div className="flex w-full flex-col items-start gap-2">
                    <div className="flex w-full items-center justify-between">
                      <Link
                        href={project.videoDemoUri}
                        className="hover:underline"
                      >
                        Video Demo
                      </Link>

                      <Dialog>
                        <DialogTrigger className="flex items-center gap-2 hover:underline">
                          More details
                          <DoubleArrowRightIcon />
                        </DialogTrigger>

                        <DialogContent className="flex w-[50rem] flex-col items-start">
                          <DialogHeader>
                            <DialogTitle className="text-xl text-slate-900">
                              {project.title}
                            </DialogTitle>
                          </DialogHeader>
                          <DialogDescription className="text-justify text-lg">
                            <MarkdownRenderer markdown={project.description} />
                          </DialogDescription>
                        </DialogContent>
                      </Dialog>
                    </div>

                    <p className="text-sm">
                      {formatDate(project.startDate)} -{" "}
                      {formatDate(project.startDate)}
                    </p>
                  </div>
                ) : (
                  <div className="flex w-full items-center justify-between">
                    <p className="text-sm">
                      {formatDate(project.startDate)} -{" "}
                      {formatDate(project.startDate)}
                    </p>

                    <Dialog>
                      <DialogTrigger className="flex items-center gap-2 hover:underline">
                        More details
                        <DoubleArrowRightIcon />
                      </DialogTrigger>

                      <DialogContent className="flex w-[50rem] flex-col items-start">
                        <DialogHeader>
                          <DialogTitle className="text-xl text-slate-900">
                            {project.title}
                          </DialogTitle>
                        </DialogHeader>
                        <DialogDescription className="text-justify text-lg">
                          <MarkdownRenderer markdown={project.description} />
                        </DialogDescription>
                      </DialogContent>
                    </Dialog>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Projects;
