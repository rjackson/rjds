import React from 'react';

interface H2Props extends React.ComponentPropsWithoutRef<'h2'> {}

export const H2 = ({ className, children, ...props }: H2Props) => {
  return (
    <h2
      className={`
        text-2xl
        font-semibold
        text-center
        text-gray-600

        dark:text-gray-300
      
        ${className}
    `}
      {...props}
    >
      {children}
    </h2>
  );
};
