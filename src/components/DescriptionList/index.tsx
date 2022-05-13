import * as React from 'react';
import styled from 'styled-components';

interface DescriptionListItemProps
  extends React.ComponentPropsWithoutRef<'div'> {
  title: string;
  children: React.ReactNode;
}

const DescriptionListItem = ({
  title,
  children,
  className = '',
  ...props
}: DescriptionListItemProps) => {
  return (
    <div className={`${className}`} {...props}>
      <dt className="font-semibold">{title}</dt>
      <dd>{children}</dd>
    </div>
  );
};

const DescriptionList = styled.dl.attrs({
  className: `flex flex-col space-y-4`,
})``;

export { DescriptionListItem, DescriptionListItemProps };
export default DescriptionList;
