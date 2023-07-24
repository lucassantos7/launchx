"use client"
import { Logo } from '@/components/Logo'
import Image from 'next/image'

import { motion, useAnimate } from 'framer-motion'

import logoLabel from '@/assets/logo-label.svg'
import menuButton from '@/assets/menu-button.svg'
import { useState } from 'react'
import WavyText from '@/components/WaveText'
import { FirstLoader } from '@/components/FirstLoader'
import classNames from 'classnames'

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
            <header className='h-[56px] flex items-center justify-between px-6 py-8 absolute top-0 w-full'>
                <WavyText text='LAUNCHX' replay delay={4} className='text-xl font-light tracking-[0.3rem] text-white'/>
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
                    className='w-10 h-10 flex items-center justify-center'
                >
                    <Image src={menuButton} alt='Menu' className='w-8 h-8'/>
                </motion.div>
            </header>
            {step == 0 && (
                <FirstLoader onfinish={() => setStep(1)}/>
            )}
            {step == 1 && (
                <div className='text-white'>
                    <div className='flex flex-col items-start justify-center gap-2 font-bold text-5xl p-6 relative'>
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
                            className='absolute right-8 -top-8'
                        >
                            <Logo/>
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
                    <motion.footer 
                        initial={{
                            opacity: 0,
                            y: 150
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        className='absolute bottom-0 left-0 flex items-center justify-start p-6'
                    >
                        <span>
                            <strong>From</strong> <a>startups</a> <strong>to</strong> <a>industry leaders</a>,<br />
                            <strong>we build the future with you.</strong>
                        </span>
                    </motion.footer>
                </div>
            )}
        </motion.main>
    )
}
