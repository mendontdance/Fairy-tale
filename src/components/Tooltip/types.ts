import { ReactNode } from 'react';

export interface ITooltip {
  text: ReactNode;
  tooltipText?: string;
  showTooltip?: string | boolean;
  setTooltipText: (tooltipText: string) => void;
}
