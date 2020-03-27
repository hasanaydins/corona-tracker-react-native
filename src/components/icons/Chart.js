import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

function SvgChart(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox='0 0 30 30'
      fill='none'
      className=''
      {...props}
    >
      <Path
        d='M26 29v-.5h-1v.5h-4v-.5h-1v.5h-4.5v-.5h-1v.5h-4v-.5h-1v.5H5v-.5H4v.5H1v-3h.5v-1H1v-4h.5v-1H1v-4.5h.5v-1H1V10h.5V9H1V5.5h.5v-1H1V0H0v30h30v-1h-4z'
        fill='url(#chart_svg__paint0_linear)'
      />
      <Path
        d='M4.5 27.5a1.993 1.993 0 001.337-3.477l3.713-7.079a1.9 1.9 0 001.375-.18l2.407 2.64a2.004 2.004 0 002.97 2.631A2.003 2.003 0 0016.308 19l3.773-7.546a1.985 1.985 0 002.185-2.87l2.128-1.92a2.066 2.066 0 10-.662-.75l-2.128 1.92A1.994 1.994 0 0019.191 11l-3.773 7.546a1.928 1.928 0 00-1.341.19l-2.408-2.64a2 2 0 10-3.005.381L4.95 23.556A2 2 0 104.5 27.5zM25.5 4a1 1 0 110 2 1 1 0 010-2zm-5 4.5a1 1 0 110 2 1 1 0 010-2zm-4.5 12a1 1 0 11-2 0 1 1 0 012 0zM10 14a1 1 0 110 2.001A1 1 0 0110 14zM4.5 24.5a1 1 0 110 2.001 1 1 0 010-2.001z'
        fill='url(#chart_svg__paint1_linear)'
      />
      <Defs>
        <LinearGradient
          id='chart_svg__paint0_linear'
          x1={-5.462}
          y1={7.071}
          x2={20.538}
          y2={35.571}
          gradientUnits='userSpaceOnUse'
        >
          <Stop stopColor='#21ABAB' />
          <Stop offset={1} stopColor='#21ABAB' />
        </LinearGradient>
        <LinearGradient
          id='chart_svg__paint1_linear'
          x1={134.926}
          y1={81.527}
          x2={1411.36}
          y2={1511.9}
          gradientUnits='userSpaceOnUse'
        >
          <Stop stopColor='#E7544C' />
          <Stop offset={1} stopColor='#21ABAB' />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default SvgChart;
