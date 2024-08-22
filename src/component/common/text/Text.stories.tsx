import { Native } from "@/component/common/text";
import type { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof Native> = {
  title: "Text",
  component: Native,
  tags: ["autodocs"],
  argTypes: {
    widthSize: {
      control: {
        type: "select", // 'select' 타입으로 설정하여 드롭다운 선택지 제공
      },
      options: ["fit", "xs", "sm", "md", "lg", "xl", "default"], // 'variant' 속성의 가능한 값
    },
  },
};
type Story = StoryObj<typeof Native>;
export default meta;
export const Primary: Story = {
  args: {
    widthSize: "default",
  },
};
