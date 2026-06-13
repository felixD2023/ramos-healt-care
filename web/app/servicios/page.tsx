import html from "@/lib/html/servicios";

export const dynamic = "force-dynamic";

export default function ServiciosPage() {
  return <div className="page page-servicios is-active" data-page="servicios" dangerouslySetInnerHTML={{ __html: html }} />;
}
