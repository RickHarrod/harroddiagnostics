import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowRight, Shield, Award, FileCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background Video */}
        <div className="absolute inset-0">
          <iframe
            className="w-full h-full object-cover object-center pointer-events-none"
            src="https://www.youtube.com/embed/4H1UDwwyGpI?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&loop=1&playlist=4H1UDwwyGpI&playsinline=1"
            title="Background video"
            frameBorder="0"
            allow="autoplay; fullscreen"
          ></iframe>

          {/* Mid-dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b 
            from-white/55 via-white/45 to-white/30
            dark:from-slate-950/55 dark:via-slate-950/45 dark:to-slate-950/30" 
          />

          {/* Mid-dark radial overlay */}
          <div className="absolute inset-0 
            bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(255,255,255,0.28)_100%)]
            dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.28)_100%)]" 
          />

          {/* Warm accent glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            w-[800px] h-[800px] rounded-full 
            bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-red-500/10 
            blur-[120px]" 
          />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20 md:pt-0">

          <p className="text-amber-500 font-medium tracking-[0.3em] uppercase text-sm mb-8">
            Independent Solar PV Thermal Surveys
          </p>

          {/* FIX 1: Single h1 wrapping the full tagline — semantically correct,
              visually differentiated via a span rather than a separate heading tag */}
          <h1 className="backdrop-blur-sm bg-white/20 dark:bg-slate-900/20 rounded-xl px-6 py-4 block mb-8">
            <span className="block text-4xl md:text-6xl lg:text-7xl font-light text-slate-900 dark:text-white leading-tight mb-2">
              Identify faults
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-light text-slate-600 dark:text-slate-400">
              before they become failures
            </span>
          </h1>

          <p className="backdrop-blur-sm bg-white/20 dark:bg-slate-900/20 rounded-xl px-5 py-3 inline-block text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Engineering-grade drone thermal surveys for solar PV systems. 
            Compliant with IEC TS 62446-3. Objective diagnostics. Clear reports.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={createPageUrl('Services')}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber-500 text-slate-950 font-medium rounded-full hover:bg-amber-400 transition-all duration-100"
            >
              View Services
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-gray-400 dark:border-slate-700 text-slate-900 dark:text-white font-medium rounded-full hover:border-gray-500 dark:hover:border-slate-500 hover:bg-gray-100 dark:hover:bg-slate-800/50 transition-all duration-100"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* FIX 5: Animated scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex">
          <div className="w-6 h-10 border-2 border-gray-300 dark:border-slate-700 rounded-full flex justify-center pt-2">
            <div
              className="w-1 h-2 bg-gray-400 dark:bg-slate-500 rounded-full"
              style={{
                animation: 'scrollBounce 1.6s ease-in-out infinite',
              }}
            />
          </div>
          <style>{`
            @keyframes scrollBounce {
              0%, 100% { transform: translateY(0); opacity: 1; }
              50% { transform: translateY(10px); opacity: 0.3; }
            }
          `}</style>
        </div>
      </section>

      {/* FIX 6: Social proof / stat hook — inserted between hero and "Why" section */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-slate-900 border-y border-gray-100 dark:border-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">

            <div className="flex flex-col items-center gap-2">
              <span className="text-4xl md:text-5xl font-light text-amber-500">36.5%</span>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xs leading-relaxed">
                of UK solar panels inspected in a 2023 peer-reviewed study were found to have detectable faults
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <span className="text-4xl md:text-5xl font-light text-amber-500">IEC</span>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xs leading-relaxed">
                TS 62446-3 compliant methodology — the same standard used on utility-scale solar farms
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <span className="text-4xl md:text-5xl font-light text-amber-500">100%</span>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xs leading-relaxed">
                independent — no installation or sales ties, purely objective diagnostics
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Thermographic Survey Section — FIX 3: trimmed to 4 most resonant reasons */}
      <section className="py-32 px-6 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-amber-500 font-medium tracking-[0.3em] uppercase text-sm mb-6">
              The Value
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 dark:text-white mb-6">
              Why Have a Thermographic Survey?
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              A thermographic inspection gives you independent, engineering-grade insight into the 
              true condition of your solar panels — helping you detect hidden faults, protect your 
              investment, and make informed decisions with confidence.
            </p>
          </div>

          <div className="mb-12">
            <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 p-8 md:p-12">
              <p className="text-slate-700 dark:text-slate-300 mb-8 text-center font-medium">
                Homeowners and property buyers typically request a survey to:
              </p>

              {/* FIX 3: Kept the four most emotionally resonant reasons, removed technical/compliance ones */}
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 max-w-3xl mx-auto">
                {[
                  { title: 'Gain peace of mind', detail: 'Know your system is safe, healthy, and performing as it should.' },
                  { title: 'Detect hidden faults early', detail: 'Hotspots and cell defects are invisible to the eye — thermal imaging reveals them before they worsen.' },
                  { title: 'Support warranty or insurance claims', detail: 'An independent report carries weight when dealing with installers or insurers.' },
                  { title: 'Prepare when selling or buying a home', detail: 'A clean survey adds confidence for buyers; a fault report protects sellers from future disputes.' },
                ].map(({ title, detail }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                    <div>
                      <p className="text-slate-900 dark:text-white font-medium mb-1">{title}</p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to={createPageUrl('Services')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-amber-500 text-slate-950 font-medium rounded-full hover:bg-amber-400 transition-all duration-100"
            >
              Explore Our Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Value Props — FIX 4: Swapped Zap for Award on IEC compliance card */}
      <section className="py-32 px-6 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center">
                <Shield className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-4">Independent &amp; Unbiased</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                No installation or sales bias. Pure, objective diagnostics focused entirely on what matters — your system&apos;s performance.
              </p>
            </div>

            <div className="text-center">
              {/* FIX 4: Award icon better represents standards/certification than Zap */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center">
                <Award className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-4">IEC 62446-3 Compliant</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Calibrated thermal sensors and consistent workflows aligned with the international inspection standard — the same methodology used on utility-scale solar farms.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center">
                <FileCheck className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-4">Engineering-Grade Reports</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Clear, structured reports with fault classification and actionable recommendations — written so anyone can understand them.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Statement Section — FIX 1: Audience language corrected to homeowners/domestic */}
      <section className="py-32 px-6 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1920&q=80" 
            alt="Solar installation"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white dark:from-slate-950 dark:via-slate-950/95 dark:to-slate-950" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-2xl md:text-3xl lg:text-4xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-4xl mx-auto">
            Harrod Diagnostics brings{' '}
            <span className="text-slate-700 dark:text-[#D8D2C4]">utility-scale inspection standards</span>{' '}
            to domestic homeowners —{' '}
            <span className="text-amber-600 dark:text-[#B46A3C]">high-resolution thermal imaging</span>,{' '}
            <span className="text-slate-700 dark:text-[#D8D2C4]">engineering-grade methodology</span>, and{' '}
            clear, honest answers about the true condition of your solar panels.
          </p>
        </div>
      </section>

      {/* CTA Section — FIX 1: Audience language corrected, no more O&M/installer references */}
      <section className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-slate-900 dark:text-white font-light mb-6">
            Protect your investment
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Whether you&apos;re a homeowner wanting peace of mind, a buyer assessing a property, or a landlord 
            meeting compliance requirements — get accurate thermal analysis with transparent pricing 
            and fast turnaround.
          </p>

          <Link
            to={createPageUrl('Pricing')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-medium rounded-full hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-100"
          >
            View Pricing
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
