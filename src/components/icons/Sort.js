import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgSort(props) {
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
        d='M6 20l4-4H7V4H5v12H2l4 4zm5-12h9v2h-9V8zm0 4h7v2h-7v-2zm0-8h11v2H11V4zm0 12h5v2h-5v-2z'
        fill='currentColor'
      />
    </Svg>
  );
}

export default SvgSort;
