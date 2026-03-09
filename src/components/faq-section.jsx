import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is this actually free?",
      answer: "Yes. Forever. No credit card, no trial period, no premium tier. We built this because we wanted it to exist, not to make money from it."
    },
    {
      question: "How long can I keep my subdomain?",
      answer: "Domains are valid for 1 year and can be renewed indefinitely for free. We'll send you a reminder email before it expires so you don't lose it."
    },
    {
      question: "Can I use this for commercial projects?",
      answer: "Absolutely. Use it for your portfolio, startup, or side project. As long as it complies with our Acceptable Use Policy, it's yours."
    },
    {
      question: "What if my desired name is taken?",
      answer: "Try a variation. Add your last name, a number, or get creative. First-come, first-served – that's the rule."
    },
    {
      question: "Can I transfer my subdomain to someone else?",
      answer: "Not yet. Right now, once you claim it, it's tied to your GitHub account. We might add transfers later if people want it."
    },
    {
      question: "Can I point my subdomain to a custom domain?",
      answer: "You can use CNAME records to point your *.indevs.in subdomain to any host — Vercel, Netlify, Cloudflare Pages, or your own server. Full DNS control is yours from day one."
    }
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-white border-t-4 border-[#1A1A1A]">
      <div className="max-w-4xl mx-auto px-6 w-full">

        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Questions?
          </h2>
          <p className="text-xl text-[#6B6B6B]">
            Here are the ones we get asked most.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border-2 border-[#1A1A1A] bg-[#FFF8F0]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#FFD23F] transition-colors duration-150"
              >
                <span className="text-lg md:text-xl font-bold text-[#1A1A1A] pr-8">
                  {faq.question}
                </span>
                {openIndex === idx ? (
                  <Minus className="w-6 h-6 text-[#1A1A1A] flex-shrink-0" />
                ) : (
                  <Plus className="w-6 h-6 text-[#1A1A1A] flex-shrink-0" />
                )}
              </button>

              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: openIndex === idx ? "200px" : "0px" }}
              >
                <div className="px-8 pb-6 pt-2">
                  <p className="text-lg text-[#6B6B6B] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="mt-16 text-center">
          <p className="text-lg text-[#6B6B6B] mb-6">
            Still have questions? We're on GitHub Discussions.
          </p>
          <a
            href="/login"
            className="inline-block bg-[#FF6B35] text-white px-12 py-4 font-bold text-lg uppercase tracking-wider hover:bg-[#1A1A1A] transition-colors duration-150"
          >
            Get Your Subdomain
          </a>
        </div>
      </div>
    </section>
  );
}
