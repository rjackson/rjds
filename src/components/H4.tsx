import React from 'react';

interface H4Props extends React.ComponentPropsWithoutRef<'h4'> {}

export const H4 = ({ className, children, ...props }: H4Props) => {
  return (
    <h4
      className={`
        text-base
        font-semibold
        text-center
        text-gray-600

        dark:text-gray-300
      
        ${className ?? ''}
    `}
      {...props}
    >
      {children}
    </h4>
  );
};
