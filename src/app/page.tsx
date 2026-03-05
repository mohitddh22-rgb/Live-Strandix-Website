import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MCPSection from "@/components/MCPSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import InfrastructureSection from "@/components/InfrastructureSection";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />

      <main>
        {/* Section 1: Hero Slider */}
        <HeroSection />

        {/* Section 2: MCP / AI Agent Section */}
        <MCPSection />

        {/* Section 3: Stats Section */}
        <StatsSection />

        {/* Section 4: Core Services Section */}
        <ServicesSection />

        {/* Section 5: Partners Marquee */}
        <div className="py-12 bg-white/[0.02]">
          <Marquee />
        </div>

        {/* Section 6: Infrastructure / Security */}
        <InfrastructureSection />
      </main>

      <Footer />
    </div>
  );
}
