import { View } from 'react-native';

const Body = ({ className: customClassName, style: customStyle, children }) => (
  <View className={`shrink px-6 py-4 ${customClassName}`} style={customStyle}>
    {children}
  </View>
);

export default Body;
