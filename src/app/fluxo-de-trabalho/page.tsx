import type { Metadata } from "next";
import { FluxoClient } from "./FluxoClient";

export const metadata: Metadata = {
  title: "Fluxo de Trabalho — MSIIDF",
};

export default function FluxoDeTrabalhoPage() {
  return <FluxoClient />;
}
