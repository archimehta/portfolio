'use client'

import { motion } from "framer-motion"
import React, {useState} from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import { BsArrowUpRight, BsArrowDownRight, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "@/components/WorkSliderBtns"

const projects = [
    {
        num: '01',
        category: 'Inventory Tracker',
        title: 'project 1',
        description: "Implemented Google Firebase to create an inventory tracker with add, remove, sort, and search functionality.",
        stack: [
            {name: "JavaScript"}, {name: "HTML"}, {name: "React"}
        ],
        image: "/assets/inventory_managements_ss.png",
        live: "https://pantry-tracker-pi-plum.vercel.app/",
        github: "https://github.com/archimehta/InventoryTracker",
    },
    {
        num: '02',
        category: 'Customer Support AI',
        title: 'project 2',
        description: "Integrated OpenAI's API to create a chatbot that assists with inquiries regarding Headstarter AI.",
        stack: [
            {name: "JavaScript"}, {name: "HTML"}, {name: "Node.js"}
        ],
        image: "/assets/customer_support_ss.png",
        live: "https://customer-support-ai-vert.vercel.app/",
        github: "https://github.com/archimehta/customer-support-ai",
    },
    {
        num: '03',
        category: 'Ultimate Tic Tac Toe',
        title: 'project 3',
        description: "Utilized the Tkinter interface to produce an ultimate tic tac toe game with logical functionality.",
        stack: [
            {name: "Python"}, {name: "T3 Stack"}, {name: "Tkinter"}
        ],
        image: "/assets/ultimate_ttt_ss.png",
        live: "",
        github: "https://github.com/archimehta/ultimateTicTacToe",
    },
    {
        num: '04',
        category: 'AI Flashcards',
        title: 'project 4',
        description: "Implemented OpenAI to create user-prompted AI-generated flashcards and utilizes Firebase to store the flashcard sets.",
        stack: [
            {name: "JavaScript"}, {name: "HTML"}, {name: "OpenAI"}
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
        const currentIndex = swiper.realIndex;
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
                        {project.category}
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
                        <Link href= {project.live} target="_blank" rel="noopener noreferrer">
                            <TooltipProvider delayDuration = {100}>
                                <Tooltip>
                                    <TooltipTrigger className = "w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center duration-500 group hover:-rotate-45">
                                        <BsArrowDownRight className = "text-white text-3xl group-hover:text-accent"/>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Live project</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </Link>
                        <Link href= {project.github} target="_blank" rel="noopener noreferrer">
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
                    <Swiper spaceBetween = {30} slidesPerView = {1} loop  ={true} className = "xl:h-[520px] mb-12" onSlideChange={handleSlideChange} onSwiper = {setSwiperInstance}>
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