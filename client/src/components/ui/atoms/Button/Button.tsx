// External
import { HTMLAttributes } from 'react';

// Internal
import { concatClassnames } from 'utils/functions';

// Styles
import './Button.scss';

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'icon';
  isOutline?: boolean;
  isIcon?: boolean;
  isSubmit?: boolean;
}

const Button = ({
  children,
  className,
  variant = 'primary',
  isOutline = false,
  isIcon = false,
  isSubmit = false,
  ...rest
}: IButtonProps) => (
  <button
    className={concatClassnames(
      className,
      'btn',
      variant && `btn-${variant}`,
      isOutline && 'btn-outline',
      isIcon && 'btn-icon',
    )}
    type={isSubmit ? 'submit' : 'button'}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
