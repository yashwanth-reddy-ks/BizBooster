import { Link } from 'react-router-dom';
import { Brain, DollarSign, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: 'IT Consulting',
      tagline: 'Accelerate Digital Transformation',
      description: 'Leverage cutting-edge technology to drive innovation, improve efficiency, and stay ahead of the competition.',
      features: [
        'Artificial Intelligence & Generative AI',
        'Automation & RPA',
        'AWS Cloud Consulting',
        'Java & Web Development',
        'System Integration',
        'Data Analytics & Insights'
      ],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/services/it',
      gradient: 'from-indigo-600 to-blue-600'
    },
    {
      icon: DollarSign,
      title: 'Financial Consulting',
      tagline: 'Achieve Financial Excellence',
      description: 'Expert financial guidance backed by certified professionals to ensure compliance, reduce risk, and improve profitability.',
      features: [
        'Financial Planning & Strategy',
        'Audit & Assurance',
        'Taxation & Compliance',
        'Risk Management',
        'Virtual CFO Services',
        'Cost Optimization'
      ],
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/services/financial',
      gradient: 'from-teal-600 to-cyan-600'
    },
    {
      icon: TrendingUp,
      title: 'Business Consulting',
      tagline: 'Scale Revenue & Growth',
      description: 'Build predictable revenue streams with proven sales strategies, lead generation frameworks, and market intelligence.',
      features: [
        'Lead Generation & BANT Qualification',
        'Sales Team Setup',
        'Market Research & Analysis',
        'Go-to-Market Strategy',
        'CRM & Sales Automation',
        'Revenue Operations (RevOps)'
      ],
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/services/business',
      gradient: 'from-indigo-800 to-teal-700'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24 bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Sparkles className="w-8 h-8 text-teal-400" />
              <span className="text-teal-400 font-semibold text-lg">Our Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Comprehensive Consulting Solutions</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Transform your business with expert guidance across technology, finance, and growth strategy
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  !isEven ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                  <div className={`inline-flex w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-indigo-950">{service.title}</h2>
                  <p className="text-xl text-teal-600 font-semibold">{service.tagline}</p>
                  <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>

                  <div className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-teal-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={service.link}
                    className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-indigo-900 to-teal-700 text-white rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    <span>Explore {service.title}</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                <div className={`relative ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`absolute -bottom-8 ${isEven ? '-right-8' : '-left-8'} w-64 h-64 bg-gradient-to-br ${service.gradient} opacity-20 rounded-full blur-3xl -z-10`} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-950 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Let's discuss how our services can help transform your business
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-10 py-4 bg-gradient-to-r from-indigo-900 to-teal-700 text-white rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
          >
            <span>Contact Us Today</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
