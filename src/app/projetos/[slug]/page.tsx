import type { Metadata } from "next";
import { getProject } from "@/content/site";
import { ProjetoDetalheClient } from "./ProjetoDetalheClient";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject("pt", slug);
  const title = project ? `${project.title} — MSIIDF` : "Projeto — MSIIDF";
  const description = project?.summary;

  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { title, description },
  };
}

export default async function ProjetoDetalhePage({ params }: PageProps) {
  const { slug } = await params;
  return <ProjetoDetalheClient slug={slug} />;
}
