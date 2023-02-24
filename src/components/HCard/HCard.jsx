import { View } from 'react-native';
import Header from './Header';
import Body from './Body';

const HCard = ({ children }) => (
  <View className="flex flex-row max-w-full rounded-lg shadow-lg bg-white">
    {children}
  </View>
);

HCard.Header = Header;
HCard.Body = Body;

export default HCard;
