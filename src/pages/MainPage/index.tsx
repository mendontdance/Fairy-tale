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
      <h1 className={classBem('title')}>Добро пожаловать в удивительный мир Латыни!</h1>
      <h2 className={classBem('subtitle')}>
        Изучайте вместе с нами язык, который дал жизнь многим другим языкам мира!
      </h2>
      <p className={classBem('text')}>
        Для изучения просто кликните по любой из сказок и начинайте узнавать язык с нуля
      </p>
      <div className={classBem('buttons')}>
        {fairyTalesData.map((fairyTale) => {
          return (
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
          );
        })}
      </div>
    </div>
  );
};

export default observer(MainPage);
