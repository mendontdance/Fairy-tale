import BottomPanel from '../../components/BottomPanel';
import React, { useEffect, useState } from 'react';
import { IFairyTaleData } from '../../configs/types';
import bem from 'bem-cn';
import { useNavigate } from 'react-router-dom';
import { MiniTest } from '../../components';
import { useStore } from '../../store/RootStoreContext';
import { DATA } from '../../configs/data';
import './styles.scss';

const FairyTaleTest = () => {
  const classBem = bem('fairy-tale-test');
  const navigate = useNavigate();
  const { runtime } = useStore();
  const [page, setPage] = useState(0);
  const [result, setResult] = useState<string | undefined>(undefined);
  const [data, setData] = useState<IFairyTaleData | undefined>(undefined);
  const [counter, setCounter] = useState(3);
  const onClickHome = () => {
    navigate('/');
  };

  const onClickTest = () => {
    navigate('/story');
  };

  const onClickForward = () => {
    const { fairyTale } = runtime;
    if (result !== data?.success) {
      setPage((prevState) => {
        if (prevState + 1 === runtime?.fairyTale?.test?.length) return prevState;
        return ++prevState;
      });
    } else {
      const fairyTalesData = Object.values(DATA);
      runtime.setFairyTale(fairyTalesData[fairyTale!.id + 1]);
      navigate('/story');
    }
  };

  useEffect(() => {
    if (runtime?.fairyTale?.test[page]) {
      setData(runtime?.fairyTale?.test[page]);
    }
  }, [page, runtime?.fairyTale?.data]);

  return (
    <div className={classBem()}>
      <div className={classBem('text-container')}>
        <MiniTest
          data={data}
          setResult={setResult}
          result={result}
          counter={counter}
          setCounter={setCounter}
          page={page}
          setPage={setPage}
        />
      </div>
      <div className={classBem('panel')}>
        {data?.image && <img src={data?.image} alt={data?.text} className={classBem('img')} />}
        <BottomPanel
          audio={data?.audio}
          page={page}
          onClickHome={onClickHome}
          onClickForward={onClickForward}
          onClickTest={onClickTest}
          result={result === data?.success}
        />
      </div>
    </div>
  );
};

export default FairyTaleTest;
