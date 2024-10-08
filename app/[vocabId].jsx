import { View, Text, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { useState } from 'react';
import { useLocalSearchParams, Stack } from 'expo-router';
import WritingBoard from '../components/WritingBoard';

const VocabDetails = () => {
  const {vocabId, vocabHanzi, vocabPinyin, vocabTranslations} = useLocalSearchParams();
  const vocabTranslationsArray = vocabTranslations.split(",");

  const { height } = Dimensions.get('window'); 
  const isSmallerDevice = height <= 667;
  
  const [hideTranslations, setHideTranslations] = useState(false);
  const [hideHanzi, setHideHanzi] = useState(false);
  const [hidePinyin, setHidePinyin] = useState(false);

  return (
    <View className='my-3'>
      <Stack.Screen
        options={{
          title: hideHanzi ? vocabId : vocabHanzi,
          headerTintColor: '#4DC591',
          headerTitleStyle: {
            color: 'black',
          },
          headerTitleAlign: 'center',
        }}
      />
      <View className='flex justify-center items-center mb-4'>
        <View className='my-1 h-7 justify-center items-center'>
          <Text>{hideHanzi ? '' : vocabHanzi}</Text>
        </View>
        <TouchableOpacity onPress={() => setHideHanzi(prev => !prev)} className='bg-white rounded-lg border-2 border-customPastelGreen w-11/12 items-center'>
          <Text className='p-3'>{hideHanzi ? 'Show' : 'Hide'} Hanzi</Text>
        </TouchableOpacity>
        <View className='my-1 h-7 justify-center items-center'>
          <Text>{hidePinyin ? '' : vocabPinyin}</Text>
        </View>
        <TouchableOpacity onPress={() => setHidePinyin(prev => !prev)}className='bg-white rounded-lg border-2 border-customPastelGreen w-11/12 items-center'>
          <Text className='p-3'>{hidePinyin ? 'Show' : 'Hide'} Pinyin</Text>
        </TouchableOpacity>
        <View className={`my-1 ${isSmallerDevice ? 'h-14' : 'h-20'} justify-center items-center`}>
          <FlatList
            data={vocabTranslationsArray}
            renderItem={({item}) => <Text className='px-4'>{hideTranslations ? '' : `-${item}`}</Text>}
            keyExtractor={(index) => index.toString()}
            showsVerticalScrollIndicator={true}
          />
        </View>
        <TouchableOpacity onPress={() => setHideTranslations(prev => !prev)} className='bg-white rounded-lg border-2 border-customPastelGreen w-11/12 items-center'>
          <Text className='p-3'>{hideTranslations ? 'Show' : 'Hide'} Definition</Text>
        </TouchableOpacity>
      </View>
      <WritingBoard character={hideHanzi ? '' : vocabHanzi} isSmallerDevice={isSmallerDevice} />
    </View>
  )
}

export default VocabDetails;
