import * as React from 'react';

interface SingleColumnLayoutProps extends React.ComponentPropsWithoutRef<'div'> {
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}

const SingleColumnLayout = ({
  header,
  footer,
  children,
  className = '',
  ...props
}: SingleColumnLayoutProps) => {
  return (
    <div
      className={`
      flex
      flex-col
      items-center
      w-screen
      h-screen
      space-y-4
      overflow-auto
      text-lg

      text-gray-900
      bg-gray-50

      dark:text-gray-50
      dark:bg-gray-900
      ${className}
    `}
      {...props}
    >
      {header}
      <div
        className={`
        flex
        flex-col
        w-full
        max-w-screen-md
        space-y-2
      `}
      >
        {children}
      </div>
      {footer}
    </div>
  );
};

export { SingleColumnLayoutProps };
export { SingleColumnLayout };
