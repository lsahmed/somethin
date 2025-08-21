import Hero from "./components/Hero";
import About from "./components/About";
import WhatWeDo from "./components/WhatWeDo";
import WhyChooseWe from "./components/WhyChooseWe";
import OurMission from "./components/OurMission";
import RealWorldImpact from "./components/RealWorldImpact";
import WorkshopsTraining from "./components/WorkShop";
import ImpactGrowth from "./components/ImpactGrowth";
import CollaborateWithUs from "./components/Collaborate";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
    <Hero />
    <About id="About"/>
    <WhatWeDo />
    <WhyChooseWe />
    <OurMission />
    <RealWorldImpact />
    <WorkshopsTraining />
    {/* <ImpactGrowth /> */}
    <CollaborateWithUs />
    <Contact />
    </>
  );
}
