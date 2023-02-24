import { Text, View } from 'react-native';

export default Navbar = ({ title, style }) => {
  return (
    <View className="flex items-center justify-between bg-teal-500 p-6">
      <View className="flex items-center flex-shrink-0 mr-6 justify-center">
        <Text className="font-semibold text-xl tracking-tight text-white">
          {title}
        </Text>
      </View>
    </View>
  );
};
