import Image from "next/image"
import logoBottom from '@/assets/logo-bottom-side.svg'
import logoTop from '@/assets/logo-top-side.svg'
import { motion } from 'framer-motion'
import { useEffect, useState } from "react"


interface LogoProps {
  animation?: boolean
}

export function Logo({animation}: LogoProps){
  
  return (
    <div id="mask" className="relative w-[85px] h-[85px]">
      {animation && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
            top: "25%",
            right: "25%"
          }}
          animate={{
            opacity: 1,
            scale: 1,
            top: 0,
            right: 0
          }}
          transition={{delay: 0.3, duration: 1.5}}
          className="absolute top-0 right-0"
        >
          <Image src={logoTop} alt="launchx"/>
        </motion.div>
      )}
      {!animation && (
        <Image src={logoTop} alt="launchx" className="absolute top-0 right-0"/>
      )}
      <Image src={logoBottom} alt="launchx" className="absolute bottom-0 left-0"/>
    </div>
  )
}