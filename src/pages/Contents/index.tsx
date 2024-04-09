import React from 'react';
import { DATA } from '../../configs/data';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store/RootStoreContext';
import bem from 'bem-cn';
import './styles.scss';

const Contents = () => {
  const classBem = bem('contents');
  const fairyTalesData = Object.values(DATA);
  const navigate = useNavigate();
  const { runtime } = useStore();

  return (
    <div className={classBem()}>
      <div className={classBem('container')}>
        <div className={classBem('title')}>Contents</div>
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

export default Contents;
