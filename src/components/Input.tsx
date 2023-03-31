import React from 'react';

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

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {}

export const Input = ({ className, children, ...props }: InputProps) => {
  return (
    <input className={`${inputClasses} ${className}`} {...props}>
      {children}
    </input>
  );
};
