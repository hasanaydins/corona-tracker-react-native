/***
/*  Made with Love
/*  Hasan Aydın ©
/*  www.hasanaydins.com
/***/


import React, { useEffect, useState } from 'react';
import LineChart from 'react-native-responsive-linechart';
import { ActivityIndicator, ScrollView } from 'react-native';

import i18n from '../i18n';

import Text from '../components/Base/Text';
import Box from '../components/Base/Box';
import theme from '../utils/theme';
import SvgBack from '../components/icons/Back';
import Button from '../components/Base/Button';

export default function ChartCases({ route, navigation }) {
  const [valuesData, setValuesData] = useState([]);
  const [keysData, setKeysData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCountryData = async () => {
    setLoading(true);
    const response = await fetch(
      `https://corona.lmao.ninja/v2/historical/${route.params.country}`,
    );
    const res = await response.json();
    const data = res.timeline.cases;

    const countryValues = Object.values(data);
    const keysValues = Object.keys(data);
    await setValuesData(countryValues);
    await setKeysData(keysValues);
    setLoading(false);
  };
  useEffect(() => {
    getCountryData();
  }, []);

  const config = {
    line: {
      visible: false,
      strokeWidth: 1,
      strokeColor: theme.colors.textlight,
    },
    area: {
      visible: true,
      gradientFrom: 'orange',
      gradientFromOpacity: 1,
      gradientTo: theme.colors.warning,
      gradientToOpacity: 0.4,
    },
    xAxis: {
      visible: true,
      labelFontSize: 12,
      labelColor: theme.colors.textdark,
    },
    dataPoint: {
      visible: true,
      color: '#E8CB32',
      radius: 2,
      label: { visible: true, marginBottom: 25 },
    },
    grid: {
      stepSize: 3000,
    },
    yAxis: {
      labelColor: theme.colors.textdark,
    },
    insetY: 10,
    insetX: 10,
  };

  return (
    <Box flex={1} p={10} backgroundColor='bglight'>
      <Box
        flexDirection='row'
        alignItems='center'
        justifyContent='center'
        py={18}
      >
        <Button
          position='absolute'
          left={10}
          onPress={() => navigation.goBack()}
        >
          <SvgBack color={theme.colors.textlight} />
        </Button>

        <Text fontWeight='bold'>{i18n.get('numberOfCasesChart')}</Text>
      </Box>
      {!loading ? (
        <ScrollView horizontal={true}>
          <LineChart
            style={{ flex: 1, width: 4000 }}
            config={config}
            data={valuesData}
            xLabels={keysData}
          />
        </ScrollView>
      ) : (
        <ActivityIndicator />
      )}
    </Box>
  );
}
