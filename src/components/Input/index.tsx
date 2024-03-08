import React, { FC, useState } from 'react';
import bem from 'bem-cn';
import { IInput } from './types';
import './styles.scss';

const Input: FC<IInput> = ({ dataItem, onClick, data }) => {
  const [state, setState] = useState('');
  const classBem = bem('input-container');
  return (
    <div className={classBem({ answer: state })} key={dataItem}>
      <input
        className={classBem('input')}
        type="radio"
        id={dataItem}
        key={dataItem}
        value={dataItem}
        onClick={() => {
          onClick(dataItem);
          dataItem === data?.rightAnswer ? setState('right') : setState('wrong');
        }}
      />
      <label htmlFor={dataItem} className={classBem('label')}>
        {dataItem}
      </label>
    </div>
  );
};

export default Input;
