import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const ToDo = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 26 26" fill="none" {...props}>
    <Path
      d="M6 2.25H4.5a3 3 0 00-3 3V21a3 3 0 003 3h15a3 3 0 003-3V5.25a3 3 0 00-3-3H18v1.5h1.5a1.5 1.5 0 011.5 1.5V21a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 21V5.25a1.5 1.5 0 011.5-1.5H6v-1.5z"
      fill={props.color || 'currentColor'}
    />
    <Path
      d="M14.25 1.5a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75h-4.5A.75.75 0 019 3.75v-1.5a.75.75 0 01.75-.75h4.5zM9.75 0A2.25 2.25 0 007.5 2.25v1.5A2.25 2.25 0 009.75 6h4.5a2.25 2.25 0 002.25-2.25v-1.5A2.25 2.25 0 0014.25 0h-4.5z"
      fill={props.color || 'currentColor'}
    />
  </Svg>
);

export default ToDo;
