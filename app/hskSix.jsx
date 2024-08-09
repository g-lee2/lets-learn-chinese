import { View, Text } from 'react-native';
import VocabItem from '../components/VocabItem';
import data from '../assets/data/hsk-level-6.json';

const hskSix = () => {
  return (
    <View className="flex-1">
      <VocabItem data={data} />
    </View>
  )
}

export default hskSix;
