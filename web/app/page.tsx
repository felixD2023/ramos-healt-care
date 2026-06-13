import html from "@/lib/html/home";
import HomeIslands from "@/components/HomeIslands";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <>
      <div className="page page-home is-active" data-page="home" dangerouslySetInnerHTML={{ __html: html }} />
      <HomeIslands />
    </>
  );
}
