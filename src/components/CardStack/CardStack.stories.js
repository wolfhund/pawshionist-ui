import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { Text, View } from 'react-native';
import CardStack from './CardStack';
import CenterView from '../../../storybook/stories/CenterView';
import Container from '../Container/Container';

export default {
  title: 'Some card'
};

const sampleImage = require('../../../assets/card-stack-top.jpg');

export const cardStack = () => (
  <Container>
    <CardStack>
      <CardStack.Header srcImage={sampleImage} />
      <CardStack.Body>
        <Text>This is the card content</Text>
      </CardStack.Body>
    </CardStack>
  </Container>
);

// On-Device Register
storiesOf('CardStack', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Card Stack', cardStack);
