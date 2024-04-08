/* eslint-disable react/no-unescaped-entities */
'use client'

import React from 'react'
import Image from 'next/image'
import avatar from '@/public/avatar.png'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks'

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.6)

  return (
    <section
      ref={ref}
      id="home"
      className="mb-10 scroll-mt-[100rem] max-w-[50rem] text-center sm:mb-14"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}
          >
            <Image
              width="192"
              height="192"
              quality="95"
              priority={true}
              alt="portrait"
              src={avatar}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-0 text-2xl "
          >
            <div className="hover:rotate-12 hover:-translate-y-[0.1rem] transition">
              😅
            </div>
          </motion.span>
        </div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
      >
        hello, <span className="font-bold">i'm wAD!! </span> a roblox developer
        with over than <span className="font-bold">3 years </span> of
        experience, <span className="font-bold">passionate</span> about{' '}
        <span className="font-bold">technology </span> and{' '}
        <span className="font-bold">computer science</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          className="group bg-gray-900 outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition text-white px-7 py-3 flex items-center gap-2 rounded-full"
          href={'#contact'}
        >
          Contact me
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <Link
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10"
          href={'#projects'}
        >
          View My Works
          <BsArrowRight className="opacity-60 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="https://github.com/g1mmethemoney"
          target="_blank"
          className="bg-white p-4 flex items-center gap-2 text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10 cursor-pointer rounded-full"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  )
}
