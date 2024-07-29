import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const MoonIcon = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="-4 -4 24 24" fill="none" {...props}>
    <Path
      d="M14.353 10.62c-.106-.18-.406-.46-1.153-.327a5.636 5.636 0 01-1.253.087 5.606 5.606 0 01-3.94-1.88A5.416 5.416 0 016.6 4.913c0-.76.147-1.493.447-2.186.293-.674.086-1.027-.06-1.174-.154-.153-.514-.366-1.22-.073a6.878 6.878 0 00-4.214 6.807c.2 2.753 2.134 5.106 4.694 5.993a6.67 6.67 0 001.926.367c.107.006.214.013.32.013a7 7 0 005.647-2.847c.447-.62.327-1.013.213-1.193z"
      fill={props.color || 'currentColor'}
    />
  </Svg>
);

export default MoonIcon;
