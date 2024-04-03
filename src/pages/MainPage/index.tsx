import React from 'react';
import { DATA } from '../../configs/data';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/RootStoreContext';
import bem from 'bem-cn';
import './styles.scss';
const MainPage = () => {
  const classBem = bem('main');
  const fairyTalesData = Object.values(DATA);
  const navigate = useNavigate();
  const { runtime } = useStore();

  return (
    <div className={classBem()}>
      <h1 className={classBem('title')}>Welcome to the Latin World!</h1>
      <div className={classBem('buttons')}>
        {fairyTalesData.map((fairyTale) => {
          return (
            <div key={fairyTale.id}>
              <button
                className={classBem('button')}
                type="button"
                key={fairyTale.id}
                onClick={() => {
                  navigate('/story');
                  runtime.setFairyTale(fairyTale);
                }}
              >
                {fairyTale.name}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default observer(MainPage);
