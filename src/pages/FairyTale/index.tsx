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
    navigate('/');
  }
  console.log(page);

  useEffect(() => {
    if (runtime?.fairyTale?.data[page]) {
      setData(runtime?.fairyTale?.data[page]);
    }
  }, [page, runtime?.fairyTale?.data]);

  return (
    <div className={classBem()}>
      <div className={classBem('text-container')}>
        {data?.title && <div className={classBem('title')}>{data?.title}</div>}
        <div className={classBem('text')}>{data?.text}</div>
      </div>
      <div className={classBem('panel')}>
        <img src={data?.image} alt={data?.text} className={classBem('img')} />
        <div className={classBem('buttons')}>
          <button className={classBem('button')} onClick={() => navigate('/')}>
            &#9776;
          </button>
          <button
            disabled={page === 0}
            className={classBem('button', { arrow: true, disabled: page === 0 })}
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
            className={classBem('button', { arrow: true, disabled: page + 1 === runtime?.fairyTale?.data?.length })}
            onClick={() =>
              setPage((prevState) => {
                if (prevState + 1 === runtime?.fairyTale?.data?.length) return prevState;
                return ++prevState;
              })
            }
          >
            &#8667;
          </button>
        </div>
      </div>
    </div>
  );
};

export default observer(FairyTale);
