import React, { forwardRef } from 'react';
import { inputClasses } from './Input';

type SelectProps = React.ComponentPropsWithoutRef<'select'>;

// TODO: definitely find a better way of handling this lmao
const selectClasses = inputClasses.replace('appearance-none', '');

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref): JSX.Element => {
    return (
      <select
        ref={ref}
        className={`${selectClasses} ${className ?? ''}`}
        {...props}
      >
        {children}
      </select>
    );
  }
);
