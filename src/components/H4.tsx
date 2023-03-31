import React from 'react';

type H4Props = React.ComponentPropsWithoutRef<'h4'>;

export const H4 = ({ className, children, ...props }: H4Props): JSX.Element => {
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
