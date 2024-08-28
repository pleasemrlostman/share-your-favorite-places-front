import Profile from "./Profile";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Profile> = {
  title: "Profile",
  component: Profile,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: ["default", "sm"],
    },
    variant: {
      control: {
        type: "select",
      },
      options: ["default", "sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Profile>;
export const basic: Story = {
  args: {
    user: {
      name: "보경",
      image:
        "https://blog.kakaocdn.net/dn/lTjw2/btq4X7g8CgO/tcmtchXswKvxbiM3MeGps0/img.jpg",
    },
    size: "default",
    variant: "default",
  },
};
