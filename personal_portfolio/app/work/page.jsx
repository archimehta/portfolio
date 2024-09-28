'use client'

import { motion } from "framer-motion"
import React, {useState} from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "@/components/WorkSliderBtns"

const projects = [
    {
        num: '01',
        category: 'frontend',
        title: 'project 1',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam modi.",
        stack: [
            {name: "Html 5"}, {name: "Css 3"}, {name: "JavaScript"}
        ],
        image: "/assets/inventory_managements_ss.png",
        live: "",
        github: "",
    },
    {
        num: '02',
        category: 'fullstack',
        title: 'project 2',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam modi.",
        stack: [
            {name: "Next.js"}, {name: "Tailwind.css"}, {name: "Node.js"}
        ],
        image: "/assets/customer_support_ss.png",
        live: "",
        github: "",
    },
    {
        num: '03',
        category: 'backend',
        title: 'project 3',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam modi.",
        stack: [
            {name: "Html 5"}, {name: "Css 3"}, {name: "JavaScript"}
        ],
        image: "/assets/ultimate_ttt_ss.png",
        live: "",
        github: "",
    },
    {
        num: '04',
        category: 'frontend',
        title: 'project 4',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam modi.",
        stack: [
            {name: "Html 5"}, {name: "Css 3"}, {name: "JavaScript"}
        ],
        image: "/assets/ai_flashcards_ss.png",
        live: "",
        github: "",
    },
];


const Work = () => {
    const [project, setProject] = useState(projects[0]);
    const[swiperInstance, setSwiperInstance] = useState(null);
    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    }
    return <motion.section initial = {{opacity: 0}} animate = {{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}} className = "min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
        <div className = "container mx-auto">
            <div className = "flex flex-col xl:flex-row xl:gap-[30px]">
                <div className = "w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                    <div className = "flex flex-col gap-[30px] h-[50%]">
                        <div className = "text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                    </div>
                    <h2 className = "text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                        {project.category} project
                    </h2>
                    <p className = "text-white/60">{project.description}</p>
                    <ul className = "flex gap-4">
                        {project.stack.map((item, index)=>{
                            return (
                                <li key = {index} className = "text-xl text-accent">
                                    {item.name}
                                    {index != project.stack.length - 1 && ","}
                                </li>
                            );
                        })}
                    </ul>
                    <div className = "border bordern-white/20"></div>
                    <div className = "flex items-center gap-4">
                        <Link href= {project.live}>
                            <TooltipProvider delayDuration = {100}>
                                <Tooltip>
                                    <TooltipTrigger className = "w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                        <BsArrowUpRight className = "text-white text-3xl group-hover:text-accent"/>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Live project</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </Link>
                        <Link href= {project.github}>
                            <TooltipProvider delayDuration = {100}>
                                <Tooltip>
                                    <TooltipTrigger className = "w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                        <BsGithub className = "text-white text-3xl group-hover:text-accent"/>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Github repository</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </Link>
                    </div>
                </div>
                <div className = "w-full xl:w-[50%]">
                    <Swiper spaceBetween = {30} slidesPerView = {1} className = "xl:h-[520px] mb-12" onSlideChange={handleSlideChange} onSwiper = {setSwiperInstance}>
                        {projects.map((project,index)=> {
                            return <SwiperSlide key = {index} className = "w-full">
                                <div className = "h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                    <div className = "absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                    <div className = "relative w-full h-full">
                                    <Image src = {project.image} fill className = "object-cover" alt = ""/>
                                    </div>
                                </div>
                            </SwiperSlide>
                        })}
                    </Swiper>
                    <p className="text-center text-white text-lg mb-4">Swipe to see more projects</p>
                    <WorkSliderBtns 
                        swiper={swiperInstance} 
                        containerStyles="flex gap-9 justify-center"
                        btnStyles = "p-4 hover:bg-accent rounded-full"
                        iconsStyles="text-white text-4xl"
                        />
                </div>
            </div>
        </div>
    </motion.section>
}

export default Work