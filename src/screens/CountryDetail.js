/***
/*  Made with Love
/*  Hasan Aydın ©
/*  www.hasanaydins.com
/***/

import React, { useEffect, useState } from 'react';
import { ScrollView, Image, ActivityIndicator } from 'react-native';

import i18n from '../i18n';

import Box from '../components/Base/Box';
import SvgBack from '../components/icons/Back';
import Text from '../components/Base/Text';
import theme from '../utils/theme';
import SvgCase from '../components/icons/Case';
import SvgChart from '../components/icons/Chart';
import Button from '../components/Base/Button';
import SvgRecovered from '../components/icons/Recovered';
import SvgDeath from '../components/icons/Death';
import SvgSick from '../components/icons/Sick';

export default function CountryDetail({ route, navigation }) {
  const [countryDetailData, setCountryDetailData] = useState([]);
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCountryDetailData = async () => {
    setLoading(true);
    const response = await fetch(
      `https://corona.lmao.ninja/countries/${route.params.country}`,
    );
    const data = await response.json();
    setCountryDetailData(data);
    setLoading(false);
    setCountry(route.params.country.toString());
  };
  useEffect(() => {
    getCountryDetailData();
  }, []);

  return (
    <Box flex={1} backgroundColor='bglight' justifyContent='center'>
      {!loading ? (
        <ScrollView padding={25} flex={1}>
          {/*//back*/}
          <Box flexDirection='row' justifyContent='center'>
            <Button
              position='absolute'
              left={10}
              onPress={() => navigation.goBack()}
            >
              <SvgBack color={theme.colors.textlight} />
            </Button>

            <Text fontSize={22} fontWeight='bold'>
              {route.params.country}
            </Text>
          </Box>
          <Box flex={1}>
            <Box
              borderRadius={12}
              backgroundColor='white'
              padding={26}
              flex={1}
              marginTop={25}
              boxShadow='0px 7px 6px #00000008'
            >
              <Box flexDirection='row' justifyContent='space-between' mb={34}>
                <Text fontSize={16} fontWeight='bold'>
                  {i18n.get('allInfo')}
                </Text>

                <Box size={32}>
                  <Image
                    style={{ width: '100%', flex: 1, borderRadius: 999 }}
                    source={{
                      uri: countryDetailData.countryInfo.flag,
                    }}
                  />
                </Box>
              </Box>
              <Box flexDirection='row' justifyContent='space-between'>
                <Box flexDirection='row' alignItems='center'>
                  <SvgCase width={30} height={30} />

                  <Box flexDirection='column' ml={13}>
                    <Text fontSize={14}>Vaka</Text>
                    <Text fontSize={20} mt={7}>
                      {countryDetailData.cases}
                    </Text>
                  </Box>
                </Box>
                <Box flexDirection='row' alignItems='center'>
                  <SvgRecovered width={30} height={30} />

                  <Box flexDirection='column' ml={13}>
                    <Text fontSize={14}>Kurtarılan</Text>
                    <Text fontSize={20} mt={7}>
                      {countryDetailData.recovered}
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Box flexDirection='row' justifyContent='space-between' mt={32}>
                <Box flexDirection='row' alignItems='center'>
                  <SvgDeath width={30} height={30} />

                  <Box flexDirection='column' ml={13}>
                    <Text fontSize={14}>Ölüm</Text>
                    <Text fontSize={20} mt={7}>
                      {countryDetailData.deaths}
                    </Text>
                  </Box>
                </Box>
                <Box flexDirection='row' alignItems='center'>
                  <SvgSick width={30} height={30} />

                  <Box flexDirection='column' ml={13}>
                    <Text fontSize={14}>Aktif Vaka</Text>
                    <Text fontSize={20} mt={7}>
                      {countryDetailData.active}
                    </Text>
                  </Box>
                </Box>
              </Box>

              <Box flexDirection='row' justifyContent='space-between' mt={48}>
                <Box flexDirection='column'>
                  <Text fontSize={11} color='textdark'>
                    {i18n.get('todayCases')}
                  </Text>
                  <Text fontSize={18} mt={10} fontWeight='bold'>
                    {countryDetailData.todayCases}
                  </Text>
                </Box>
                <Box flexDirection='column'>
                  <Text fontSize={11} color='textdark'>
                    {i18n.get('todayDeaths')}
                  </Text>
                  <Text fontSize={18} mt={10} fontWeight='bold'>
                    {countryDetailData.todayDeaths}
                  </Text>
                </Box>
                <Box flexDirection='column'>
                  <Text fontSize={11} color='textdark'>
                    {i18n.get('deathRatio')}
                  </Text>
                  <Text fontSize={18} mt={10} fontWeight='bold'>
                    {(
                      (countryDetailData.deaths / countryDetailData.cases) *
                      100
                    ).toFixed(1)}{' '}
                    %
                  </Text>
                </Box>
              </Box>
            </Box>

            <Button
              onPress={() => navigation.navigate('ChartCases', { country })}
              borderRadius={12}
              backgroundColor='white'
              flexDirection='row'
              justifyContent='space-between'
              alignItems='center'
              mt={20}
              p={20}
              boxShadow='0px 7px 6px #00000008'
            >
              <SvgChart />

              <Text>{i18n.get('numberOfCasesChart')}</Text>

              <SvgBack
                style={{ transform: [{ rotateY: '180deg' }] }}
                color='black'
              />
            </Button>
            <Button
              onPress={() => navigation.navigate('ChartDeaths', { country })}
              borderRadius={12}
              backgroundColor='white'
              flexDirection='row'
              justifyContent='space-between'
              alignItems='center'
              mt={20}
              mb={40}
              p={20}
              boxShadow='0px 7px 6px #00000008'
            >
              <SvgChart />

              <Text>{i18n.get('numberOfDeathChart')}</Text>

              <SvgBack
                style={{ transform: [{ rotateY: '180deg' }] }}
                color='black'
              />
            </Button>
          </Box>
        </ScrollView>
      ) : (
        <ActivityIndicator />
      )}
    </Box>
  );
}
