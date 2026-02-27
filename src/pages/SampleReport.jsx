import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { 
  FileText, 
  AlertTriangle, 
  CheckCircle, 
  ThermometerSun,
  ArrowRight,
  Download,
  Eye
} from 'lucide-react';

const reportSections = [
  {
    title: "Executive Summary",
    description: "High-level overview of inspection findings, system health status, and priority recommendations."
  },
  {
    title: "System Information",
    description: "Documented details of the installation including capacity, configuration, and inspection conditions."
  },
  {
    title: "Thermal Imagery",
    description: "Annotated thermal images showing all identified anomalies with temperature differentials."
  },
  {
    title: "Fault Classification",
    description: "Each anomaly classified by type and severity following IEC TS 62446-3 guidelines."
  },
  {
    title: "Recommendations",
    description: "Specific corrective actions prioritised by urgency and potential impact on system performance."
  },
  {
    title: "Technical Appendix",
    description: "Detailed methodology, equipment specifications, and raw thermal data files."
  }
];

const sampleFindings = [
  {
    type: "Hotspot - Cell",
    severity: "High",
    description: "Single cell hotspot indicating potential cell failure",
    temp: "ΔT 28°C",
    icon: AlertTriangle,
    color: "text-red-500",
    bg: "bg-red-500/10"
  },
  {
    type: "String Underperformance",
    severity: "Medium",
    description: "Elevated temperatures across entire string suggesting connection issue",
    temp: "ΔT 12°C",
    icon: ThermometerSun,
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    type: "Module Operating Normally",
    severity: "None",
    description: "Uniform temperature distribution within acceptable parameters",
    temp: "ΔT <2°C",
    icon: CheckCircle,
    color: "text-green-500",
    bg: "bg-green-500/10"
  }
];

export default function SampleReport() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-24">
      {/* Hero */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80" 
            alt="Solar array"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white dark:from-slate-950/90 dark:via-slate-950/85 dark:to-slate-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(255,255,255,0.6)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.6)_100%)]" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div>
            <p className="text-amber-500 font-medium tracking-[0.3em] uppercase text-sm mb-6">
              Sample Report
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 dark:text-white mb-8">
              What you'll receive<br />
              <span className="text-slate-600 dark:text-slate-400">after every inspection</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Every Solar Scan inspection includes a comprehensive engineering report 
              with clear findings and actionable recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Report Preview */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 overflow-hidden">
            {/* Report Header */}
            <div className="p-8 border-b border-gray-200 dark:border-slate-800 bg-gradient-to-r from-gray-100 to-white dark:from-slate-900 dark:to-slate-950">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-slate-900 dark:text-white">Thermal Inspection Report</h3>
                    <p className="text-slate-500 dark:text-slate-500">Sample Commercial Installation</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                <a 
  href="https://viewscreen.githubusercontent.com/view/pdf?browser=safari&bypass_fastly=true&color_mode=auto&commit=158eebcc3232cc0c912655b6aa4b97a18d5591e3&device=unknown_device&docs_host=https%3A%2F%2Fdocs.github.com&enc_url=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f5269636b486172726f642f686172726f64646961676e6f73746963732f313538656562636333323332636330633931323635356236616134623937613138643535393165332f53616d706c652532307265706f7274253230466562253230323032362e706466&link_underline_enabled=true&logged_in=true&nwo=RickHarrod%2Fharroddiagnostics&path=Sample+report+Feb+2026.pdf&platform=mac&repository_id=1158049117&repository_type=Repository&version=18#8150fe9f-1b07-44d6-956b-90cc14cfafcc"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-gray-300 dark:hover:bg-slate-700 transition-colors"
>
  <Eye className="w-4 h-4" />
  Preview
</a>

<a 
  href="https://raw.githubusercontent.com/RickHarrod/harroddiagnostics/main/Sample%20report%20Feb%202026.pdf"
  download
  className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-slate-950 rounded-lg hover:bg-amber-400 transition-colors"
>
  <Download className="w-4 h-4" />
  Download PDF
</a>
                </div>
              </div>
            </div>

            {/* Report Content Preview */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {reportSections.map((section, index) => (
                  <div
                    key={section.title}
                    className="p-5 bg-white dark:bg-slate-950 rounded-xl border border-gray-200 dark:border-slate-800"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-medium text-amber-500">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 dark:text-white mb-1">{section.title}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-500">{section.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Findings */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-slate-900 dark:text-white mb-6">
              Sample fault classifications
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Here's how we classify and present findings in your report.
            </p>
          </div>

          <div className="space-y-4">
            {sampleFindings.map((finding) => (
              <div
                key={finding.type}
                className="p-6 bg-white dark:bg-slate-950 rounded-xl border border-gray-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center gap-6"
              >
                <div className={`w-14 h-14 rounded-xl ${finding.bg} flex items-center justify-center shrink-0`}>
                  <finding.icon className={`w-7 h-7 ${finding.color}`} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-lg font-medium text-slate-900 dark:text-white">{finding.type}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      finding.severity === 'High' ? 'bg-red-500/20 text-red-400' :
                      finding.severity === 'Medium' ? 'bg-amber-500/20 text-amber-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {finding.severity} Severity
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">{finding.description}</p>
                </div>
                <div className="md:text-right shrink-0">
                  <p className="text-sm text-slate-500 dark:text-slate-500 mb-1">Temperature Differential</p>
                  <p className="text-xl font-light text-slate-900 dark:text-white">{finding.temp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thermal Imagery Example */}
      <section className="py-24 px-6 bg-white dark:bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-slate-900 dark:text-white mb-6">
              Thermal imagery included
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              High-resolution annotated thermal images clearly showing anomaly locations and severity.
            </p>
          </div>

          {/* Thermal Image */}
          <div className="aspect-video rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-800 relative">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698cab618b14d7dafc7e8318/4b08a0178_edited-photo-5.png"
              alt="Thermal capture with identified hotspots"
              className="w-full h-full object-cover"
            />
            
            {/* Label */}
            <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur px-4 py-2 rounded-lg">
              <p className="text-white text-sm">Example thermal capture with identified hotspots</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 dark:text-white mb-6">
              Get your own comprehensive report
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-10">
              Book a thermal survey and receive a detailed engineering report for your solar system.
            </p>
            <Link
              to={createPageUrl('Contact')}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-amber-500 text-slate-950 font-medium rounded-full hover:bg-amber-400 transition-all duration-100"
            >
              Book a Survey
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}