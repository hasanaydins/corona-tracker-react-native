import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

function SvgDeath(props) {
  return (
    <Svg viewBox='0 0 64 64' className='' {...props}>
      <G data-name='17-R.I.P'>
        <Path
          d='M32 1A23 23 0 009 24v31h46V24A23 23 0 0032 1z'
          fill='#f5f5f5'
        />
        <Path d='M59 59v4H5v-4a4 4 0 014-4h46a4 4 0 014 4z' fill='#055d8d' />
        <Path
          d='M55 55v1.25c0 2.071-1.373 3.75-3.067 3.75H12.067C10.373 60 9 58.321 9 56.25V55a4 4 0 00-4 4v4h54v-4a4 4 0 00-4-4z'
          fill='#072c58'
        />
        <Path
          d='M51 47h-9a26 26 0 01-26-26A20 20 0 0134.071 1.1C33.388 1.036 32.7 1 32 1A23 23 0 009 24v31h46V43a4 4 0 01-4 4z'
          fill='#e3e3e3'
        />
        <Path
          d='M25 20a5.006 5.006 0 00-5-5h-2a1 1 0 00-1 1v14h2v-4.833l3.516 2.11a1 1 0 01.484.853V30h2v-1.87a3.013 3.013 0 00-1.455-2.568l-1.6-.958a5.129 5.129 0 001.593-1.072A5.006 5.006 0 0025 20zm-2.872 2.118A3.018 3.018 0 0120 23h-1v-6h1a3 3 0 012.128 5.118zM31 15h2v15h-2zM42 15h-2a1 1 0 00-1 1v14h2v-5h1a5 5 0 000-10zm2.128 7.118A3.018 3.018 0 0142 23h-1v-6h1a3 3 0 012.128 5.118zM27 28h2v2h-2zM35 28h2v2h-2zM17 48h14v2H17zM33 48h14v2H33z'
          fill='#055d8d'
        />
        <Path fill='#34c1ad' d='M26 35h12v8H26z' />
        <Path
          d='M11 24a21 21 0 0142 0v31h2V24a23 23 0 00-46 0v31h2z'
          fill='#055d8d'
        />
        <Path fill='#072c58' d='M53 51h2v4h-2zM9 51h2v4H9z' />
      </G>
    </Svg>
  );
}

export default SvgDeath;
