import * as React from 'react';

interface DescriptionListItemProps
  extends React.ComponentPropsWithoutRef<'div'> {
  title: string;
  titleElement?: JSX.Element;
  children: React.ReactNode;
}

export const DescriptionListItem = ({
  title,
  titleElement,
  children,
  className = '',
  ...props
}: DescriptionListItemProps): JSX.Element => {
  return (
    <div className={className} {...props}>
      <dt className="font-semibold">{titleElement ?? title}</dt>
      <dd>{children}</dd>
    </div>
  );
};

type DescriptionListProps = React.ComponentPropsWithoutRef<'dl'>;

export const DescriptionList = ({
  className,
  children,
  ...props
}: DescriptionListProps): JSX.Element => {
  return (
    <dl className={`flex flex-col space-y-4 ${className ?? ''}`} {...props}>
      {children}
    </dl>
  );
};
