import React from "react";

function Languages() {
    return (
        <div id="languages" className="flex flex-col pt-8">
            <div className="flex flex-col items-left justify-left">
                <div className="items-left justify-left text-left">
                    <h1 className="text-2xl md:text-4xl font-bold pb-4
                                     dark:text-stone-300">Languages</h1>

                    <div>
                        <ul className="list-disc text-md md:text-xl pl-10 dark:text-stone-300">
                            <li>English (Fluent)</li>
                            <li>Arabic (Native)</li>
                            <li>French (Proficient)</li>
                        </ul>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default Languages;
