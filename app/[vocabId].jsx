import { View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useLocalSearchParams, Stack } from 'expo-router';
import WritingBoard from '../components/WritingBoard';

const VocabDetails = () => {
  const {vocabId, vocabHanzi, vocabPinyin, vocabTranslations} = useLocalSearchParams();
  const vocabTranslationsArray = vocabTranslations.split(",");
  
  const [hideTranslations, setHideTranslations] = useState(false);
  const [hideHanzi, setHideHanzi] = useState(false);
  const [hidePinyin, setHidePinyin] = useState(false);

  return (
    <View>
      <Stack.Screen
        options={{
          title: hideHanzi ? vocabId : vocabHanzi,
        }}
      />
      <Text>{hideHanzi ? '' : vocabHanzi}</Text>
      <TouchableOpacity onPress={() => setHideHanzi(prev => !prev)}>
        <Text>{hideHanzi ? 'Show' : 'Hide'} Hanzi</Text>
      </TouchableOpacity>
      <Text>{hidePinyin ? '' : vocabPinyin}</Text>
      <TouchableOpacity onPress={() => setHidePinyin(prev => !prev)}>
        <Text>{hidePinyin ? 'Show' : 'Hide'} Pinyin</Text>
      </TouchableOpacity>
      {vocabTranslationsArray.map((translation) => {
        return (
          <Text key={translation}>{hideTranslations ? '' : translation}</Text>
        );
      })}
      <TouchableOpacity onPress={() => setHideTranslations(prev => !prev)}>
        <Text>{hideTranslations ? 'Show' : 'Hide'} Definition</Text>
      </TouchableOpacity>
      <WritingBoard character={hideHanzi ? '' : vocabHanzi} />
    </View>
  )
}

export default VocabDetails;
