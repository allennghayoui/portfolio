import React from "react";

function MajorItem({title, date, details, location, coursesCompleted, currentlyEnrolled}) {
    return (
        <div id="major-item" className="Major items-left justify-left text-left whitespace-nowrap">
            <p className="date font-bold dark:text-stone-300">{date}</p>
            <h3 className="location font-medium text-md md:text-xl dark:text-stone-300">{location}</h3>
            <div className="MajorItem pt-4">
                <h2 className="title font-semibold text-lg md:text-2xl md:whitespace-pre-wrap
                                dark:text-stone-300">{title}</h2>

                <ul className="list-disc text-md pl-8 md:text-xl md:pl-14 dark:text-stone-300">

                    {details.map(point => <li>{point}</li>)}

                    <li>

                        Courses Completed
                        <ul className="list-[circle] ml-10">
                            {coursesCompleted.map(point => <li>{point}</li>)}
                        </ul>
                        
                    </li>

                    <li>

                        Currently Enrolled
                        <ul className="list-[circle] ml-10">
                            {currentlyEnrolled.map(point => <li>{point}</li>)}
                        </ul>

                    </li>
                    
                </ul>
            </div>
        </div>
    )
}

export default MajorItem;