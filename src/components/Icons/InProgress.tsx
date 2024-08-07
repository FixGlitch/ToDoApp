import React from 'react';
import Svg, { ClipPath, Defs, G, Path, SvgProps } from 'react-native-svg';

const InProgress = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <G clipPath="url(#clip0_86_831)" fill={props.color || 'currentColor'}>
      <Path d="M17.03 2.038A14.002 14.002 0 0016 2V0a16 16 0 011.178.044l-.148 1.994zm4.008.9c-.641-.247-1.3-.447-1.97-.598l.438-1.952c.766.172 1.52.4 2.252.684l-.72 1.866zm2.74 1.42c-.286-.19-.579-.37-.878-.54l.986-1.74c.684.387 1.338.825 1.958 1.308l-1.23 1.578c-.271-.212-.55-.413-.836-.604v-.002zm3.668 3.58a13.977 13.977 0 00-1.306-1.592l1.448-1.38c.54.57 1.04 1.18 1.494 1.82l-1.636 1.152zm1.488 2.704c-.131-.317-.274-.63-.428-.936l1.786-.9c.353.702.654 1.43.9 2.176l-1.9.626a14.05 14.05 0 00-.358-.966zm1.06 5.014a13.983 13.983 0 00-.2-2.05l1.97-.34a16.1 16.1 0 01.232 2.34l-2 .05h-.002zm-.262 3.076c.066-.34.12-.678.162-1.02l1.986.246c-.096.78-.25 1.552-.46 2.31l-1.928-.534c.092-.33.172-.664.24-1.002zm-1.904 4.758c.368-.58.692-1.188.972-1.816l1.828.81c-.32.72-.69 1.412-1.11 2.076l-1.69-1.07zM25.9 25.9c.244-.244.478-.496.7-.756l1.516 1.306a16.09 16.09 0 01-.802.864L25.9 25.9z" />
      <Path d="M16 2a14 14 0 109.9 23.9l1.414 1.414A16.001 16.001 0 1116 0v2z" />
      <Path d="M15 6a1 1 0 011 1v10.42l6.496 3.712a1 1 0 01-.992 1.736l-7-4A1 1 0 0114 18V7a1 1 0 011-1z" />
    </G>
    <Defs>
      <ClipPath id="clip0_86_831">
        <Path fill={props.color || 'currentColor'} d="M0 0H32V32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default InProgress;
