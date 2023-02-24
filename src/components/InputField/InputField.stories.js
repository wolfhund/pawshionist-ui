import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import InputField from './InputField';
import CenterView from '../../../storybook/stories/CenterView';

export const inputField = () => (
  <InputField label="Test Input" placeholder="Foo" />
);

// On-Device Register
storiesOf('InputField', module)
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
  .add('InputField', inputField);
