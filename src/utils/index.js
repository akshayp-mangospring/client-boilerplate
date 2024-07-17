import { enterKeyCode } from '@constants';

export const isEnterKeyPressed = (e) => e.keyCode === enterKeyCode;
export const isBlank = (s) => s.trim() === '';
