import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { Text, View } from 'react-native';
import Container from './Container';

export default {
  title: 'Container example'
};

export const container = () => (
  <Container>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
      dignissim iaculis sapien, non vehicula lacus malesuada quis. Fusce ante
      mauris, pretium id tempus sed, eleifend a urna.
    </Text>
  </Container>
);

// On-Device Register
storiesOf('Container', module)
  .addDecorator(getStory => getStory())
  .add('Container', container);
