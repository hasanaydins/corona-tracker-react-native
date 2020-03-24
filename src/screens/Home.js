import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';
import DetailHome from './DetailHome';
import { useFocusEffect } from '@react-navigation/native';
import { StatusBar, Platform, ScrollView, RefreshControl } from 'react-native';
import theme from '../utils/theme';
import Pie from 'react-native-pie';
import Snackbar from 'react-native-snackbar';

import Box from '../components/Base/Box';
import Text from '../components/Base/Text';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardSayi from '../components/CardSayi';
import SvgCase from '../components/icons/Case';
import SvgDeath from '../components/icons/Death';
import SvgRecovered from '../components/icons/Recovered';
import SvgSick from '../components/icons/Sick';
import { Fade, Placeholder, PlaceholderLine } from 'rn-placeholder';
import Modal from 'react-native-modal';
import Button from '../components/Base/Button';
import SvgSettings from '../components/icons/Settings';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator headerMode='none'>
      <HomeStack.Screen name='Home' component={HomeScreen} />
      <HomeStack.Screen name='Details' component={DetailHome} />
    </HomeStack.Navigator>
  );
}

function HomeScreen({ navigation }) {
  const [summaryData, setSummaryData] = useState({});
  const [deathsPercentage, setDeathsPercentage] = useState(0);
  const [activePercentage, setActivePercentage] = useState(0);
  const [recoveredPercentage, setRecoveredPercentage] = useState(0);
  const [updated, setUpdated] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [modalHakkinda, setModalHakkinda] = useState(false);

  const getSummaryData = async () => {
    const response = await fetch('https://corona.lmao.ninja/all');
    const data = await response.json();
    const deathP = Math.round((data.deaths / data.cases) * 100);
    const recoP = Math.round((data.recovered / data.cases) * 100);
    const activP = 100 - deathP - recoP;
    const updatedDate = new Date(data.updated).toLocaleString();

    setSummaryData(data);
    setActivePercentage(activP);
    setDeathsPercentage(deathP);
    setRecoveredPercentage(recoP);
    setUpdated(updatedDate);
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
  const onRefresh = () => {
    setRefreshing(true);
    getSummaryData();
    setRefreshing(false);
    Snackbar.show({
      text: 'Yenilendi...',
      textColor: 'white',
      backgroundColor: theme.colors.success,
      duration: Snackbar.LENGTH_SHORT,
    });
  };

  return (
    <Box as={SafeAreaView} backgroundColor='bglight' flex={1}>
      {/* BACKSGROUND */}
      <Box
        flex={1}
        backgroundColor='bglight'
        paddingHorizontal={26}
        paddingVertical={30}
      >
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <Box
            flexDirection='row'
            alignItems='center'
            mb={20}
            justifyContent='space-between'
          >
            <Text fontSize={23} fontWeight='bold'>
              Dünya Geneli
            </Text>

            <Button onPress={() => setModalHakkinda(true)}>
              <SvgSettings width={24} color='gray' />
            </Button>
          </Box>

          <Box>
            <Modal
              isVisible={modalHakkinda}
              justifyContent='center'
              onBackdropPress={() => setModalHakkinda(false)}
            >
              <Box
                width='100%'
                bg='white'
                px={25}
                py={23}
                borderRadius={15}
                justifyContent='center'
                alignItems='center'
              >
                <Text fontWeight='bold' fontSize={20} mb={18}>
                  Hakkında
                </Text>
                <Text
                  mb={20}
                  color='textdark'
                  fontSize={16}
                  style={{ lineHeight: 25, textAlign: 'center' }}
                >
                  Bu uygulama dünyayı saran Covid-19 virüsünün güncel
                  rakamlarını insanlara anlık olarak paylaşmayı amaçlamıştır.
                  Uygulamanın izinsiz bir şekilde paylaşılması değiştirilmesi
                  veya satılması yasaktır.
                </Text>
                <Box
                  width='100%'
                  flexDirection='row'
                  justifyContent='space-between'
                  alignItems='center'
                >
                  <Text color='#828C95' ml={10} fontSize={15}>
                    hasanaydins.com
                  </Text>
                  <Button
                    px={38}
                    py={14}
                    bg='success'
                    borderRadius={15}
                    onPress={() => setModalHakkinda(false)}
                  >
                    <Text color='white' fontWeight='bold' fontSize={18}>
                      Kapat
                    </Text>
                  </Button>
                </Box>
              </Box>
            </Modal>
          </Box>

          {/* PIE CHART */}
          <Box
            backgroundColor='white'
            marginBottom={26}
            borderRadius={12}
            flexDirection='row'
            paddingHorizontal={26}
            paddingVertical={24}
            boxShadow='0px 7px 6px #00000008'
          >
            {activePercentage ? (
              <Box flex={1} flexDirection='row' justifyContent='space-around'>
                <Box>
                  <Text fontSize={16} mb={18} fontWeight='bold' flex={1}>
                    Covid-19
                  </Text>
                  <Pie
                    radius={70}
                    innerRadius={0}
                    sections={[
                      {
                        percentage: recoveredPercentage,
                        color: theme.colors.success,
                      },
                      {
                        percentage: activePercentage,
                        color: theme.colors.warning,
                      },
                      {
                        percentage: deathsPercentage,
                        color: theme.colors.danger,
                      },
                    ]}
                    dividerSize={2}
                    strokeCap={'butt'}
                  />
                </Box>

                <Box alignSelf='center'>
                  <Box ml={30}>
                    <Box flexDirection='row' alignItems='center'>
                      <Box size={12} bg='warning' borderRadius={999} mr={8} />
                      <Text mr={10} color='textdark'>
                        Aktif
                      </Text>
                      <Text color='textdark'>%{activePercentage}</Text>
                    </Box>
                    <Box flexDirection='row' alignItems='center' mt={12}>
                      <Box size={12} bg='success' borderRadius={999} mr={8} />
                      <Text mr={10} color='textdark'>
                        Kurtarılan
                      </Text>
                      <Text color='textdark'>%{recoveredPercentage}</Text>
                    </Box>
                    <Box flexDirection='row' alignItems='center' mt={12}>
                      <Box size={12} bg='danger' borderRadius={999} mr={8} />
                      <Text mr={10} color='textdark'>
                        Ölüm
                      </Text>
                      <Text color='textdark'>%{deathsPercentage}</Text>
                    </Box>
                  </Box>
                </Box>
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

          {/* NUMBERS */}
          <Box
            flexDirection='row'
            width='100%'
            flex={1}
            justifyContent='space-between'
          >
            <CardSayi
              icon={<SvgCase width={48} height={48} />}
              number={summaryData.cases}
              subtitle='Toplam Vaka'
              placeholder={!summaryData.cases}
            />
            <Box width={26} />
            <CardSayi
              icon={<SvgDeath width={48} height={48} />}
              number={summaryData.deaths}
              subtitle='Ölüm'
              placeholder={!summaryData.cases}
            />
          </Box>
          <Box flexDirection='row' justifyContent='space-between'>
            <CardSayi
              icon={<SvgRecovered width={48} height={48} />}
              number={summaryData.recovered}
              subtitle='Kurtarılan'
              placeholder={!summaryData.cases}
            />
            <Box width={26} />
            <CardSayi
              icon={<SvgSick width={48} height={48} />}
              number={
                summaryData.cases - summaryData.recovered - summaryData.deaths
              }
              subtitle='Aktif Hasta'
              placeholder={!summaryData.cases}
            />
          </Box>
          <Text fontSize={12} alignSelf='flex-start' color='textlight'>
            Son güncelleme : {updated}
          </Text>
        </ScrollView>
      </Box>
    </Box>
  );
}

export default HomeStackScreen;
