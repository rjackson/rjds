import React from 'react';

type H2Props = React.ComponentPropsWithoutRef<'h2'>;

export const H2 = ({ className, children, ...props }: H2Props): JSX.Element => {
  return (
    <h2
      className={`
        text-2xl
        font-semibold
        text-center
        text-gray-600

        dark:text-gray-300
      
        ${className ?? ''}
    `}
      {...props}
    >
      {children}
    </h2>
  );
};
