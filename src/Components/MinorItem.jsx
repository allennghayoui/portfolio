import React from "react";

function MinorItem({title, coursesCompleted, currentlyEnrolled}) {
    return (
        <div id="minor-item" className="MinorItem items-left justify-left text-left pt-4 whitespace-nowrap pr-[166px]">
            <h2 className="title font-semibold text-lg md:text-2xl
                             dark:text-stone-300">{title}</h2>

            <ul className="list-disc text-md pl-8 md:text-xl md:pl-14 dark:text-stone-300">
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
    )
}

export default MinorItem;