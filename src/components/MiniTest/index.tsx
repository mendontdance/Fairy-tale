import React, { FC } from 'react';
import bem from 'bem-cn';
import { IMiniTest } from './types';
import './styles.scss';
import Input from '../Input';

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
          return <Input dataItem={dataItem} onClick={onCLick} key={dataItem} data={data} />;
        })}
      </fieldset>
    </div>
  );
};

export default MiniTest;
