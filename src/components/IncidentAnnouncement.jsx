import { useState, useLayoutEffect, useRef } from "react";
import { X, Star, CheckCircle, Rocket } from "lucide-react";

export function IncidentAnnouncement() {
    const [showModal, setShowModal] = useState(false);
    const [dismissed, setDismissed] = useState(false);
    const bannerRef = useRef(null);

    useLayoutEffect(() => {
        const updateHeight = () => {
            if (bannerRef.current) {
                const height = dismissed ? 0 : bannerRef.current.offsetHeight;
                document.documentElement.style.setProperty('--incident-height', `${height}px`);
            }
        };

        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => {
            window.removeEventListener('resize', updateHeight);
            document.documentElement.style.removeProperty('--incident-height');
        };
    }, [dismissed]);

    if (dismissed) return null;

    return (
        <>
            {/* Support Banner */}
            <div ref={bannerRef} className="bg-gradient-to-r from-[#FFF8F0] to-amber-50 border-b-2 border-[#FFD23F] w-full fixed top-0 left-0 right-0 z-[100]">
                <div className="max-w-7xl mx-auto px-4 py-2.5 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between flex-wrap gap-3">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                            <span className="text-base flex-shrink-0">🎉</span>
                            <p className="text-sm font-medium text-[#1A1A1A]">
                                <span className="font-bold">New: nx.kg</span> domain extension is live!{" "}
                                <span className="text-[#4A4A4A]">Star our repo to unlock access.</span>{" "}
                                <button
                                    onClick={() => setShowModal(true)}
                                    className="text-[#FF6B35] hover:text-[#e05520] underline font-bold"
                                >
                                    Learn more →
                                </button>
                            </p>
                        </div>
                        <button
                            onClick={() => setDismissed(true)}
                            className="p-1.5 hover:bg-amber-100 rounded-lg transition-colors flex-shrink-0"
                            aria-label="Dismiss"
                        >
                            <X className="w-4 h-4 text-[#6B7280]" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border-2 border-[#E5E3DF]">
                        {/* Header */}
                        <div className="sticky top-0 bg-[#FFF8F0] p-6 border-b-2 border-[#FFD23F] flex items-start justify-between">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-[#FFD23F]/30 rounded-lg border border-[#FFD23F]">
                                    <Rocket className="w-6 h-6 text-[#FF6B35]" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-[#1A1A1A]">New Domain Extensions</h2>
                                    <p className="text-sm text-[#6B7280] mt-0.5">Unlock more domains for your projects</p>
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
                        <div className="p-6 space-y-4 text-[#1A1A1A]">
                            {/* New domain extension */}
                            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-bold text-green-900 mb-1">🎉 New: nx.kg domain extension!</p>
                                        <p className="text-xs text-green-800">
                                            Now offering <strong className="font-mono">.indevs.in</strong>, <strong className="font-mono">.sryze.cc</strong>, <strong className="font-mono">.ryzedns.org</strong>, and <strong className="font-mono">.nx.kg</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Star to unlock */}
                            <div className="bg-[#FFF8F0] border-2 border-[#FFD23F] rounded-xl p-4">
                                <div className="flex items-start gap-3">
                                    <span className="text-xl flex-shrink-0">⭐</span>
                                    <div className="flex-1">
                                        <h3 className="font-extrabold text-sm text-[#1A1A1A] mb-1">Star our repo to unlock more domains</h3>
                                        <p className="text-xs text-[#4A4A4A] mb-3">
                                            Starring helps us get discovered and keeps domains <strong>free for everyone</strong>.
                                        </p>
                                        <div className="bg-white border border-[#E5E7EB] rounded-lg p-3 mb-3">
                                            <p className="text-xs font-bold text-[#1A1A1A] mb-1.5">⭐ Starring unlocks:</p>
                                            <ul className="text-xs text-[#4A4A4A] space-y-1">
                                                <li className="flex items-center gap-1.5">
                                                    <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                                                    1 free <strong className="font-mono">.nx.kg</strong> domain
                                                </li>
                                                <li className="flex items-center gap-1.5">
                                                    <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                                                    1 free <strong className="font-mono">.sryze.cc</strong> domain
                                                </li>
                                                <li className="flex items-center gap-1.5">
                                                    <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                                                    1 free <strong className="font-mono">.ryzedns.org</strong> domain
                                                </li>
                                                <li className="flex items-center gap-1.5">
                                                    <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                                                    1 extra <strong className="font-mono">.indevs.in</strong> slot
                                                </li>
                                                <li className="flex items-center gap-1.5">
                                                    <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                                                    Higher domain limits overall
                                                </li>
                                            </ul>
                                        </div>
                                        <ol className="text-xs text-[#6B7280] space-y-0.5 mb-4">
                                            <li>1. Star our GitHub repo (button below)</li>
                                            <li>2. Click "I've starred it — Verify" on the Register page</li>
                                            <li>3. Instantly unlocked — no admin wait!</li>
                                        </ol>
                                        <a
                                            href="https://github.com/stackryze/FreeDomains"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-[#FFD23F] text-[#1A1A1A] px-4 py-2 rounded-lg font-bold text-sm hover:bg-[#FFB800] transition-all shadow-[3px_3px_0px_0px_#1A1A1A] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]"
                                        >
                                            <Star className="w-4 h-4" />
                                            ⭐ Star the Repo ↗
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer Buttons */}
                        <div className="sticky bottom-0 bg-white border-t-2 border-[#E5E3DF] p-4 flex gap-3">
                            <button
                                onClick={() => setShowModal(false)}
                                className="w-full bg-white border-2 border-[#E5E3DF] text-[#1A1A1A] py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors text-sm"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
