import { View, Text, Touchable, TouchableOpacity, FlatList } from 'react-native';

const VocabItem = ({ data }) => {
  return (
    <FlatList 
      data={data} 
      numColumns={5}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <Text>
            {item.hanzi}
          </Text>
        </TouchableOpacity>
      )}
    />
  )
}

export default VocabItem;
