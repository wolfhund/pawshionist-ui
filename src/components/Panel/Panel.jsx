import { View } from 'react-native';

export default Panel = ({
  className: customClassName,
  style: customStyle,
  children
}) => (
  <View
    className={`overflow-hidden rounded-lg bg-white shadow ${customClassName}`}
    style={customStyle}
  >
    <View className="px-4 py-5 sm:p-6">{children}</View>
  </View>
);
