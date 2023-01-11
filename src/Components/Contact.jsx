import React from "react";
import Title from "./Title";
import {AiOutlineMail, AiFillGithub, AiFillLinkedin} from "react-icons/ai";



function Contact() {

    return (
        <div id="contact" className="flex flex-col mt-20 items-center justify-center text-center">
            <Title>Contact</Title>

                <div id="socials" className="flex flex-col items-start pt-20 lg:text-3xl md:text-2xl text-xl text-black dark:text-stone-300">
                    <div className="flex flex-row">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=allen.nghayoui@gmail.com">
                            <div className="flex flex-row gap-8">
                                <AiOutlineMail className="mt-1" />
                                <label className="cursor-pointer">allen.nghayoui@gmail.com</label>
                            </div>
                        </a>
                    </div>
                    <br />
                    
                    <div className="flex flex-row">
                        <a href="https://github.com/allennghayoui">
                            <div className="flex flex-row gap-8">
                                    <AiFillGithub className="mt-1" />
                                    <label className="cursor-pointer">github.com/allennghayoui</label>
                            </div>
                        </a>
                    </div>
                    <br />
                    
                    <div className="flex flex-row">
                        <a href="https://www.linkedin.com/in/allennghayoui/">
                            <div className="flex flex-row gap-8">
                                <AiFillLinkedin className="mt-1" />
                                <label className="cursor-pointer">linkedin.com/in/allennghayoui</label>
                            </div>
                            
                        </a>
                    </div>
                    
                    
                </div>
        </div>
    )
}

export default Contact;