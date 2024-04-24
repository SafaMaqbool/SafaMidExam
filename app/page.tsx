import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ClientsSection from "./components/ClientsSection";
import CommunitySection from "./components/CommunitySection";


export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <ClientsSection/>
      <CommunitySection/>

    </main>
    
  
  );
}
