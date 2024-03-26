import React, { FC } from 'react';
import bem from 'bem-cn';
import { useStore } from '../../store/RootStoreContext';
import { Button } from '../index';
import { IPanel } from './types';
import './styles.scss';

const BottomPanel: FC<IPanel> = (props) => {
  const { audio, page, onClickHome, onClickAudio, onClickBack, onClickForward } = props;
  const classBem = bem('bottom-panel');
  const { runtime } = useStore();
  const { audioPlay, fairyTale } = runtime;

  return (
    <div className={classBem()}>
      <Button className={classBem('button', { home: true })} onClick={onClickHome} />
      <Button
        disabled={!audio}
        className={classBem('button', { play: !audioPlay, pause: audioPlay })}
        onClick={onClickAudio}
      />
      <Button disabled={page === 0} className={classBem('button', { left: true })} onClick={onClickBack} />
      <Button
        disabled={page + 1 === fairyTale?.data?.length}
        className={classBem('button', { right: true })}
        onClick={onClickForward}
      />
    </div>
  );
};

export default BottomPanel;
