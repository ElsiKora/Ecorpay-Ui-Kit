import type { Preview } from '@storybook/react';

import '../src/assets/style.css';
import '../src/assets/fonts.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
