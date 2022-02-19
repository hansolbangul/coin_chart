// react state 관리 라이브러리 recoil
// isDarkAtom 이란 state를 생성 키는 isDark 로 받아야 하며 값은 false

import { atom } from 'recoil';

export const isDarkAtom = atom({
  key: 'isDark',
  default: false,
});
