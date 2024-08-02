import wcs from '@/public/wcs.png'
import discord from '@/public/discord.svg'
import refx from '@/public/refx.png'
import devforum from '@/public/devforum.svg'

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const

export const projectsData = [
  {
    title: 'WCS',
    description:
      'I have created a popular open source combat-system framework that allows you to easily build your advanced combat systems.',
    tags: ['Roblox-Ts', 'Typescript', 'Reflex', 'Wally', 'Docusaurus'],
    imageUrl: wcs,
    url: 'https://devforum.roblox.com/t/wcs-a-combat-system-framework/2843521',
  },
  /*{
    title: 'Topbar-Plus',
    description:
      'I am a maintainer for @rbxts/topbar-plus package typings and an official contributor to a widely used and popular library topbar-plus.',
    tags: ['Wally', 'LuaU', 'Typescript', 'Rojo'],
    imageUrl: topbarplus,
    url: 'https://devforum.roblox.com/t/v3-topbarplus-v300-construct-intuitive-topbar-icons-customise-them-with-themes-dropdowns-captions-labels-and-much-more/1017485',
  },*/
  {
    title: 'Refx',
    description:
      'One of my open source projects. 💖 A library for Replicating Visual Effects in Roblox.',
    tags: ['Wally', 'LuaU', 'Lune', 'Rojo'],
    imageUrl: refx,
    url: 'https://devforum.roblox.com/t/refx-a-library-for-replicating-visual-effects-in-roblox/2961747',
  },
] as const

export type ContactLabelData = (typeof contactsData)[number]
export const contactsData = [
  {
    name: 'Discord',
    text: '@wad4444',
    icon: discord,
    url: 'https://discord.com/users/343061601831616522',
  },
  {
    name: 'Developer Forum',
    text: '@g1mmethemoney',
    icon: devforum,
    url: 'https://devforum.roblox.com/u/g1mmethemoney',
  },
] as const

type LinkTuple = [string, string?]
export const skillsData: LinkTuple[] = [
  ['Rojo', 'https://rojo.space/'],
  ['Roblox-Ts', 'https://roblox-ts.com/'],
  ['Wally', 'https://wally.run/'],
  ['TypeScript', 'https://www.typescriptlang.org/'],
  ['JavaScript', undefined],
  ['React', 'https://react.dev/'],
  ['Reflex', 'https://littensy.github.io/reflex/'],
  ['Fusion', 'https://elttob.uk/Fusion/0.2/'],
  ['Lua', undefined],
  ['LuaU', 'https://luau-lang.org/'],
  ['Flamework', 'https://flamework.fireboltofdeath.dev/'],
  ['Github', 'https://github.com/'],
  ['Git', 'https://git-scm.com/'],
  ['Promise', 'https://eryn.io/roblox-lua-promise/'],
] as const
