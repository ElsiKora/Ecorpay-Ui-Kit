import type { Meta, StoryObj } from '@storybook/react';

import { LanguageSelect } from './LanguageSelect';
import { useState } from 'react';

const meta: Meta<typeof LanguageSelect> = {
  title: 'Shared/LanguageSelect',
  component: LanguageSelect,
  parameters: {
    layout: 'centered',
  },
  args: {
    // disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof LanguageSelect>;

export const Rounded: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('ru');

    return (
      <LanguageSelect
        variant="rounded"
        langList={[
          { code: 'ru', label: 'RUS' },
          { code: 'fr', label: 'FRA' },
          { code: 'es', label: 'SPA' },
          { code: 'ar', label: 'ARA' },
          { code: 'de', label: 'DEU' },
          { code: 'pt', label: 'POR' },
          { code: 'zh', label: 'ZHO' },
          { code: 'en', label: 'ENG' },
        ]}
        rootProps={{ onValueChange: setValue, value }}
      />
    );
  },
};

export const Square: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('ru');

    return (
      <LanguageSelect
        variant="square"
        langList={[
          { code: 'ru', label: 'RUS' },
          { code: 'fr', label: 'FRA' },
          { code: 'es', label: 'SPA' },
          { code: 'ar', label: 'ARA' },
          { code: 'de', label: 'DEU' },
          { code: 'pt', label: 'POR' },
          { code: 'zh', label: 'ZHO' },
          { code: 'en', label: 'ENG' },
        ]}
        rootProps={{ onValueChange: setValue, value }}
      />
    );
  },
};

// export const Disabled: Story = {
//   args: {
//     children: 'Copy text',
//     valueToCopy: 'Copy text',
//     disabled: true,
//   },
// };
