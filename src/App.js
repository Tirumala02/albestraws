import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/NavComponents/Navbar";
import ParticlesComponent from "./components/ParticlesComponents";
import Main from "./components/HomeComponents/Main";
import Footer from "./components/Footer";
import ScrollToTop from "./components/scrolltotop";
import ServicesIntersection from "../src/components/HomeComponents/ServicesIntersection";

import IotRoboticsPage from "./components/services/iot-and-robotics";
import DataScience from "./components/services/data-science";
import MachineLearning from "./components/services/machine-learning";
import ArtificialIntelligence from "./components/services/artificial-intelligence";
import InsightsPage from "./components/Insights/insights";
import ServiceSection from"../src/components/HomeComponents/ServicesSection";
import Training from './components/TrainingComponents/training';
import Careers from './components/careers';
import PageNotFound from './404';
import ScrollToTopButton from "./components/ScrollToTopButton";
import ProjectsPage from "./components/Projects/projects";
import ChatBot from "./components/chatbot";
import TechnologyHarness from "./components/HomeComponents/TechnologyHarness";
import PartnersSection from "./components/HomeComponents/PartnersSection";
import Expertise from "./Expertise";
import Services from "./components/Services";

const HomePage = () => {
  return (
    <>
      <ParticlesComponent id={`particleJs`}/>
      <Main/>
      <TechnologyHarness/>
      <ServicesIntersection/>
      <ServiceSection/>
      <PartnersSection/>
    </>
  );
}

const App = () => {
  return (
    <Router>
      <Navbar />
      <section className="flex gap-3">
        <ScrollToTop />
      </section>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />

        <Route path="/expertise" element={<Expertise />} />
        <Route path="/careers" element={<Careers />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </Router>
  );
}

export default App;

