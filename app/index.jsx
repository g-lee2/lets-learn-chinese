import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
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
    const fetchDataAndInitializeStreak = async () => {
      const todayDate = new Date().toLocaleDateString(undefined, options);
      setCurrentDate(todayDate);

      try {
        const jsonValue = await AsyncStorage.getItem('streak');
        const parsedJsonValue = jsonValue != null ? JSON.parse(jsonValue) : [];
        setStreakData(parsedJsonValue);

        if (parsedJsonValue.length === 0) {
          setStreakData([todayDate]);
          setShouldSaveNewStreak(true);
        }
      } catch (e) {
        console.log(`can't find streak in storage`);
      }
    };

    fetchDataAndInitializeStreak();
  }, []);

  useEffect(() => {
    if (streakData && streakData.length > 0 && currentDate) {
      const lastStreakDate = streakData[streakData.length - 1];

      if (lastStreakDate === currentDate) {
        return;
      }

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

  return (
    <ScrollView >
      <View className='mb-16'>
        <View className="p-8 h-1/6 bg-customGreen rounded-2xl mx-5 my-6">
          <View className='flex-row justify-between items-center'>
            <View className='flex-col items-center'>
              <Text className='text-white text-6xl'>{streakData?.length} </Text>
              <Text className='text-white font-semibold'>
                Day Streak
              </Text>
            </View>
            <View className='w-20 h-20 bg-customWhite rounded-full justify-center items-center'>
              <FontAwesome5 name="fire-alt" size={54} color="white" />
            </View>
          </View>
        </View>
        <Text className='mx-6 text-lg font-bold'>HSK Levels</Text>
        <View className="p-4 bg-white rounded-xl mx-5 my-2" style={{ elevation: 14, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 4 }}>
          <TouchableOpacity onPress={() => router.push('hskOne')}>
            <View className='flex-row justify-between items-center'>
              <View className='flex-row items-center space-x-4'>
                <View className='p-2 bg-customGreen rounded-xl w-14 h-14 justify-center items-center'>
                  <SimpleLineIcons name="book-open" size={32} color="white"/>
                </View>
                <View className='flex-col space-y-2'>
                  <Text className='text-xs text-slate-600'>Learn</Text>
                  <Text className='font-bold'>HSK 1</Text>
                </View>
              </View>
              <Text className='text-slate-400 text-xl'>{'>'}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className='p-4 bg-white rounded-xl mx-5 my-2' style={{ elevation: 14, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 4 }}>
          <TouchableOpacity onPress={() => router.push('hskTwo')}>
          <View className='flex-row justify-between items-center'>
              <View className='flex-row items-center space-x-4'>
                <View className='p-2 bg-customGreen rounded-xl w-14 h-14 justify-center items-center'>
                  <SimpleLineIcons name="book-open" size={32} color="white"/>
                </View>
                <View className='flex-col space-y-2'>
                  <Text className='text-xs text-slate-600'>Learn</Text>
                  <Text className='font-bold'>HSK 2</Text>
                </View>
              </View>
              <Text className='text-slate-400 text-xl'>{'>'}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className='p-4 bg-white rounded-xl mx-5 my-2' style={{ elevation: 14, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 4 }}>
          <TouchableOpacity onPress={() => router.push('hskThree')}>
            <View className='flex-row justify-between items-center'>
              <View className='flex-row items-center space-x-4'>
                <View className='p-2 bg-customGreen rounded-xl w-14 h-14 justify-center items-center'>
                  <SimpleLineIcons name="book-open" size={32} color="white"/>
                </View>
                <View className='flex-col space-y-2'>
                  <Text className='text-xs text-slate-600'>Learn</Text>
                  <Text className='font-bold'>HSK 3</Text>
                </View>
              </View>
              <Text className='text-slate-400 text-xl'>{'>'}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className='p-4 bg-white rounded-xl mx-5 my-2' style={{ elevation: 14, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 4 }}>
          <TouchableOpacity onPress={() => router.push('hskFour')}>
            <View className='flex-row justify-between items-center'>
              <View className='flex-row items-center space-x-4'>
                <View className='p-2 bg-customGreen rounded-xl w-14 h-14 justify-center items-center'>
                  <SimpleLineIcons name="book-open" size={32} color="white"/>
                </View>
                <View className='flex-col space-y-2'>
                  <Text className='text-xs text-slate-600'>Learn</Text>
                  <Text className='font-bold'>HSK 4</Text>
                </View>
              </View>
              <Text className='text-slate-400 text-xl'>{'>'}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className='p-4 bg-white rounded-xl mx-5 my-2' style={{ elevation: 14, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 4 }}>
          <TouchableOpacity onPress={() => router.push('hskFive')}>
            <View className='flex-row justify-between items-center'>
              <View className='flex-row items-center space-x-4'>
                <View className='p-2 bg-customGreen rounded-xl w-14 h-14 justify-center items-center'>
                  <SimpleLineIcons name="book-open" size={32} color="white"/>
                </View>
                <View className='flex-col space-y-2'>
                  <Text className='text-xs text-slate-600'>Learn</Text>
                  <Text className='font-bold'>HSK 5</Text>
                </View>
              </View>
              <Text className='text-slate-400 text-xl'>{'>'}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className='p-4 bg-white rounded-xl mx-5 my-2' style={{ elevation: 14, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 4 }}>
          <TouchableOpacity onPress={() => router.push('hskSix')}>
            <View className='flex-row justify-between items-center'>
              <View className='flex-row items-center space-x-4'>
                <View className='p-2 bg-customGreen rounded-xl w-14 h-14 justify-center items-center'>
                  <SimpleLineIcons name="book-open" size={32} color="white"/>
                </View>
                <View className='flex-col space-y-2'>
                  <Text className='text-xs text-slate-600'>Learn</Text>
                  <Text className='font-bold'>HSK 6</Text>
                </View>
              </View>
              <Text className='text-slate-400 text-xl'>{'>'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default RootLayout;
