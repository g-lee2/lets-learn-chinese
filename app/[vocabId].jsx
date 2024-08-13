import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams, Stack } from 'expo-router';
import WritingBoard from '../components/WritingBoard';

const VocabDetails = () => {
  const {vocabId, vocabHanzi, vocabPinyin, vocabTranslations} = useLocalSearchParams();
  const vocabTranslationsArray = vocabTranslations.split(",");
  
  return (
    <View>
      <Stack.Screen
        options={{
          title: vocabHanzi,
        }}
      />
      <Text>{vocabId}</Text>
      <Text>{vocabHanzi}</Text>
      <Text>{vocabPinyin}</Text>
      {vocabTranslationsArray.map((translation) => {
        return (
          <Text key={translation}>{translation}</Text>
        );
      })}
      <WritingBoard character={vocabHanzi} />
    </View>
  )
}

export default VocabDetails;
