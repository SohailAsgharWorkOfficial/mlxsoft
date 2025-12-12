
import Layout from "../../components/layout/layout";
import ServicesApproach from "./components/ServicesApproach";
import ServicesHero from "./components/ServicesHero";
import ServicesProcess from "./components/ServicesProcess";
import ServicesSolutions from "./components/ServicesSolutions";
import ServicesTechStack from "./components/ServicesTechStack";
import ServicesWhatWeDo from "./components/ServicesWhatWeDo";

export default function ServicesPage() {
  return (
    <Layout>
      <ServicesHero />
      <ServicesWhatWeDo />
      <ServicesApproach />
      <ServicesSolutions />
      <ServicesTechStack />
      <ServicesProcess />
    </Layout>
  );
}
