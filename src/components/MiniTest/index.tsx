import React, { FC } from 'react';
import bem from 'bem-cn';
import { IMiniTest } from './types';
import './styles.scss';

const MiniTest: FC<IMiniTest> = ({ data, setResult, result }) => {
  const classBem = bem('mini-test');

  const onCLick = (answer: string) => {
    if (answer === data?.rightAnswer) {
      setResult(data?.success);
    } else {
      setResult(data?.error);
    }
  };

  return (
    <div className={classBem()}>
      <div className={classBem('title')}>{result ? result : data.test?.text}</div>
      <fieldset className={classBem('choice')}>
        {data.test?.variants.map((dataItem) => {
          return (
            <div className={classBem('text')} key={dataItem}>
              <input
                className={classBem('input')}
                type="radio"
                id={dataItem}
                key={dataItem}
                value={dataItem}
                onClick={() => onCLick(dataItem)}
              />
              <label htmlFor={dataItem}>{dataItem}</label>
            </div>
          );
        })}
      </fieldset>
    </div>
  );
};

export default MiniTest;
