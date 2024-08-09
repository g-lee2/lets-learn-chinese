import { View, Text, Touchable, TouchableOpacity, FlatList } from 'react-native';
import { FlashList } from '@shopify/flash-list';

const VocabItem = ({ data }) => {
  return (
    <FlashList 
      data={data} 
      renderItem={({ item }) => (
        <TouchableOpacity>
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
