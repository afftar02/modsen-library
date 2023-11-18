import type { StorybookConfig } from "@storybook/react-webpack5";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.tsx",
  ],
  staticDirs: ['../public'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config) => {
    if(config.resolve) {
      config.resolve.plugins = [new TsconfigPathsPlugin({ extensions: config.resolve.extensions })];
    }

    return config
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
