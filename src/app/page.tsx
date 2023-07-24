"use client"
import { Logo } from '@/components/Logo'
import Image from 'next/image'

import { motion, useAnimate } from 'framer-motion'

import arrowDown from '@/assets/arrow-down.svg'
import menuButton from '@/assets/menu-button.svg'
import { useState } from 'react'
import WavyText from '@/components/WaveText'
import { FirstLoader } from '@/components/FirstLoader'
import classNames from 'classnames'
import ReactPlayer from 'react-player'

export default function Home() {
    const [step, setStep] = useState(0)
    const [scope, animate] = useAnimate()

    // FINTECH
    // EDTECH
    // TELEHEALTH

    return (
        <motion.main
            initial={{
                background: "linear-gradient(180deg, #000 0%, #3D3D3D 100%)",
            }}
            animate={{
                background: "#000",
            }}
            transition={{
                delay: 5,
            }}
            className={classNames('w-full h-[100vh] flex items-center justify-center')}>
            <header className='h-[56px] flex items-center justify-between px-6 py-8 absolute top-0 w-full max-w-[1180px]'>
                <WavyText text='LAUNCHX' replay delay={4} className='text-xl font-light tracking-[0.3rem] text-white'/>
                <div className=''>
                    <motion.div 
                        initial={{
                            opacity: 0,
                            y: 150
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            delay: 7,
                            duration: 0.350
                        }}
                        className='w-max h-10 flex items-center gap-6 justify-center'
                    >
                        <button className='w-[108px] h-10 hidden md:flex items-center justify-center border border-white rounded-full text-white text-sm '>
                            Contact
                        </button>
                        <Image src={menuButton} alt='Menu' className='w-10 h-10'/>
                    </motion.div>
                </div>
            </header>
            {step == 0 && (
                <FirstLoader onfinish={() => setStep(1)}/>
            )}
            {step == 1 && (
                <div className='text-white md:relative'>
                    <div className='flex flex-col items-start justify-center gap-2 font-bold text-5xl md:text-[6rem] p-6 relative'>
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 150
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.3
                            }}
                            className='absolute right-8 -top-8 md:top-8 md:right-16'
                        >
                            {/* <video width="320" height="180" loop muted autoPlay>
                                <source src="https://livefiredev.com/wp-content/uploads/2022/09/size_reduced_fire_bg_video.mp4" type="video/mp4"/>
                            </video> */}
                            <div className='masked'>
                                <ReactPlayer playing={true} muted  url='https://www.youtube.com/watch?v=NNJNVOWwg30&ab_channel=ExuberanteNatureza' />
                            </div>
                        </motion.div>
                        <motion.h1
                            initial={{
                                opacity: 0,
                                x: -150
                            }}
                            animate={{
                                opacity: 1,
                                x: 0
                            }}
                            transition={{
                                duration: 0.5
                            }}
                        >
                            Building
                        </motion.h1>
                        <WavyText replay text='tech for now'/>
                        <motion.h1
                            initial={{
                                opacity: 0,
                                x: 150
                            }}
                            animate={{
                                opacity: 1,
                                x: 0
                            }}
                            transition={{
                                duration: 0.5
                            }}
                        >
                            and the future
                        </motion.h1>
                    </div>
                    <motion.div 
                        initial={{
                            opacity: 0,
                            y: 150
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        className='text-2xl mt-12 hidden md:flex'
                    >
                        <span>
                            <strong>From</strong> <a>startups</a> <strong>to</strong> <a>industry leaders</a>,
                            <strong> we build the future with you.</strong>
                        </span>
                        <div className='w-16 h-16 rounded-full border hidden border-white md:flex justify-center items-center absolute -right-[150px] -bottom-[120px] overflow-hidden'>
                            <motion.div 
                                initial={{
                                    y: 0
                                }}
                                animate={{
                                    y: [-50, 0, 50]
                                }}
                                transition={{
                                    repeat: Infinity,
                                    repeatDelay: 1,
                                    ease: "easeInOut",
                                    duration: 1
                                }}
                            >
                                <Image src={arrowDown} alt='' className='w-6 h-6'/>
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.footer 
                        initial={{
                            opacity: 0,
                            y: 150
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        className='absolute bottom-0 left-0 flex items-center justify-between p-6 md:hidden w-full'
                    >
                        <span>
                            <strong>From</strong> <a>startups</a> <strong>to</strong> <a>industry leaders</a>,<br />
                            <strong>we build the future with you.</strong>
                        </span>
                        <div className='w-12 h-12 rounded-full border border-white flex md:hidden justify-center items-center overflow-hidden'>
                            <motion.div 
                                initial={{
                                    y: 0
                                }}
                                animate={{
                                    y: [-50, 0, 50]
                                }}
                                transition={{
                                    repeat: Infinity,
                                    repeatDelay: 1,
                                    ease: "easeInOut",
                                    duration: 1
                                }}
                                
                            >

                                <Image src={arrowDown} alt='' className='w-5 h-5'/>
                            </motion.div>
                        </div>
                    </motion.footer>
                </div>
            )}
        </motion.main>
    )
}
