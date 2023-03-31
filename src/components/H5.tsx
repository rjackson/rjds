import React from 'react';

interface H5Props extends React.ComponentPropsWithoutRef<'h5'> {}

export const H5 = ({ className, children, ...props }: H5Props) => {
  return (
    <h5
      className={`
        text-sm
        font-semibold
        text-center
        text-gray-600

        dark:text-gray-300
      
        ${className}
    `}
      {...props}
    >
      {children}
    </h5>
  );
};
