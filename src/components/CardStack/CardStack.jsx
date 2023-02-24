import { View } from 'react-native';
import Header from './Header';
import Body from './Body';

const CardStack = ({
  className: customClassName,
  style: customStyle,
  children
}) => (
  <View
    className={`flex flex-row bg-white max-w-[100%] rounded-lg shadow-lg bg-red-300 ${customClassName}`}
    style={customStyle}
  >
    {children}
  </View>
);

CardStack.Header = Header;
CardStack.Body = Body;

export default CardStack;
