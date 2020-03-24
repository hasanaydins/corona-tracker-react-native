import React, { useState, useEffect } from 'react';
import {
  Platform,
  ActivityIndicator,
  StatusBar,
  FlatList,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import DetailSearch from './DetailSearch';
import theme from '../utils/theme';
import Box from '../components/Base/Box';
import Text from '../components/Base/Text';
import Button from '../components/Base/Button';
import SvgSearch from '../components/icons/Search';
import { useFocusEffect } from '@react-navigation/native';
import CardCountry from '../components/CardCountry';
import Snackbar from 'react-native-snackbar';
const SearchStack = createStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator headerMode='none'>
      <SearchStack.Screen name='Search' component={Search} />
      <SearchStack.Screen name='Details' component={DetailSearch} />
    </SearchStack.Navigator>
  );
}

function Search({ navigation }) {
  let [countriesData, setCountriesData] = useState([]);
  let [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [text, setText] = useState('');
  const [updatedDate, setUpdatedDate] = useState('');
  const [isclicked, setIsClicked] = useState(false);

  const getSummaryData = async query => {
    setLoading(true);

    const response = await fetch(
      'https://corona.lmao.ninja/countries?sort=deaths',
    );
    const data = await response.json();

    const responseUpdate = await fetch('https://corona.lmao.ninja/all');
    const dataUpdate = await responseUpdate.json();
    const lastDate = new Date(dataUpdate.updated).toLocaleTimeString();

    setUpdatedDate(lastDate);

    setCountriesData(data);
    setAllData(data);
    setLoading(false);
    setRefreshing(false);
    Snackbar.show({
      text: 'Yenilendi...',
      textColor: 'white',
      backgroundColor: theme.colors.success,
      duration: Snackbar.LENGTH_SHORT,
    });
  };

  useEffect(() => {
    getSummaryData();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      Platform.OS === 'android' &&
        StatusBar.setBackgroundColor(theme.colors.bglight);
    }, []),
  );

  const renderHeader = () => {
    return (
      <TextInput
        style={{ borderBottomWidth: 1, borderColor: '#cccc' }}
        height={50}
        borderRadius={12}
        onChangeText={txt => {
          setText(txt);
          searchFilter(txt);
        }}
        value={text}
        secureTextEntry={false}
        autoCapitalize='words' // characters, sentences ,  none
        placeholder='Bir isim giriniz'
        paddingLeft={18}
        ref={ref => (this.inputText = ref)}
      />
    );
  };

  const searchFilter = txt => {
    const newData = allData.filter(item => {
      const listItem = `${item.country.toLowerCase()}}`;
      return listItem.indexOf(txt.toLowerCase()) > -1;
    });

    setCountriesData(newData);
  };

  const onRefresh = () => {
    setRefreshing(true);
    getSummaryData();
    setIsClicked(false);
    Snackbar.show({
      text: 'Yenileniyor...',
      textColor: 'white',
      backgroundColor: theme.colors.success,
      duration: Snackbar.LENGTH_SHORT,
    });
  };

  return (
    <Box
      as={SafeAreaView}
      flex={1}
      backgroundColor={theme.colors.bglight}
      height='100%'
      padding={26}
    >
      {/* BACKSGROUND */}
      <Box
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
      >
        <Text fontSize={23} fontWeight='bold'>
          Ülkeler
        </Text>

        <Button
          onPress={async () => {
            await setIsClicked(true);
            this.inputText.focus();
          }}
        >
          <SvgSearch color={theme.colors.textlight} width={32} />
        </Button>
      </Box>

      <Box
        flexDirection='row'
        alignItems='center'
        mt={12}
        justifyContent='space-between'
      >
        <Box flexDirection='row' alignItems='center'>
          <Box size={8} bg='warning' borderRadius={999} mr={8} />
          <Text mr={10} fontSize={11} color='textdark'>
            Aktif
          </Text>
        </Box>
        <Box flexDirection='row' alignItems='center'>
          <Box size={8} bg='success' borderRadius={999} mr={8} />
          <Text mr={10} fontSize={11} color='textdark'>
            Kurtarılan
          </Text>
        </Box>
        <Box flexDirection='row' alignItems='center'>
          <Box size={8} bg='danger' borderRadius={999} mr={8} />
          <Text mr={10} fontSize={11} color='textdark'>
            Ölüm
          </Text>
        </Box>

        <Text fontSize={9} color='textlight'>
          Son güncelleme: {updatedDate}
        </Text>
      </Box>
      {countriesData.length ? (
        <FlatList
          ListHeaderComponent={isclicked ? renderHeader() : null}
          style={{ marginTop: 18 }}
          data={countriesData}
          renderItem={item => (
            <CardCountry
              country={item.item.country}
              deaths={item.item.deaths}
              active={item.item.active}
              recovered={item.item.recovered}
              navigation={navigation}
            />
          )}
          flex={1}
          keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={0} // 0 ise sadece en dibe geldiginizde loadMore yapılır
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      ) : (
        <Box flex={1} justifyContent='center' alignItems='center'>
          <ActivityIndicator />
        </Box>
      )}
    </Box>
  );
}

export default SearchStackScreen;
