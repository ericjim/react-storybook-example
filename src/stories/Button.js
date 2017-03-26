
import React from 'react';
import Button from '../components/Button';

import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';
const stories = storiesOf('Storybook Knobs', module);
stories.addDecorator(withKnobs);

stories.add('with a button', () => (
  <Button primary={boolean('Primary', true)}>{ text('Label', '😀 😎 👍 💯') }</Button>
));
