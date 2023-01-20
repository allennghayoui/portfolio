import React from "react";

function ProjectsItem({title, stack, imgUrl, link})
{
    return (
        <div id="projects-item" className="mt-8 border-2 border-zinc-900 rounded-sm overflow-hidden
                    dark:text-stone-300 dark:border-stone-300">
                <img
                    className="mx-auto w-full h-44 md:h-52 object-cover"
                    src={imgUrl}
                />

                <div className="w-full p-4">
                    <a
                        href={link}
                        target="_blank"
                    >
                        <h3 className="text-lg mb-2 font-bold dark:text-stone-300">{title}</h3>
                    </a>

                    <p className="flex flex-wrap flex-row items-center gap-2">{stack.map(item => 
                        <span className="inline-block px-1 md:px-2 font-semibold border-2 border-zinc-900
                                        dark:text-stone-300 dark:border-stone-300">
                            {item}
                        </span>
                        )}
                    </p>
                </div>
                
        </div>
    )
}

export default ProjectsItem;