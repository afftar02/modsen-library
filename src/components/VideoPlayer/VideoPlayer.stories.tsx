import type { Meta, StoryObj } from "@storybook/react";
import VideoPlayer from "./index";

const meta: Meta<typeof VideoPlayer> = {
  title: "Components/VideoPlayer",
  component: VideoPlayer,
};

export default meta;

type Story = StoryObj<typeof VideoPlayer>;

export const Primary: Story = {
  args: {
    src: 'https://imdb-video.media-imdb.com/vi2053751833/1434659607842-pgv4ql-1683541736696.mp4?Expires=1698607413&Signature=N0vGdIY1XAIQP-im8VNwJUQ5PiDsYRfLX5i0EM6-EFqM0~PqwnixFdSq7M4Tt7gEqYPyttCsKbGOKDfEHGTWWzBiVmg46SWgYi3LoOqnPRIBLPkLJuAAjc1e-XfzEBr6Rh2tLLWBsks1dW1WF5RuOMCkBXOoA2as~ilAJExQO1WBXcEPEDSLQils2MJ45aSPTAX7w9InBSXYO5bVC6nyXGXvCDms~jQOV3yIEK~Ed-J3s7nCylsVk~NNv48GfRgUsrCGc-4tP6zKjuWYdfs2Kx6l1xJMuGsQhLTmrKvTUA~Exdvciig3qEpvQ5pUQZQZFPFSH8XoQiJS2e0ZdxzdNg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA'
  },
};
