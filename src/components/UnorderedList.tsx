import React from 'react';

interface UnorderedListProps extends React.ComponentPropsWithoutRef<'ul'> {}

export const UnorderedList = ({
  className,
  children,
  ...props
}: UnorderedListProps) => {
  return (
    <ul className={`list-disc list-inside pl-3 ${className}`} {...props}>
      {children}
    </ul>
  );
};
