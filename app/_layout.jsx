import { Stack, useRouter } from "expo-router";
import { TouchableOpacity, Text } from "react-native";

export default function App() {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{
          title: 'Home',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => router.push('about')}
            >
              <Text className='text-lg'>	
              &#9432;</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
