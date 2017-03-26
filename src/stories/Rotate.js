import React from 'react';
import Rotate from '../components/Rotate';

import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';
const stories = storiesOf('Storybook Knobs', module);
stories.addDecorator(withKnobs);

stories.add('Rotate', () => {
  const interval = number('interval', 2);
  return (<Rotate interval={`${interval}`}>🤢</Rotate>);
});
