import React from 'react';

export type AlertsVariant = 'success' | 'info' | 'warning' | 'error';

interface AlertProps extends React.ComponentPropsWithoutRef<'div'> {
  variant?: AlertsVariant;
}

export const Alert = ({
  variant,
  className,
  children,
  ...props
}: AlertProps) => {
  return (
    <div
      className={`${variantAlertClasses[variant ?? 'info']} ${className ?? ''}`}
      {...props}
    >
      {children}
    </div>
  );
};

const baseAlertClasses = 'px-4 py-2 rounded-md';
const variantAlertClasses: Record<AlertsVariant, string> = {
  success: `${baseAlertClasses} bg-green-100 text-green-900 dark:bg-green-900 dark:text-green-100`,
  info: `${baseAlertClasses} bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100`,
  warning: `${baseAlertClasses} bg-yellow-100 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-100`,
  error: `${baseAlertClasses} bg-red-100 text-red-900 dark:bg-red-900 dark:text-red-100`,
};
