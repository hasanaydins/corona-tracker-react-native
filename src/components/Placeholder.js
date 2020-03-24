import { Fade, Placeholder, PlaceholderLine } from 'rn-placeholder';
import Box from './Base/Box';
import React from 'react';

export default function PlaceholderComponent() {
  return (
    <Placeholder
      paddingLeft={20}
      paddingRight={20}
      height={70}
      borderRadius={12}
      Animation={Fade}
      backgroundColor='white'
      justifyContent='center'
      alignItems='center'
    >
      <PlaceholderLine width={60} />
      <PlaceholderLine />
    </Placeholder>
  );
}
