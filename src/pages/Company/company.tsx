import Layout from "../../components/layout/layout";
import CompanyHero from "./components/CompanyHero";
import CompanyStats from "./components/CompanyStats";
import CompanyTeam from "./components/CompanyTeam";
import CompanyTestimonials from "./components/CompanyTestimonials";
import CompanyValues from "./components/CompanyValues";

export default function CompanyPage() {
  return (
    <Layout>
      <CompanyHero />
      <CompanyStats />
      <CompanyValues />
      <CompanyTestimonials />
      <CompanyTeam />
    </Layout>
  );
}
