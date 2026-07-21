import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Section } from "./Section";

const meta = {
  title: "Base/Section",
  component: Section,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    align: { control: "radio", options: ["center", "left"] },
    size: { control: "radio", options: ["lg", "md"] },
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

const cardClass =
  "rounded-2xl border border-border bg-surface p-8 flex flex-col gap-4 text-left";

export const CenteredWithGrid: Story = {
  args: {
    eyebrow: undefined,
    title: "Feitos e",
    highlight: "Realizações",
    align: "center",
    size: "lg",
    children: (
      <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        <div className={cardClass}>
          <div className="text-3xl">😄</div>
          <h3 className="m-0 font-display text-lg font-bold text-text">Satisfação 90%</h3>
          <p className="m-0 text-base leading-relaxed text-text-muted">
            Melhoria da experiência e do contentamento do usuário.
          </p>
        </div>
        <div className={cardClass}>
          <div className="text-3xl">⏱️</div>
          <h3 className="m-0 font-display text-lg font-bold text-text">Redução de 37%</h3>
          <p className="m-0 text-base leading-relaxed text-text-muted">
            Redução no tempo de criação de perfil para candidatura a vagas.
          </p>
        </div>
        <div className={cardClass}>
          <div className="text-3xl">⬆️</div>
          <h3 className="m-0 font-display text-lg font-bold text-text">+1 milhão de usuários</h3>
          <p className="m-0 text-base leading-relaxed text-text-muted">
            Soluções para recrutamento e seleção com impacto em mais de 1 milhão de usuários.
          </p>
        </div>
      </div>
    ),
  },
};

export const WithEyebrow: Story = {
  args: {
    eyebrow: "Trajetória",
    title: "Experiência",
    highlight: "profissional",
    align: "center",
    size: "md",
    children: <p className="m-0 text-text-muted">Conteúdo da seção aqui.</p>,
  },
};

export const LeftAligned: Story = {
  args: {
    eyebrow: "Quem sou",
    title: "Product Designer",
    highlight: "orientado a resultado",
    align: "left",
    size: "lg",
    children: (
      <p className="m-0 max-w-[520px] text-[15px] leading-relaxed text-text-body">
        Transformo processos, regras de negócio e jornadas complexas em experiências mais claras e
        eficientes.
      </p>
    ),
  },
};

export const Tight: Story = {
  args: {
    ...CenteredWithGrid.args,
    tight: true,
  },
};
