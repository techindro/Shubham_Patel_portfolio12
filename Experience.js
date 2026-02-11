import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Founder & CEO, Tech Indro',
      period: '2023–Present',
      description: 'Tech Indro – Ek Sapna, Ek Soch, Ek Future Vision. Tech Indro is a mission-driven initiative to educate and empower students in emerging technologies like Artificial Intelligence (AI), Robotics, AR/VR, IoT, Cloud Computing, and Industry 4.0 with a community of over 1.5 to 2.5 lakh learners across social media. The project promotes early-age Student-preneurship and builds a foundation for a future Robotics and Data annotation platform.'
    },
    {
      title: 'Education Mentor, Topmate',
      period: '2024–Present',
      description: 'Guided students in technology and entrepreneurship, helping them build successful careers in the tech industry.'
    },
    {
      title: 'NVIDIA Forum Community Contributor',
      period: '2023–Present',
      description: 'The NVIDIA Developer Forum is an official online Omniverse community where developers, researchers, & enthusiasts can discuss NVIDIA technologies, software, and hardware. It serves as a support platform for those working with NVIDIA\'s products 🛠️'
    },
    {
      title: 'Health Insurance Adviser, Turtlemint',
      period: '2023–2024',
      description: 'Delivered data-driven insurance solutions, helping clients make informed decisions about their health coverage.'
    },
    {
      title: 'Trainee, ISRO',
      period: '2023',
      description: 'Completed the IIRS Outreach Program on Remote Sensing and Digital Image Analysis, gaining hands-on knowledge in satellite image interpretation, digital image processing, and geospatial data analysis. Applied techniques in GIS and remote sensing for environmental monitoring, urban planning, and disaster management projects.'
    },
    {
      title: 'Social Creator, Instagram & YouTube',
      period: '2022–Present',
      description: '"Jab Seekhna Sirf Degree Ke Liye Nahi, Desh Badalne Ke Liye Ho." "Empowering dreams, AI & Robotics will be better tomorrow for a stronger India 🇮🇳" – Shubham Patel (Founder, Tech Indro). Built a thriving tech community with engaging content on AI, robotics, and space technology.'
    },
    {
      title: 'Affiliate Marketer, Amazon Associates',
      period: '2022–Present',
      description: '"Welcome to Introbox Your Savings Partner! On Amazon associates marketing 🛍️ We specialize in affiliate marketing, connecting you with exclusive deals and discounts from top brands. Our mission is to simplify your shopping experience, helping you discover incredible savings on fashion, tech, home essentials, and more. Join us to unlock a world of savings and elevate your shopping game!" "Open the door to your dreams with introbox" - Introbox 🛒'
    },
    {
      title: 'Freelancer, Freelancer.io',
      period: '2022–Present',
      description: 'Delivered global software and marketing solutions to clients worldwide, building a reputation for quality work.'
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-indigo-600 after:to-cyan-500 after:rounded-full">
          Professional Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l-2 border-indigo-500 bg-[#0f172a]/70 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg">
              <div className="absolute -left-[9px] top-6 w-4 h-4 bg-indigo-500 rounded-full"></div>
              <h3 className="text-xl font-bold text-indigo-300">{exp.title}</h3>
              <p className="text-cyan-300 mb-2">{exp.period}</p>
              <p className="text-gray-200">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
