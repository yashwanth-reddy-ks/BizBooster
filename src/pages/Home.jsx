import { Link } from 'react-router-dom';
import { Brain, DollarSign, TrendingUp, Globe, Target, Award, Users, Zap, ArrowRight } from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: Brain,
      title: 'IT Consulting',
      description: 'Drive digital transformation with AI, automation, AWS cloud solutions, and cutting-edge technology implementation.',
      link: '/services/it',
      gradient: 'from-indigo-600 to-blue-600'
    },
    {
      icon: DollarSign,
      title: 'Financial Consulting',
      description: 'Expert audit, compliance, taxation, and financial strategy services backed by certified professionals.',
      link: '/services/financial',
      gradient: 'from-teal-600 to-cyan-600'
    },
    {
      icon: TrendingUp,
      title: 'Business Consulting',
      description: 'Scale revenue with proven sales strategies, lead generation frameworks, and market research insights.',
      link: '/services/business',
      gradient: 'from-indigo-800 to-teal-700'
    }
  ];

  const whyChoose = [
    {
      icon: Globe,
      title: 'Global Expertise',
      description: 'Serving clients across USA, Australia, India, Europe, and Middle East'
    },
    {
      icon: Brain,
      title: 'AI & Automation',
      description: 'Leveraging cutting-edge AI and automation capabilities'
    },
    {
      icon: Award,
      title: 'Certified Professionals',
      description: 'CA-backed financial experts and industry-certified consultants'
    },
    {
      icon: Target,
      title: 'ROI-Driven',
      description: 'Focused on measurable outcomes and tangible business impact'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/95 via-indigo-900/90 to-teal-900/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight">
            Fueling Limitless Growth
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            BizBooster helps organizations scale, transform, and achieve measurable growth through expert IT, Financial, and Business Consulting services across global markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/services"
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 text-lg"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-indigo-900 transition-all duration-300 text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-indigo-950 leading-tight">
                Driving Business Excellence Globally
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                BizBooster is a results-driven consulting firm helping organizations align technology, financial strategy, and business operations for sustainable and scalable growth.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Globe className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-indigo-900 mb-1">Global Reach</h3>
                    <p className="text-gray-600">Serving clients across USA, Australia, India (GCCs), Europe, and the Middle East</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-indigo-900 mb-1">Industry Expertise</h3>
                    <p className="text-gray-600">BFSI, Retail, Manufacturing, IT, Healthcare</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Business consulting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-br from-teal-400/20 to-indigo-600/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-indigo-950 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive consulting solutions tailored to drive your business forward
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-indigo-950 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center space-x-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors group"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose BizBooster</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Partner with a consulting firm that combines expertise, innovation, and results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-950 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Let's discuss how BizBooster can help you achieve sustainable growth and competitive advantage
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-10 py-4 bg-gradient-to-r from-indigo-900 to-teal-700 text-white rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
          >
            <span>Schedule a Consultation</span>
            <Zap className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
