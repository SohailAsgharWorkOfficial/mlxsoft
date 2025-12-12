import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import WorkPage from "./pages/Work/work";
import CareersPage from "./pages/Careers/careers";
import ContactUsPage from "./pages/Contact-Us/contactus";
import ServicesPage from "./pages/Services/services";
import CompanyPage from "./pages/Company/company";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/career" element={<CareersPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/company" element={<CompanyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
