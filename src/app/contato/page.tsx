import type { Metadata } from "next";
import { ContatoClient } from "./ContatoClient";

export const metadata: Metadata = {
  title: "Redes sociais e Contatos — MSIIDF",
  description: "Entre em contato com Mateus Silva, Product Designer e UX/UI Designer, ou acompanhe pelas redes sociais.",
};

export default function ContatoPage() {
  return <ContatoClient />;
}
