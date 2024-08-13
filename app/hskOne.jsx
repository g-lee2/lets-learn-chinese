import { View, Text } from 'react-native';
import VocabItem from '../components/VocabItem';
import data from '../assets/data/hsk-level-1.json';
import { Stack } from "expo-router";

const hskOne = () => {
  return (
    <View className="flex-1">
      <Stack.Screen
        options={{
          title: 'HSK 1',
        }}
      />
      <VocabItem data={data} />
    </View>
  )
}

export default hskOne;
