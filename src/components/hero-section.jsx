import { ArrowRight, Loader2, CheckCircle, XCircle, Heart } from "lucide-react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export function HeroSection() {
  const [domain, setDomain] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [isAvailable, setIsAvailable] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const checkAvailability = async () => {
    const domainLower = domain.toLowerCase().trim();

    // Reset states
    setErrorMsg("");
    setIsAvailable(null);

    // Validation
    if (!domainLower) return;

    if (domainLower.length < 3) {
      setErrorMsg("Domain must be at least 3 characters");
      setIsAvailable(false);
      return;
    }

    if (domainLower.length > 63) {
      setErrorMsg("Domain must be less than 63 characters");
      setIsAvailable(false);
      return;
    }

    if (!/^[a-z0-9-]+$/.test(domainLower)) {
      setErrorMsg("Only lowercase letters, numbers, and hyphens allowed");
      setIsAvailable(false);
      return;
    }

    if (domainLower.startsWith('-') || domainLower.endsWith('-')) {
      setErrorMsg("Domain cannot start or end with a hyphen");
      setIsAvailable(false);
      return;
    }

    setIsChecking(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/subdomains/check/${domainLower}`);

      if (response.status === 429) {
        setErrorMsg("You are searching too fast! Please wait a minute.");
        setIsAvailable(false);
        return;
      }

      const data = await response.json();

      if (data.available) {
        setIsAvailable(true);
        setErrorMsg("");
      } else {
        setIsAvailable(false);
        setErrorMsg(data.message || "Domain is already taken");
      }
    } catch (error) {
      // Network error or other issue
      setErrorMsg("Unable to check availability");
      setIsAvailable(null);
    } finally {
      setIsChecking(false);
    }
  };

  const handleClaimClick = () => {
    if (domain && isAvailable) {
      // Redirect to login with domain pre-filled
      navigate('/login');
    } else {
      checkAvailability();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClaimClick();
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center pt-20 pb-12 bg-[#0A0A0B] bg-[url('/pixel_art_large.png')] bg-cover bg-center bg-no-repeat overflow-hidden">
      {/* Subtle overlay for white text readability */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Container with generous padding */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 flex-1 flex flex-col justify-center">
        {/* Two columns - Constrained slightly to 1600px to avoid massive center gap on ultrawide */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center max-w-[1600px] mx-auto w-full">

          {/* Left: Text */}
          <div className="space-y-6 lg:pr-8">

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white tracking-tight">
              A NAME FOR EVERYONE <span className="text-[#6FD1D7]">ONLINE.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
              A public namespace for everyone to belong online. Made for the world. 100% free and open-source.
            </p>
          </div>

          {/* Right: Search */}
          <div className="w-full">
            <div className="bg-[#111113]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl ring-1 ring-white/5 w-full relative overflow-hidden">
              {/* Subtle gradient glow inside the card */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#6FD1D7]/20 blur-3xl rounded-full pointer-events-none"></div>

              <label className="block text-xs font-bold uppercase tracking-widest mb-5 text-gray-400">
                Check Availability
              </label>

              <div className="space-y-5 relative z-10">
                <div className="flex border border-white/10 rounded-xl relative overflow-hidden focus-within:ring-2 focus-within:ring-[#6FD1D7]/30 focus-within:border-[#6FD1D7] transition-all bg-black/40 shadow-inner">
                  <input
                    type="text"
                    placeholder="yourname"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                    onKeyPress={handleKeyPress}
                    className="flex-1 px-5 py-4 text-base md:text-lg font-mono min-w-0 outline-none text-white placeholder:text-gray-600 bg-transparent"
                  />
                  <span className="px-5 py-4 text-gray-400 font-mono text-sm md:text-base flex items-center border-l border-white/10 bg-black/20">
                    .indevs.in
                  </span>
                  {isChecking && (
                    <div className="absolute right-32 top-1/2 -translate-y-1/2">
                      <Loader2 className="w-5 h-5 text-[#6FD1D7] animate-spin" />
                    </div>
                  )}
                </div>

                <button
                  onClick={handleClaimClick}
                  disabled={isChecking || (domain.length > 0 && domain.length < 3)}
                  className="w-full bg-[#FFD23F] text-[#1A1A1A] rounded-xl py-4 px-6 font-extrabold uppercase tracking-widest text-sm hover:bg-[#FFB800] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,210,63,0.15)] hover:shadow-[0_0_25px_rgba(255,210,63,0.25)] disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
                >
                  {isChecking ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Checking...
                    </>
                  ) : isAvailable ? (
                    <>
                      Login to Claim
                      <ArrowRight className="w-5 h-5" />
                    </>
                  ) : (
                    <>
                      Check Availability
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {domain && domain.length > 0 && domain.length < 3 && (
                  <p className="text-sm font-medium text-amber-500 flex items-center gap-1.5 mt-2">
                    <XCircle className="w-4 h-4" />
                    Domain must be at least 3 characters
                  </p>
                )}
                {errorMsg && domain.length >= 3 && (
                  <p className="text-sm font-medium text-red-400 flex items-center gap-1.5 mt-2">
                    <XCircle className="w-4 h-4" />
                    {errorMsg}
                  </p>
                )}
                {isAvailable && !errorMsg && (
                  <p className="text-sm font-medium text-emerald-400 flex items-center gap-1.5 mt-2">
                    <CheckCircle className="w-4 h-4" />
                    <span className="font-bold text-white">{domain}.indevs.in</span> is available!
                  </p>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 text-center relative z-10">
                <Link to="/donate" className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group">
                  <Heart className="w-4 h-4 text-rose-500/80 group-hover:text-rose-500 fill-rose-500/50 group-hover:fill-rose-500 transition-all" />
                  Help us keep this free — Donate
                </Link>
              </div>
            </div>
          </div>v>
        </div>

      </div>

      {/* Scrolling Benefits Ticker - Full Width */}
      <div className="relative z-10 mt-10 md:mt-16 w-full border-t-2 border-b-2 border-[#E5E3DF] bg-white">
        <div className="flex gap-4 md:gap-6 animate-scroll min-w-max py-3 border-x-0">
          {[
            "INSTANT ACTIVATION",
            "FULL DNS CONTROL",
            "NO BILLING DETAILS",
            "MADE FOR THE WORLD",
            "100% OPEN SOURCE",
            "FREE FOREVER",
            "INSTANT ACTIVATION",
            "FULL DNS CONTROL",
            "NO BILLING DETAILS",
            "MADE FOR THE WORLD",
            "100% OPEN SOURCE",
            "FREE FOREVER",
          ].map((text, idx) => (
            <div key={idx} className="flex-shrink-0 bg-white px-3 md:px-6 py-2 border-r-2 border-[#E5E3DF] last:border-r-0">
              <span className="font-bold text-[#1A1A1A] tracking-wider text-sm md:text-base whitespace-nowrap">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
