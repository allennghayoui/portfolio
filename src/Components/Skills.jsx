import React from "react";
import { technicalSkills, softSkills } from "../data/skills";

function Skills() {
    return (
        <div id="skills" className="items-center justify-center text-center">
            <h1 className="text-2xl md:text-4xl font-bold text-start
                             dark:text-stone-300">Skills</h1>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 text-left">
                <div className="pt-4">
                    <h3 className="font-semibold text-lg dark:text-stone-300">Technical Skills</h3>
                    <ul className="technical-skills list-disc text-md md:text-xl ml-10
                                     dark:text-stone-300">
                        {technicalSkills.map(skill => <li>{skill}</li>)}
                    </ul>
                </div>
                
                <div className="pt-4">
                    <h3 className="font-semibold text-lg dark:text-stone-300">Soft Skills</h3>
                    <ul className="soft-skills list-disc text-md md:text-xl ml-10
                                     dark:text-stone-300">
                        {softSkills.map(skill => <li>{skill}</li>)}
                    </ul>
                </div>
            </div>
        </div>
        
       
    )
}

export default Skills;
