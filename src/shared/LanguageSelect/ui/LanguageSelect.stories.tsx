import type { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";

import { LanguageSelect } from "./LanguageSelect";

const meta: Meta<typeof LanguageSelect> = {
 args: {
  // disabled: false,
 },
 component: LanguageSelect,
 parameters: {
  layout: "centered",
 },
 title: "Shared/LanguageSelect",
};

export default meta;

type Story = StoryObj<typeof LanguageSelect>;

export const Rounded: Story = {
 render: () => {
  const [value, setValue] = useState("ru");

  return (
   <LanguageSelect
    langList={[
     { code: "ru", label: "RUS" },
     { code: "fr", label: "FRA" },
     { code: "es", label: "SPA" },
     { code: "ar", label: "ARA" },
     { code: "de", label: "DEU" },
     { code: "pt", label: "POR" },
     { code: "zh", label: "ZHO" },
     { code: "en", label: "ENG" },
    ]}
    rootProps={{ onValueChange: setValue, value }}
    variant="rounded"
   />
  );
 },
};

export const Square: Story = {
 render: () => {
  const [value, setValue] = useState("ru");

  return (
   <LanguageSelect
    langList={[
     { code: "ru", label: "RUS" },
     { code: "fr", label: "FRA" },
     { code: "es", label: "SPA" },
     { code: "ar", label: "ARA" },
     { code: "de", label: "DEU" },
     { code: "pt", label: "POR" },
     { code: "zh", label: "ZHO" },
     { code: "en", label: "ENG" },
    ]}
    rootProps={{ onValueChange: setValue, value }}
    variant="square"
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
