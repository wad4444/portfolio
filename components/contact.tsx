'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'
import { ContactLabelData, contactsData } from '@/lib/data'
import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
  initial: (index: number) => ({
    opacity: 0,
    x: (index % 2 == 0 ? 1 : -1) * 100,
  }),
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.15 * index,
    },
  }),
}

function ContactLabel({
  data,
  index,
}: {
  data: ContactLabelData
  index: number
}) {
  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      id={data.name}
      custom={index}
      className="group"
    >
      <a
        className="group-hover:bg-neutral-100 group-hover:-translate-y-2 transition bg-white border border-black/[1/3] rounded-xl flex flex-row"
        href={data.url}
        target="_blank"
      >
        <Image
          quality={95}
          src={data.icon}
          alt="Contact Logo"
          className="h-full pl-5 pt-5 pb-5 w-1/4 group-hover:rotate-6 transition"
        />
        <span className="pl-3 pt-3 w-full h-full text-left flex flex-col justify-center">
          <p className="text-2xl font-medium capitalize">{data.name}</p>
          <p className="text-neutral-500 text-xl">{data.text}</p>
        </span>
      </a>
    </motion.div>
  )
}

export default function Contacts() {
  const { ref } = useSectionInView('Contact', 1)

  return (
    <section
      className="max-w-[30rem] mb-10 scroll-mt-[100rem] text-center"
      id="contact"
      ref={ref}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="pb-6">
        You can <span className="font-medium">contact me</span> through
        following <span className="font-medium">social media</span>:
      </p>
      <ul className="flex flex-col justify-center h-full gap-6 text-lg text-gray-800">
        {contactsData.map((data, index) => (
          <ContactLabel key={index} index={index} data={data} />
        ))}
      </ul>
    </section>
  )
}
