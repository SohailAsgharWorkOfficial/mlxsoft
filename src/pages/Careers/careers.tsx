import Layout from "../../components/layout/layout";
import Hero from "./components/Hero";
import JobCards from "./components/JobCards";
import Perks from "./components/Perks";
import Process from "./components/Process";

export default function CareersPage() {
  return (
    <Layout>
      <Hero />
      <JobCards />
      <Perks />
      <Process />
    </Layout>
  );
}
