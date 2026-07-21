import type { Metadata } from "next";
import { SobreClient } from "./SobreClient";

export const metadata: Metadata = {
  title: "Quem sou — MSIIDF",
};

export default function SobrePage() {
  return <SobreClient />;
}
