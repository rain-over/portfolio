'use client';

import React, { createContext, useContext, useState } from 'react';
import { links } from '@/../lib/data';

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};
type ActiveSectionContextProviderType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};
type SectionName = (typeof links)[number]['name'];

export const ActiveSectionContext =
  createContext<ActiveSectionContextProviderType | null>(null); // set null to throw errors on failure

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

//create hook to handle null
export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used within an ActiveSectionContextProvider'
    );
  }
  return context;
}
