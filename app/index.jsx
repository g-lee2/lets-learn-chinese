import { View, TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RootLayout = () => {
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState('');
  const [streakData, setStreakData] = useState([]);
  const [shouldSaveNewStreak, setShouldSaveNewStreak] = useState(false);

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  useEffect(() => {
    const todayDate = new Date().toLocaleDateString(undefined, options);
    setCurrentDate(todayDate);
    getData();
  }, []);

  useEffect(() => {
    if (streakData.length > 0 && currentDate) {
      const lastStreakDate = streakData[streakData.length - 1];
      const yesterdayDate = new Date();
      yesterdayDate.setDate(yesterdayDate.getDate() - 1);

      if (lastStreakDate === yesterdayDate.toLocaleDateString(undefined, options)) {
        setStreakData(prevData => [...prevData, currentDate]);
        setShouldSaveNewStreak(true);
      } else if (lastStreakDate !== currentDate) {
        setStreakData([currentDate]); 
        setShouldSaveNewStreak(true);
      }
    }
  }, [streakData, currentDate]);

  useEffect(() => {
    if (shouldSaveNewStreak) {
      storeData();
    }
  }, [shouldSaveNewStreak]);

  const storeData = async () => {
    try {
      const jsonValue = JSON.stringify(streakData);
      await AsyncStorage.setItem('streak', jsonValue);
    } catch (e) {
      console.log(`can't save new date`);
    }
    setShouldSaveNewStreak(false);
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('streak');
      const parsedJsonValue = jsonValue != null ? JSON.parse(jsonValue) : [];
      setStreakData(parsedJsonValue);
    } catch (e) {
      console.log(`can't find streak in storage`);
    }
  };

  return (
    <View>
      <Text>{streakData?.length} day streak!</Text>
      <TouchableOpacity onPress={() => router.push('hskOne')}>
        <Text>HSK 1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('hskTwo')}>
        <Text>HSK 2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('hskThree')}>
        <Text>HSK 3</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('hskFour')}>
        <Text>HSK 4</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('hskFive')}>
        <Text>HSK 5</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('hskSix')}>
        <Text>HSK 6</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('about')}>
        <Text>About</Text>
      </TouchableOpacity>
    </View>
  )
}

export default RootLayout;
