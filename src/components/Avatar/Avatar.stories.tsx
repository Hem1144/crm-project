import { Meta, StoryFn } from "@storybook/react";
import { Avatar, AvatarProps } from "./Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    src: {
      control: "text",
    },
    alt: {
      control: "text",
    },
  },
} as Meta;

const Template: StoryFn<AvatarProps> = (args: AvatarProps) => (
  <Avatar {...args} />
);

export const Small = Template.bind({});
Small.args = {
  size: "small",
  alt: "User Avatar",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  alt: "User Avatar",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  alt: "User Avatar",
};
