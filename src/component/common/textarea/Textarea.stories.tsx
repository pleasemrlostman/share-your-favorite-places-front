import { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@/component/common/textarea/index";

const meta: Meta<typeof Textarea> = {
  title: "Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["default", "gray"],
    },
    size: {
      control: {
        type: "select"
      },
      options: ["default", "fit", "sm", "md", "lg"],
    },
    placeholder: {
      control: {
        type: "text"
      }
    },
    minLength: {
      control: {
        type: "number"
      }
    },
    maxLength: {
      control: {
        type: "number"
      }
    },
    disabled: {
      control: {
        type: "boolean"
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Primary: Story = {
  args: {
    variant: "default",
    size: "default",
    minLength: 5,
    maxLength: 10,
    placeholder: "placeholder",
    disabled: false,
  }
};