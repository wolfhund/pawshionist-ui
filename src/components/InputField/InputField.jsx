import { View, TextInput, Text } from 'react-native';

const InputField = ({
  placeholder,
  label,
  className: customClassName,
  style: customStyle
}) => (
  <View>
    <View className="mt-1">
      <Text className="block text-sm font-medium text-gray-700">{label}</Text>
      <TextInput
        className={`form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${customClassName}`}
        style={customStyle}
        placeholder={placeholder}
      />
    </View>
  </View>
);

export default InputField;
