import Box from './Base/Box';
import React from 'react';
import Text from './Base/Text';
import { Fade, Placeholder, PlaceholderLine } from 'rn-placeholder';

export default function CardSayi({ icon, number, subtitle, placeholder }) {
  return (
    <Box
      height={180}
      borderRadius={12}
      backgroundColor='white'
      mb={26}
      flex={1}
      width='100%'
      flexDirection='column'
      alignItems='center'
      paddingVertical={20}
      boxShadow='0px 7px 6px #00000008'
    >
      {!placeholder ? (
        <Box flex={1} justifyContent='space-around' alignItems='center'>
          <Box>{icon}</Box>
          <Text fontSize={24} color='textdark' fontWeight='bold'>
            {number}
          </Text>
          <Text fontSize={16} color='textlight'>
            {subtitle}
          </Text>
        </Box>
      ) : (
        <Placeholder paddingLeft={20} paddingRight={20} Animation={Fade}>
          <PlaceholderLine width={60} />
          <PlaceholderLine />
          <PlaceholderLine />
          <PlaceholderLine width={30} />
        </Placeholder>
      )}
    </Box>
  );
}
