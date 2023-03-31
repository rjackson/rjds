import React from 'react';

type SectionProps = React.ComponentPropsWithoutRef<'section'>;
type MainProps = React.ComponentPropsWithoutRef<'main'>;
type Props = (SectionProps & { as?: 'section' }) | (MainProps & { as: 'main' });

export const Section = ({
  as,
  className,
  children,
  ...props
}: Props): JSX.Element => {
  const Component = as === 'main' ? 'main' : 'section';

  return (
    <Component className={`w-full px-6 py-2 ${className ?? ''}`} {...props}>
      {children}
    </Component>
  );
};
