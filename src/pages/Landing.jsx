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
                <FeatureCards />

                <section className="w-full bg-[#FAFAFA] relative overflow-hidden z-30 pt-12 md:pt-16 pb-6 md:pb-8">
                    {/* Background ambient blur */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-slate-100 blur-[100px] rounded-full pointer-events-none opacity-50"></div>

                    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-8 items-center">
                            <HowItWorksSection />
                            <LiveStatsSection />
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
