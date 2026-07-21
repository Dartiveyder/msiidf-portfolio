import type { Metadata } from "next";
import { ContatoClient } from "./ContatoClient";

export const metadata: Metadata = {
  title: "Redes sociais e Contatos — MSIIDF",
};

export default function ContatoPage() {
  return <ContatoClient />;
}
