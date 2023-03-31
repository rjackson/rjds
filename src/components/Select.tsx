import React from 'react';
import { inputClasses } from './Input';

type SelectProps = React.ComponentPropsWithoutRef<'select'>;

// TODO: definitely find a better way of handling this lmao
const selectClasses = inputClasses.replace('appearance-none', '');

export const Select = ({
  className,
  children,
  ...props
}: SelectProps): JSX.Element => {
  return (
    <select className={`${selectClasses} ${className ?? ''}`} {...props}>
      {children}
    </select>
  );
};
