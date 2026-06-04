import { Globe2, Sparkles, Server, Zap } from "lucide-react";

export function HowItWorksSection() {
  const extensions = [
    {
      ext: ".indevs.in",
      description: "Empowering innovation with accessible, secure, and trusted digital identities for developers, organizations, and communities.",
      icon: Globe2,
      accent: "from-blue-500 to-indigo-500",
      iconColor: "text-blue-500",
      bgHover: "hover:bg-blue-50/50"
    },
    {
      ext: ".sryze.cc",
      description: "A modern namespace for creators, entrepreneurs, and digital-first brands seeking memorable online identities.",
      icon: Sparkles,
      accent: "from-orange-400 to-red-500",
      iconColor: "text-orange-500",
      bgHover: "hover:bg-orange-50/50"
    },
    {
      ext: ".ryzedns.org",
      description: "Supporting self-hosted infrastructure, open-source ecosystems, and network services with dependable naming solutions.",
      icon: Server,
      accent: "from-emerald-400 to-teal-500",
      iconColor: "text-emerald-500",
      bgHover: "hover:bg-emerald-50/50"
    },
    {
      ext: ".nx.kg",
      description: "A concise namespace built for the next generation of applications, platforms, and internet services.",
      icon: Zap,
      accent: "from-purple-500 to-pink-500",
      iconColor: "text-purple-500",
      bgHover: "hover:bg-purple-50/50"
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-[#FAFAFA] relative z-30 overflow-hidden">
      {/* Background ambient blur */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-slate-100 blur-[100px] rounded-full pointer-events-none opacity-50"></div>

      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-16 max-w-[1600px] mx-auto relative z-10">

        <div className="mb-12 md:mb-16 space-y-3 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Available Namespaces
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-500 leading-relaxed font-medium">
            Four unique extensions. Infinite possibilities. Claim yours instantly.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {extensions.map((item, idx) => (
            <div
              key={idx}
              title={item.description}
              className={`group flex items-center gap-3 bg-white border border-slate-200/50 px-6 py-3.5 md:px-8 md:py-4 rounded-[2rem] shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-500 ease-out ring-1 ring-slate-900/5 hover:ring-slate-900/10 cursor-help ${item.bgHover}`}
            >
              <item.icon className={`w-5 h-5 md:w-6 md:h-6 ${item.iconColor} transition-transform duration-300 group-hover:scale-110`} strokeWidth={2.5} />
              <span className="text-lg md:text-xl font-extrabold text-slate-900 tracking-tight">
                {item.ext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
