import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import Navbar from './Navbar';
import CenterView from '../../../storybook/stories/CenterView';

import Constants from 'expo-constants';

export default {
  title: 'Constants2'
};

export const navbar = () => <Navbar title="My App" />;

// On-Device Register
storiesOf('Navbar', module)
  .addDecorator(getStory => (
    <CenterView
      style={{
        flex: 1,
        backgroundColor: '#F5FCFF'
      }}
    >
      {getStory()}
    </CenterView>
  ))
  .add('Navbar', navbar);
