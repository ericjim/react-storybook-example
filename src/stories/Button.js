import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from '../components/Button';

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ))
  .add('with primary background', () => (
    <Button onClick={action('clicked')} primary>Primary Button</Button>
  ));
