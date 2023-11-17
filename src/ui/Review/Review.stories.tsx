import type { Meta, StoryObj } from "@storybook/react";

import Review from "./index";

const meta: Meta<typeof Review> = {
  title: "UI/Review",
  component: Review,
};

export default meta;

type Story = StoryObj<typeof Review>;

export const Primary: Story = {
  args: {
    title: 'Review',
    fromLabel: 'from',
    showMoreLabel: 'read more',
    hideLabel: 'hide',
    bgColor: '#101010',
    author: 'John Smith',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet atque, doloremque est harum impedit, iure minima nostrum nulla quibusdam repellendus suscipit temporibus voluptates! A accusamus aliquid amet aspernatur beatae distinctio, dolore doloremque dolorum eaque, earum eum, eveniet exercitationem ipsum iusto labore laborum magnam natus nihil non nostrum numquam obcaecati officiis possimus quam qui quibusdam ratione sapiente sit tempore vel veritatis vitae voluptas voluptates? Aliquam, amet atque, blanditiis consequuntur dolores hic, incidunt inventore ipsa iure libero modi nesciunt obcaecati quam quas quibusdam quisquam repellendus repudiandae sequi unde voluptate! Harum non porro qui similique vero! Corporis deleniti distinctio exercitationem iusto minus quasi qui, sapiente similique, sunt suscipit veniam voluptate!',
  },
};
