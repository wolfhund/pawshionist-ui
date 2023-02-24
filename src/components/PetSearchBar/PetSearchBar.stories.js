import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import PetSearchBar from './PetSearchBar';
import Container from '../Container/Container';
import CenterView from '../../../storybook/stories/CenterView';

export default {
  title: 'Some card'
};

const petPhoto = require('./../../../assets/cat.jpg');
const infoMock = {
  name: 'Snowflake',
  breed: 'Selkirk Rex',
  owner: { firstName: 'John', lastName: 'Connor', phone: '123-123-123' }
};

export const petCard = () => (
  <Container>
    <PetSearchBar />
  </Container>
);

// On-Device Register
storiesOf('Pet Search Bar', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Pet Search Bar', petCard);
