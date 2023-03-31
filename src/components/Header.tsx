import React from 'react';

interface HeaderProps extends React.ComponentPropsWithoutRef<'header'> {}

export const Header = ({ className, children, ...props }: HeaderProps) => {
  return (
    <header
      className={`w-full px-6 py-2 flex flex-col py-4 space-y-4 ${className}`}
      {...props}
    >
      {children}
    </header>
  );
};
