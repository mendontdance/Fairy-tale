import React, { FC, useEffect, useState } from 'react';
import bem from 'bem-cn';
import { IInput } from './types';
import './styles.scss';

const TestVariant: FC<IInput> = ({ dataItem, onClick, data, isDisabled, className }) => {
  const [answer, setAnswer] = useState('');
  const [disabled, setDisabled] = useState(false);
  const classBem = bem('test-container');

  const onCLickVariant = () => {
    if (!disabled) {
      onClick(dataItem);
      setDisabled(true);
      if (dataItem === data?.rightAnswer) {
        setAnswer('right');
      } else if (dataItem !== data?.rightAnswer) {
        setAnswer('wrong');
      }
    }
  };

  useEffect(() => {
    setDisabled(!!isDisabled);
  }, [isDisabled]);
  console.log(disabled);

  const inputClassName = className
    ? `${classBem('variant', { disabled: disabled })} ${className}`
    : classBem('variant', { disabled: disabled });

  return (
    <div className={classBem({ answer: answer, disabled: disabled })} key={dataItem} onClick={onCLickVariant}>
      <div className={inputClassName} id={dataItem} key={dataItem} />
      <div className={classBem('label', { disabled: disabled })}>{dataItem}</div>
    </div>
  );
};

export default TestVariant;
