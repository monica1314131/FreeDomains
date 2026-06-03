import { MousePointerClick, Settings, Globe } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Pick your domain",
      description: "Search for your perfect domain name right from the homepage. If it's available, it's yours instantly.",
      icon: MousePointerClick,
      iconBg: "bg-blue-50 text-blue-600",
      numberColor: "text-blue-100/50"
    },
    {
      number: "02",
      title: "Point your records",
      description: "Use our clean dashboard to add your nameservers, A records, or CNAME records. Full DNS control.",
      icon: Settings,
      iconBg: "bg-orange-50 text-orange-600",
      numberColor: "text-orange-100/50"
    },
    {
      number: "03",
      title: "Go live",
      description: "Your domain propagates instantly across our global network. Show the world what you've built.",
      icon: Globe,
      iconBg: "bg-emerald-50 text-emerald-600",
      numberColor: "text-emerald-100/50"
    }
  ];

  return (
    <section className="w-full pt-12 md:pt-24 pb-12 md:pb-24 bg-white relative">
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-16 mb-16">
        
        <div className="mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            How it works
          </h2>
          <p className="max-w-2xl text-base md:text-lg text-slate-500 leading-relaxed">
            Get your project online in less than a minute. No credit card required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 h-full hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className={`absolute -top-4 -right-4 text-8xl font-black select-none z-0 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 ${step.numberColor}`}>
                {step.number}
              </div>
              
              <div className="relative z-10">
                <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-6 ${step.iconBg}`}>
                  <step.icon className="w-6 h-6" strokeWidth={2.5} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
