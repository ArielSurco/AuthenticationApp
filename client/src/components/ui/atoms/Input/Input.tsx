// External
import { HTMLAttributes } from 'react';

// Internal
import { concatClassnames } from 'utils/functions';

// Styles
import './Input.scss';

interface IInputProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: JSX.Element | null;
  isTextArea?: boolean;
}

const Input = ({
  className, label = '', icon = null, ...rest
}: IInputProps) => (
  <div className={concatClassnames(className, 'input-field')}>
    {label && <label htmlFor={rest.id} className="label">{label}</label>}
    <div className="input-container">
      {icon && (
      <span className="icon-container">
        {icon}
      </span>
      )}
      <input className="input" {...rest} />
    </div>
  </div>
);

export default Input;
