import React, { FC } from 'react';
import bem from 'bem-cn';
import { IButton } from './types';
import './styles.scss';

const Button: FC<IButton> = ({ disabled, className, onClick, text }) => {
  const classBem = bem('button');
  const buttonClassName = className
    ? `${classBem({ disabled: disabled })} ${className}`
    : classBem({ disabled: disabled });
  return (
    <button disabled={disabled} className={buttonClassName} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
