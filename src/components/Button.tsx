import React, { forwardRef } from 'react';

type ButtonVariants = 'primary' | 'secondary';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariants;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, className, children, ...props }, ref): JSX.Element => {
    return (
      <button
        ref={ref}
        className={`${
          variantButtonClasses[variant ?? 'secondary']
        } ${className ?? ''}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

const baseButtonClasses = `
px-2
py-1
rounded

ring-2
ring-gray-400
border-2
border-transparent
`;

const variantButtonClasses: Record<ButtonVariants, string> = {
  primary:
    baseButtonClasses +
    `
    ring-indigo-500
    bg-indigo-500
    text-white

    hover:border-white

    focus:outline-none
    focus:border-white

    dark:bg-fuchsia-500
    dark:ring-fuchsia-500

    dark:hover:border-gray-900
    dark:focus:border-gray-900
    `,

  secondary:
    baseButtonClasses +
    `
    bg-white

    hover:ring-indigo-500
    hover:border-white
    hover:bg-indigo-500
    hover:text-white

    focus:outline-none
    focus:ring-indigo-500
    focus:border-white
    focus:bg-indigo-500
    focus:text-white

    dark:hover:bg-fuchsia-500
    dark:hover:border-gray-900
    dark:hover:ring-fuchsia-500
    dark:focus:bg-fuchsia-500
    dark:focus:border-gray-900
    dark:focus:ring-fuchsia-500
    dark:bg-gray-900
    `,
};
