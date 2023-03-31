import React from 'react';

interface SectionProps extends React.ComponentPropsWithoutRef<'section'> {}

export const Section = ({ className, children, ...props }: SectionProps) => {
  return (
    <section className={`w-full px-6 py-2 ${className ?? ''}`} {...props}>
      {children}
    </section>
  );
};
