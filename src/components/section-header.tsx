import React from 'react';

type SectionHeaderProps = {
  children: React.ReactNode;
};

export default function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <h2 className="mx-auto mb-8 text-center text-4xl font-medium capitalize">
      {children}
    </h2>
  );
}
