import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'AI & Machine Learning', level: 90 },
    { name: 'Robotics & Automation', level: 85 },
    { name: 'EV Systems', level: 80 },
    { name: 'Digital Marketing', level: 75 },
    { name: 'Public Speaking', level: 95 },
    { name: 'Entrepreneurship', level: 85 }
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-indigo-600 after:to-cyan-500 after:rounded-full">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, idx) => (
            <div key={idx} className="bg-[#0f172a]/70 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg">
              <div className="flex justify-between mb-2 text-gray-200">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
