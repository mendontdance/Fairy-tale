import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import bem from 'bem-cn';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store/RootStoreContext';
import BottomPanel from '../../components/BottomPanel';
import { IFairyTaleData } from '../../configs/types';
import { MiniTest } from '../../components';
import './styles.scss';

const FairyTale = () => {
  const classBem = bem('fairy-tale');
  const ref = useRef<HTMLAudioElement>(null);
  const navigate = useNavigate();
  const { runtime } = useStore();
  const [page, setPage] = useState(0);
  const [data, setData] = useState<IFairyTaleData | undefined>(undefined);
  const [result, setResult] = useState<string | undefined>(undefined);
  const [prevData, setPrevData] = useState<IFairyTaleData | undefined>(undefined);

  if (!runtime.fairyTale) {
    navigate('/');
  }

  const onEnded = () => {
    setResult(undefined);
    setPage((prevState) => {
      if (prevState + 1 === runtime?.fairyTale?.data?.length) return prevState;
      return ++prevState;
    });
  };

  const onClickHome = () => {
    navigate('/');
    setResult(undefined);
  };

  const onClickAudio = () => {
    if (!runtime.audioPlay) {
      ref.current?.play();
      runtime.setAudioPlay(true);
    } else {
      ref.current?.pause();
      runtime.setAudioPlay(false);
    }
  };

  const onClickBack = () => {
    setResult(undefined);
    setPage((prevState) => {
      if (prevState - 1 < 0) return prevState;
      return --prevState;
    });
  };

  const onClickForward = () => {
    setResult(undefined);
    setPage((prevState) => {
      if (prevState + 1 === runtime?.fairyTale?.data?.length) return prevState;
      return ++prevState;
    });
  };

  useEffect(() => {
    if (runtime?.fairyTale?.data[page]) {
      setData(runtime?.fairyTale?.data[page]);
    }

    if (page !== 0) {
      setPrevData(runtime?.fairyTale?.data[page - 1]);
    } else {
      setPrevData(undefined);
    }
  }, [page, runtime?.fairyTale?.data]);

  return (
    <div className={classBem()}>
      <div className={classBem('text-container')}>
        {data?.test ? (
          <MiniTest data={data} setResult={setResult} result={result} />
        ) : (
          <>
            {data?.title && <div className={classBem('title')}>{data?.title}</div>}
            {data?.audio && (
              <audio ref={ref} src={data?.audio} preload="auto" autoPlay={runtime.audioPlay} onEnded={onEnded} />
            )}
            <div className={classBem('text', { previous: true })}>{prevData?.text}</div>
            <div className={classBem('text', { current: true })}>{data?.text}</div>
          </>
        )}
      </div>
      <div className={classBem('panel')}>
        {data?.image && <img src={data?.image} alt={data?.text} className={classBem('img')} />}
        <BottomPanel
          audio={data?.audio}
          page={page}
          onClickHome={onClickHome}
          onClickAudio={onClickAudio}
          onClickBack={onClickBack}
          onClickForward={onClickForward}
        />
      </div>
    </div>
  );
};

export default observer(FairyTale);
