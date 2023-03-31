import React from 'react';

interface PanelProps extends React.ComponentPropsWithoutRef<'div'> {}

export const Panel = ({ className, children, ...props }: PanelProps) => {
  return (
    <div
      className={`
        py-6
        px-4

        rounded-md
        shadow
        bg-white

        dark:bg-gray-800
        dark:border
        dark:border-gray-700
        ${className ?? ''}
      `}
      {...props}
    >
      {children}
    </div>
  );
};
