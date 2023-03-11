// External
import { HTMLAttributes } from 'react';

// Internal
import { concatClassnames } from 'utils/functions';

// Styles
import './Title.scss';

type FontWeight = 300 | 400 | 500 | 600;

export interface ITitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: JSX.Element | JSX.Element[] | string;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  fontWeight?: FontWeight;
}

const Title = ({
  children, className, level: Tag = 'h1', fontWeight = 500, ...rest
}: ITitleProps) => (
  <Tag className={concatClassnames(className, 'title', `fw-${fontWeight}`)} {...rest}>
    {children}
  </Tag>
);

export default Title;
