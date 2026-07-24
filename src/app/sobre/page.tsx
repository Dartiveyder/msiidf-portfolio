import type { Metadata } from "next";
import { SobreClient } from "./SobreClient";

export const metadata: Metadata = {
  title: "Quem sou — MSIIDF",
  description:
    "Conheça a trajetória de Mateus Silva, Product Designer e UX/UI Designer: experiência, formação e principais conquistas em design de produto.",
};

export default function SobrePage() {
  return <SobreClient />;
}
