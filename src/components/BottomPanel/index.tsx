import React, { FC } from 'react';
import bem from 'bem-cn';
import { useStore } from '../../store/RootStoreContext';
import { Button } from '../index';
import { IPanel } from './types';
import './styles.scss';

const BottomPanel: FC<IPanel> = (props) => {
  const { audio, page, onClickHome, onClickAudio, onClickBack, onClickForward, onClickTest } = props;
  const classBem = bem('bottom-panel');
  const { runtime } = useStore();
  const { audioPlay } = runtime;

  return (
    <div className={classBem()}>
      <Button className={classBem('button', { home: true })} onClick={onClickHome} />
      <Button
        disabled={!audio}
        className={classBem('button', { play: !audioPlay, pause: audioPlay })}
        onClick={onClickAudio}
      />
      <Button
        disabled={page === 0 || typeof onClickBack !== 'function'}
        className={classBem('button', { left: true })}
        onClick={onClickBack}
      />
      <Button
        disabled={typeof onClickForward !== 'function'}
        className={classBem('button', { right: true })}
        onClick={onClickForward}
      />
      <Button className={classBem('button', { test: !!audio, back: !audio })} onClick={onClickTest} />
    </div>
  );
};

export default BottomPanel;
