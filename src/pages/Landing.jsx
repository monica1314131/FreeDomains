import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { SponsorsSection } from "@/components/sponsors-section";
import { MissionSection } from "@/components/mission-section";
import { FeatureCards } from "@/components/feature-cards";
import { Footer } from "@/components/footer-section";
import { PSLAnnouncement } from "@/components/PSLAnnouncement";
import { HowItWorksSection } from "@/components/how-it-works";
import { LiveStatsSection } from "@/components/live-stats";


export function Landing() {
    return (
        <div className="flex flex-col min-h-screen w-full">
            <Header />
            <div style={{ height: 'calc(4rem + var(--incident-height, 0px))' }}></div>

            <main className="flex-1 w-full flex flex-col">
                <HeroSection />
                <SponsorsSection />
                <MissionSection />
                <HowItWorksSection />
                <FeatureCards />
                <LiveStatsSection />

            </main>
            <Footer />
        </div>
    );
}
