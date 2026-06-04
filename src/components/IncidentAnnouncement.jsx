import { useState, useLayoutEffect, useRef } from "react";
import { X, Rocket, CheckCircle2, ShieldCheck, Globe } from "lucide-react";

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
            {/* Clean Light Banner */}
            <div ref={bannerRef} className="bg-white dark:bg-[#111] border-b border-gray-200 w-full fixed top-0 left-0 right-0 z-[100] shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between flex-wrap gap-3">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                            <div className="flex items-center justify-center w-7 h-7 rounded-md bg-[#FFD23F]/20 border border-[#FFD23F]/50 flex-shrink-0">
                                <Rocket className="w-4 h-4 text-[#FF6B35]" />
                            </div>
                            <p className="text-sm font-medium text-gray-700">
                                <span className="font-bold text-[#1A1A1A] dark:text-white">New: .nx.kg extension</span> is live!{" "}
                                <button
                                    onClick={() => setShowModal(true)}
                                    className="font-bold ml-2 text-[#FF6B35] hover:text-[#d95526] hover:underline transition-colors"
                                >
                                    See all available domains →
                                </button>
                            </p>
                        </div>
                        <button
                            onClick={() => setDismissed(true)}
                            className="p-1.5 rounded-md hover:bg-gray-100 transition-colors flex-shrink-0"
                            aria-label="Dismiss"
                        >
                            <X className="w-4 h-4 text-gray-400" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Custom Modal with proper backdrop blur and wide layout */}
            {showModal && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-200">
                        
                        {/* Header */}
                        <div className="sticky top-0 bg-white/95 backdrop-blur-md p-6 border-b border-gray-100 flex items-start justify-between z-10">
                            <div className="flex items-start gap-4">
                                <div className="p-2.5 bg-[#FFF8F0] border border-[#FFD23F]/50 rounded-lg shadow-sm">
                                    <ShieldCheck className="w-6 h-6 text-[#FF6B35]" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-extrabold text-[#1A1A1A] dark:text-white">Expanded Domain Portfolio</h2>
                                    <p className="text-sm text-gray-500 mt-1">
                                        We've added new extensions. Claim your domains today.
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowModal(false)}
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5 text-gray-500" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 md:p-8 space-y-8">
                            
                            {/* Alert Banner */}
                            <div className="flex items-start gap-3 bg-[#e6f4ea] rounded-lg p-5 border border-green-200">
                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="text-base font-bold text-green-900 mb-1">🎉 .nx.kg is now available!</h3>
                                    <p className="text-sm text-green-800 leading-relaxed">
                                        You can now register <strong className="font-mono">.indevs.in</strong>, <strong className="font-mono">.sryze.cc</strong>, <strong className="font-mono">.ryzedns.org</strong>, and the all-new <strong className="font-mono bg-white/50 px-1 py-0.5 rounded">.nx.kg</strong>.
                                    </p>
                                </div>
                            </div>

                            {/* Available Extensions List */}
                            <div>
                                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 pb-2 border-b border-gray-100">
                                    Available Extensions
                                </h4>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { ext: ".nx.kg", status: "New", isNew: true },
                                        { ext: ".sryze.cc", status: "Available" },
                                        { ext: ".ryzedns.org", status: "Available" },
                                        { ext: ".indevs.in", status: "Available" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-gray-200 bg-[#F9FAFB]">
                                            <div className="flex items-center gap-3">
                                                <Globe className="w-5 h-5 text-gray-400" />
                                                <span className="font-mono font-bold text-[#1A1A1A] dark:text-white text-base">{item.ext}</span>
                                            </div>
                                            {item.isNew ? (
                                                <span className="px-2.5 py-1 text-xs font-bold bg-[#FFD23F]/20 text-[#d95526] rounded-full border border-[#FFD23F]/50">
                                                    New
                                                </span>
                                            ) : (
                                                <span className="px-2.5 py-1 text-xs font-semibold bg-gray-100 text-gray-500 rounded-full border border-gray-200">
                                                    Available
                                                </span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}
