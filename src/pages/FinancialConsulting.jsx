import { Link } from 'react-router-dom';
import { DollarSign, FileText, Scale, ShieldCheck, PieChart, TrendingDown, CheckCircle, ArrowRight } from 'lucide-react';

export default function FinancialConsulting() {
  const services = [
    {
      icon: PieChart,
      title: 'Financial Planning & Strategy',
      description: 'Develop comprehensive financial strategies aligned with your business goals and growth objectives.'
    },
    {
      icon: FileText,
      title: 'Audit & Assurance',
      description: 'Ensure accuracy and compliance with thorough audit services backed by certified professionals.'
    },
    {
      icon: Scale,
      title: 'Taxation & Compliance',
      description: 'Navigate complex tax regulations and maintain compliance across multiple jurisdictions.'
    },
    {
      icon: ShieldCheck,
      title: 'Risk Management',
      description: 'Identify, assess, and mitigate financial risks to protect your business interests.'
    },
    {
      icon: FileText,
      title: 'Financial Reporting',
      description: 'Generate accurate, timely financial reports for informed decision-making and stakeholder transparency.'
    },
    {
      icon: TrendingDown,
      title: 'Cost Optimization',
      description: 'Identify cost-saving opportunities and optimize resource allocation for improved profitability.'
    }
  ];

  const advancedServices = [
    'Virtual CFO services for strategic financial leadership',
    'Startup financial setup and structuring',
    'Cost optimization and efficiency analysis',
    'Global compliance and multi-jurisdiction taxation',
    'Financial due diligence for M&A',
    'Cash flow management and working capital optimization'
  ];

  const outcomes = [
    'Financial clarity and transparency',
    'Regulatory compliance',
    'Improved profitability',
    'Reduced financial risk',
    'Strategic financial planning',
    'Enhanced stakeholder confidence'
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24 bg-gradient-to-br from-teal-950 via-teal-800 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-600 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 mb-8">
              <DollarSign className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Financial Consulting</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Expert financial consulting with certified professionals ensuring compliance, growth, and long-term financial health
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-bold text-indigo-950 mb-6">Overview</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We provide expert financial consulting with certified professionals ensuring compliance and growth. Our team combines deep financial expertise with strategic business acumen to deliver comprehensive solutions that drive sustainable profitability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-teal-200 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-950 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Financial consulting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-br from-teal-400/20 to-cyan-600/20 rounded-full blur-3xl -z-10" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-indigo-950 mb-6">Advanced Services</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our certified financial professionals bring expertise across multiple domains to address your most complex financial challenges.
              </p>
              <div className="space-y-4">
                {advancedServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-950 mb-4">Outcomes You Can Expect</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Achieve financial excellence with measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl border border-teal-100"
              >
                <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-teal-950 via-teal-800 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Optimize Your Finances?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Let's discuss how our financial consulting services can drive profitability and compliance
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-10 py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
          >
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
