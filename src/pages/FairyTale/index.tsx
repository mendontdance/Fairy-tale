import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import bem from 'bem-cn';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store/RootStoreContext';
import { IFairyTaleData } from '../../configs/types';
import './styles.scss';

const FairyTale = () => {
  const classBem = bem('fairy-tale');
  const { runtime } = useStore();
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const [data, setData] = useState<IFairyTaleData | undefined>(undefined);

  if (!runtime.fairyTale) {
    navigate('/fairy-tale');
  }
  console.log(page);

  useEffect(() => {
    if (runtime?.fairyTale?.data[page]) {
      setData(runtime?.fairyTale?.data[page]);
    }
  }, [page, runtime?.fairyTale?.data]);

  return (
    <div className={classBem()}>
      <div className={classBem('text')}>{data?.text}</div>
      <img src={data?.image} alt={data?.text} className={classBem('img')} />
      <div className={classBem('buttons')}>
        <button className={classBem('button')} onClick={() => navigate('/fairy-tale')}>
          Назад в меню
        </button>
        <button
          className={classBem('button', { arrow: true })}
          onClick={() =>
            setPage((prevState) => {
              if (prevState - 1 < 0) return prevState;
              return --prevState;
            })
          }
        >
          &#8666;
        </button>
        {/*<button className={classBem('button')} onClick={() => setPage((prevState) => prevState++)}>*/}
        {/*  res*/}
        {/*</button>*/}
        <button
          className={classBem('button', { arrow: true })}
          onClick={() =>
            setPage((prevState) => {
              if (runtime?.fairyTale?.data?.length && prevState === runtime?.fairyTale?.data?.length - 1)
                return prevState;
              return ++prevState;
            })
          }
        >
          &#8667;
        </button>
      </div>
    </div>
  );
};

export default observer(FairyTale);
