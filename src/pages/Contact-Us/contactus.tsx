import Layout from "../../components/layout/layout";
import ContactForm from "./components/ContactForm";
import ContactHero from "./components/ContactHero";
import InfoCards from "./components/InfoCards";

export default function ContactUsPage() {
  return (
    <Layout>
      <ContactHero />
      <InfoCards />
      <ContactForm />
    </Layout>
  );
}
