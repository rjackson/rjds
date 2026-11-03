import type * as React from 'react';
import type { JSX } from 'react';

type PanelProps = React.ComponentPropsWithoutRef<'div'>;

export const Panel = ({
  className,
  children,
  ...props
}: PanelProps): JSX.Element => {
  return (
    <div
      className={`
        py-6
        px-4

        rounded-md
        shadow-sm
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
