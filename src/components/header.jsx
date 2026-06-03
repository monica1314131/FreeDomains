import { useLocation } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { LayoutDashboard } from "lucide-react";

export function Header() {
  const location = useLocation();
  const { user } = useAuth();
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <header className="fixed top-[var(--incident-height,0px)] left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 w-full transition-all">
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-16 h-16 flex items-center justify-between">

        {/* Left Side: Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2 sm:gap-4 group">
            <div className="flex items-center gap-2 sm:gap-3">
              <img src="/stackryze_logo1.png" alt="Stackryze Logo" className="h-8 sm:h-10 md:h-10 w-auto" />
              <span className="text-sm sm:text-lg md:text-xl font-extrabold text-slate-900 tracking-tight">Stackryze Domains</span>
            </div>
            <div className="hidden xl:block h-5 w-[1px] bg-slate-300"></div>
            <div className="hidden xl:flex items-baseline gap-0.5">
              <div className="flex items-center font-bold text-lg tracking-tight gap-0.5">
                <span className="text-orange-500">IN</span>
                <span className="text-slate-900">DE</span>
                <span className="text-green-600">VS</span>
              </div>
              <span className="text-sm font-semibold text-slate-500 tracking-tight">.in</span>
            </div>
            <div className="hidden xl:block h-5 w-[1px] bg-slate-300"></div>
            <div className="hidden xl:flex items-baseline gap-0.5">
              <div className="flex items-center font-bold text-lg tracking-tight gap-0.5">
                <span className="text-slate-900">SRYZE</span>
              </div>
              <span className="text-sm font-semibold text-slate-500 tracking-tight">.cc</span>
            </div>
            <div className="hidden xl:block h-5 w-[1px] bg-slate-300"></div>
            <div className="hidden xl:flex items-baseline gap-0.5">
              <div className="flex items-center font-bold text-lg tracking-tight gap-0.5">
                <span className="text-rose-500">RYZE</span>
                <span className="text-slate-900">DNS</span>
              </div>
              <span className="text-sm font-semibold text-slate-500 tracking-tight">.org</span>
            </div>
            <div className="hidden xl:block h-5 w-[1px] bg-slate-300"></div>
            <div className="hidden xl:flex items-baseline gap-0.5">
              <div className="flex items-center font-bold text-lg tracking-tight gap-0.5">
                <span className="text-slate-900">NX</span>
              </div>
              <span className="text-sm font-semibold text-slate-500 tracking-tight">.kg</span>
            </div>
          </a>
        </div>

        {/* Right Side: Nav + CTA */}
        <div className="flex items-center gap-8">
          {/* Navigation - Desktop */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8">
            <a href="/about" className="text-[#1A1A1A] hover:text-[#FF6B35] transition-colors duration-150 font-bold text-sm lg:text-sm">
              About
            </a>
            <a href="https://dns.stackryze.com" target="_blank" rel="noopener noreferrer" className="text-[#1A1A1A] hover:text-[#FF6B35] transition-colors duration-150 font-bold text-sm lg:text-sm">
              Stackryze DNS
            </a>
            <a href="https://domain-docs.stackryze.com" target="_blank" className="text-[#1A1A1A] hover:text-[#FF6B35] transition-colors duration-150 font-bold text-sm lg:text-sm">
              Docs
            </a>
            <a href="https://status.stackryze.com/" target="_blank" className="text-[#1A1A1A] hover:text-[#FF6B35] transition-colors duration-150 font-bold text-sm lg:text-sm">
              Status
            </a>
            <a href="https://discord.gg/wr7s97cfM7" target="_blank" className="text-[#1A1A1A] hover:text-[#FF6B35] transition-colors duration-150 font-bold text-sm lg:text-sm">
              Discord
            </a>
            <a
              href="https://github.com/stackryze/FreeDomains"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A1A1A] hover:text-[#FF6B35] transition-colors duration-150 font-bold text-sm lg:text-sm"
            >
              GitHub
            </a>
            <a href="/donate" className="text-rose-500 hover:text-rose-600 transition-colors duration-150 font-extrabold text-sm lg:text-sm flex items-center gap-1">
              ❤️ Donate
            </a>
          </div>

          {/* CTA Button */}
          {user ? (
            <a
              href="/overview"
              className="bg-[#FFD23F] text-[#1A1A1A] px-4 py-2 sm:px-5 sm:py-2 md:px-5 md:py-2.5 font-extrabold text-sm tracking-wide rounded-lg hover:bg-[#FFB800] border border-[#e6b720] transition-all duration-200 shadow-sm flex items-center gap-2"
              title="Dashboard"
            >
              <LayoutDashboard className="w-4 h-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </a>
          ) : (
            <a
              href="/login"
              className="bg-[#FFD23F] text-[#1A1A1A] px-5 py-2 md:px-6 md:py-2.5 font-extrabold text-sm tracking-wide rounded-lg hover:bg-[#FFB800] border border-[#e6b720] transition-all duration-200 shadow-sm"
            >
              Get Started
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
