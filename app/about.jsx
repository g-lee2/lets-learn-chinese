import { View, Text, Linking, TouchableOpacity } from 'react-native';

const about = () => {
  const handlePressGigacool = () => {
    Linking.openURL('https://github.com/gigacool/hanyu-shuiping-kaoshi?tab=readme-ov-file');
  };

  const handlePressCedricHartland = () => {
    Linking.openURL('http://cedric.hartland.free.fr');
  }

  const handlePressDavidPeterson = () => {
    Linking.openURL('http://www.davidpetersson.com');
  } 

  const handlePressCedict = () => {
    Linking.openURL('http://www.mdbg.net');
  }

  return (
    <View>
      <Text>This app was made possible by</Text>
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
