import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from 'expo-router';

const RootLayout = () => {
  const navigation = useNavigation();
  
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('hskOne')}>
        <Text>HSK 1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('hskTwo')}>
        <Text>HSK 2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('hskThree')}>
        <Text>HSK 3</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('hskFour')}>
        <Text>HSK 4</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('hskFive')}>
        <Text>HSK 5</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('hskSix')}>
        <Text>HSK 6</Text>
      </TouchableOpacity>
    </View>
  )
}

export default RootLayout
