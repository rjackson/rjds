import React from 'react';

type UnorderedListProps = React.ComponentPropsWithoutRef<'ul'>;

export const UnorderedList = ({
  className,
  children,
  ...props
}: UnorderedListProps): JSX.Element => {
  return (
    <ul className={`list-disc list-inside pl-3 ${className ?? ''}`} {...props}>
      {children}
    </ul>
  );
};
