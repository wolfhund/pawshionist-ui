import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import SearchBar from './SearchBar';
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
    <SearchBar />
  </Container>
);

// On-Device Register
storiesOf('Search Bar', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Search Bar', petCard);
