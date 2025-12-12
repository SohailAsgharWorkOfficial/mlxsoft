import Layout from "../../components/layout/layout";
import CaseStudies from "./components/CaseStudies";
import FAQ from "./components/faq";
import WorkHero from "./components/WorkHero";

export default function WorkPage() {
  return (
    <Layout>
      <WorkHero />
      <CaseStudies />
      <FAQ />
    </Layout>
  );
}
