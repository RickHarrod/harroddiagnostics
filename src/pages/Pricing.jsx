import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import {
  Check,
  ArrowRight,
  Home,
  Key,
  Building2,
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
  // If price is null (for "Custom Quote"), handle safely
  if (price === null) return null;
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
      scalingNote: '+£5 ex VAT per 4 panels above 10',
      badge: 'Summer Sale — 50% Off',
      originalEx: 99,
      popular: false,
      features: [
        'Drone thermal imaging survey',
        'Daylight visual inspection',
        'Hotspot & fault detection',
        'Fault classification report',
        'Corrective action recommendations',
        'PDF summary report (Maintenance focus)',
        '7 business day turnaround',
      ],
    },
    {
      name: 'Annual Health Check',
      description: 'A reduced-rate return survey for existing customers — ensuring your system is checked yearly and protected.',
      priceEx: 39,
      unit: 'up to 10 panels',
      scalingNote: '+£5 ex VAT per 4 panels above 10',
      badge: 'Returning customers',
      originalEx: 79,
      popular: false,
      features: [
        'Everything in Home Solar Survey',
        'Year-on-year performance comparison',
        'Maintenance Log delivery',
        'Discounted rate for returning customers',
        '7 business day turnaround',
      ],
    },
    {
      name: 'Re-Inspection',
      description: 'A targeted follow-up survey after repairs have been carried out — confirming the fix worked and your system is clear.',
      priceEx: 39,
      unit: 'up to 10 panels',
      scalingNote: 'Covers original surveyed array',
      badge: 'Summer Sale',
      originalEx: 79,
      popular: false,
      features: [
        'Thermal re-check of repaired faults',
        'Confirmation the issue is resolved',
        'Verification Note for your records',
        'Peace of mind after repair work',
        '7 business day turnaround',
      ],
    },
  ],

  homebuyer: [
    {
      name: 'Pre-Purchase Assessment',
      description: 'A fast-turnaround inspection for buyers mid-sale — so you know exactly what you are buying before you commit.',
      priceEx: 79,
      unit: 'up to 10 panels',
      scalingNote: '+£5 ex VAT per 4 panels above 10',
      badge: '48hr turnaround',
      originalEx: 159,
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
      unit: 'up to 10 panels',
      scalingNote: '+£5 ex VAT per 4 panels above 10',
      badge: 'Summer Sale',
      originalEx: 159,
      popular: false,
      features: [
        'Full thermal and visual survey',
        'Professional condition report',
        'Demonstrates transparency to buyers',
        'Transferable Certificate included',
        'Shareable with estate agents',
        '5 business day turnaround',
      ],
    },
    {
      name: 'Insurance & Warranty Evidence Pack',
      description: 'A standalone evidence document produced from your existing survey findings — formatted for insurers and legal use.',
      priceEx: 35,
      unit: 'add-on to any survey',
      scalingNote: 'Requires an existing Harrod Diagnostics survey',
      badge: 'Add-on',
      originalEx: null,
      popular: false,
      features: [
        'Formatted for insurer submission',
        'Supports warranty claims',
        'Helps resolve installer disputes',
        'Legal-grade evidence document',
        '2 business day turnaround',
      ],
    },
  ],

  landlord: [
    {
      name: 'Landlord Compliance Pack',
      description: 'Thermal survey plus formal written evidence documentation — everything a landlord needs in one package.',
      priceEx: 149,
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
        'Compliance Folder for due diligence',
        'Engineering-grade PDF report',
        '5 business day turnaround',
      ],
    },
    {
      name: 'Commercial Survey',
      description: 'Full thermal and diagnostic survey for business rooftop systems — detailed findings with actionable recommendations.',
      priceEx: 149,
      unit: 'up to 50 panels',
      scalingNote: '+£5 ex VAT per 10 panels above 50',
      badge: null,
      originalEx: null,
      popular: false,
      features: [
        'Full drone thermal survey',
        'Engineering-grade thermal analysis',
        'Fault classification report',
        'Corrective action recommendations',
        'Optional inverter inspection: £35 ex VAT',
        '5 business day turnaround',
      ],
    },
    {
      name: 'Annual Inspection Contract',
      description: 'A discounted yearly inspection agreement for commercial clients — predictable costs on a scheduled basis.',
      priceEx: null,
      unit: 'From £99',
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
    desc: 'A visual check of your inverter and associated electrical components for signs of damage or unsafe installation.',
    priceEx: 35,
  },
  {
    icon: FileText,
    name: 'Insurance & Warranty Evidence Pack',
    desc: 'Formatted evidence document from your survey findings, suitable for insurer submission and warranty claims.',
    priceEx: 35,
  },
  {
    icon: Clock,
    name: 'Express 48hr Turnaround',
    desc: 'Priority processing and report delivery within 48 hours. Ideal for homeowners requiring urgent assessments.',
    priceEx: 30,
  },
  {
    icon: RefreshCw,
    name: 'Re-Inspection after Repairs',
    desc: 'A targeted follow-up thermal check after repair work has been completed, confirming the fault is resolved.',
    priceEx: 35,
  },
];

