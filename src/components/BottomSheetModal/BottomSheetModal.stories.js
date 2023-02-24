import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { Text, View } from 'react-native';
import BottomSheetModal from './BottomSheetModal';
import CenterView from '../../../storybook/stories/CenterView';

export default {
  title: 'Some card'
};

const cardMock = { name: 'Snowflake' };

const sampleImage = require('../../../assets/card-stack-top.jpg');

import Container from '../Container/Container';
export const card = () => (
  <>
    <View>
      <Text>Hello!</Text>
    </View>
    <BottomSheetModal />
  </>
);

// On-Device Register
storiesOf('BottomSheetModal', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('BottomSheetModal', card);
