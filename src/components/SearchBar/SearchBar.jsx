import { View, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const SearchBar = ({ className: customClassName, style: customStyle }) => (
  <View
    className={`relative text-gray-600 ${customClassName}`}
    style={customStyle}
  >
    <TextInput
      type="search"
      name="serch"
      placeholder="Search"
      className="bg-white h-12 px-5 pr-12 pb-1 rounded-full text-sm focus:outline-none border"
    />
    <View className="absolute right-0 top-0 mt-2 mr-3 ">
      <Ionicons name="search-outline" size={30} />
    </View>
  </View>
);

export default SearchBar;
