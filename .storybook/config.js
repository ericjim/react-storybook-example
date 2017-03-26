import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/stories/Title');
  require('../src/stories/Button');
  require('../src/stories/Rotate');
}

configure(loadStories, module);
