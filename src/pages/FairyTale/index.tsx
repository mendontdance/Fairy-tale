import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import bem from 'bem-cn';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store/RootStoreContext';
import BottomPanel from '../../components/BottomPanel';
import { IFairyTaleData } from '../../configs/types';
import { animate, linear } from '../../utils';
import './styles.scss';

const FairyTale = () => {
  const classBem = bem('fairy-tale');
  const ref = useRef<HTMLAudioElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);
  const elementRef1 = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { runtime } = useStore();
  const [page, setPage] = useState(0);
  const [data, setData] = useState<IFairyTaleData | undefined>(undefined);
  const [prevData, setPrevData] = useState<IFairyTaleData | undefined>(undefined);
  const [smallPause, setSmallPause] = useState(false);

  useEffect(() => {
    if (!runtime.fairyTale) {
      navigate('/');
    }
  }, [runtime.fairyTale]);

  const onEnded = () => {
    setSmallPause(false);
    setPage((prevState) => {
      if (prevState + 1 === runtime?.fairyTale?.data?.length) {
        runtime.setAudioPlay(false);
        return prevState;
      }
      return ++prevState;
    });
  };

  const onClickHome = () => {
    runtime.setAudioPlay(false);
    navigate('/contents');
  };

  const onClickTest = () => {
    runtime.setAudioPlay(false);
    navigate('/test');
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
    setPage((prevState) => {
      if (prevState - 1 < 0) return prevState;
      return --prevState;
    });
    runtime.setAudioPlay(false);

    animate(
      linear,
      (progress) => {
        if (elementRef1.current && elementRef.current) {
          elementRef1.current.style.opacity = '0';
          elementRef.current.style.transform = `translateY(${57 - progress * 57 + 'px'})`;
        }
      },
      700,
      () =>
        animate(
          linear,
          (progress) => {
            if (elementRef1.current) {
              elementRef1.current.style.opacity = String(progress);
            }
          },
          300,
          () => setSmallPause(true)
        )
    );
  };

  const onClickForward = () => {
    if (page + 1 === runtime.fairyTale?.data?.length) {
      navigate('/test');
    } else {
      setPage((prevState) => {
        if (prevState + 1 === runtime?.fairyTale?.data?.length) return prevState;
        return ++prevState;
      });
      runtime.setAudioPlay(false);
    }

    animate(
      linear,
      (progress) => {
        if (elementRef1.current && elementRef.current) {
          elementRef.current.style.opacity = '0';
          elementRef1.current.style.transform = `translateY(${-57 + progress * 57 + 'px'})`;
        }
      },
      700,
      animateCurrentText
    );
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

  useEffect(() => {
    if (smallPause && runtime.audioPlay) {
      ref.current?.play();
      runtime.setAudioPlay(true);
    } else if (!runtime.audioPlay) {
      runtime.setAudioPlay(false);
      ref.current?.pause();
    }
  }, [smallPause, runtime.audioPlay, page, runtime]);

  const animateCurrentText = () => {
    animate(
      linear,
      (progress) => {
        if (elementRef.current) {
          elementRef.current.style.opacity = String(progress);
        }
      },
      300,
      () => setSmallPause(true)
    );
  };

  useEffect(() => {
    if (runtime.audioPlay) {
      animate(
        linear,
        (progress) => {
          if (elementRef1.current && elementRef.current) {
            elementRef.current.style.opacity = '0';
            elementRef1.current.style.transform = `translateY(${-57 + progress * 57 + 'px'})`;
          }
        },
        700,
        animateCurrentText
      );
    }
  }, [page, runtime?.fairyTale?.data]);

  return (
    <div className={classBem()}>
      <div className={classBem('text-container')}>
        {data?.title && <div className={classBem('title')}>{data?.title}</div>}
        {data?.audio && <audio ref={ref} src={data?.audio} preload="auto" onEnded={() => setTimeout(onEnded, 2000)} />}
        <div className={classBem('text', { current: true })} ref={elementRef}>
          {data?.text}
        </div>
        <div className={classBem('text', { previous: true })} ref={elementRef1}>
          {prevData?.text}
        </div>
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
          onClickTest={onClickTest}
        />
      </div>
    </div>
  );
};

export default observer(FairyTale);
