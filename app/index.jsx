import { View, TouchableOpacity, Text, ScrollView, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SimpleLineIcons, FontAwesome5 } from '@expo/vector-icons';

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
    if (streakData && currentDate) {
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
    <ScrollView>
      <View className='mb-16'>
        <View className="p-8 h-1/6 bg-customGreen rounded-lg shadow-md mx-5 my-8">
          <View className='flex-row justify-between items-center'>
            <View className='flex-col'>
              <Text className='text-white'>{streakData?.length} </Text>
              <Text className='text-white'>
                day streak
              </Text>
            </View>
            <View className='w-20 h-20 bg-customWhite rounded-full justify-center items-center'>
              <FontAwesome5 name="fire-alt" size={48} color="white" />
            </View>
          </View>
        </View>
        <View className="p-6 bg-white rounded-lg shadow-md mx-5 my-2">
          <TouchableOpacity onPress={() => router.push('hskOne')}>
            <View className='flex-row justify-between items-center'>
              <View className='flex-row items-center space-x-4'>
                <View className='p-2 bg-customGreen rounded-lg'>
                  <SimpleLineIcons name="book-open" size={24} color="white"/>
                </View>
                <View className='flex-col'>
                  <Text>Learn</Text>
                  <Text>HSK 1</Text>
                </View>
              </View>
              <Text>{'>'}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className='p-6 bg-white rounded-lg shadow-md mx-5 my-2'>
          <TouchableOpacity onPress={() => router.push('hskTwo')}>
          <View className='flex-row justify-between items-center'>
              <View className='flex-row items-center space-x-4'>
                <View className='p-2 bg-customGreen rounded-lg'>
                  <SimpleLineIcons name="book-open" size={24} color="white"/>
                </View>
                <View className='flex-col'>
                  <Text>Learn</Text>
                  <Text>HSK 2</Text>
                </View>
              </View>
              <Text>{'>'}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className='p-6 bg-white rounded-lg shadow-md mx-5 my-2'>
          <TouchableOpacity onPress={() => router.push('hskThree')}>
            <View className='flex-row justify-between items-center'>
              <View className='flex-row items-center space-x-4'>
                <View className='p-2 bg-customGreen rounded-lg'>
                  <SimpleLineIcons name="book-open" size={24} color="white"/>
                </View>
                <View className='flex-col'>
                  <Text>Learn</Text>
                  <Text>HSK 3</Text>
                </View>
              </View>
              <Text>{'>'}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className='p-6 bg-white rounded-lg shadow-md mx-5 my-2'>
          <TouchableOpacity onPress={() => router.push('hskFour')}>
            <View className='flex-row justify-between items-center'>
              <View className='flex-row items-center space-x-4'>
                <View className='p-2 bg-customGreen rounded-lg'>
                  <SimpleLineIcons name="book-open" size={24} color="white"/>
                </View>
                <View className='flex-col'>
                  <Text>Learn</Text>
                  <Text>HSK 4</Text>
                </View>
              </View>
              <Text>{'>'}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className='p-6 bg-white rounded-lg shadow-md mx-5 my-2'>
          <TouchableOpacity onPress={() => router.push('hskFive')}>
            <View className='flex-row justify-between items-center'>
              <View className='flex-row items-center space-x-4'>
                <View className='p-2 bg-customGreen rounded-lg'>
                  <SimpleLineIcons name="book-open" size={24} color="white"/>
                </View>
                <View className='flex-col'>
                  <Text>Learn</Text>
                  <Text>HSK 5</Text>
                </View>
              </View>
              <Text>{'>'}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className='p-6 bg-white rounded-lg shadow-md mx-5 my-2'>
          <TouchableOpacity onPress={() => router.push('hskSix')}>
            <View className='flex-row justify-between items-center'>
              <View className='flex-row items-center space-x-4'>
                <View className='p-2 bg-customGreen rounded-lg'>
                  <SimpleLineIcons name="book-open" size={24} color="white"/>
                </View>
                <View className='flex-col'>
                  <Text>Learn</Text>
                  <Text>HSK 6</Text>
                </View>
              </View>
              <Text>{'>'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default RootLayout;
