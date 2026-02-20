import { Server, Settings, AlertCircle } from "lucide-react";

export default function DNSRecords() {
    return (
        <div className="max-w-5xl mx-auto">
            <div className="mb-10">
                <h1 className="text-3xl font-bold text-[#1A1A1A] capitalize mb-2">DNS Management</h1>
                <p className="text-[#4A4A4A]">Manage your DNS records with Stackryze DNS</p>
            </div>

            {/* Launch Announcement */}
            <div className="bg-[#FFF8F0] border-2 border-[#E5E3DF] rounded-xl p-6 mb-8">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-lg border-2 border-[#E5E3DF]">
                        <Server className="w-6 h-6 text-[#1A1A1A]" />
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            <h2 className="text-2xl font-bold text-[#1A1A1A]">🎉 Managed DNS is Now Live!</h2>
                            <span className="bg-[#1A1A1A] text-white px-3 py-1 rounded-full text-xs font-bold uppercase">Live</span>
                        </div>
                        <p className="text-[#4A4A4A] leading-relaxed mb-3">
                            <strong>We made a promise, and we delivered!</strong> Our managed DNS infrastructure is now available. Host your DNS records directly with Stackryze DNS at <strong>dns.stackryze.com</strong> — no external DNS provider needed.
                        </p>
                        <div className="bg-white border-2 border-[#E5E3DF] rounded-lg p-4 mb-4">
                            <p className="text-[#4A4A4A] leading-relaxed">
                                <strong>High-performance nameservers</strong> powered by <strong>PowerDNS</strong>, globally distributed across Germany and India. The same nameservers power the entire <strong>Stackryze Domains</strong> platform — enterprise-grade performance you can trust.
                            </p>
                        </div>
                        <a 
                            href="https://dns.stackryze.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block bg-[#1A1A1A] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#2A2A2A] transition-colors"
                        >
                            Get Started →
                        </a>
                    </div>
                </div>
            </div>

            {/* Current DNS Delegation Model */}
            <div className="bg-white rounded-xl border-2 border-[#E5E3DF] p-8">
                <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-[#FFF8F0] rounded-lg border-2 border-[#E5E3DF]">
                        <Server className="w-6 h-6 text-[#1A1A1A]" />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">Current DNS Model: Delegation</h2>
                        <p className="text-lg text-[#4A4A4A] leading-relaxed mb-4">
                            At the moment, Indevs operates on a <strong>"Bring Your Own DNS"</strong> model. When you register a subdomain (e.g., <code className="bg-[#FFF8F0] px-2 py-1 rounded font-mono text-sm">yourname.indevs.in</code>), you provide your own <strong>Nameservers (NS records)</strong>.
                        </p>
                        <p className="text-[#4A4A4A] leading-relaxed">
                            This means you manage your DNS records at your preferred DNS provider (like Cloudflare, Route53, or any other), and we handle the NS delegation to point your subdomain to those nameservers.
                        </p>
                    </div>
                </div>

                <div className="bg-[#FFF8F0] border-2 border-[#E5E3DF] rounded-lg p-6">
                    <h3 className="font-bold text-[#1A1A1A] mb-3 flex items-center gap-2">
                        <Settings className="w-5 h-5" />
                        How It Works Now
                    </h3>
                    <ol className="space-y-2 text-[#4A4A4A] list-decimal list-inside">
                        <li>Register your subdomain on Indevs</li>
                        <li>Provide your DNS provider's nameservers (e.g., <code className="bg-white px-2 py-0.5 rounded font-mono text-xs">ns1.cloudflare.com</code>)</li>
                        <li>We create an NS delegation record pointing to your nameservers</li>
                        <li>You manage all DNS records (A, CNAME, TXT, etc.) at your DNS provider</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}
