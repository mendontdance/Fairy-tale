export interface IPanel {
  audio?: string;
  page: number;
  onClickHome: () => void;
  onClickAudio: () => void;
  onClickBack: () => void;
  onClickForward: () => void;
}
