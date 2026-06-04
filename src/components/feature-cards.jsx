import { Globe, Zap, Users, Code } from "lucide-react";

export function FeatureCards() {
  const features = [
    {
      number: "01",
      title: "Forever Free",
      description: "Zero cost. Zero strings. Just claim your subdomain and it's yours. No subscriptions, no upsells.",
      icon: Globe,
      bg: "#FFD23F"
    },
    {
      number: "02",
      title: "Full DNS Control",
      description: "Point to anywhere. A records, CNAME records, TXT records. Your subdomain, your rules.",
      icon: Code,
      bg: "#FF6B35"
    },
    {
      number: "03",
      title: "Growing Community",
      description: "Join a community of builders, makers, and creators. The perfect home for your personal projects.",
      icon: Users,
      bg: "#2D5016"
    },
    {
      number: "04",
      title: "Instant Setup",
      description: "Login with GitHub. Pick a name. Done in 30 seconds. No verification emails. No waiting.",
      icon: Zap,
      bg: "#FFD23F"
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-[#FAFAFA] relative">
      <div className="w-full px-6 md:px-12 lg:px-16 max-w-[1600px] mx-auto">

        <div className="mb-16 md:mb-24 space-y-6 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            The price of admission <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">is zero.</span>
          </h2>

          <div className="space-y-4 text-base md:text-lg text-slate-500 leading-relaxed font-medium">
            <p>
              For too long, gatekeepers have put a price tag on your identity. We believe your first
              idea, your tenth side project, and your portfolio deserve a home, not a monthly bill.
            </p>
            <p>
              <span className="font-semibold text-slate-900">Stackryze Domains</span> is our contribution to the chaotic, beautiful mess that is the open web.
              Claim your domain, point it anywhere, and deploy. No strings attached.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/50 rounded-[2rem] p-8 h-full shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-500 ease-out flex flex-col justify-between group ring-1 ring-slate-900/5 hover:ring-slate-900/10"
            >
              <div>
                <div className="flex items-start justify-between mb-8">
                  <span className="text-4xl lg:text-5xl font-black text-slate-100 transition-colors duration-500 group-hover:text-slate-200">
                    {feature.number}
                  </span>
                  <div
                    className="w-14 h-14 flex items-center justify-center rounded-xl ring-1 ring-black/5 shadow-sm transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundColor: `${feature.bg}15`, color: feature.bg }}
                  >
                    <feature.icon className="w-7 h-7" strokeWidth={2} />
                  </div>
                </div>

                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-base leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
