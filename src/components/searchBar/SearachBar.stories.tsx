import type { Meta, StoryObj } from "@storybook/react";
import { SearchBar } from "./Searchbar";

const meta: Meta<typeof SearchBar> = {
  title: "Components/SearchBar",
  component: SearchBar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onSearch: { action: "searched" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Search...",
    onSearch: (query: string) => console.log("Search query:", query),
  },
};
