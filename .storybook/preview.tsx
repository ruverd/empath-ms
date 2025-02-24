import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import { create } from "@storybook/theming";

import "../src/styles/global.css";

const lightTheme = create({
  base: "light",
  brandTitle: "Empath",
  brandUrl: "/",
  brandTarget: "_self",
  colorPrimary: "#290053",
  colorSecondary: "#8E45FF",
  appBg: "#ECEEF5",
  appContentBg: "#ECEEF5",
  barBg: "#ECEEF5",
});

const darkTheme = create({
  base: "dark",
  brandTitle: "Empath",
  brandUrl: "/",
  brandTarget: "_self",
  colorPrimary: "#8E45FF",
  colorSecondary: "#1BD3FF",
  appBg: "#290053",
  appContentBg: "#290053",
  barBg: "#290053",
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
      default: "light",
      values: [
        {
          name: "light",
          value: "#ECEEF5",
        },
        {
          name: "dark",
          value: "#290053",
        },
      ],
    },
    layout: "fullscreen",
    themes: {
      default: "light",
      list: [
        { name: "light", class: "", color: "#ECEEF5" },
        { name: "dark", class: "dark", color: "#290053" },
      ],
    },
    docs: {
      theme: lightTheme,
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
