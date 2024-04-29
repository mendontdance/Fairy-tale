import React, { FC, useEffect } from 'react';
import bem from 'bem-cn';
import { ITooltip } from './types';
import './styles.scss';

const Tooltip: FC<ITooltip> = ({ text, tooltipText, showTooltip, setTooltipText }) => {
  const classBem = bem('tooltip');

  useEffect(() => {
    if (tooltipText) {
      setTimeout(() => {
        setTooltipText('');
      }, 3000);
    }
  }, [tooltipText]);

  return (
    <div className={classBem()}>
      {text}
      {showTooltip && <div className={classBem('modal')}>{tooltipText}</div>}
    </div>
  );
};

export default Tooltip;
