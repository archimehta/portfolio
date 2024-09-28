'use client'

import { motion } from "framer-motion"
import Image from "next/image"

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{
                    opacity: 1, 
                    transition: { delay: 2, duration: 0.2, ease: "easeInOut" }
                }}>
                {/* Container for both image and animated circle */}
                <div className="relative w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]">
                    {/* Image - Absolute positioning */}
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{
                            opacity: 1, 
                            transition: { delay: 2, duration: 0.2, ease: "easeIn" }
                        }}
                        className="absolute top-0 left-0 w-full h-full mix-blend-lighten">
                        <Image 
                            src="/assets/headshot_blur.png" 
                            priority 
                            quality={100} 
                            fill 
                            alt="" 
                            className="object-contain" 
                        />
                    </motion.div>
                    
                    {/* Animated circle - Absolute positioning */}
                    <motion.svg 
                        className="absolute top-0 left-0 w-full h-full"
                        fill="transparent"
                        viewBox="0 0 506 506"
                        xmlns="http://www.w3.org/2000/svg">
                        <motion.circle 
                            cx="253" 
                            cy="253" 
                            r="250" 
                            stroke="#00ff99" 
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ strokeDasharray: "24 10 0 0" }}
                            animate={{
                                strokeDasharray: [
                                    "15 120 25 25", 
                                    "16 25 92 72", 
                                    "4 250 22 22"
                                ],
                                rotate: [0, 360]  // Rotate around the center
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                            style={{
                                transformOrigin: '50% 50%'  // Fix the rotation point to the center
                            }}
                        />
                    </motion.svg>
                </div>
            </motion.div>
        </div>
    );
}

export default Photo;
