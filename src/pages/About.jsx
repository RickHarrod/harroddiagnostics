import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { Shield, Target, Award, ArrowRight } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: "Independence",
    description: "We don't install, sell, or maintain solar systems. Our only interest is providing accurate diagnostics."
  },
  {
    icon: Target,
    title: "Precision",
    description: "Calibrated thermal sensors, consistent workflows, and methodical analysis following international standards."
  },
  {
    icon: Award,
    title: "Clarity",
    description: "Reports that communicate findings clearly, with actionable recommendations you can actually use."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-24">
      {/* Hero */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1545208942-e1c9c916524b?w=1920&q=80" 
            alt="Solar panels on roof"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white dark:from-slate-950/90 dark:via-slate-950/85 dark:to-slate-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(255,255,255,0.6)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.5)_100%)]" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-amber-500 font-medium tracking-[0.3em] uppercase text-sm mb-6">
              About Harrod Diagnostics
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 dark:text-white mb-8 leading-tight">
              Independent diagnostics.<br />
              <span className="text-slate-600 dark:text-slate-400">Engineering‑grade insight.<br />
              No upselling. No bias.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              Harrod Diagnostics was founded on a simple belief: solar owners deserve clear, independent answers about the health of their system, without sales pressure, guesswork, or long waits for "monitoring data" to catch up.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              The business began with a personal frustration. After installing a large solar array on my own home, I noticed behaviour that didn't look right, panels shedding snow unevenly and patterns that hinted at possible hotspots or underperforming modules. Remote monitoring showed "no issues," and I was advised to wait a year to see if production dipped below forecast. For most homeowners, that's the end of the road: uncertainty, doubt, and no practical way to challenge a warranty claim.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              With a background in operations, reporting, and data driven decision making, I wanted objective evidence. Thermal imaging provided it. What started as an investigation into my own system quickly expanded to family and friends, where I found more faults than expected. It became clear that domestic customers were underserved, thermographic surveys were priced for utility scale plants, and the few domestic services available were often prohibitively expensive.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              Harrod Diagnostics was created to close that gap.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              Today, we provide accessible, engineering grade thermographic inspections for domestic, commercial, and utility scale solar assets. We use drone mounted radiometric thermal cameras and workflows aligned with IEC TS 62446‑3, the international standard for PV thermography. That means consistent, defensible results suitable for warranty claims, insurer evidence, and technical assessments.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              Our reports are built for clarity and action:
            </p>
            <ul className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 list-disc ml-6">
              <li>Clear fault classification</li>
              <li>Annotated thermal imagery</li>
              <li>Straightforward explanations - no jargon without purpose</li>
              <li>Specific, practical recommendations</li>
            </ul>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Whether you're a homeowner seeking peace of mind, a business managing a portfolio, or an asset manager or O&M team responsible for system performance, our goal is the same: objective data you can trust, delivered with transparency and technical rigour.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-6 bg-white dark:bg-slate-950 relative overflow-hidden">
        {/* Subtle background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1611365892117-00ac6fb2fad2?w=1920&q=80" 
            alt="Solar installation detail"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-white/90 dark:bg-slate-950/90" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 dark:text-white mb-6">
              Our principles
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-4">{value.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-light text-slate-900 dark:text-white mb-12 text-center">
              Standards & Compliance
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white dark:bg-slate-950 rounded-2xl border border-gray-200 dark:border-slate-800">
                <h3 className="text-lg font-medium text-amber-500 mb-4">IEC TS 62446-3</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Our inspection methodology follows the international technical specification 
                  for thermographic inspection of PV plants, ensuring reliable and reproducible results.
                </p>
              </div>
              <div className="p-8 bg-white dark:bg-slate-950 rounded-2xl border border-gray-200 dark:border-slate-800">
                <h3 className="text-lg font-medium text-amber-500 mb-4">CAA Certified Drone Operations</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  All flights are conducted by CAA‑certified remote pilots operating within the UK's commercial drone regulations, with full insurance and documented safety procedures for every mission.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white dark:bg-slate-950">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 dark:text-white mb-6">
              Ready for a thermal survey?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-10">
              See exactly what's happening in your solar system with independent, 
              engineering-grade thermal analysis.
            </p>
            <Link
              to={createPageUrl('Contact')}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-amber-500 text-slate-950 font-medium rounded-full hover:bg-amber-400 transition-all duration-300"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}