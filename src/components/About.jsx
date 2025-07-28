import Title from "./reusable/Title"
import { FaUser } from "react-icons/fa";
import AboutPhoto from '../images/AboutPhoto.jpeg';

function About(){
    return (

        <div className="flex flex-col gap-8 text-white">
            <div className="flex gap-10 items-center justify-betweenp-10">
                <div className="flex flex-col gap-5">
                    <div className="flex gap-5 items-center">
                        <FaUser className="size-6 text-[#F50057]" />
                        <Title title={"About Me"}/>
                    </div>
                    <p className="text-gray-300 max-w-4xl">
                        Hello, my name is William Kunzler. I'm a huge technology enthusiast, constantly striving to evolve and improve my technical and personal skills. Tell me a little more about myself:
                        My training began with the Internet Computing Technician course at the Instituto Federal Catarinense (IFC), where I acquired skills in web development, programming, project structuring, 
                        and the creation of software and mobile applications. I'm currently pursuing a Bachelor's degree in Computer Science, also at IFC, expanding my technical and logical knowledge. Although
                        I've been exposed to various fields, my main focus is full-stack development and data analysis, where I constantly strive for improvement and innovation in creating modern, functional interfaces with secure, reliable data.            
                    </p>
                </div>

                <div className="border border-gray-400 w-[500px] h-[400px] items-center justify-center flex">
                <img src={AboutPhoto} className="size-[90%]" alt="" />

                </div>
                

            </div>
        </div>
    )
}

export default About