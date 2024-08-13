import { View, Text, Touchable, TouchableOpacity, FlatList } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { useRouter } from 'expo-router';

const VocabItem = ({ data }) => {
  const router = useRouter();

  return (
    <FlashList 
      data={data} 
      renderItem={({ item }) => (
        <TouchableOpacity 
          onPress={() => {
            router.push({
              pathname: '/[vocabId]',
              params: {
                vocabId: item.id,
                vocabHanzi: item.hanzi,
                vocabPinyin: item.pinyin,
                vocabTranslations: item.translations
              },
            });
          }}
        >
          <Text>
            {item.hanzi}
          </Text>
        </TouchableOpacity>
      )}
      numColumns={5}
      keyExtractor={(item) => item.id}
      estimatedItemSize={200}
    />
  )
}

export default VocabItem;
