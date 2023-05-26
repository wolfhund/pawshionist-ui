import { View, Text } from 'react-native';

export default Container = ({
  className: customClassName,
  style: customStyle,
  children
}) => (
  <View
    className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-3 ${customClassName}`}
    style={customStyle}
  >
    {children}
  </View>
);
