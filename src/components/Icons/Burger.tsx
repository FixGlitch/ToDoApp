import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const Burger = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 24a1 1 0 011-1h20a1 1 0 010 2H6a1 1 0 01-1-1zm0-8a1 1 0 011-1h20a1 1 0 010 2H6a1 1 0 01-1-1zm0-8a1 1 0 011-1h20a1 1 0 110 2H6a1 1 0 01-1-1z"
      fill={props.color || 'currentColor'}
    />
  </Svg>
);

export default Burger;
