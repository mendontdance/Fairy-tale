import React, { FC, useEffect, useState } from 'react';
import bem from 'bem-cn';
import { useStore } from '../../store/RootStoreContext';
import { IMiniTest } from './types';
import TestVariant from '../TestVariant';
import './styles.scss';

const MiniTest: FC<IMiniTest> = ({ data, result, counter, setCounter, page, setResult }) => {
  const classBem = bem('mini-test');
  const [isDisabled, setIsDisabled] = useState(false);
  const [firstAnswer, setFirstAnswer] = useState(true);
  const { runtime } = useStore();

  const onCLick = (answer: string) => {
    if (answer === data?.rightAnswer) {
      setIsDisabled(true);
      if (firstAnswer) {
        setCounter(++counter);
        setFirstAnswer(false);
      }
    } else {
      setFirstAnswer(false);
    }
  };

  useEffect(() => {
    setIsDisabled(false);
    setFirstAnswer(true);
  }, [data]);

  useEffect(() => {
    if (page + 1 === runtime?.fairyTale?.test.length) {
      if (counter > runtime?.fairyTale?.test.length / 2) {
        setResult(data?.success);
      } else if (counter < runtime?.fairyTale?.test.length / 2) {
        setResult(data?.error);
      }
    }
  }, [counter, page]);

  const counterText = `Результат: ${counter}`;

  return (
    <div className={classBem()}>
      <div className={classBem('title')}>{result ? result : data?.test?.text}</div>
      {result === data?.success && <div className={classBem('title')}>Можете приступить к следующему уроку</div>}
      {!result && (
        <>
          <div className={classBem('counter')}>{counterText}</div>
          <fieldset className={classBem('choice')}>
            {data?.test?.variants.map((dataItem) => {
              return (
                <TestVariant dataItem={dataItem} onClick={onCLick} key={dataItem} data={data} isDisabled={isDisabled} />
              );
            })}
          </fieldset>
        </>
      )}
    </div>
  );
};

export default MiniTest;
