import type { Meta, StoryObj } from "@storybook/react";

import Icon from "./index";

const meta: Meta<typeof Icon> = {
  title: "UI/Icon",
  component: Icon,
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Logo: Story = {
  args: {
    id: 'logo',
  },
};

export const Settings: Story = {
  args: {
    id: 'settings',
    width: 50,
    height: 50,
    viewBox: '0 0 50 50'
  },
};

export const Close: Story = {
  args: {
    id: 'close',
    width: 50,
    height: 50,
    viewBox: '0 0 50 50',
    stroke: '#000'
  },
};

export const NameInput: Story = {
  args: {
    id: 'name',
    width: 100,
    height: 100,
    viewBox: '0 0 100 100'
  },
};

export const SurnameInput: Story = {
  args: {
    id: 'surname',
    width: 100,
    height: 100,
    viewBox: '0 0 100 100'
  },
};

export const EmailInput: Story = {
  args: {
    id: 'email',
    width: 100,
    height: 100,
    viewBox: '0 0 100 100'
  },
};

export const PasswordInput: Story = {
  args: {
    id: 'password',
    width: 100,
    height: 100,
    viewBox: '0 0 100 100'
  },
};

export const Google: Story = {
  args: {
    id: 'google',
    width: 50,
    height: 50,
    viewBox: '0 0 50 50'
  },
};

export const Facebook: Story = {
  args: {
    id: 'facebook',
    width: 50,
    height: 50,
    viewBox: '0 0 50 50'
  },
};

export const Github: Story = {
  args: {
    id: 'github',
    width: 50,
    height: 50,
    viewBox: '0 0 50 50'
  },
};

export const RightArrow: Story = {
  args: {
    id: 'arrow-right',
    width: 100,
    height: 100,
    viewBox: '0 0 100 100'
  },
};

export const Star: Story = {
  args: {
    id: 'star',
    width: 50,
    height: 50,
    viewBox: '0 0 50 50'
  },
};

export const Show: Story = {
  args: {
    id: 'show',
    width: 50,
    height: 50,
    viewBox: '0 0 50 50'
  },
};

export const FooterLogo: Story = {
  args: {
    id: 'footer-logo',
    width: 150,
    height: 100,
    viewBox: '0 0 150 100'
  },
};

export const Send: Story = {
  args: {
    id: 'send',
    width: 50,
    height: 50,
    viewBox: '0 0 50 50'
  },
};

export const LeftArrows: Story = {
  args: {
    id: 'arrows-left',
    width: 100,
    height: 100,
    viewBox: '0 0 100 100'
  },
};

export const RightArrows: Story = {
  args: {
    id: 'arrows-right',
    width: 100,
    height: 100,
    viewBox: '0 0 100 100'
  },
};

export const Ticket: Story = {
  args: {
    id: 'ticket',
    width: 50,
    height: 50,
    viewBox: '0 0 50 50'
  },
};

export const Cancel: Story = {
  args: {
    id: 'cancel',
    width: 50,
    height: 50,
    viewBox: '0 0 50 50'
  },
};

export const Profile: Story = {
  args: {
    id: 'profile',
    width: 100,
    height: 100,
    viewBox: '0 0 100 100'
  },
};

export const Avatar: Story = {
  args: {
    id: 'avatar',
    width: 300,
    height: 300,
    viewBox: '0 0 300 300'
  },
};

export const RoundedPlay: Story = {
  args: {
    id: 'play-preview',
    width: 100,
    height: 100,
    viewBox: '0 0 100 100'
  },
};

export const PlayControl: Story = {
  args: {
    id: 'play-control',
    width: 100,
    height: 100,
    viewBox: '0 0 100 100'
  },
};

export const PauseControl: Story = {
  args: {
    id: 'pause-control',
    width: 50,
    height: 50,
    viewBox: '0 0 550 550'
  },
};

export const Volume: Story = {
  args: {
    id: 'volume-control',
    width: 50,
    height: 50,
    viewBox: '0 0 50 50'
  },
};

export const Muted: Story = {
  args: {
    id: 'muted-control',
    width: 50,
    height: 50,
    viewBox: '0 0 500 500'
  },
};

export const Screen: Story = {
  args: {
    id: 'screen-control',
    width: 50,
    height: 50,
    viewBox: '0 0 50 50'
  },
};

export const Pause: Story = {
  args: {
    id: 'pause',
    width: 50,
    height: 50,
    viewBox: '0 0 50 50'
  },
};

export const Play: Story = {
  args: {
    id: 'play',
    width: 50,
    height: 50,
    viewBox: '0 0 50 50'
  },
};

export const SkipBackward: Story = {
  args: {
    id: 'skip-backward-10',
    width: 50,
    height: 50,
    viewBox: '0 0 80 80'
  },
};

export const SkipForward: Story = {
  args: {
    id: 'skip-forward-10',
    width: 50,
    height: 50,
    viewBox: '0 0 80 80'
  },
};

export const NestedRightArrow: Story = {
  args: {
    id: 'right-arrow-nested',
    width: 50,
    height: 50,
    viewBox: '0 0 50 50'
  },
};

export const NestedLeftArrow: Story = {
  args: {
    id: 'left-arrow-nested',
    width: 50,
    height: 50,
    viewBox: '0 0 50 50'
  },
};

export const Tick: Story = {
  args: {
    id: 'tick',
    width: 50,
    height: 50,
    viewBox: '0 0 50 50'
  },
};

export const ArrowUp: Story = {
  args: {
    id: 'arrow-up',
    width: 22,
    height: 32,
    viewBox: "0 0 22 32",
    fill: "none",
    stroke: '#000'
  },
};

export const ArrowDown: Story = {
  args: {
    id: 'arrow-down',
    width: 22,
    height: 32,
    viewBox: "0 0 22 32",
    fill: "none",
    stroke: '#000'
  },
};

export const Success: Story = {
  args: {
    id: 'authorized',
  },
};
