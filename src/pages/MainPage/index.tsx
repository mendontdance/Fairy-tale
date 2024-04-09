import React from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import bem from 'bem-cn';
import './styles.scss';

const MainPage = () => {
  const classBem = bem('main');
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/contents');
  };

  return (
    <div className={classBem()}>
      <h1 className={classBem('title')}>Welcome to the Latin World!</h1>
      <button className={classBem('button')} onClick={onClick}>
        Start
      </button>
    </div>
  );
};

export default observer(MainPage);
