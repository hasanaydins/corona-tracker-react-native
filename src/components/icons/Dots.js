import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgDots(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      className=''
      {...props}
    >
      <Path
        d='M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm6 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zM8 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z'
        fill='currentColor'
      />
    </Svg>
  );
}

export default SvgDots;
