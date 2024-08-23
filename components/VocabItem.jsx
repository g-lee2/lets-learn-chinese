import { Text, Pressable } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { useRouter } from 'expo-router';

const VocabItem = ({ data }) => {
  const router = useRouter();

  return (
    <FlashList 
      data={data} 
      renderItem={({ item }) => (
        <Pressable style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#4DC591' : 'white',
            elevation: 14, 
            shadowColor: '#000', 
            shadowOffset: { width: 0, height: 4 }, 
            shadowOpacity: 0.2, 
            shadowRadius: 4,
            justifyContent: 'center', 
            alignItems: 'center', 
            padding: 16, 
            borderRadius: 8, 
            width: 96, 
            height: 56, 
            marginHorizontal: 'auto', 
            marginVertical: 12,
          }
        ]}
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
          {({ pressed }) => (
            <Text style={{ color: pressed ? 'white' : 'black' }}>
              {item.hanzi}
            </Text>
          )}
        </Pressable>
      )}
      numColumns={3}
      keyExtractor={(item) => item.id}
      estimatedItemSize={115}
    />
  )
}

export default VocabItem;
