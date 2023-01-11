import React from "react";

function About() {
    return (
        <div id="about" className="About flex flex-col items-center align-center justify-center text-center pt-10 pb-2">
            <h1 className="Name text-5xl font-black mb-16 xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl
                            dark:text-stone-300">Allen Nghayoui</h1>
            <div className="photo-container h-44 w-44 lg:h-72 lg:w-72 md:w-64 md:h-64 sm:h-56 sm:w-56 mb-10">
                <img
                    src="/assets/About-Photo.jpg"
                    className="object-cover h-full w-full rounded-full"
                />
            </div>
            

            <div className="Bio">
                <p className="text-3xl font-semibold max-w-md sm:max-w-xl md:max-w-2xl
                                dark:text-stone-300">
                    I'm a Computer Science student. I strive to find creative solutions to
                    complex problems by applying the different concepts that I learn. I am
                    also pursuing a Minor in Finance because I'm interested in topics like Personal
                    Finance and Investments.
                </p>
            </div>
        </div>
    )
}

export default About;