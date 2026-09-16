import { Calendar, Clock, ArrowRight, Brain, TrendingUp, DollarSign, Zap } from 'lucide-react';

export default function Blogs() {
  const blogs = [
    {
      category: 'AI & Technology',
      icon: Brain,
      title: 'How AI is Transforming Business Operations in 2024',
      excerpt: 'Discover how artificial intelligence and automation are revolutionizing the way businesses operate, from customer service to supply chain management.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'March 15, 2024',
      readTime: '5 min read',
      gradient: 'from-indigo-600 to-blue-600'
    },
    {
      category: 'Sales & Growth',
      icon: TrendingUp,
      title: 'Building a Scalable Lead Generation Strategy',
      excerpt: 'Learn proven frameworks for generating high-quality leads using BANT qualification and multi-channel outreach strategies.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'March 12, 2024',
      readTime: '7 min read',
      gradient: 'from-indigo-800 to-teal-700'
    },
    {
      category: 'Finance',
      icon: DollarSign,
      title: 'Financial Planning for Startups: A Complete Guide',
      excerpt: 'Essential financial strategies every startup needs to know, from budgeting and cash flow management to fundraising preparation.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'March 10, 2024',
      readTime: '6 min read',
      gradient: 'from-teal-600 to-cyan-600'
    },
    {
      category: 'Digital Transformation',
      icon: Zap,
      title: 'The Cloud Migration Journey: Best Practices',
      excerpt: 'A comprehensive guide to successfully migrating your infrastructure to the cloud with minimal disruption and maximum benefit.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'March 8, 2024',
      readTime: '8 min read',
      gradient: 'from-indigo-600 to-blue-600'
    },
    {
      category: 'Sales Strategy',
      icon: TrendingUp,
      title: 'Revenue Operations: Aligning Teams for Growth',
      excerpt: 'How to implement RevOps to align sales, marketing, and customer success for predictable revenue growth.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'March 5, 2024',
      readTime: '6 min read',
      gradient: 'from-teal-700 to-indigo-800'
    },
    {
      category: 'Finance',
      icon: DollarSign,
      title: 'Tax Optimization Strategies for Growing Businesses',
      excerpt: 'Practical tax planning strategies to minimize liability and maximize cash flow for sustainable business growth.',
      image: 'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'March 3, 2024',
      readTime: '5 min read',
      gradient: 'from-teal-600 to-cyan-600'
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Insights & Resources</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Expert insights on technology, finance, and business growth strategies
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => {
              const Icon = blog.icon;
              return (
                <article
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className={`absolute top-4 left-4 px-4 py-1.5 rounded-full bg-gradient-to-r ${blog.gradient} text-white text-sm font-medium flex items-center space-x-2`}>
                      <Icon className="w-4 h-4" />
                      <span>{blog.category}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-indigo-950 mb-3 group-hover:text-teal-600 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{blog.excerpt}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>

                    <button className="inline-flex items-center space-x-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors group">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-indigo-950 mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Subscribe to our newsletter for the latest insights on technology, finance, and business growth
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-indigo-900 to-teal-700 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
