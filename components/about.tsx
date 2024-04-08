'use client'
/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const { ref } = useSectionInView('About', 1)

  return (
    <motion.section
      ref={ref}
      className="mb-10 sm:mb-28 sm:mt-14 max-w-[45rem] scroll-mt-28 text-center leading-8"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I'm a <span className="font-medium">professional programmer</span> with
        over than <span className="font-medium">3 years</span> of experience.
        I'm very passionate about OSS projects and{' '}
        <span className="font-medium">maintaining a few myself</span>. I utilize{' '}
        <span className="font-medium">industry standart</span> modern tools in
        my workflow, such as{' '}
        <span className="font-medium">Rojo and Roblox-Ts</span> to build my{' '}
        <span className="font-medium">personal projects</span> or{' '}
        <span className="font-medium">work in a team</span>.
      </p>
      <p>
        I always like to <span className="font-medium">learn new things</span>{' '}
        and <span className="font-medium">extend my knowledge</span>, while
        working <span className="font-medium">on achieving my goals.</span> I
        treat roblox development <span className="font-medium">as my job</span>{' '}
        and looking forward some{' '}
        <span className="font-medium">serious offers</span>{' '}
        <span className="font-medium">with fair amount of payment</span> for my
        skills.
      </p>
    </motion.section>
  )
}
