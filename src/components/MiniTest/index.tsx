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
        setFirstAnswer(false);
      }
    } else {
      setCounter(--counter);
      setFirstAnswer(false);
    }
    console.log(page + 1, runtime.fairyTale?.test.length);
    if (page + 1 === runtime.fairyTale?.test.length) {
      if (counter && answer === data?.rightAnswer) {
        setResult(data?.success);
      }
    }
  };

  useEffect(() => {
    setIsDisabled(false);
    setFirstAnswer(true);
  }, [data]);

  useEffect(() => {
    if (counter === 0) {
      setResult(data?.error);
    }
  }, [counter, page]);

  const counterText = `Тест: ${page + 1}/${runtime.fairyTale?.test.length}`;
  const lives = Array(counter)
    .fill('')
    .map((elem, index) => <div className={classBem('life')} key={index} />);

  return (
    <div className={classBem()}>
      <div className={classBem('title')}>{result ? result : data?.test?.text}</div>
      <div className={classBem('amount')}>{counterText}</div>
      {result === data?.success && <div className={classBem('title')}>Можете приступить к следующему уроку</div>}
      {!result && (
        <>
          <div className={classBem('counter')}>{lives}</div>
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
