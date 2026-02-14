import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, FileCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80" 
            alt="Solar panels on modern home"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          {/* Dark overlay with warm tint */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/90 dark:from-slate-950/80 dark:via-slate-950/70 dark:to-slate-950/90" />
          {/* Vignette effect */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(255,255,255,0.7)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.7)_100%)]" />
          {/* Warm accent glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-red-500/10 blur-[120px]" />
        </div>
        
        {/* Grid overlay */}
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-amber-500 font-medium tracking-[0.3em] uppercase text-sm mb-8">
              Independent Solar PV Thermal Surveys
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-slate-900 dark:text-white leading-tight mb-8">
              Identify faults
              <span className="block text-slate-600 dark:text-slate-400">before they become failures</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Engineering grade drone thermal surveys for solar PV systems. 
              Compliant with IEC TS 62446-3. Objective diagnostics. Clear reports.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={createPageUrl('Services')}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber-500 text-slate-950 font-medium rounded-full hover:bg-amber-400 transition-all duration-300"
              >
                View Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to={createPageUrl('Contact')}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-gray-300 dark:border-slate-700 text-slate-900 dark:text-white font-medium rounded-full hover:border-gray-400 dark:hover:border-slate-500 hover:bg-gray-100 dark:hover:bg-slate-800/50 transition-all duration-300"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-300 dark:border-slate-700 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-gray-400 dark:bg-slate-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Value Props */}
      {/* Value Props */}
      <section className="py-32 px-6 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-3 gap-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center">
                <Shield className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-4">Independent & Unbiased</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                No installation or sales bias. We provide objective diagnostics focused purely on system performance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center">
                <Zap className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-4">IEC 62446-3 Compliant</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Calibrated thermal sensors and consistent workflows aligned with international inspection standards.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center">
                <FileCheck className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-4">Engineering Grade Reports</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Clear, structured reports with fault classification and actionable recommendations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statement Section */}
      {/* Statement Section */}
      <section className="py-32 px-6 bg-white dark:bg-slate-950 relative overflow-hidden">
        {/* Background image with heavy overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1920&q=80" 
            alt="Solar installation"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white dark:from-slate-950 dark:via-slate-950/95 dark:to-slate-950" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.p 
            className="text-2xl md:text-3xl lg:text-4xl text-[#D8D2C4]/70 font-light leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Harrod Diagnostics delivers independent aerial thermal surveys for solar PV systems. 
            <span className="text-[#D8D2C4]"> High-resolution thermal imaging</span>, 
            <span className="text-[#B46A3C]"> engineering grade workflows</span>, and 
            <span className="text-[#D8D2C4]"> clear, actionable insights</span> for installers, 
            asset owners, and maintenance teams.
          </motion.p>
        </div>
      </section>

      {/* CTA Section */}
      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl text-slate-900 dark:text-white font-light mb-6">
              Protect your investment
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              Whether you're an installer, asset owner, or O&M team, get accurate thermal analysis 
              with transparent pricing and fast turnaround.
            </p>
            <Link
              to={createPageUrl('Pricing')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-medium rounded-full hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-300"
            >
              View Pricing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}