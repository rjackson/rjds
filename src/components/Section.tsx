import React from 'react';

type SectionProps = React.ComponentPropsWithoutRef<'section'>;

export const Section = ({
  className,
  children,
  ...props
}: SectionProps): JSX.Element => {
  return (
    <section className={`w-full px-6 py-2 ${className ?? ''}`} {...props}>
      {children}
    </section>
  );
};
