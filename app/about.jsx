import { View, Text, Linking, TouchableOpacity } from 'react-native';

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
    <View>
      <Text>This app utilizes data derived from gigacool GitHub repository licensed under the MIT License.</Text>
      <Text>The data includes entries from the CEDICT dictionary, which is provided by Cedric Hartland and David Peterson and is licensed under the Creative Commons Attribution-NonCommercial 4.0 International License.</Text>
      <TouchableOpacity onPress={handlePressCCLicense}>
        <Text className='underline text-cyan-600'>
          View the Creative Commons License
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePressGigacool}>
        <Text className='underline text-cyan-600'>
          gigacool
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePressCedricHartland}>
        <Text className='underline text-cyan-600'>
          Cedric Hartland
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePressDavidPeterson}>
        <Text className='underline text-cyan-600'>
          David Peterson
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePressCedict}>
        <Text className='underline text-cyan-600'>
          CEDICT Dictionary
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default about;
