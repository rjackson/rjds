import React from 'react';

type ButtonVariants = 'primary' | 'secondary';

interface ButtonProps
  extends React.ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariants;
}

export const Button = ({
  variant,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${variantButtonClasses[variant ?? 'secondary']} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

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

    dark:bg-fuchsia-400
    dark:ring-fuchsia-400

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

    dark:hover:bg-fuchsia-400
    dark:hover:border-gray-900
    dark:hover:ring-fuchsia-400
    dark:focus:bg-fuchsia-400
    dark:focus:border-gray-900
    dark:focus:ring-fuchsia-400
    dark:bg-gray-900
    `,
};
