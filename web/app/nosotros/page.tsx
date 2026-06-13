import html from "@/lib/html/nosotros";

export const dynamic = "force-dynamic";

export default function NosotrosPage() {
  return <div className="page page-nosotros is-active" data-page="nosotros" dangerouslySetInnerHTML={{ __html: html }} />;
}
