import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgBack(props) {
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
        d='M16.62 2.99a1.25 1.25 0 00-1.77 0L6.54 11.3a.997.997 0 000 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z'
        fill='currentColor'
      />
    </Svg>
  );
}

export default SvgBack;
