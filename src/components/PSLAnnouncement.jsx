import { useState } from "react";
import { X, AlertCircle, CheckCircle, Clock, Info, Star, Github, Heart } from "lucide-react";

export function PSLAnnouncement() {
    const [isVisible, setIsVisible] = useState(true);
    const [showModal, setShowModal] = useState(false);

    if (!isVisible) return null;

    return (
        <>
            {/* Announcement Banner */}
            <div className="bg-gradient-to-r from-[#FFF8F0] to-amber-50 border-b-2 border-[#FFD23F] w-full relative z-40">
                <div className="max-w-7xl mx-auto px-4 py-2.5 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                            <span className="text-base flex-shrink-0">⭐</span>
                            <p className="text-sm font-medium text-[#1A1A1A]">
                                <span className="font-bold">New:</span> ryzedns.org &amp; nx.kg domain extensions launched!{" "}
                                <span className="text-[#4A4A4A]">Star our GitHub repo to unlock access.</span>
                                <button
                                    onClick={() => setShowModal(true)}
                                    className="ml-2 text-[#FF6B35] hover:text-[#e05520] underline font-bold"
                                >
                                    Learn more →
                                </button>
                            </p>
                        </div>
                        <button
                            onClick={() => setIsVisible(false)}
                            className="flex-shrink-0 p-1 hover:bg-amber-100 rounded transition-colors"
                            aria-label="Dismiss announcement"
                        >
                            <X className="w-4 h-4 text-[#6B7280]" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border-2 border-[#E5E3DF]">
                        {/* Header */}
                        <div className="sticky top-0 bg-[#FFF8F0] p-6 border-b-2 border-[#FFD23F] flex items-start justify-between">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-[#FFD23F]/30 rounded-lg border border-[#FFD23F]">
                                    <Heart className="w-6 h-6 text-[#FF6B35] fill-[#FF6B35]" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-[#1A1A1A]">Support Stackryze Servers</h2>
                                    <p className="text-sm text-[#6B7280] mt-1">Help keep the platform running for everyone</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowModal(false)}
                                className="p-2 hover:bg-amber-100 rounded-lg transition-colors"
                                aria-label="Close"
                            >
                                <X className="w-5 h-5 text-[#4A4A4A]" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-5 text-[#1A1A1A]">

                            {/* Intro */}
                            <p className="text-base leading-relaxed text-[#4A4A4A]">
                                Stackryze is one of the fastest-growing platforms offering <strong>free domains and DNS</strong>, with fast and active support from our team.
                            </p>

                            {/* Cost info */}
                            <div className="bg-amber-50 border-l-4 border-[#FFD23F] p-4 rounded-r-lg">
                                <p className="text-sm text-amber-900 leading-relaxed">
                                    It costs <strong>~$20 per month</strong> to keep the servers running, plus additional costs for domain renewals. I personally cover these expenses and work on Stackryze completely for free as a student.
                                </p>
                            </div>

                            {/* New domain extension */}
                            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-bold text-green-900 mb-1">🎉 New Domain Extensions: ryzedns.org &amp; nx.kg</h3>
                                        <p className="text-sm text-green-800">
                                            We've launched two new domain extensions <strong className="font-mono">.ryzedns.org</strong> and <strong className="font-mono">.nx.kg</strong> alongside the existing{" "}
                                            <strong className="font-mono">.indevs.in</strong> and{" "}
                                            <strong className="font-mono">.sryze.cc</strong>.
                                            If we receive enough community support, we plan to introduce even more extensions and expand the ecosystem.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Quote */}
                            <blockquote className="border-l-4 border-[#FF6B35] pl-4 py-1 italic text-[#4A4A4A] text-sm">
                                "Let's not make money the barrier to having a better name on the internet."
                            </blockquote>

                            {/* Star to unlock */}
                            <div className="bg-[#FFF8F0] border-2 border-[#FFD23F] rounded-xl p-5">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#FFD23F]/20 border-2 border-[#FFD23F] flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl">⭐</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-[#1A1A1A] font-extrabold text-base mb-1">
                                            Star Our Repo to Unlock More Domains
                                        </h3>
                                        <p className="text-sm text-[#4A4A4A] mb-1">
                                            Starring helps us get discovered, reach more developers, and keeps these domains{" "}
                                            <strong>free for everyone</strong>.
                                        </p>
                                        <div className="bg-white border border-[#E5E7EB] rounded-lg p-3 mb-4 mt-3">
                                            <p className="text-xs font-bold text-[#1A1A1A] mb-2">⭐ Starring unlocks:</p>
                                            <ul className="text-xs text-[#4A4A4A] space-y-1">
                                                <li className="flex items-center gap-2">
                                                    <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                                                    Access to <strong className="font-mono">.sryze.cc</strong> domain (1 free)
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                                                    Access to <strong className="font-mono">.ryzedns.org</strong> domain (1 free)
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                                                    Access to <strong className="font-mono">.nx.kg</strong> domain (1 free)
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                                                    1 extra <strong className="font-mono">.indevs.in</strong> domain slot
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                                                    Higher domain limits overall
                                                </li>
                                            </ul>
                                        </div>
                                        <ol className="text-xs text-[#6B7280] space-y-1 mb-4 ml-1">
                                            <li>1. Star our GitHub repo (button below)</li>
                                            <li>2. Click "I've starred it — Verify" on the Register page</li>
                                            <li>3. You're instantly unlocked — no admin wait!</li>
                                        </ol>
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <a
                                                href="https://github.com/stackryze/FreeDomains"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 bg-[#FFD23F] text-[#1A1A1A] px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-[#FFB800] transition-all shadow-[3px_3px_0px_0px_#1A1A1A] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                                            >
                                                <Star className="w-4 h-4" />
                                                ⭐ Star the Repo ↗
                                            </a>
                                            <a
                                                href="/register"
                                                onClick={() => setShowModal(false)}
                                                className="inline-flex items-center justify-center gap-2 bg-[#1A1A1A] text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-[#333] transition-all border-2 border-[#1A1A1A]"
                                            >
                                                <Github className="w-4 h-4" />
                                                Verify & Register Domain
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Donate CTA */}
                            <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-4 text-center">
                                <p className="text-sm text-[#4A4A4A] mb-3">
                                    If Stackryze has helped you, please consider donating. Even a small contribution makes a real difference.{" "}
                                    <strong>Thank you for supporting Stackryze ❤️</strong>
                                </p>
                                <a
                                    href="https://github.com/sponsors/sudheerbhuvana"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-[#111827] text-white font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-[#1f2937] transition-colors"
                                >
                                    <Github className="w-4 h-4" />
                                    Sponsor on GitHub
                                    <Heart className="w-4 h-4 fill-[#FF6B35] text-[#FF6B35]" />
                                </a>
                            </div>

                            <p className="text-xs text-center text-[#9CA3AF]">— Stackryze Team</p>
                        </div>

                        {/* Close Button */}
                        <div className="sticky bottom-0 bg-white border-t-2 border-[#E5E3DF] p-4">
                            <button
                                onClick={() => setShowModal(false)}
                                className="w-full bg-[#1A1A1A] text-white py-3 rounded-lg font-bold hover:bg-[#333] transition-colors"
                            >
                                Got it, thanks!
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
