import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgHome(props) {
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
        d='M8.755 38.5h24.5c1.93 0 3.5-1.57 3.5-3.5V19.25a1.743 1.743 0 00-.513-1.237l-14-14a1.748 1.748 0 00-2.474 0l-14 14a1.745 1.745 0 00-.513 1.237V35c0 1.93 1.57 3.5 3.5 3.5zm8.75-3.5v-8.75h7V35h-7zm-8.75-15.026l12.25-12.25 12.25 12.25L33.257 35h-5.252v-8.75c0-1.93-1.57-3.5-3.5-3.5h-7c-1.93 0-3.5 1.57-3.5 3.5V35h-5.25V19.974z'
        fill='currentColor'
      />
    </Svg>
  );
}

export default SvgHome;
