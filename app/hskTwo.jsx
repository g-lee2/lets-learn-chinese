import { View, Text } from 'react-native';
import VocabItem from '../components/VocabItem';
import data from '../assets/data/hsk-level-2.json';

const hskTwo = () => {
  return (
    <View>
      <VocabItem data={data} />
    </View>
  )
}

export default hskTwo;
