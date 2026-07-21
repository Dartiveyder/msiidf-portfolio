import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Hero } from "./Hero";

const meta = {
  title: "Base/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    videoSrc: "/assets/hero-video.mp4",
    skills: ["Product Design", "UX Design", "UI Design", "UX Research"],
    subtitle:
      "Product Designer e UX/UI Designer com experiência na construção e evolução de produtos digitais B2B e B2C, especialmente em soluções de recrutamento, gestão de pessoas e rotinas de RH.",
    primaryCta: { label: "VER PROJETOS", href: "/projetos" },
    secondaryCta: { label: "CONTATO", href: "/contato" },
  },
};

export const Mobile: Story = {
  args: Default.args,
  globals: {
    viewport: { value: "mobile1", isRotated: false },
  },
};

export const WithoutVideo: Story = {
  args: {
    ...Default.args,
    videoSrc: undefined,
  },
};
