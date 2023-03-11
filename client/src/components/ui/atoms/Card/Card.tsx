/* eslint-disable react/require-default-props */
// Internal
import { concatClassnames } from 'utils/functions';

// Styles
import './Card.scss';

interface ICardProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const Card = ({ children, className }: ICardProps) => (
  <div className={concatClassnames(className, 'card')}>
    {children}
  </div>
);

export default Card;
