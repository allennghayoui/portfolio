import React from "react";
import project from "../data/project";
import ProjectsItem from "./ProjectsItem";
import Title from "./Title";

function Projects()
{
    return (
        <div id="projects" className="mt-20 flex flex-col items-center justify-center">
            <Title>Projects</Title>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-8 gap-8 md:gap-4 md:px-4">
                {project.map(item => (
                    <ProjectsItem
                        title={item.title}
                        stack={item.stack}
                        imgUrl={item.imgUrl}
                    />
                ))}
            </div>
            
        </div>
    )
}

export default Projects;