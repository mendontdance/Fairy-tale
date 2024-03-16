import React, { FC, useState } from 'react';
import bem from 'bem-cn';
import { IMiniTest } from './types';
import TestVariant from '../TestVariant';
import './styles.scss';

const MiniTest: FC<IMiniTest> = ({ data, setResult, result }) => {
  const classBem = bem('mini-test');
  const [isDisabled, setIsDisabled] = useState(false);

  const onCLick = (answer: string) => {
    if (answer === data?.rightAnswer) {
      setResult(data?.success);
      setIsDisabled(true);
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
            <TestVariant dataItem={dataItem} onClick={onCLick} key={dataItem} data={data} isDisabled={isDisabled} />
          );
        })}
      </fieldset>
    </div>
  );
};

export default MiniTest;
