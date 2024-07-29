import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const Done = (props: SvgProps) => (
  <Svg width={36} height={36} viewBox="0 0 36 36" fill="none" {...props}>
    <Path
      d="M5.625 18A12.375 12.375 0 0124.188 7.28a1.125 1.125 0 001.125-1.948A14.625 14.625 0 1032.624 18a1.125 1.125 0 10-2.25 0 12.375 12.375 0 11-24.75 0z"
      fill={props.color || 'currentColor'}
    />
    <Path
      d="M34.547 7.547a1.126 1.126 0 00-1.593-1.593L18 20.909l-5.954-5.955a1.126 1.126 0 10-1.592 1.593l6.75 6.75a1.124 1.124 0 001.593 0l15.75-15.75z"
      fill={props.color || 'currentColor'}
    />
  </Svg>
);

export default Done;
