import { Target, Award, Users, TrendingUp, Linkedin } from 'lucide-react';



export default function About() {
  const team = [
    {
      name: "Chandan Reddy R",
      role: "Founder",
      image:
        "https://static.vecteezy.com/system/resources/previews/036/280/651/original/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg",
      description:
        "8+ years of experience in inside sales, business development, and market research. Expert in lead generation (BANT), RFP management, and client relationship building. Strong experience managing end-to-end sales cycles and global client engagement.",
      linkedin: "https://www.linkedin.com/in/chandan-reddy-r-b93a79180/",
    },
    {
      name: "Varsha S",
      role: "HR & Talent Acquisition",
      image: "https://static.vecteezy.com/system/resources/previews/036/280/651/original/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg" ,
      description:
        "Specialist in hiring strategy, workforce planning, and building high-performance teams. Expert in talent acquisition and organizational development.",
      linkedin: "https://www.linkedin.com/in/varsha-s-569027238/",
    },
    {
      name: "Yashwanth K S",
      role: "Software Engineer",
      image: "https://static.vecteezy.com/system/resources/previews/036/280/651/original/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg",
      description:
        "Expert in AWS, Java, and modern web development. Focused on scalable technology solutions and cloud-native architecture.",
      linkedin:
        "https://www.linkedin.com/in/yashwanth-k-s-020870291?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Technology Expertise',
      description: 'Cutting-edge solutions in AI, cloud computing, and digital transformation'
    },
    {
      icon: Award,
      title: 'Financial Intelligence',
      description: 'Strategic financial planning and compliance backed by certified professionals'
    },
    {
      icon: TrendingUp,
      title: 'Business Growth',
      description: 'Proven frameworks for revenue generation and market expansion'
    },
    {
      icon: Users,
      title: 'Execution Focus',
      description: 'ROI-driven approach ensuring real business impact and long-term value'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24 bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About BizBooster</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Empowering businesses with strategic consulting that drives measurable results and sustainable growth across global markets
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-indigo-950 mb-6 leading-tight">
                Who We Are
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  BizBooster empowers businesses with strategic consulting that drives measurable results. We combine deep industry expertise with innovative methodologies to help organizations navigate complex challenges and capitalize on growth opportunities.
                </p>
                <p>
                  Our multidisciplinary approach integrates technology expertise, financial intelligence, and business growth strategy to deliver comprehensive solutions that create lasting value.
                </p>
                <p>
                  We are execution-focused, ensuring real business impact and long-term value for our clients across diverse industries and global markets.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-br from-indigo-400/20 to-teal-600/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-indigo-950 mb-4">Our Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive methodology that combines expertise across multiple domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-600 to-teal-600 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-950 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-indigo-950 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experts driving innovation and excellence at BizBooster
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-indigo-950 mb-1">{member.name}</h3>
                  <p className="text-teal-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{member.description}</p>
                  <a
                    href={member.linkedin}
                    className="inline-flex items-center space-x-2 text-indigo-900 hover:text-teal-600 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="font-medium">Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-3">
              <div className="text-5xl font-bold bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent">
                8+
              </div>
              <p className="text-xl text-gray-300">Years of Experience</p>
            </div>
            <div className="space-y-3">
              <div className="text-5xl font-bold bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent">
                100+
              </div>
              <p className="text-xl text-gray-300">Clients Served</p>
            </div>
            <div className="space-y-3">
              <div className="text-5xl font-bold bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent">
                5
              </div>
              <p className="text-xl text-gray-300">Global Markets</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
