import type { Metadata } from "next";
import { ProjetosClient } from "./ProjetosClient";

export const metadata: Metadata = {
  title: "Projetos — MSIIDF",
  description:
    "Projetos de Product Design e UX/UI de Mateus Silva: recrutamento, sistemas ERP, e-commerce, branding e mais estudos de caso.",
};

export default function ProjetosPage() {
  return <ProjetosClient />;
}