// ─── Price Card Component ──────────────────────────────────────────────────────

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
          ? 'bg-gradient-to-b from-amber-500/20 dark:from-amber-500/15 dark:to-slate-800 border-amber-500/60 shadow-xl shadow-amber-500/20'
          : 'bg-gradient-to-b from-amber-500/10 dark:from-amber-500/8 dark:to-slate-800 border-amber-500/30 dark:border-amber-500/25 shadow-lg shadow-amber-500/10 dark:shadow-black/30'
      }`}
    >
      {tier.badge && (
        <div className="absolute top-4 right-4">
          <span className="bg-amber-500 text-slate-950 text-xs font-semibold px-3 py-1 rounded-full">
            {tier.badge}
          </span>
        </div>
      )}

      <div className="mb-6 pr-12">
        <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-2">{tier.name}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{tier.description}</p>
      </div>

      <div className="mb-6">
        {originalPrice && (
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-slate-400 line-through text-lg">{originalPrice}</span>
            <span className="text-xs text-amber-500 font-medium uppercase tracking-wide">Summer Sale</span>
          </div>
        )}
        {displayPrice ? (
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-amber-500">{displayPrice}</span>
          </div>
        ) : (
          <div className="text-2xl font-medium text-slate-900 dark:text-white">
            {tier.unit === 'From £99' ? 'From £99' : 'Custom quote'}
          </div>
        )}
        <p className="text-sm text-slate-500 mt-1">
          {tier.unit !== 'From £99' && tier.unit}
          {showVAT ? ' — VAT included' : ' — ex VAT'}
        </p>
        {tier.scalingNote && (
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">{tier.scalingNote}</p>
        )}
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span className="text-sm text-slate-700 dark:text-slate-200">{f}</span>
          </li>
        ))}
      </ul>

      <Link
        to={createPageUrl('Contact')}
        className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm transition-all duration-200 ${
          tier.popular || tier.priceEx
            ? 'bg-amber-500 text-slate-950 hover:bg-amber-400'
            : 'border border-amber-500/50 text-amber-500 hover:bg-amber-500/10'
        }`}
      >
        {tier.priceEx || tier.unit === 'From £99' ? 'Book Survey' : 'Get a Quote'}
        <ArrowRight className="w-4 h-4" />
      </Link>
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
      {/* Hero Section */}
      <section className="py-24 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0">
          <img
            src="https://raw.githubusercontent.com/RickHarrod/harroddiagnostics/refs/heads/main/DJI_20260318163338_0007_V%20-%20Edited%202.jpg"
            alt="Solar Survey"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/60 dark:bg-slate-950/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-amber-500 font-medium tracking-[0.3em] uppercase text-sm mb-6">Pricing</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 dark:text-white mb-8">
            Transparent pricing<br />
            <span className="text-slate-600 dark:text-slate-400">built around your situation</span>
          </h1>
        </div>
      </section>

      {/* Tabs & Pricing Section */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {tabs.map((tab) => {
                const TabIcon = tab.icon;
                const isActive = tab.id === activeTab;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-medium transition-all ${
                      isActive ? 'bg-amber-500 text-slate-950' : 'bg-white dark:bg-slate-800 border'
                    }`}
                  >
                    <TabIcon className="w-5 h-5" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* VAT Toggle */}
            <div className="flex items-center justify-center gap-3 mb-12">
              <span className="text-sm">Ex VAT</span>
              <button
                onClick={() => setShowVAT(!showVAT)}
                className={`relative w-12 h-6 rounded-full transition-colors ${showVAT ? 'bg-amber-500' : 'bg-slate-400'}`}
              >
                <span className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${showVAT ? 'translate-x-6' : ''}`} />
              </button>
              <span className="text-sm">Inc VAT</span>
            </div>
          </div>

          <div key={animKey} className="grid md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {currentTiers.map((tier) => (
              <PriceCard key={tier.name} tier={tier} showVAT={showVAT} />
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Grid */}
      <section className="py-20 px-6 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-slate-900 dark:text-white mb-4">Optional extras</h2>
            <p className="text-slate-600 dark:text-slate-400">Enhance your survey at the time of booking.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon) => {
              const Icon = addon.icon;
              return (
                <div key={addon.name} className="p-6 rounded-2xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800">
                  <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-amber-500" />
                  </div>
                  <h3 className="text-sm font-medium mb-2">{addon.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">{addon.desc}</p>
                  <p className="text-amber-500 font-semibold text-sm">
                    {showVAT ? `£${vat(addon.priceEx)} inc VAT` : `£${addon.priceEx} ex VAT`}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Utility Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto bg-amber-500/5 p-12 rounded-3xl border border-amber-500/20">
          <h2 className="text-3xl font-light mb-6">Not sure which option?</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-10">Get in touch and we will recommend the right survey for your installation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl('Contact')} className="px-8 py-4 bg-amber-500 text-slate-950 font-medium rounded-full hover:bg-amber-400 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}