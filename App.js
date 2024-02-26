import { StatusBar } from 'expo-status-bar';
import {Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-rose-600 font-bold text-[17px]">Hello world!</Text>
      <TouchableOpacity className="bg-green-500 p-4 rounded-lg mt-4 shadow-xl shadow-black">
        <Text className="font-semibold text-white">Hey</Text>
      </TouchableOpacity>
      <StatusBar style="dark" />

    </View>
  );
}
