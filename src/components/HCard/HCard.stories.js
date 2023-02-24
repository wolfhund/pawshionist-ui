import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { Text, View } from 'react-native';
import HCard from './HCard';
import CenterView from '../../../storybook/stories/CenterView';

export default {
  title: 'Some card'
};

const cardMock = { name: 'Snowflake' };

const sampleImage = require('../../../assets/card-stack-top.jpg');

import Container from '../Container/Container';
export const card = () => (
  <Container>
    <HCard>
      <HCard.Header srcImage={sampleImage} />
      <HCard.Body>
        <Text>Some content</Text>
      </HCard.Body>
    </HCard>
  </Container>
);

// On-Device Register
storiesOf('HCard', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('HCard', card);
