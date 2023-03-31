import React from 'react';

interface H3Props extends React.ComponentPropsWithoutRef<'h3'> {}

export const H3 = ({ className, children, ...props }: H3Props) => {
  return (
    <h3
      className={`
        text-lg
        font-semibold
        text-center
        text-gray-600

        dark:text-gray-300
      
        ${className ?? ''}
    `}
      {...props}
    >
      {children}
    </h3>
  );
};
