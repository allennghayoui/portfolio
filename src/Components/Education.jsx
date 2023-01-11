import React from "react";
import major from "../data/major";
import minor from "../data/minor";
import MajorItem from "./MajorItem";
import MinorItem from "./MinorItem";

function Education() {
    return (
        <div id="education" className="education grid grid-cols-1">
            <h1 className="md:text-4xl text-2xl font-bold mb-4 text-start
                            dark:text-stone-300">Education</h1>

            <div className="flex flex-col items-left justify-left">
                {major.map(item=>(
                    <MajorItem
                        date = {item.date}
                        title = {item.title}
                        location = {item.location}
                        details = {item.details}
                        coursesCompleted = {item.coursesCompleted}
                        currentlyEnrolled = {item.currentlyEnrolled}

                    />
                ))}
            </div>
            
            <div className="flex flex-col items-left justify-left">
                    {minor.map(item=>(
                        <MinorItem
                            title={item.title}
                            coursesCompleted = {item.coursesCompleted}
                            currentlyEnrolled = {item.currentlyEnrolled}
                        />
                    ))}
            </div>

            <div>
                
            </div>
        </div>
    )
}

export default Education;