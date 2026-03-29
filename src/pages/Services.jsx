import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { 
  Scan, 
  Eye, 
  AlertTriangle, 
  BarChart3, 
  FileText, 
  Wrench, 
  Shield,
  Home,
  Briefcase,
  ArrowRight,
  ChevronDown
} from 'lucide-react';

const SERVICE_DEFINITIONS = {
  homeowner: [
    {
      icon: Scan,
      title: "Full Thermal Imaging Survey",
      intro: "The core diagnostic service that reveals hidden faults your monitoring app can’t see.",
      description: "High‑resolution infrared imaging of your entire solar array to detect hotspots, string issues, PID, bypass diode failures, and other thermal anomalies that silently reduce performance or pose safety risks.",
      bullets: [
        "Detects hotspots invisible to monitoring apps",
        "Identifies early‑stage faults before they become expensive",
        "Highlights safety‑related thermal anomalies",
        "Provides a baseline for long‑term system health",
        "Helps validate installer workmanship"
      ]
    },
    {
      icon: Eye,
      title: "Daylight Visual Inspection",
      intro: "A clear, ground‑truth assessment of your system’s physical condition.",
      description: "High‑quality daylight imaging to identify cracked modules, shading problems, contamination, loose fixings, and installation defects that affect performance or safety.",
      bullets: [
        "Identifies cracked or delaminated modules",
        "Checks for shading, debris, or contamination",
        "Confirms mounting hardware is secure",
        "Spots cable abrasion or UV damage",
        "Verifies general installation quality"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Fault Identification & Classification",
      intro: "Independent diagnosis of any issues found, explained in plain English.",
      description: "Every defect is categorised by type and severity using IEC TS 62446‑3 guidance, giving you a clear understanding of what’s wrong, how serious it is, and what it means for your system.",
      bullets: [
        "Categorises faults using IEC TS 62446‑3",
        "Distinguishes minor issues from critical ones",
        "Helps you prioritise repairs",
        "Provides clarity on root causes",
        "Supports warranty or installer discussions"
      ]
    },
    {
      icon: BarChart3,
      title: "Thermal Performance Assessment",
      intro: "Reveals underperforming sections of your system and the likely causes.",
      description: "Thermal patterns highlight areas running hotter, cooler, or unevenly — often indicating hidden faults, energy loss, or early‑stage degradation long before they appear in monitoring data.",
      bullets: [
        "Highlights underperforming sections of the array",
        "Reveals mismatch, degradation, or bypass diode issues",
        "Shows thermal imbalance across modules",
        "Helps explain unexpected drops in generation",
        "Provides actionable insights to improve yield"
      ]
    },
    {
      icon: FileText,
      title: "Engineering‑Grade Diagnostic Report",
      intro: "A clear, professional record of your system’s condition.",
      description: "You receive a structured report with thermal imagery, defect maps, severity ratings, and technical findings — written in a way homeowners can understand and installers can’t dispute.",
      bullets: [
        "Includes thermal imagery and defect maps",
        "Provides severity ratings and technical notes",
        "Written in clear, non‑technical language",
        "Suitable for installers, insurers, and warranty teams",
        "Acts as a long‑term record of system condition"
      ]
    },
    {
      icon: Wrench,
      title: "Corrective Action Recommendations",
      intro: "Independent guidance on what to fix, who can fix it, and what to prioritise.",
      description: "You get practical, unbiased advice on repairs, replacements, and maintenance, helping you avoid unnecessary work and focus on what genuinely improves performance or safety.",
      bullets: [
        "Prioritised list of what to fix first",
        "Independent guidance with no sales agenda",
        "Helps avoid unnecessary or upsold work",
        "Suggests who is best placed to carry out repairs",
        "Includes expected impact on performance or safety"
      ]
    },
    {
      icon: Shield,
      title: "Warranty & Insurance Evidence Pack",
      intro: "Documentation that strengthens your position in claims, disputes, or assessments.",
      description: "Independent thermal evidence and written findings suitable for warranty claims, installer accountability, insurance assessments, and long‑term system records.",
      bullets: [
        "Provides independent proof of system condition",
        "Supports claims for defective modules or workmanship",
        "Helps resolve disputes with installers",
        "Meets insurer expectations for documentation",
        "Reduces the risk of claim rejection"
      ]
    }
  ],
  homebuyer: [
    {
      icon: Home,
      title: "Pre‑Purchase Solar System Assessment",
      intro: "Know exactly what you’re buying before you commit.",
      description: "Most surveys don’t check solar. This assessment reveals hidden defects, safety issues, and performance problems so you can negotiate confidently and avoid costly surprises.",
      bullets: [
        "Reveals hidden faults before you commit",
        "Helps negotiate price based on system condition",
        "Identifies safety issues missed by surveyors",
        "Confirms whether the system is performing as expected",
        "Provides clarity on future maintenance needs"
      ]
    },
    {
      icon: Home,
      title: "Post‑Purchase PV Health Check",
      intro: "A full safety and performance check for new homeowners.",
      description: "If you’ve just moved in, this gives you a clear baseline of system condition, highlights any hidden issues, and ensures your solar is safe and working as expected.",
      bullets: [
        "Ensures the system you inherited is safe",
        "Highlights any issues the seller didn’t disclose",
        "Establishes a baseline for future performance",
        "Identifies faults that may affect warranties",
        "Gives peace of mind in your new home"
      ]
    },
    {
      icon: FileText,
      title: "Seller’s PV Condition Report",
      intro: "Build buyer confidence with independent proof your system is healthy.",
      description: "A professional diagnostic report that helps your property listing stand out and reassures buyers that the solar system is safe, functional, and well‑maintained.",
      bullets: [
        "Builds buyer confidence in your listing",
        "Demonstrates transparency and good maintenance",
        "Helps justify asking price",
        "Reduces buyer objections or renegotiations",
        "Provides a professional document to share with agents"
      ]
    },
    {
      icon: Scan,
      title: "Full Thermal Imaging Survey",
      intro: "A complete thermal assessment of the property’s solar system.",
      description: "Reveals hotspots, string issues, and early‑stage degradation that can affect performance, safety, and long‑term value.",
      bullets: [
        "Shows whether the system is working as expected",
        "Identifies hidden faults before purchase",
        "Highlights potential future repair costs",
        "Supports informed decision‑making",
        "Provides evidence for negotiation"
      ]
    },
    {
      icon: Eye,
      title: "Daylight Visual Inspection",
      intro: "A clear visual check of the system’s physical condition.",
      description: "Identifies visible damage, poor installation practices, shading issues, and contamination that may affect performance or safety.",
      bullets: [
        "Checks for obvious physical defects",
        "Identifies shading or placement issues",
        "Highlights signs of poor installation",
        "Supports survey findings with visual evidence",
        "Helps you understand what you’re taking on"
      ]
    }
  ],
  landlord: [
    {
      icon: Briefcase,
      title: "Liability & Compliance Assurance Survey",
      intro: "A proactive safety and compliance check designed for landlords and business owners.",
      description: "Thermal imaging identifies hidden faults that could pose electrical or fire risks, helping you demonstrate due diligence, meet insurance expectations, and protect tenants or staff. While the risk of serious issues is low, insurers increasingly expect evidence that solar systems are safe, functional, and regularly assessed.",
      bullets: [
        "Demonstrates due diligence for tenant or staff safety",
        "Identifies thermal faults that could pose fire risk",
        "Helps meet insurer expectations for evidence",
        "Supports compliance with electrical safety obligations",
        "Reduces exposure to liability claims"
      ]
    },
    {
      icon: Scan,
      title: "Full Thermal Imaging Survey",
      intro: "A complete thermal assessment of your solar asset.",
      description: "Reveals hotspots, string issues, and early‑stage degradation that can reduce output or create safety concerns across your portfolio.",
      bullets: [
        "Detects faults that reduce asset performance",
        "Helps maintain predictable energy output",
        "Supports long‑term asset planning",
        "Identifies issues before they affect tenants or operations",
        "Provides evidence for maintenance decisions"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Fault Identification & Classification",
      intro: "Clear, independent diagnosis of any issues found.",
      description: "Every defect is categorised by type and severity, helping you prioritise maintenance and manage operational risk.",
      bullets: [
        "Categorises issues by severity and urgency",
        "Helps plan maintenance budgets",
        "Supports compliance documentation",
        "Reduces operational risk",
        "Provides clarity for contractors"
      ]
    },
    {
      icon: BarChart3,
      title: "Thermal Performance Assessment",
      intro: "Ensures your system is performing as expected.",
      description: "Highlights underperforming sections that may affect yield, ROI, or long‑term asset value.",
      bullets: [
        "Highlights underperforming sections affecting ROI",
        "Identifies degradation trends over time",
        "Helps optimise system yield",
        "Supports financial planning for replacements",
        "Provides evidence for asset managers"
      ]
    },
    {
      icon: FileText,
      title: "Engineering‑Grade Diagnostic Report",
      intro: "Formal documentation suitable for compliance and insurance.",
      description: "Includes thermal imagery, defect maps, severity ratings, and clear technical findings to support audits, risk assessments, and insurer requirements.",
      bullets: [
        "Suitable for insurers, auditors, and compliance teams",
        "Includes thermal imagery, defect maps, and severity ratings",
        "Provides a defensible record of system condition",
        "Supports risk assessments and internal reporting",
        "Helps demonstrate responsible asset management"
      ]
    },
    {
      icon: Wrench,
      title: "Corrective Action Recommendations",
      intro: "Independent guidance on what to fix and when.",
      description: "Helps you avoid unnecessary contractor upselling while ensuring safety‑critical issues are addressed promptly.",
      bullets: [
        "Prioritised list of essential vs optional work",
        "Helps avoid unnecessary contractor upselling",
        "Supports budgeting and planning",
        "Ensures safety‑critical issues are addressed first",
        "Provides independent, unbiased guidance"
      ]
    },
    {
      icon: Shield,
      title: "Warranty & Insurance Evidence Pack",
      intro: "Documentation that strengthens your position in claims or audits.",
      description: "Provides independent evidence of system condition, supporting your responsibilities as a landlord or business owner.",
      bullets: [
        "Strengthens your position in claims",
        "Provides independent documentation for audits",
        "Helps resolve disputes with installers or contractors",
        "Supports compliance with insurer requirements",
        "Reduces risk of claim rejection"
      ]
    }
  ]
};

const TABS = [
  { id: 'homeowner', label: 'Homeowner', icon: Home },
  { id: 'homebuyer', label: 'Homebuyer / Seller', icon: Home },
  { id: 'landlord', label: 'Landlord / Business Owner', icon: Briefcase }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState('homeowner');
  const [expanded, setExpanded] = useState<string | null>(null);

  const services = SERVICE_DEFINITIONS[activeTab];

  const handleToggle = (title: string) => {
    setExpanded(prev => (prev === title ? null : title));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-24">

      {/* Hero */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://raw.githubusercontent.com/RickHarrod/harroddiagnostics/refs/heads/main/Drone%20flight%20wide1.jpg" 
            alt="Solar panels at sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b 
            from-white/55 via-white/45 to-white/30
            dark:from-slate-950/55 dark:via-slate-950/45 dark:to-slate-950/30" 
          />
          <div className="absolute inset-0 
            bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(255,255,255,0.28)_100%)]
            dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.28)_100%)]" 
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-amber-500 font-medium tracking-[0.3em] uppercase text-sm mb-6">
            Our Services
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 dark:text-white mb-8">
            Comprehensive thermal<br />
            <span className="text-slate-600 dark:text-slate-400">inspection services</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From aerial survey to final report, we provide end‑to‑end thermal inspection 
            services tailored to homeowners, buyers, sellers, landlords, and business owners.
          </p>
        </div>
      </section>

      {/* Tabs + Services */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">

          {/* Tabs */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {TABS.map(tab => {
              const Icon = tab.icon;
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setExpanded(null);
                  }}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm md:text-base transition-all duration-200
                    ${isActive 
                      ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-sm' 
                      : 'bg-white/80 dark:bg-slate-950/60 text-slate-700 dark:text-slate-200 border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-500'
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 transition-all duration-300">
            {services.map((service) => {
              const Icon = service.icon;
              const isOpen = expanded === service.title;
              return (
                <div
                  key={service.title}
                  className="group p-8 bg-white dark:bg-slate-950 rounded-2xl border border-gray-200 dark:border-slate-800 hover:border-gray-300 dark:hover:border-slate-700 transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => handleToggle(service.title)}
                    className="w-full text-left"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 flex items-center justify-center group-hover:from-amber-500/30 group-hover:to-orange-500/20 transition-all duration-200">
                        <Icon className="w-7 h-7 text-amber-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-1">
                              {service.title}
                            </h3>
                            <p className="text-sm font-medium text-amber-600 dark:text-amber-400 mb-2">
                              {service.intro}
                            </p>
                          </div>
                          <ChevronDown
                            className={`w-5 h-5 text-slate-400 mt-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                          />
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </button>

                  {/* Expandable bullets */}
                  <div
                    className={`overflow-hidden transition-all duration-200 ${isOpen ? 'mt-5 max-h-64' : 'max-h-0'}`}
                  >
                    <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-400 pl-2 border-l border-amber-500/40">
                      {service.bullets.map((item) => (
                        <li key={item} className="pl-3 relative">
                          <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-amber-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 px-6 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1920&q=80" 
            alt="Modern home with solar"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b 
            from-white/60 via-white/50 to-white/40
            dark:from-slate-950/60 dark:via-slate-950/50 dark:to-slate-950/40" 
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 dark:text-white mb-6">
              How it works
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              A streamlined process from booking to report delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Book", desc: "Request a survey and provide site details" },
              { step: "02", title: "Survey", desc: "We conduct the thermal inspection on site" },
              { step: "03", title: "Analysis", desc: "Data processing, fault classification, and performance assessment" },
              { step: "04", title: "Report", desc: "Receive your clear, independent diagnostic report" }
            ].map((item) => (
              <div
                key={item.step}
                className="group text-center p-8 rounded-2xl 
                           border border-gray-200 dark:border-slate-800 
                           bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm
                           hover:bg-white/80 dark:hover:bg-slate-900/80 
                           hover:border-gray-300 dark:hover:border-slate-700
                           transition-all duration-200"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full 
                                bg-amber-500/15 dark:bg-amber-500/10 
                                flex items-center justify-center
                                text-2xl font-light text-amber-600 dark:text-amber-400
                                group-hover:bg-amber-500/25 dark:group-hover:bg-amber-500/20
                                transition-all duration-200">
                  {item.step}
                </div>

                <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-t from-gray-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 dark:text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-10">
            View our transparent pricing or get in touch for a tailored diagnostic survey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={createPageUrl('Pricing')}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber-500 text-slate-950 font-medium rounded-full hover:bg-amber-400 transition-all duration-100"
            >
              View Pricing
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-gray-300 dark:border-slate-700 text-slate-900 dark:text-white font-medium rounded-full hover:border-gray-400 dark:hover:border-slate-500 hover:bg-gray-100 dark:hover:bg-slate-800/50 transition-all duration-100"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}