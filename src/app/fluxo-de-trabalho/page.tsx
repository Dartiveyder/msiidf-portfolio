import type { Metadata } from "next";
import { FluxoClient } from "./FluxoClient";

export const metadata: Metadata = {
  title: "Fluxo de Trabalho — MSIIDF",
  description:
    "Conheça o processo de trabalho de Mateus Silva em projetos de UX/UI: da descoberta e pesquisa até prototipação, testes e entrega.",
};

export default function FluxoDeTrabalhoPage() {
  return <FluxoClient />;
}
