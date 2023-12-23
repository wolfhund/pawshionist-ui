import { View } from 'react-native'
import SearchBar from '../SearchBar/SearchBar'

const PetSearchBar = ({ className: customClassName, style: customStyle }) => (
  <View className={`flex-row py-6 ${customClassName}`} style={customStyle}>
    <SearchBar className="w-full" />
  </View>
)

export default PetSearchBar
