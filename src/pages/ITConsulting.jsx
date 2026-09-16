import { Link } from 'react-router-dom';
import { Brain, Cloud, Code, Database, Workflow, BarChart, CheckCircle, ArrowRight } from 'lucide-react';

export default function ITConsulting() {
  const services = [
    {
      icon: Brain,
      title: 'Artificial Intelligence & Generative AI',
      description: 'Implement AI-driven solutions to automate processes, enhance decision-making, and unlock new business opportunities.'
    },
    {
      icon: Workflow,
      title: 'Automation & RPA',
      description: 'Streamline operations with intelligent automation, reducing costs and improving efficiency across your organization.'
    },
    {
      icon: Cloud,
      title: 'AWS Cloud Consulting',
      description: 'Build scalable, secure cloud infrastructure with expert AWS implementation and optimization services.'
    },
    {
      icon: Code,
      title: 'Java & Web Development',
      description: 'Create robust, high-performance applications using modern development frameworks and best practices.'
    },
    {
      icon: Database,
      title: 'System Integration',
      description: 'Seamlessly connect disparate systems to create unified, efficient technology ecosystems.'
    },
    {
      icon: BarChart,
      title: 'Data Analytics & Insights',
      description: 'Transform data into actionable insights with advanced analytics and business intelligence solutions.'
    }
  ];

  const capabilities = [
    'AI-driven solutions for predictive analytics and intelligent automation',
    'Cloud-native architecture design and migration strategies',
    'Advanced data analytics and machine learning implementations',
    'Low-code platforms for rapid application development',
    'API integration and microservices architecture',
    'DevOps and CI/CD pipeline optimization'
  ];

  const outcomes = [
    'Faster innovation cycles',
    'Reduced operational costs',
    'Scalable, future-proof systems',
    'Enhanced security and compliance',
    'Improved customer experience',
    'Data-driven decision making'
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24 bg-gradient-to-br from-indigo-950 via-indigo-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 mb-8">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">IT Consulting</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Accelerate digital transformation using modern, scalable technologies that drive innovation and competitive advantage
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-bold text-indigo-950 mb-6">Overview</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We help organizations accelerate digital transformation using modern, scalable technologies. Our IT consulting services combine deep technical expertise with strategic business insights to deliver solutions that drive measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-indigo-200 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
            <div>
              <h2 className="text-4xl font-bold text-indigo-950 mb-6">Advanced Capabilities</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team brings cutting-edge expertise in the latest technologies and methodologies to solve your most complex challenges.
              </p>
              <div className="space-y-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="IT consulting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-br from-indigo-400/20 to-blue-600/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-950 mb-4">Outcomes You Can Expect</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable business impact through technology excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border border-indigo-100"
              >
                <CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-indigo-950 via-indigo-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Technology?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Let's discuss how our IT consulting services can accelerate your digital transformation
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-10 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
          >
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
