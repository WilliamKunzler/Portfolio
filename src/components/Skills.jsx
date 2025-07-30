import Title from "./reusable/Title"
import { IoBriefcase } from "react-icons/io5";
import React from "react"
// import { SiPython, SiFlask, SiFlutter, SiFigma, SiCsharp, SiJavascript, SiCss3, SiHtml5, SiReact, SiLooker, SiQliksense, SiMysql, SiCanva, SiReact } from '@icons-pack/react-simple-icons';

import { FaPython } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { FaFlutter } from "react-icons/fa6";
import { IoLogoFigma } from "react-icons/io5";
import { FaSquareJs } from "react-icons/fa6";
import { BiLogoCss3 } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiLooker } from "react-icons/si";
import { SiQlik } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { SiCanva } from "react-icons/si";
import { SiApacheecharts } from "react-icons/si";
import { SiC } from "react-icons/si";

function Experience() {

    const tecnologias = [
        { name: 'Python', icon: <FaPython /> },
        { name: 'Flask', icon: <SiFlask /> },
        { name: 'Flutter', icon: <FaFlutter /> },
        { name: 'Figma', icon: <IoLogoFigma /> },
        { name: 'C#', icon: <SiC /> },
        { name: 'JavaScript', icon: <FaSquareJs /> },
        { name: 'CSS', icon: <BiLogoCss3 /> },
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'Looker', icon: <SiLooker /> },
        { name: 'Qlik Sense', icon: <SiQlik /> },
        { name: 'MySQL', icon: <DiMysql /> },
        { name: 'Canva', icon: <SiCanva /> },
        { name: 'Echarts', icon: <SiApacheecharts /> }
    ];

    return (
        <div className="flex flex-col gap-8 text-white">
            <div className="flex gap-5 items-center">
                <IoBriefcase className="size-6 text-[#F50057]" />
                <Title title={"Skills"} />
            </div>
            <p className="text-gray-300 max-w-4xl ">
                Throughout my journey in technology, I've had the opportunity to explore various tools, languages, and platforms that have expanded my skills as a developer and analyst. This section brings together the main technologies I'm familiar with, from development frameworks to data visualization and design tools.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
                {tecnologias.map((item, index) => (
                    <div
                        key={index}
                        className="group w-[120px] h-[120px] flex flex-col items-center justify-center p-4 rounded-2xl shadow-lg bg-[#1e1e1e] transform transition-all duration-300 hover:scale-110 hover:z-10 relative"
                    >
                        {React.cloneElement(item.icon, {
                            className: "size-10 text-white transition-colors duration-300 group-hover:text-[#F50057]"
                        })}
                        <span className="absolute bottom-3 text-sm text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 text-center pointer-events-none">
                            {item.name}
                        </span>
                    </div>
                ))}

            </div>
        </div>



    )
}

export default Experience