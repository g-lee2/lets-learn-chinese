import { View, TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';

const RootLayout = () => {
  const router = useRouter();
  
  return (
    <View>
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
    </View>
  )
}

export default RootLayout
