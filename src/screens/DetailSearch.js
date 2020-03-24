import { Button, Text, View } from 'react-native';
import * as React from 'react';

function DetailSearch({ route, navigation }) {
  /*
  const { paramID } = route.params;
  const { paramDesc } = route.params;
*/

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details Screen</Text>
      {/*      <Text>paramID: {paramID}</Text>
      <Text>paramDesc: {paramDesc}</Text>*/}
      <Button
        title='Go to Details again'
        onPress={() =>
          navigation.push('Details', {
            paramID: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
      <Button title='Go back' onPress={() => navigation.goBack()} />
    </View>
  );
}
export default DetailSearch;
