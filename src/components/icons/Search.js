import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgSearch(props) {
  return (
    <Svg
      width={42}
      height={42}
      viewBox='0 0 42 42'
      fill='none'
      className=''
      {...props}
    >
      <Path
        d='M17.5 31.5c3.106 0 6.123-1.04 8.57-2.954l7.693 7.693 2.474-2.474-7.693-7.694A13.916 13.916 0 0031.5 17.5c0-7.72-6.28-14-14-14s-14 6.28-14 14 6.28 14 14 14zm0-24.5C23.29 7 28 11.71 28 17.5S23.29 28 17.5 28 7 23.29 7 17.5 11.71 7 17.5 7z'
        fill='currentColor'
      />
    </Svg>
  );
}

export default SvgSearch;
