import React, { FC, useState } from 'react';
import bem from 'bem-cn';
import { IInput } from './types';
import './styles.scss';

const Input: FC<IInput> = ({ dataItem, onClick, data }) => {
  const [answer, setAnswer] = useState('');
  const classBem = bem('input-container');

  const onCLick = () => {
    onClick(dataItem);
    if (dataItem === data?.rightAnswer) {
      setAnswer('right');
    } else if (dataItem !== data?.rightAnswer) {
      setAnswer('wrong');
    }
  };

  return (
    <div className={classBem({ answer: answer })} key={dataItem}>
      <input
        className={classBem('input')}
        type="radio"
        id={dataItem}
        key={dataItem}
        value={dataItem}
        onClick={onCLick}
      />
      <label htmlFor={dataItem} className={classBem('label')}>
        {dataItem}
      </label>
    </div>
  );
};

export default Input;
