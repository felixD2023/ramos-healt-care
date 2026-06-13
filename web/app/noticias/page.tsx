import html from "@/lib/html/noticias";

export const dynamic = "force-dynamic";

export default function NoticiasPage() {
  return <div className="page page-noticias is-active" data-page="noticias" dangerouslySetInnerHTML={{ __html: html }} />;
}
