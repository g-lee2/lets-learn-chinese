import { View } from 'react-native';
import VocabItem from '../components/VocabItem';
import data from '../assets/data/hsk-level-3.json';
import { Stack } from "expo-router";

const hskThree = () => {
  return (
    <View className="flex-1">
      <Stack.Screen
        options={{
          title: 'HSK 3',
          headerTintColor: '#4DC591',
          headerTitleStyle: {
            color: 'black',
          },
          headerTitleAlign: 'center',
        }}
      />
      <VocabItem data={data} />
    </View>
  )
}

export default hskThree;
