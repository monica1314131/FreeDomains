import { Heart, Github, Star, Share2, Bug, Code2 } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer-section";

const ways = [
    { icon: Star,    label: "Star on GitHub",    href: "https://github.com/stackryze/FreeDomains", desc: "Helps us get discovered" },
    { icon: Share2,  label: "Share with friends", href: null,                                        desc: "Spread the word" },
    { icon: Bug,     label: "Report bugs",        href: "https://github.com/stackryze/FreeDomains/issues", desc: "Improve the platform" },
    { icon: Code2,   label: "Contribute code",    href: "https://github.com/stackryze/FreeDomains", desc: "Open source PRs welcome" },
];

export function Donate() {
    return (
        <div className="min-h-screen bg-transparent font-sans flex flex-col">
            <Header />

            <main className="flex-1 flex items-center justify-center px-4 pt-[calc(6rem+var(--incident-height,0px))] pb-16">
                <div className="w-full max-w-md space-y-8">

                    {/* Icon + heading */}
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 rounded-[20px] bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 flex items-center justify-center mx-auto shadow-sm">
                            <Heart className="w-8 h-8 text-[#FF6B35] fill-[#FF6B35]" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">Support Stackryze</h1>
                            <p className="text-sm text-slate-600 dark:text-slate-200 max-w-xs mx-auto leading-relaxed">
                                It costs ~$20/month to keep this running — funded personally by a student. Your support keeps it free for everyone.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-[24px] p-6 shadow-xl dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] relative overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/10"></div>

                        {/* Primary: GitHub Sponsors */}
                        <a
                            href="https://github.com/sponsors/sudheerbhuvana"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center gap-3 w-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium text-sm py-4 rounded-xl hover:bg-slate-800 dark:hover:bg-slate-200 transition-all shadow-sm mb-4"
                        >
                            <Github className="w-5 h-5" />
                            Sponsor on GitHub
                            <Heart className="w-4 h-4 fill-[#FF6B35] text-[#FF6B35]" />
                        </a>

                        <p className="text-center text-xs text-slate-500 dark:text-slate-300 mb-6">Even $1 makes a real difference ❤️</p>

                        {/* Divider */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex-1 h-px bg-slate-200 dark:bg-white/10" />
                            <span className="text-xs text-slate-500 dark:text-slate-300 font-medium">Other ways to help</span>
                            <div className="flex-1 h-px bg-slate-200 dark:bg-white/10" />
                        </div>

                        {/* Secondary ways to help */}
                        <div className="grid grid-cols-2 gap-3">
                            {ways.map(({ icon: Icon, label, href, desc }) => {
                                const cls = "bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/5 rounded-xl p-4 flex flex-col gap-2 hover:border-slate-300 dark:hover:border-white/20 transition-all text-left";
                                const inner = (
                                    <>
                                        <div className="w-8 h-8 rounded-lg bg-white dark:bg-white/10 border border-slate-200 dark:border-white/5 flex items-center justify-center shadow-sm">
                                            <Icon className="w-4 h-4 text-slate-600 dark:text-slate-200" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-sm text-slate-900 dark:text-white">{label}</p>
                                            <p className="text-xs text-slate-500 dark:text-slate-300 mt-0.5">{desc}</p>
                                        </div>
                                    </>
                                );
                                return href
                                    ? <a key={label} href={href} target="_blank" rel="noreferrer" className={cls}>{inner}</a>
                                    : <div key={label} className={cls}>{inner}</div>;
                            })}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
