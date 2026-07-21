import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Navbar } from "./Navbar";

const meta = {
  title: "Base/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    active: {
      control: "select",
      options: ["sobre", "projetos", "fluxo", "contato"],
    },
    lang: { control: "radio", options: ["pt", "en"] },
  },
  decorators: [
    (Story) => (
      <div className="relative min-h-[420px] bg-bg">
        <Story />
        <div className="pt-[120px] text-center text-text-muted">
          Conteúdo da página aparece aqui, abaixo da navbar fixa.
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  args: {
    active: "projetos",
    lang: "pt",
  },
  parameters: {
    viewport: { defaultViewport: "desktop" },
  },
};

export const DesktopEnglish: Story = {
  args: {
    active: "sobre",
    lang: "en",
  },
};

export const Mobile: Story = {
  args: {
    active: "sobre",
    lang: "pt",
  },
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
  globals: {
    viewport: { value: "mobile1", isRotated: false },
  },
};
