import React from "react";
import Title from "./Title";
import Education from "./Education";
import Workshop from "./Workshop";
import Skills from "./Skills";
import Languages from "./Languages";

function Resume() {

    return (
        <div id="resume" className="Resume justify-center text-center items-center mt-20">
            <Title>Resume</Title>
                <div className="grid grid-col-1 md:gap-8 lg:grid-cols-2 xl:pl-20 2xl:pl-52 items-center justify-center mt-20 pl-4">
                    <Education />
                    <div className="grid grid-col-1 pt-10">
                        <Skills />
                        <Languages />
                        <Workshop />
                    </div>
                </div>
            
        </div>
    )
}

export default Resume;