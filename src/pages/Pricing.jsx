import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Check, ArrowRight } from 'lucide-react';

const pricingTiers = [
  {
    name: "Domestic",
    description: "For residential solar installations",
    originalPrice: "120",
    price: "99",
    unit: "up to 10 panels",
    features: [
      "+£10 per 4 panels above 10",
      "Maximum 50 panels",
      "Drone thermal survey",
      "Visual inspection",
      "Hotspot detection",
      "Summary report",
      "5 business day turnaround"
    ],
    popular: false
  },
  {
    name: "Commercial",
    description: "For commercial rooftop systems",
    originalPrice: "210",
    price: "199",
    unit: "from 51 panels",
    features: [
      "+£10 per 10 panels above 51",
      "Full thermal survey",
      "Fault classification",
      "String-level analysis",
      "Engineering report",
      "Corrective recommendations",
      "3 business day turnaround"
    ],
    popular: true
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-24">
      {/* Hero */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=1920&q=80" 
            alt="Solar panels in warm light"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white dark:from-slate-950/90 dark:via-slate-950/85 dark:to-slate-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(255,255,255,0.6)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.6)_100%)]" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div>
            <p className="text-amber-500 font-medium tracking-[0.3em] uppercase text-sm mb-6">
              Pricing
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 dark:text-white mb-8">
              Transparent pricing<br />
              <span className="text-slate-600 dark:text-slate-400">no hidden costs</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Clear, upfront pricing for all system sizes. Every survey includes 
              comprehensive thermal imaging and a detailed report.
            </p>
            </div>
            </div>
            </section>

            {/* Pricing Cards */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative p-8 rounded-2xl border ${
                  tier.popular 
                    ? 'bg-gradient-to-b from-amber-500/10 to-gray-50 dark:to-slate-900 border-amber-500/30' 
                    : 'bg-gray-50 dark:bg-slate-900 border-gray-200 dark:border-slate-800'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 bg-amber-500 text-slate-950 text-sm font-medium rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-medium text-slate-900 dark:text-white mb-2">{tier.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{tier.description}</p>
                </div>
                
                <div className="mb-8">
                  {tier.originalPrice ? (
                    <>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-slate-500 line-through text-2xl">£{tier.originalPrice}</span>
                        <span className="text-xs text-amber-500 font-medium uppercase tracking-wide">Seasonal Offer</span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-amber-500">£</span>
                        <span className="text-5xl font-light text-amber-500">{tier.price}</span>
                      </div>
                    </>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className="text-slate-600 dark:text-slate-400">£</span>
                      <span className="text-5xl font-light text-slate-900 dark:text-white">{tier.price}</span>
                    </div>
                  )}
                  <p className="text-slate-500 dark:text-slate-500 mt-1">{tier.unit}</p>
                </div>
                
                <ul className="space-y-4 mb-10">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={createPageUrl('Contact')}
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-medium transition-all duration-300 ${
                    tier.popular
                      ? 'bg-amber-500 text-slate-950 hover:bg-amber-400'
                      : 'bg-slate-800 dark:bg-slate-800 text-white hover:bg-slate-700 dark:hover:bg-slate-700'
                  }`}
                >
Book Survey
                  <ArrowRight className="w-4 h-4" />
                  </Link>
                  </div>
                  ))}
                  </div>

          {/* Utility Scale Notice */}
          <div className="mt-12 text-center max-w-2xl mx-auto">
            <div className="p-6 bg-gray-50 dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800">
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">Utility Scale Projects</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                We offer comprehensive thermal inspection services for MW-scale solar farms and large commercial installations.
              </p>
              <Link
                to={createPageUrl('Contact')}
                className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-medium transition-colors"
              >
                Contact us for custom pricing
                <ArrowRight className="w-4 h-4" />
                </Link>
                </div>
                </div>
                </div>
                </section>

      {/* FAQ / Info */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-slate-900 dark:text-white mb-6">What's included</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Every survey includes",
                items: [
                  "Calibrated thermal imaging",
                  "High-resolution visual capture",
                  "Full fault classification",
                  "Annotated thermal maps",
                  "PDF engineering report",
                  "Raw thermal data files"
                ]
              },
              {
                title: "Our commitment",
                items: [
                  "No upselling or sales bias",
                  "IEC 62446-3 compliant methods",
                  "Insured drone operations",
                  "CAA qualified pilots",
                  "Flexible scheduling",
                  "Satisfaction guarantee"
                ]
              }
            ].map((section) => (
              <div
                key={section.title}
                className="p-8 bg-white dark:bg-slate-950 rounded-2xl border border-gray-200 dark:border-slate-800"
              >
                <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span className="text-slate-600 dark:text-slate-400">{item}</span>
                    </li>
                  ))}
                  </ul>
                  </div>
                  ))}
                  </div>
                  </div>
                  </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white dark:bg-slate-950">
        <div className="max-w-3xl mx-auto text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 dark:text-white mb-6">
              Not sure which option?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-10">
              Get in touch and we'll recommend the right survey for your installation.
            </p>
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center gap-3 px-8 py-4 border border-gray-300 dark:border-slate-700 text-slate-900 dark:text-white font-medium rounded-full hover:border-gray-400 dark:hover:border-slate-500 hover:bg-gray-100 dark:hover:bg-slate-800/50 transition-all duration-300"
            >
              Contact Us
              </Link>
              </div>
              </div>
              </section>
              </div>
              );
              }