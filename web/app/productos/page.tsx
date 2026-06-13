import html from "@/lib/html/productos";

export const dynamic = "force-dynamic";

export default function ProductosPage() {
  return <div className="page page-productos is-active" data-page="productos" dangerouslySetInnerHTML={{ __html: html }} />;
}
