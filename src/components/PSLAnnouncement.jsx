import { useState } from "react";
import { X, Star, Github, Heart, Globe, Rocket, Zap } from "lucide-react";

const DOMAINS = [
    { ext: ".indevs.in",   badge: "Free",      color: "bg-blue-100 text-blue-800",   note: "1 free, no verification needed" },
    { ext: ".sryze.cc",    badge: "⭐ Star",    color: "bg-amber-100 text-amber-800", note: "1 free after GitHub star" },
    { ext: ".ryzedns.org", badge: "⭐ Star",    color: "bg-emerald-100 text-emerald-800",   note: "1 free after GitHub star" },
    { ext: ".nx.kg",       badge: "⭐ New",     color: "bg-violet-100 text-violet-800", note: "1 free after GitHub star — just launched!" },
];

export function PSLAnnouncement() {
    const [isVisible, setIsVisible] = useState(true);
    const [showModal, setShowModal] = useState(false);

    if (!isVisible) return null;

    return (
        <>
            {/* ── Top Banner ── */}
            <div className="bg-gradient-to-r from-violet-600 via-blue-600 to-indigo-600 w-full relative z-40">
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
                                    className="ml-2 text-white hover:text-white/80 underline font-bold transition-colors"
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
                            <X className="w-4 h-4 text-white/70 hover:text-white" />
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Modal ── */}
            {showModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto ring-1 ring-slate-200/80">

                        {/* Header */}
                        <div className="sticky top-0 bg-gradient-to-r from-violet-600 to-blue-600 p-6 rounded-t-2xl flex items-start justify-between">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-white/20 rounded-xl">
                                    <Rocket className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-extrabold text-white leading-tight">
                                        .nx.kg Domains Are Live! 🎉
                                    </h2>
                                    <p className="text-sm text-white/80 mt-1">
                                        Stackryze now offers 4 free domain extensions
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowModal(false)}
                                className="p-2 hover:bg-white/20 rounded-xl transition-colors"
                                aria-label="Close"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-6">

                            {/* Intro */}
                            <p className="text-sm leading-relaxed text-slate-600">
                                We've just launched{" "}
                                <strong className="font-mono text-violet-600">.nx.kg</strong> — our newest domain extension,
                                joining{" "}
                                <strong className="font-mono text-slate-900">.indevs.in</strong>,{" "}
                                <strong className="font-mono text-slate-900">.sryze.cc</strong>, and{" "}
                                <strong className="font-mono text-slate-900">.ryzedns.org</strong>.
                                All domains are <strong>free</strong>, instant, and come with full DNS management.
                            </p>

                            {/* Domain table */}
                            <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                                <div className="bg-slate-50 px-4 py-3 border-b border-slate-200">
                                    <p className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                                        <Globe className="w-3.5 h-3.5" />
                                        Available Domain Extensions
                                    </p>
                                </div>
                                <ul className="divide-y divide-slate-100 bg-white">
                                    {DOMAINS.map(({ ext, badge, color, note }) => (
                                        <li key={ext} className="flex items-center justify-between px-4 py-3 gap-3 hover:bg-slate-50/50 transition-colors">
                                            <div>
                                                <span className="font-mono font-bold text-slate-900 text-sm">{ext}</span>
                                                <p className="text-xs text-slate-500 mt-0.5">{note}</p>
                                            </div>
                                            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${color}`}>
                                                {badge}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* How to unlock */}
                            <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-5">
                                <p className="text-xs font-bold text-slate-900 mb-4 flex items-center gap-1.5">
                                    <Zap className="w-4 h-4 text-amber-500" />
                                    How to unlock .sryze.cc, .ryzedns.org & .nx.kg
                                </p>
                                <ol className="space-y-3">
                                    {[
                                        { n: "1", text: "Star our GitHub repo (takes 2 seconds)" },
                                        { n: "2", text: "Go to Register → click \"I've starred it — Verify\"" },
                                        { n: "3", text: "Pick your domain and register instantly — no admin wait" },
                                    ].map(({ n, text }) => (
                                        <li key={n} className="flex items-start gap-3 text-sm text-slate-600">
                                            <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                                                {n}
                                            </span>
                                            <span className="leading-relaxed">{text}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            {/* Quote */}
                            <blockquote className="border-l-4 border-violet-400 bg-violet-50/50 rounded-r-xl pl-4 py-3 italic text-slate-600 text-sm">
                                "Let's not make money the barrier to having a better name on the internet."
                            </blockquote>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                <a
                                    href="https://github.com/stackryze/FreeDomains"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-slate-800 transition-all shadow-sm hover:shadow-md"
                                >
                                    <Star className="w-4 h-4 text-amber-400" />
                                    Star the Repo ↗
                                </a>
                                <a
                                    href="/register"
                                    onClick={() => setShowModal(false)}
                                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 border border-slate-200 bg-white text-slate-900 font-bold text-sm rounded-xl hover:bg-slate-50 transition-all shadow-sm hover:shadow-md"
                                >
                                    <Github className="w-4 h-4" />
                                    Claim Your Domain →
                                </a>
                            </div>

                            {/* Support note */}
                            <div className="bg-slate-50 rounded-xl p-5 text-center">
                                <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                                    Stackryze costs <strong className="text-slate-900 font-semibold">~$20/month</strong> to run. I'm a student running this for free.
                                    If it's helped you, a sponsorship means the world. ❤️
                                </p>
                                <a
                                    href="https://github.com/sponsors/sudheerbhuvana"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center gap-2 h-10 rounded-xl border border-rose-200 bg-rose-50 px-5 font-bold text-xs text-rose-600 hover:bg-rose-100 transition-colors"
                                >
                                    <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                                    Sponsor on GitHub
                                </a>
                            </div>

                            <p className="text-xs font-medium text-center text-slate-400 pb-2">— Stackryze Team</p>
                        </div>

                        {/* Footer */}
                        <div className="sticky bottom-0 bg-white/95 backdrop-blur-sm border-t border-slate-100 p-4 rounded-b-2xl">
                            <button
                                onClick={() => setShowModal(false)}
                                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 py-3 rounded-xl font-bold text-sm transition-all duration-200"
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
