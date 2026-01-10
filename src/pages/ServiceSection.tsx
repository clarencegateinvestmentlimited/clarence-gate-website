import CaaSPricing from "@/components/CaaSPricing";
import FinancialAdvisory from "@/components/FinancialAdvisory";
import FinancialExecution from "@/components/FinancialExecution";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HumanCapital from "@/components/HumanCapital";
import Organization from "@/components/OrganizationalDevelopment";
import OrganizationalDevelopment from "@/components/OrganizationalDevelopment";
import CaladiumDesign from "@/components/ResearchSection";
import Research from "@/components/ResearchSection";
import ServiceHero from "@/components/ServiceHero";
import ServiceTabs from "@/components/ServiceSectionGrid";
import ServiceContent from "@/components/ServiceSectionGrid";
import ServiceGrid from "@/components/ServiceSectionGrid";
import StrategyExecution from "@/components/StrategyExecution";
import React from "react";

function ServiceSection() {
  return (
    <div>
     <Header/>   
     <ServiceHero/>
     <HumanCapital/>
     {/* < ServiceTabs/> */}
     <Organization/>
     {/* <CaladiumDesign/> */}
     <StrategyExecution/>
     <FinancialExecution/>
     <CaaSPricing/>
     {/* <FinancialAdvisory/> */}
     <Footer/>
    </div>
  );
}
export default ServiceSection;