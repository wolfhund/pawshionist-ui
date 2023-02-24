import { Image, View } from 'react-native';

const Header = ({
  srcImage,
  className: customClassName,
  style: customStyle,
  children
}) => (
  <>
    {children ?? (
      <Image
        className={`max-w-[30%] aspect-square rounded-l-lg ${customClassName}`}
        style={customStyle}
        source={srcImage}
      />
    )}
  </>
);

export default Header;
