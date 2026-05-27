import { useState } from "react";
import { X, CheckCircle, Star, Github, Heart, Globe, Rocket, Zap } from "lucide-react";

const DOMAINS = [
    { ext: ".indevs.in",   badge: "Free",      color: "bg-blue-100 text-blue-800",   note: "1 free, no verification needed" },
    { ext: ".sryze.cc",    badge: "⭐ Star",    color: "bg-amber-100 text-amber-800", note: "1 free after GitHub star" },
    { ext: ".ryzedns.org", badge: "⭐ Star",    color: "bg-teal-100 text-teal-800",   note: "1 free after GitHub star" },
    { ext: ".nx.kg",       badge: "⭐ New",     color: "bg-violet-100 text-violet-800", note: "1 free after GitHub star — just launched!" },
];

export function PSLAnnouncement() {
    const [isVisible, setIsVisible] = useState(true);
    const [showModal, setShowModal] = useState(false);

    if (!isVisible) return null;

    return (
        <>
            {/* ── Top Banner ── */}
            <div className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 w-full relative z-40">
                <div className="max-w-7xl mx-auto px-4 py-2.5 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                            <span className="text-base flex-shrink-0 animate-pulse">🚀</span>
                            <p className="text-sm font-medium text-white">
                                <span className="font-extrabold">NEW:</span>{" "}
                                <span className="font-mono font-bold text-violet-200">.nx.kg</span>{" "}
                                domains are live!{" "}
                                <span className="text-white/80">
                                    Star our GitHub repo to claim yours for free.
                                </span>
                                <button
                                    onClick={() => setShowModal(true)}
                                    className="ml-2 text-[#FFD23F] hover:text-yellow-300 underline font-bold transition-colors"
                                >
                                    Learn more →
                                </button>
                            </p>
                        </div>
                        <button
                            onClick={() => setIsVisible(false)}
                            className="flex-shrink-0 p-1 hover:bg-white/20 rounded transition-colors"
                            aria-label="Dismiss announcement"
                        >
                            <X className="w-4 h-4 text-white/70" />
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Modal ── */}
            {showModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border-2 border-[#E5E3DF]">

                        {/* Header */}
                        <div className="sticky top-0 bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 p-6 rounded-t-2xl flex items-start justify-between">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-white/20 rounded-lg">
                                    <Rocket className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-extrabold text-white leading-tight">
                                        .nx.kg Domains Are Live! 🎉
                                    </h2>
                                    <p className="text-sm text-white/80 mt-0.5">
                                        Stackryze now offers 4 free domain extensions
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowModal(false)}
                                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                                aria-label="Close"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-5 text-[#1A1A1A]">

                            {/* Intro */}
                            <p className="text-sm leading-relaxed text-[#4A4A4A]">
                                We've just launched{" "}
                                <strong className="font-mono text-violet-700">.nx.kg</strong> — our newest domain extension,
                                joining{" "}
                                <strong className="font-mono">.indevs.in</strong>,{" "}
                                <strong className="font-mono">.sryze.cc</strong>, and{" "}
                                <strong className="font-mono">.ryzedns.org</strong>.
                                All domains are <strong>free</strong>, instant, and come with full DNS management.
                            </p>

                            {/* Domain table */}
                            <div className="border border-[#E5E7EB] rounded-xl overflow-hidden">
                                <div className="bg-[#F9FAFB] px-4 py-2 border-b border-[#E5E7EB]">
                                    <p className="text-xs font-bold text-[#374151] flex items-center gap-1.5">
                                        <Globe className="w-3.5 h-3.5" />
                                        Available Domain Extensions
                                    </p>
                                </div>
                                <ul className="divide-y divide-[#F3F4F6]">
                                    {DOMAINS.map(({ ext, badge, color, note }) => (
                                        <li key={ext} className="flex items-center justify-between px-4 py-3 gap-3">
                                            <div>
                                                <span className="font-mono font-bold text-[#1A1A1A] text-sm">{ext}</span>
                                                <p className="text-xs text-[#6B7280] mt-0.5">{note}</p>
                                            </div>
                                            <span className={`text-xs font-bold px-2 py-1 rounded-full flex-shrink-0 ${color}`}>
                                                {badge}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* How to unlock */}
                            <div className="bg-[#FFF8F0] border-2 border-[#FFD23F] rounded-xl p-4">
                                <p className="text-xs font-extrabold text-[#1A1A1A] mb-3 flex items-center gap-1.5">
                                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                                    How to unlock .sryze.cc, .ryzedns.org & .nx.kg — 3 steps, 2 minutes:
                                </p>
                                <ol className="space-y-2">
                                    {[
                                        { n: "1", text: "Star our GitHub repo (takes 2 seconds)" },
                                        { n: "2", text: "Go to Register → click \"I've starred it — Verify\"" },
                                        { n: "3", text: "Pick your domain and register instantly — no admin wait" },
                                    ].map(({ n, text }) => (
                                        <li key={n} className="flex items-start gap-3 text-sm text-[#4A4A4A]">
                                            <span className="w-5 h-5 rounded-full bg-[#FFD23F] text-[#1A1A1A] font-extrabold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                                                {n}
                                            </span>
                                            {text}
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            {/* Quote */}
                            <blockquote className="border-l-4 border-violet-400 pl-4 py-1 italic text-[#4A4A4A] text-sm">
                                "Let's not make money the barrier to having a better name on the internet."
                            </blockquote>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                <a
                                    href="https://github.com/stackryze/FreeDomains"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#FFD23F] text-[#1A1A1A] px-5 py-3 rounded-xl font-extrabold text-sm hover:bg-[#FFB800] transition-all shadow-[3px_3px_0px_0px_#1A1A1A] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                                >
                                    <Star className="w-4 h-4" />
                                    ⭐ Star the Repo ↗
                                </a>
                                <a
                                    href="/register"
                                    onClick={() => setShowModal(false)}
                                    className="flex-1 inline-flex items-center justify-center gap-2 bg-violet-600 text-white px-5 py-3 rounded-xl font-extrabold text-sm hover:bg-violet-700 transition-all"
                                >
                                    <Github className="w-4 h-4" />
                                    Claim Your Domain →
                                </a>
                            </div>

                            {/* Support note */}
                            <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-4 text-center">
                                <p className="text-xs text-[#6B7280] mb-3">
                                    Stackryze costs <strong className="text-[#1A1A1A]">~$20/month</strong> to run. I'm a student running this for free.
                                    If it's helped you, a sponsorship means the world. ❤️
                                </p>
                                <a
                                    href="https://github.com/sponsors/sudheerbhuvana"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-[#111827] text-white font-bold text-xs px-4 py-2 rounded-lg hover:bg-[#1f2937] transition-colors"
                                >
                                    <Heart className="w-3.5 h-3.5 fill-[#FF6B35] text-[#FF6B35]" />
                                    Sponsor on GitHub
                                </a>
                            </div>

                            <p className="text-xs text-center text-[#9CA3AF]">— Stackryze Team</p>
                        </div>

                        {/* Footer */}
                        <div className="sticky bottom-0 bg-white border-t-2 border-[#E5E3DF] p-4">
                            <button
                                onClick={() => setShowModal(false)}
                                className="w-full bg-[#1A1A1A] text-white py-3 rounded-xl font-bold hover:bg-[#333] transition-colors"
                            >
                                Got it, thanks! 🚀
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
