import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { Text } from 'react-native';
import Panel from './Panel';
import CenterView from '../../../storybook/stories/CenterView';

export default {
  title: 'Some card'
};

export const panel = () => (
  <Panel>
    <Text>This is a simple Panel.</Text>
  </Panel>
);

// On-Device Register
storiesOf('Panel', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Panel', panel);
