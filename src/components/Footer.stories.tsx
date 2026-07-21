import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Footer } from "./Footer";

const meta = {
  title: "Base/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Mobile: Story = {
  globals: {
    viewport: { value: "mobile1", isRotated: false },
  },
};
