import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/Homepage";
import AboutMePage from "./pages/AboutmePage";
import PortfolioPage from "./pages/PortfolioPage";
import SetupPage from "./pages/SetupPage";
import ContactPage from "./pages/ContactPage";
import ExperiencePage from "./pages/ExperiencePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AboutMePage />} />
          {/* <Route path="aboutMe" element={<AboutMePage />} /> */}
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="setup" element={<SetupPage />} />
          <Route path="contacts" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
