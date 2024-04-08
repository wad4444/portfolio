'use client'

import { projectsData } from '@/lib/data'
import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type ProjectProps = (typeof projectsData)[number]

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  })

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div
      className="group mb-3 sm:mb-8 last:mb-0"
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      ref={ref}
    >
      <a href={url} target="_blank">
        <section className="hover:bg-gray-200 transition rounded-lg bg-gray-100 max-w-[42rem] max-h-[20rem] sm:h-[20rem] relative sm:group-even:pl-8 border-black/5 overflow-hidden sm:pr-8">
          <div className="sm:group-even:ml-[18rem] pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <Image
            className="absolute mt-1 group-hover:scale-[1.04]
                    group-hover:-translate-x-3
                    group-hover:-translate-y-3
                    group-hover:-rotate-2 
                    
                    hidden

                    sm:block

                    group-even:group-hover:translate-x-3
                    group-even:group-hover:translate-y-3
                    group-even:group-hover:rotate-2 

                    group-even:right-[initial]
                    group-even:-left-40
                    transition top-8 w-[28.25rem]
                    rounded-t-lg shadow-2xl -right-40"
            src={imageUrl}
            quality={95}
            alt={'Project I worked on'}
          />
        </section>
      </a>
    </motion.div>
  )
}
