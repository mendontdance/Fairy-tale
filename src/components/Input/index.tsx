import React, { FC, useState } from 'react';
import bem from 'bem-cn';
import { IInput } from './types';
import './styles.scss';

const Input: FC<IInput> = ({ dataItem, onClick, data }) => {
  const [answer, setAnswer] = useState('');
  const [disabled, setDisabled] = useState(false);
  const classBem = bem('input-container');

  const onCLickRadio = () => {
    onClick(dataItem);
    setDisabled(true);
    if (dataItem === data?.rightAnswer) {
      setAnswer('right');
    } else if (dataItem !== data?.rightAnswer) {
      setAnswer('wrong');
    }
  };

  return (
    <div className={classBem({ answer: answer, disabled: disabled })} key={dataItem}>
      <input
        className={classBem('input', { disabled: disabled })}
        type="radio"
        id={dataItem}
        key={dataItem}
        value={dataItem}
        onClick={onCLickRadio}
        disabled={disabled}
      />
      <label htmlFor={dataItem} className={classBem('label', { disabled: disabled })}>
        {dataItem}
      </label>
    </div>
  );
};

export default Input;
