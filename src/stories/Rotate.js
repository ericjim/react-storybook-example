import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Rotate from '../components/Rotate';

storiesOf('Rotate', module)
  .add('with no interval', () => (
    <Rotate>😎</Rotate>
  ))
  .add('with a faster interval', () => (
    <Rotate interval="0.9">🤢</Rotate>
  ))
  .add('with a slower interval', () => (
    <Rotate interval="4">😪</Rotate>
  ));
