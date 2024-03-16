import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import bem from 'bem-cn';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store/RootStoreContext';
import { IFairyTaleData } from '../../configs/types';
import { MiniTest } from '../../components';
import Button from '../../components/Button';
import './styles.scss';

const FairyTale = () => {
  const classBem = bem('fairy-tale');
  const ref = useRef<HTMLAudioElement>(null);
  const navigate = useNavigate();
  const { runtime } = useStore();
  const [page, setPage] = useState(0);
  const [data, setData] = useState<IFairyTaleData | undefined>(undefined);
  const [result, setResult] = useState<string | undefined>(undefined);

  if (runtime.fairyTale === null) {
    navigate('/');
  }

  useEffect(() => {
    if (runtime?.fairyTale?.data[page]) {
      setData(runtime?.fairyTale?.data[page]);
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
            {data?.audio && <audio ref={ref} src={data.audio} preload="auto" />}
            <div className={classBem('text')}>{data?.text}</div>
          </>
        )}
      </div>
      <div className={classBem('panel')}>
        {data?.image && <img src={data?.image} alt={data?.text} className={classBem('img')} />}
        <div className={classBem('buttons')}>
          <Button
            className={classBem('button', { home: true })}
            onClick={() => {
              navigate('/');
              setResult(undefined);
            }}
          />
          <Button
            disabled={!data?.audio}
            className={classBem('button', { audio: true })}
            onClick={() => {
              if (!runtime.audioPlay) {
                ref.current?.play();
                runtime.setAudioPlay(true);
              } else {
                ref.current?.pause();
                runtime.setAudioPlay(false);
              }
            }}
          />
          <Button
            disabled={page === 0}
            className={classBem('button', { left: true })}
            onClick={() => {
              runtime.setAudioPlay(false);
              setResult(undefined);
              setPage((prevState) => {
                if (prevState - 1 < 0) return prevState;
                return --prevState;
              });
            }}
          />
          <Button
            disabled={page + 1 === runtime?.fairyTale?.data?.length}
            className={classBem('button', { right: true })}
            onClick={() => {
              runtime.setAudioPlay(false);
              setResult(undefined);
              setPage((prevState) => {
                if (prevState + 1 === runtime?.fairyTale?.data?.length) return prevState;
                return ++prevState;
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default observer(FairyTale);
