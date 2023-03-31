import React, { forwardRef } from 'react';

export const anchorClasses = `
  inline-block
  px-1
  -mx-1

  cursor-pointer

  text-indigo-600
  hover:bg-indigo-100

  focus:outline-none
  focus:bg-indigo-100
  focus:ring
  focus:ring-indigo-500

  dark:text-fuchsia-300
  dark:hover:text-fuchsia-300
  dark:hover:bg-fuchsia-800
  dark:focus:text-fuchsia-300
  dark:focus:bg-fuchsia-800
  dark:focus:ring-fuchsia-500
`;

type AnchorProps = React.ComponentPropsWithoutRef<'a'>;

export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ className, children, ...props }, ref): JSX.Element => {
    return (
      <a ref={ref} className={`${anchorClasses} ${className ?? ''}`} {...props}>
        {children}
      </a>
    );
  }
);
