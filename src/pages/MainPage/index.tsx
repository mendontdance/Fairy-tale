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
      <div className={classBem('container')}>
        {fairyTalesData.map((fairyTale) => {
          return (
            <div key={fairyTale.id} className={classBem('wrapper')}>
              <div className={classBem('text')}>{fairyTale.name}</div>
              <div className={classBem('buttons')}>
                <button
                  className={classBem('button', { story: true })}
                  type="button"
                  key={fairyTale.id}
                  onClick={() => {
                    navigate('/story');
                    runtime.setFairyTale(fairyTale);
                  }}
                />
                <button
                  className={classBem('button', { test: true })}
                  type="button"
                  key={fairyTale.id}
                  onClick={() => {
                    navigate('/test');
                    runtime.setFairyTale(fairyTale);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default observer(MainPage);
