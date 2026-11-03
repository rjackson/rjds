import { forwardRef, type JSX } from 'react';
import type * as React from 'react';

export const inputClasses = `
w-full
px-2
py-1
rounded-sm

appearance-none
ring-2
ring-gray-400

focus:outline-hidden
focus:ring-3
focus:ring-indigo-500

dark:focus:ring-fuchsia-500
dark:ring-gray-500
dark:bg-gray-900
`;

type InputProps = React.ComponentPropsWithoutRef<'input'>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref): JSX.Element => {
    return (
      <input
        ref={ref}
        className={`${inputClasses} ${className ?? ''}`}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
