import Button from "@/component/common/button/index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select", // 'select' 타입으로 설정하여 드롭다운 선택지 제공
      },
      options: ["default", "gray", "navy", "red", "lime", "violet"], // 'variant' 속성의 가능한 값
    },
    size: {
      control: {
        type: "select", // 'select' 타입으로 설정하여 드롭다운 선택지 제공
      },
      options: ["sm", "default", "md", "lg", "xl"], // 'size' 속성의 가능한 값
    },
    label: {
      control: {
        type: "text", // 'text' 타입으로 설정하여 텍스트 입력을 받음
      },
      defaultValue: "Button", // 기본값 설정
      description: "Text to display on the button", // 선택지에 대한 설명 추가
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "default",
    size: "default", // 기본값을 설정
    label: "Button",
  },
};
