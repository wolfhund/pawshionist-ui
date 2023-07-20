import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default Navbar = ({ title, style }) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        // Paddings to handle safe area
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        backgroundColor: 'teal',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text className="font-semibold text-xl tracking-tight text-white">
        {title}
      </Text>
    </View>
  );
};
