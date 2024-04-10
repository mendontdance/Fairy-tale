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
  const passedLesson = Number(localStorage.getItem('order'));

  return (
    <div className={classBem()}>
      <div className={classBem('container')}>
        <div className={classBem('title')}>Contents</div>
        <ul className={classBem('list')}>
          {fairyTalesData.map((fairyTale) => {
            return (
              <li key={fairyTale.id} className={classBem('list-item', { disabled: passedLesson < fairyTale.id })}>
                <div className={classBem('text-wrapper')}>
                  <div className={classBem('text')}>{fairyTale.order}</div>
                  <div className={classBem('text')}>{fairyTale.name}</div>
                </div>
                <div className={classBem('buttons')}>
                  <button
                    className={classBem('button', { story: true })}
                    type="button"
                    key={fairyTale.id}
                    onClick={() => {
                      navigate('/story');
                      runtime.setFairyTale(fairyTale);
                    }}
                    disabled={passedLesson < fairyTale.id}
                  />
                  <button
                    className={classBem('button', { test: true })}
                    type="button"
                    key={fairyTale.id}
                    onClick={() => {
                      navigate('/test');
                      runtime.setFairyTale(fairyTale);
                    }}
                    disabled={passedLesson < fairyTale.id}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Contents;
