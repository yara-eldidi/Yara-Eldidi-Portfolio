function AboutLayout() {
  const skills = [
    { icon: "fab fa-html5", name: "HTML5", color: "text-red-500" },
    { icon: "fab fa-css3-alt", name: "CSS3", color: "text-blue-500" },
    { icon: "fab fa-js-square", name: "JavaScript", color: "text-yellow-500" },
    { icon: "fab fa-bootstrap", name: "Bootstrap", color: "text-purple-600" },
    { 
      icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", 
      name: "Tailwind CSS", 
      isImage: true 
    },
    { icon: "fab fa-react", name: "React", color: "text-blue-400" },
    { icon: "fab fa-node-js", name: "Node.js", color: "text-green-500" },
    { icon: "fab fa-git-alt", name: "Git", color: "text-red-600" },
    { icon: "fab fa-github", name: "GitHub", color: "text-gray-800" },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-[#292d40]">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        {/* About Me */}
        <article data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3e4a70] mb-6 text-center md:text-left dark:text-amber-100">
            About Me
          </h2>
          <div className="text-gray-700 space-y-4 leading-relaxed dark:text-white">
            <p>
              I'm Yara Eldidi — a passionate and detail-oriented Front-End
              Developer specializing in React.js and modern UI development. I'm
              a Communications Engineering graduate with strong problem-solving
              skills and a solid foundation in building user-centric web
              solutions.
            </p>
            <p>
              I create responsive, clean, and visually appealing interfaces
              using React, JavaScript, HTML, CSS, Bootstrap, and Tailwind CSS. I
              have developed landing pages and portfolio projects that reflect
              real-world scenarios and focus on smooth user experience.
            </p>
            <p>
              I ensure clear communication, timely delivery, and
              high-quality results. If you're looking for a front-end developer
              who can bring your ideas to life professionally and efficiently,
              I'm ready to help!
            </p>
          </div>
        </article>

        {/* Skills */}
        <article data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3e4a70] mb-6 text-center md:text-left dark:text-amber-100">
            Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:scale-105"
                data-aos="zoom-in"
                data-aos-delay={index * 50}
              >
                {skill.isImage ? (
                  <img
                    src={skill.icon}
                    alt={`${skill.name} Logo`}
                    className="w-12 h-12"
                  />
                ) : (
                  <i className={`${skill.icon} text-5xl ${skill.color}`} aria-hidden="true"></i>
                )}
                <h3 className="mt-3 text-base font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default AboutLayout