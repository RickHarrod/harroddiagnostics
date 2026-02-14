import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { 
  Scan, 
  Eye, 
  Flame, 
  AlertTriangle, 
  BarChart3, 
  FileText, 
  Wrench, 
  Shield,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Scan,
    title: "Drone Thermal Survey",
    description: "High-resolution aerial thermal imaging of your entire solar installation using calibrated radiometric sensors."
  },
  {
    icon: Eye,
    title: "Visual Inspection",
    description: "Comprehensive visual assessment to identify physical damage, soiling, and installation defects."
  },
  {
    icon: Flame,
    title: "Hotspot Detection",
    description: "Precise identification of thermal anomalies indicating cell failures, bypass diode issues, or connection problems."
  },
  {
    icon: AlertTriangle,
    title: "Fault Classification",
    description: "Systematic categorisation of defects by type and severity following IEC TS 62446-3 guidelines."
  },
  {
    icon: BarChart3,
    title: "String-Level Analysis",
    description: "Performance assessment at string level to identify underperforming sections and potential causes."
  },
  {
    icon: FileText,
    title: "Engineering Report",
    description: "Comprehensive documentation with thermal imagery, fault maps, and detailed technical findings."
  },
  {
    icon: Wrench,
    title: "Corrective Recommendations",
    description: "Actionable guidance on repairs, replacements, and maintenance priorities based on findings."
  },
  {
    icon: Shield,
    title: "Warranty & Insurance Evidence",
    description: "Independent documentation suitable for warranty claims, insurance assessments, and dispute resolution."
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-24">
      {/* Hero */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1920&q=80" 
            alt="Solar panels at sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white dark:from-slate-950/90 dark:via-slate-950/85 dark:to-slate-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(255,255,255,0.6)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.6)_100%)]" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-amber-500 font-medium tracking-[0.3em] uppercase text-sm mb-6">
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 dark:text-white mb-8">
              Comprehensive thermal<br />
              <span className="text-slate-600 dark:text-slate-400">inspection services</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              From aerial survey to final report, we provide end-to-end thermal inspection 
              services designed to maximise the performance of your solar assets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 bg-white dark:bg-slate-950 rounded-2xl border border-gray-200 dark:border-slate-800 hover:border-gray-300 dark:hover:border-slate-700 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 flex items-center justify-center group-hover:from-amber-500/30 group-hover:to-orange-500/20 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-3">{service.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 px-6 bg-white dark:bg-slate-950 relative overflow-hidden">
        {/* Subtle background image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1920&q=80" 
            alt="Modern home with solar"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white dark:from-slate-950 dark:via-slate-950/95 dark:to-slate-950" />
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
              How it works
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              A streamlined process from booking to report delivery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Book", desc: "Request a survey and provide site details" },
              { step: "02", title: "Survey", desc: "We conduct the drone thermal inspection" },
              { step: "03", title: "Analysis", desc: "Data processing and fault classification" },
              { step: "04", title: "Report", desc: "Receive your comprehensive report" }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center"
              >
                <div className="text-5xl font-light text-amber-500/30 mb-4">{item.step}</div>
                <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-t from-gray-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 dark:text-white mb-6">
              Ready to get started?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-10">
              View our transparent pricing or get in touch for a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={createPageUrl('Pricing')}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber-500 text-slate-950 font-medium rounded-full hover:bg-amber-400 transition-all duration-300"
              >
                View Pricing
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to={createPageUrl('Contact')}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-gray-300 dark:border-slate-700 text-slate-900 dark:text-white font-medium rounded-full hover:border-gray-400 dark:hover:border-slate-500 hover:bg-gray-100 dark:hover:bg-slate-800/50 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}