import React, { forwardRef } from 'react';

export const inputClasses = `
w-full
px-2
py-1
rounded

appearance-none
ring-2
ring-gray-400

focus:outline-none
focus:ring
focus:ring-indigo-500

dark:focus:ring-fuchsia-500
dark:ring-gray-500
dark:bg-gray-900
`;

type InputProps = React.ComponentPropsWithoutRef<'input'>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, children, ...props }, ref): JSX.Element => {
    return (
      <input
        ref={ref}
        className={`${inputClasses} ${className ?? ''}`}
        {...props}
      >
        {children}
      </input>
    );
  }
);
