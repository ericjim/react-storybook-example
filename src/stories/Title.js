import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Title from '../components/Title';

storiesOf('Title', module)
  .add('with text', () => (
    <Title>Hello, I'm a Title component</Title>
  ));
