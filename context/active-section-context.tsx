'use client'

import { links } from '@/lib/data'
import React, { createContext, useContext, useState } from 'react'

export type SectionName = (typeof links)[number]['name']
interface Props extends React.PropsWithChildren {}

type ActionSectionContextType = {
  activeSection: SectionName
  setSection: React.Dispatch<React.SetStateAction<SectionName>>
  timeOfLastClick: number
  setLastClickTime: React.Dispatch<React.SetStateAction<number>>
}

const ActiveSectionContext = createContext<ActionSectionContextType>(null!)

export default function ActiveSectionContextProvider({ children }: Props) {
  const [activeSection, setSection] = useState<SectionName>('Home')
  const [timeOfLastClick, setLastClickTime] = useState(0)

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setSection,
        timeOfLastClick,
        setLastClickTime,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext)
  if (!context) {
    throw new Error(
      'useActiveSectionContext must be used within a ActiveSectionContextProvider'
    )
  }

  return context
}
