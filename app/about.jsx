import { View, Text, Linking, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';

const about = () => {
  const handlePressGigacool = () => {
    Linking.openURL('https://github.com/gigacool/hanyu-shuiping-kaoshi?tab=readme-ov-file');
  };

  const handlePressCedricHartland = () => {
    Linking.openURL('http://cedric.hartland.free.fr/index.php?page=hsk&lang=en');
  }

  const handlePressDavidPeterson = () => {
    Linking.openURL('http://www.davidpetersson.com/hsk-the-complete-hanban-lists/');
  } 

  const handlePressCedict = () => {
    Linking.openURL('http://www.mdbg.net');
  }

  const handlePressCCLicense = () => {
    Linking.openURL('https://creativecommons.org/licenses/by-nc/4.0/');
  }

  return (
    <View className='flex-1 bg-white'>
      <View className='m-7'>
        <Stack.Screen
          options={{
            title: 'About',
            headerTintColor: '#4DC591',
            headerTitleStyle: {
              color: 'black',
            },
            headerTitleAlign: 'center',
          }}
        />
        <View>
          <Text className='text-center '>This app utilizes data derived from gigacool GitHub repository licensed under the MIT License.</Text>
          <Text className='text-center'>The data includes entries from the CEDICT dictionary, which is provided by Cedric Hartland and David Peterson and is licensed under the Creative Commons Attribution-NonCommercial 4.0 International License.</Text>
        </View>
        <View className='mt-10'>
          <TouchableOpacity onPress={handlePressCCLicense} className='flex-row items-center'>
            <Text className='text-cyan-600 text-xl'>&#8226;</Text>
            <Text className='underline text-cyan-600'>
              View the Creative Commons License
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePressGigacool} className='flex-row items-center'>
            <Text className='text-cyan-600 text-xl'>&#8226;</Text>
            <Text className='underline text-cyan-600'>
              gigacool
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePressCedricHartland} className='flex-row items-center'>
            <Text className='text-cyan-600 text-xl'>&#8226;</Text>
            <Text className='underline text-cyan-600'>
              Cedric Hartland
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePressDavidPeterson} className='flex-row items-center'>
            <Text className='text-cyan-600 text-xl'>&#8226;</Text>
            <Text className='underline text-cyan-600'>
              David Peterson
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePressCedict} className='flex-row items-center'>
            <Text className='text-cyan-600 text-xl'>&#8226;</Text>
            <Text className='underline text-cyan-600'>
              CEDICT Dictionary
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default about;
