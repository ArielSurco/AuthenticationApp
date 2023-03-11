// External
import { HTMLAttributes } from 'react';

// Internal
import { concatClassnames } from 'utils/functions';

// Styles
import './Input.scss';

interface IInputProps extends HTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element | null;
  isTextArea?: boolean;
}

const Input = ({ className, icon = null, ...rest }: IInputProps) => (
  <div className={concatClassnames(className, 'input-container')}>
    {icon && (
    <span className="icon-container">
      {icon}
    </span>
    )}
    <input className="input" {...rest} />
  </div>
);

export default Input;
