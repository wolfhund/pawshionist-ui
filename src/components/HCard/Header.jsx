import { Image } from 'react-native';

const Header = ({
  srcImage,
  className: customClassName,
  style: customStyle,
  children
}) => (
  <>
    {children ?? (
      <Image
        className={`w-2/6 aspect-square rounded-l-lg ${customClassName}`}
        style={customStyle}
        source={srcImage}
      />
    )}
  </>
);

export default Header;
