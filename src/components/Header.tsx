import React from 'react';

type HeaderProps = React.ComponentPropsWithoutRef<'header'>;

export const Header = ({
  className,
  children,
  ...props
}: HeaderProps): JSX.Element => {
  return (
    <header
      className={`w-full px-6 py-2 flex flex-col py-4 space-y-4 ${className ??
        ''}`}
      {...props}
    >
      {children}
    </header>
  );
};
