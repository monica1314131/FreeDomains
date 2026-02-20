import { useState, useLayoutEffect, useRef } from "react";
import { X, Info, Globe, ArrowRight } from "lucide-react";

export function IncidentAnnouncement() {
    const [showModal, setShowModal] = useState(false);
    const bannerRef = useRef(null);

    useLayoutEffect(() => {
        const updateHeight = () => {
            if (bannerRef.current) {
                const height = bannerRef.current.offsetHeight;
                document.documentElement.style.setProperty('--incident-height', `${height}px`);
                console.log('Incident banner height:', height);
            }
        };

        // Initial update
        updateHeight();
        
        // Force update after a tick to ensure all content is rendered
        const timeoutId = setTimeout(updateHeight, 0);

        // Update on resize
        window.addEventListener('resize', updateHeight);

        // Cleanup
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('resize', updateHeight);
            document.documentElement.style.removeProperty('--incident-height');
        };
    }, []);

    return (
        <>
            {/* Announcement Banner */}
            <div ref={bannerRef} className="bg-gradient-to-r from-green-50 to-emerald-50 border-b-2 border-green-200 w-full fixed top-0 left-0 right-0 z-[100]">
                <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between flex-wrap gap-3">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                            <Info className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <p className="text-sm font-medium text-green-900">
                                <span className="font-bold">🎉 Big Updates:</span> We've added <span className="font-bold">sryze.cc</span> domains + <span className="font-bold">Managed DNS is Live!</span> Host your DNS at <span className="font-bold">dns.stackryze.com</span> — no external provider needed.
                                <button
                                    onClick={() => setShowModal(true)}
                                    className="ml-2 text-green-700 hover:text-green-900 underline font-bold"
                                >
                                    Learn more
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border-2 border-[#E5E3DF]">
                        {/* Header */}
                        <div className="sticky top-0 bg-gradient-to-r from-green-50 to-emerald-50 p-6 border-b-2 border-green-200 flex items-start justify-between">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-green-100 rounded-lg">
                                    <Globe className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-[#1A1A1A]">🎉 Big Updates!</h2>
                                    <p className="text-sm text-green-800 mt-1">New domains & Managed DNS now available</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowModal(false)}
                                className="p-2 hover:bg-green-100 rounded-lg transition-colors"
                                aria-label="Close"
                            >
                                <X className="w-5 h-5 text-[#4A4A4A]" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-6 text-[#1A1A1A]">
                            <p className="text-base leading-relaxed">
                                We're thrilled to announce two major updates to the Stackryze platform!
                            </p>

                            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                                <div className="flex items-start gap-3">
                                    <Globe className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-bold text-green-900 mb-1">🎉 Managed DNS is Live!</h3>
                                        <p className="text-sm text-green-800">
                                            <strong>We made a promise, and we delivered!</strong> Host your DNS records directly with Stackryze DNS at <strong>dns.stackryze.com</strong> — no external provider needed. Powered by PowerDNS with globally distributed nameservers.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                                <div className="flex items-start gap-3">
                                    <Globe className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-bold text-blue-900 mb-1">New Domain: sryze.cc</h3>
                                        <p className="text-sm text-blue-800">
                                            Register subdomains under our new <strong>sryze.cc</strong> extension. It's short, memorable, and ready for your projects with fresh availability for popular names.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h4 className="font-bold text-gray-900">What you get:</h4>
                                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                    <li><strong>Managed DNS:</strong> Free DNS hosting, all record types (A, AAAA, CNAME, MX, TXT, NS, SOA), enterprise-grade performance</li>
                                    <li><strong>sryze.cc domains:</strong> More subdomain choices, fresh name availability, same easy management</li>
                                    <li><strong>Global infrastructure:</strong> Nameservers in Germany & India for low latency worldwide</li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                <p className="text-sm text-gray-600">
                                    Visit your dashboard to claim your <strong>sryze.cc</strong> subdomain or start using <strong>Managed DNS</strong> today!
                                </p>
                            </div>
                        </div>

                        {/* Close Button */}
                        <div className="sticky bottom-0 bg-white border-t-2 border-[#E5E3DF] p-4 flex gap-3">
                            <button
                                onClick={() => setShowModal(false)}
                                className="flex-1 bg-white border-2 border-[#E5E3DF] text-[#1A1A1A] py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors"
                            >
                                Close
                            </button>
                            <a
                                href="https://dns.stackryze.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                            >
                                Try Managed DNS <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
