import { Logo } from '@/components/Logo'
import Image from 'next/image'

import { motion, useAnimate } from 'framer-motion'

import logoLabel from '@/assets/logo-label.svg'
import { useState } from 'react'
import WavyText from '@/components/WaveText'

export function FirstLoader({onfinish}: any) {
  const [step, setStep] = useState(0)
  const [scope, animate] = useAnimate()

  return (
    <div className={'flex items-center justify-center'}>
      <div className='flex flex-col justify-center items-center'>
        <motion.div initial={{ opacity: 0, scale: 2 }} animate={{ opacity: 1, scale: 1 }}>
          <Logo animation/>
        </motion.div>
        <div className='flex items-center justify-start relative w-[320px] h-[60px] '>
          <motion.div
            ref={scope}
            className='flex items-center justify-center absolute left-0 logo-label'
            transition={{ duration: 0.8 }}
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1
            }}
          >
            <Image src={logoLabel} alt='launchx' />
          </motion.div>
          <div className='pl-[170px]'>
            {step == 0 && (
              <WavyText
                finishAnimationAction={() =>
                  setStep(1)
                }
                className="text-2xl font-bold tracking-widest text-white"
                text='FINTECH'
                delay={0.3}
                replay
              />
            )}
            {step == 1 && (
              <WavyText
                finishAnimationAction={() =>
                  setStep(2)
                }
                className="text-2xl font-bold tracking-widest text-white"
                text='EDTECH'
                replay
              />
            )}
            {step == 2 && (
              <WavyText
                finishAnimationAction={() => {
                  setStep(5)
                  animate(scope.current, { left: 0, right: 0 }, { duration: 0.2 })
                  setTimeout(() => {
                    onfinish()
                  }, 2500)
                }}
                text='TELEHEALTH'
                className="text-2xl font-bold tracking-widest text-white"
                replay
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}