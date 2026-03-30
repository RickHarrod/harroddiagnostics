import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import {
  Check,
  ArrowRight,
  Home,
  Key,
  Building2,
  Plus,
  Zap,
  FileText,
  RefreshCw,
  Clock,
} from 'lucide-react';

// ─── Helpers ──────────────────────────────────────────────────────────────────

function vat(price) {
  return (price * 1.2).toFixed(2);
}

function fmt(price) {
  return Number.isInteger(price) ? price : price.toFixed(2);
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const tabs = [
  { id: 'homeowner', label: 'Homeowner', icon: Home },
  { id: 'homebuyer', label: 'Homebuyer & Home Seller', icon: Key },
  { id: 'landlord', label: 'Landlord & Business Owner', icon: Building2 },
];

const tiers = {
  homeowner: [
    {
      name: 'Home Solar Survey',
      description: 'Our core inspection for homeowners who want to know their system is safe and performing as it should.',
      priceEx: 49,
      unit: 'up to 10 panels',
      scalingNote: '+£5 ex VAT per 4 panels above 10 (max 50 panels)',
      badge: 'Summer Sale — 50% Off',
      originalEx: 99,
      popular: false,
      features: [
        'Drone thermal imaging survey',
        'Daylight visual inspection',
        'Hotspot & fault detection',
        'Fault classification report',
        'Corrective action recommendations',
        'PDF summary report',
        '5 business day turnaround',
      ],
    },
    {
      name: 'Annual Health Check',
      description: 'A reduced-rate return survey for existing customers — because a system checked once is good, a system checked yearly is protected.',
      priceEx: 39,
      unit: 'up to 10 panels',
      scalingNote: '+£5 ex VAT per 4 panels above 10 (max 50 panels)',
      badge: 'Returning customers',
      originalEx: null,
      popular: false,
      features: [
        'Everything in Home Solar Survey',
        'Year-on-year performance comparison',
        'Priority scheduling',
        'Discounted rate for returning customers',
        '5 business day turnaround',
      ],
    },
    {
      name: 'Re-Inspection',
      description: 'A targeted follow-up survey after repairs have been carried out — confirming the fix worked and your system is clear.',
      priceEx: 29,
      unit: 'fixed fee',
      scalingNote: 'Covers the originally surveyed array',
      badge: null,
      originalEx: null,
      popular: false,
      features: [
        'Thermal re-check of repaired faults',
        'Confirmation the issue is resolved',
        'Updated report section',
        'Peace of mind after repair work',
        '3 business day turnaround',
      ],
    },
  ],

  homebuyer: [
    {
      name: 'Pre-Purchase Assessment',
      description: 'A fast-turnaround inspection for buyers mid-sale — so you know exactly what you are buying before you commit.',
      priceEx: 79,
      unit: 'up to 20 panels',
      scalingNote: '+£5 ex VAT per 4 panels above 20',
      badge: '48hr turnaround',
      originalEx: null,
      popular: true,
      features: [
        'Priority 48-hour turnaround',
        'Full thermal and visual survey',
        'Fault identification and severity rating',
        'Negotiation-ready written summary',
        'Identifies issues missed by standard surveys',
        'Suitable for solicitors and estate agents',
      ],
    },
    {
      name: "Seller's Condition Report",
      description: 'Independent proof your system is healthy — build buyer confidence and protect your asking price.',
      priceEx: 79,
      unit: 'up to 20 panels',
      scalingNote: '+£5 ex VAT per 4 panels above 20',
      badge: null,
      originalEx: null,
      popular: false,
      features: [
        'Full thermal and visual survey',
        'Professional condition report',
        'Demonstrates transparency to buyers',
        'Reduces renegotiation risk',
        'Shareable with estate agents',
        '5 business day turnaround',
      ],
    },
    {
      name: 'Insurance & Warranty Evidence Pack',
      description: 'A standalone evidence document produced from your existing survey findings — formatted for insurers, warranty teams, and legal use.',
      priceEx: 25,
      unit: 'add-on to any survey',
      scalingNote: 'Requires an existing Harrod Diagnostics survey',
      badge: 'Add-on',
      originalEx: null,
      popular: false,
      features: [
        'Formatted for insurer submission',
        'Supports warranty claims',
        'Helps resolve installer disputes',
        'Independently produced evidence',
        'Delivered within 2 business days',
      ],
    },
  ],

  landlord: [
    {
      name: 'Landlord Compliance Pack',
      description: 'Thermal survey plus formal written evidence documentation — everything a landlord or letting agent needs in one package.',
      priceEx: 129,
      unit: 'up to 50 panels',
      scalingNote: '+£5 ex VAT per 10 panels above 50',
      badge: 'Most complete',
      originalEx: null,
      popular: true,
      features: [
        'Full drone thermal imaging survey',
        'Daylight visual inspection',
        'Fault classification and severity rating',
        'Insurance & warranty evidence document',
        'Demonstrates due diligence for tenants',
        'Engineering-grade PDF report',
        '3 business day turnaround',
      ],
    },
    {
      name: 'Commercial Survey',
      description: 'Full thermal and diagnostic survey for business rooftop systems — detailed findings with actionable recommendations.',
      priceEx: 99,
      unit: 'up to 50 panels',
      scalingNote: '+£5 ex VAT per 10 panels above 50',
      badge: 'Summer Sale — 50% Off',
      originalEx: 199,
      popular: false,
      features: [
        'Full drone thermal survey',
        'String-level fault analysis',
        'Fault classification report',
        'Engineering-grade findings document',
        'Corrective action recommendations',
        'Optional inverter inspection: £30 ex VAT',
        '3 business day turnaround',
      ],
    },
    {
      name: 'Annual Inspection Contract',
      description: 'A discounted yearly inspection agreement for commercial clients — predictable costs, insurer-friendly documentation on a schedule.',
      priceEx: null,
      unit: 'custom quote',
      scalingNote: 'Multi-site agreements available',
      badge: 'Contact us',
      originalEx: null,
      popular: false,
      features: [
        'Discounted annual rate vs one-off pricing',
        'Scheduled inspections — no admin burden',
        'Ongoing compliance documentation',
        'Suitable for landlords with multiple sites',
        'Priority scheduling and response',
        'Tailored to your portfolio size',
      ],
    },
  ],
};

const addOns = [
  {
    icon: Zap,
    name: 'Inverter Visual Safety Inspection',
    desc: 'A visual check of your inverter and associated electrical components for signs of damage, overheating, or unsafe installation.',
    priceEx: 30,
  },
  {
    icon: FileText,
    name: 'Insurance & Warranty Evidence Pack',
    desc: 'Formatted evidence document from your survey findings, suitable for insurer submission, warranty claims, and legal use.',
    priceEx: 25,
  },
  {
    icon: Clock,
    name: 'Express 48hr Turnaround',
    desc: 'Priority processing and report delivery within 48 hours of your survey. Ideal for property transactions or urgent assessments.',
    priceEx: 20,
  },
  {
    icon: RefreshCw,
    name: 'Re-Inspection after Repairs',
    desc: 'A targeted follow-up thermal check after repair work has been completed, confirming the fault is resolved.',
    priceEx: 29,
  },
];

// ─── Price Card ────────────────────────────────────────────────────────────────

function PriceCard({ tier, showVAT }) {
  const displayPrice = tier.priceEx
    ? showVAT
      ? `£${vat(tier.priceEx)}`
      : `£${fmt(tier.priceEx)}`
    : null;

  const originalPrice = tier.originalEx
    ? showVAT
      ? `£${vat(tier.originalEx)}`
      : `£${tier.originalEx}`
    : null;

  return (
    <div
      className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-200 ${
        tier.popular
          ? 'bg-gradient-to-b from-amber-500/10 to-gray-50 dark:to-slate-900 border-amber-500/40 shadow-lg shadow-amber-500/10'
          : 'bg-gray-50 dark:bg-slate-900 border-gray-200 dark:border-slate-800'
      }`}
    >
      {/* Badge */}
      {tier.badge && (
        <div className="absolute top-4 right-4">
          <span className="bg-amber-500 text-slate-950 text-xs font-semibold px-3 py-1 rounded-full">
            {tier.badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-6 pr-24">
        <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-2">{tier.name}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{tier.description}</p>
      </div>

      {/* Price */}
      <div className="mb-6">
        {originalPrice && (
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-slate-400 line-through text-lg">{originalPrice}</span>
            <span className="text-xs text-amber-500 font-medium uppercase tracking-wide">Summer Sale</span>
          </div>
        )}
        {displayPrice ? (
          <div className="flex items-baseline gap-1">
            <span className={`text-4xl font-bold ${tier.popular ? 'text-amber-500' : 'text-slate-900 dark:text-white'}`}>
              {displayPrice}
            </span>
          </div>
        ) : (
          <div className="text-2xl font-medium text-slate-900 dark:text-white">Custom quote</div>
        )}
        <p className="text-sm text-slate-500 mt-1">
          {tier.unit}
          {showVAT ? ' — VAT included' : ' — ex VAT'}
        </p>
        {tier.scalingNote && (
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">{tier.scalingNote}</p>
        )}
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8 flex-1">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span className="text-sm text-slate-700 dark:text-slate-300">{f}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      {tier.priceEx ? (
        <Link
          to={createPageUrl('Contact')}
          className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm transition-all duration-200 ${
            tier.popular
              ? 'bg-amber-500 text-slate-950 hover:bg-amber-400'
              : 'bg-slate-800 dark:bg-slate-800 text-white hover:bg-slate-700'
          }`}
        >
          Book Survey
          <ArrowRight className="w-4 h-4" />
        </Link>
      ) : (
        <Link
          to={createPageUrl('Contact')}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm border border-amber-500/50 text-amber-500 hover:bg-amber-500/10 transition-all duration-200"
        >
          Get a Quote
          <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('homeowner');
  const [showVAT, setShowVAT] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  function handleTabChange(id) {
    if (id === activeTab) return;
    setActiveTab(id);
    setAnimKey((k) => k + 1);
  }

  const currentTiers = tiers[activeTab];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-24">

      {/* ── Hero ── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://raw.githubusercontent.com/RickHarrod/harroddiagnostics/refs/heads/main/DJI_20260318163338_0007_V%20-%20Edited%202.jpg"
            alt="Solar panels in warm light"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/65 via-white/55 to-white/40 dark:from-slate-950/65 dark:via-slate-950/55 dark:to-slate-950/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(255,255,255,0.35)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.35)_100%)]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-amber-500 font-medium tracking-[0.3em] uppercase text-sm mb-6">
            Pricing
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 dark:text-white mb-8">
            Transparent pricing<br />
            <span className="text-slate-600 dark:text-slate-400">built around your situation</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Every survey includes thermal imaging, a written report, and independent findings.
            Select your situation below to see the right options for you.
          </p>
        </div>
      </section>

      {/* ── Tabs + Pricing Cards ── */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">

          {/* Audience tabs */}
          <div className="text-center mb-10">
            <p className="text-amber-500 font-medium tracking-[0.3em] uppercase text-xs mb-6">
              Select your situation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {tabs.map((tab) => {
                const TabIcon = tab.icon;
                const isActive = tab.id === activeTab;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 scale-105'
                        : 'bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-gray-200 dark:border-slate-800 hover:border-amber-500/50 dark:hover:border-amber-500/50 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <TabIcon className="w-5 h-5" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* VAT toggle */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <span className={`text-sm ${!showVAT ? 'text-slate-900 dark:text-white font-medium' : 'text-slate-500'}`}>
              Ex VAT
            </span>
            <button
              onClick={() => setShowVAT(!showVAT)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
                showVAT ? 'bg-amber-500' : 'bg-slate-300 dark:bg-slate-700'
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
                  showVAT ? 'translate-x-6' : ''
                }`}
              />
            </button>
            <span className={`text-sm ${showVAT ? 'text-slate-900 dark:text-white font-medium' : 'text-slate-500'}`}>
              Inc VAT
            </span>
          </div>

          {/* Cards */}
          <div
            key={animKey}
            className="grid md:grid-cols-3 gap-6"
            style={{ animation: 'fadeSlideIn 0.4s cubic-bezier(0.4,0,0.2,1) both' }}
          >
            {currentTiers.map((tier) => (
              <PriceCard key={tier.name} tier={tier} showVAT={showVAT} />
            ))}
          </div>

        </div>
      </section>

      {/* ── Add-ons ── */}
      <section className="py-20 px-6 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-amber-500 font-medium tracking-[0.3em] uppercase text-xs mb-4">
              Optional extras
            </p>
            <h2 className="text-3xl font-light text-slate-900 dark:text-white mb-4">
              Add to any survey
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              Enhance your survey with any of the following at the time of booking.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon) => {
              const AddonIcon = addon.icon;
              const price = showVAT ? `£${vat(addon.priceEx)} inc VAT` : `£${addon.priceEx} ex VAT`;
              return (
                <div
                  key={addon.name}
                  className="group p-6 rounded-2xl border border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-900 hover:border-amber-500/30 transition-all duration-200"
                >
                  <div className="w-10 h-10 mb-4 rounded-lg bg-amber-500/15 flex items-center justify-center group-hover:bg-amber-500/25 transition-all duration-200">
                    <AddonIcon className="w-5 h-5 text-amber-500" />
                  </div>
                  <h3 className="text-sm font-medium text-slate-900 dark:text-white mb-2">{addon.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">{addon.desc}</p>
                  <p className="text-amber-500 font-semibold text-sm">{price}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Utility Scale ── */}
      <section className="py-12 px-6 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-3xl mx-auto">
          <div className="p-8 bg-white dark:bg-slate-950 rounded-2xl border border-gray-200 dark:border-slate-800 text-center">
            <p className="text-amber-500 font-medium tracking-[0.3em] uppercase text-xs mb-4">
              Utility scale
            </p>
            <h3 className="text-2xl font-light text-slate-900 dark:text-white mb-3">
              MW-scale solar farms & multi-site portfolios
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-xl mx-auto">
              We offer comprehensive thermal inspection for large commercial installations and utility-scale
              arrays. Multi-site agreements, ongoing inspection contracts, and bespoke reporting available.
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
      </section>

      {/* ── What's included ── */}
      <section className="py-24 px-6 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-slate-900 dark:text-white mb-4">
              What every survey includes
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Regardless of which package you choose, these are our baseline standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Every survey includes',
                items: [
                  'Calibrated radiometric thermal imaging',
                  'High-resolution visual capture',
                  'Full fault identification and classification',
                  'Annotated thermal maps',
                  'PDF engineering report',
                  'Raw thermal data files',
                ],
              },
              {
                title: 'Our commitment',
                items: [
                  'No upselling or sales bias',
                  'IEC TS 62446-3 compliant methods',
                  'Fully insured drone operations',
                  'CAA qualified pilots',
                  'Flexible scheduling',
                  'Satisfaction guarantee',
                ],
              },
            ].map((section) => (
              <div
                key={section.title}
                className="p-8 bg-gray-50 dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800"
              >
                <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span className="text-slate-600 dark:text-slate-400 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 bg-gradient-to-t from-gray-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 dark:text-white mb-6">
            Not sure which option?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-10">
            Get in touch and we will recommend the right survey for your installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber-500 text-slate-950 font-medium rounded-full hover:bg-amber-400 transition-all duration-100"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://rickharrod.github.io/harroddiagnostics/Sample%20report%20Feb%202026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-gray-300 dark:border-slate-700 text-slate-900 dark:text-white font-medium rounded-full hover:border-gray-400 dark:hover:border-slate-500 hover:bg-gray-100 dark:hover:bg-slate-800/50 transition-all duration-100"
            >
              View Sample Report
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </div>
  );
}
