import { View } from 'react-native'
import tw from 'twrnc'

export default Panel = ({ style: customStyle, children }) => (
  <View style={tw`rounded-lg bg-white shadow ${customStyle}`}>
    <View style={tw`px-4 py-5 sm:p-6`}>{children}</View>
  </View>
)
