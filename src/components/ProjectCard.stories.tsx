import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ProjectCard } from "./ProjectCard";

const meta = {
  title: "Base/ProjectCard",
  component: ProjectCard,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    variant: { control: "radio", options: ["row", "card"] },
  },
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const flow = {
  slug: "flow",
  icon: "/assets/flow-icon.png",
  name: "Flow",
  title: "Sistema ERP",
  image: "/assets/flow-screenshot.png",
  summary:
    "Sistema ERP voltado para o RH, Folha de pagamento, Ponto, Férias, Saúde e Segurança do Trabalho.",
  description:
    "Sistema ERP voltado para o RH, Folha de pagamento, Ponto, Férias, Saúde e Segurança do Trabalho, melhoria de fluxos e UI de sistema.",
};

export const Row: Story = {
  args: {
    variant: "row",
    ...flow,
    showRequestAccess: true,
  },
  render: (args) => (
    <div className="max-w-[1000px]">
      <ProjectCard {...args} />
    </div>
  ),
};

export const RowReversed: Story = {
  args: {
    ...Row.args,
    reverse: true,
  },
  render: Row.render,
};

export const RowMobile: Story = {
  args: Row.args,
  render: Row.render,
  globals: {
    viewport: { value: "mobile1", isRotated: false },
  },
};

export const Card: Story = {
  args: {
    variant: "card",
    ...flow,
  },
  render: (args) => (
    <div className="max-w-[320px]">
      <ProjectCard {...args} />
    </div>
  ),
};

export const CardWithoutImage: Story = {
  args: {
    ...Card.args,
    image: undefined,
  },
  render: Card.render,
};

export const CardGrid: Story = {
  args: Card.args,
  render: () => (
    <div className="grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
      <ProjectCard variant="card" {...flow} />
      <ProjectCard
        variant="card"
        slug="jobfy"
        icon="/assets/jobfy-icon.png"
        name="Jobfy"
        title="Recrutamento e seleção"
        image="/assets/jobfy-screenshot.png"
        summary="Criação de currículos com uma experiência guiada por IA, oferecendo templates, e personalização focada em empregabilidade."
      />
      <ProjectCard
        variant="card"
        slug="msiidf"
        icon="✨"
        name="MSIIDF"
        title="Autenticidade"
        summary="Identidade visual que traduz emoções de forma autêntica, gerando conexão real com o público."
      />
    </div>
  ),
};
