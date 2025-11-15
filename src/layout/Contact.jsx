function ContactLayout() {

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      content: 'yaraessameldindd@gmail.com',
      link: 'mailto:yaraessameldindd@gmail.com',
      color: 'text-red-500'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      content: '+20 1050301600',
      link: 'tel:+201050301600',
      color: 'text-green-500'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      content: 'Cairo, Egypt',
      link: 'https://maps.google.com/?q=Cairo,Egypt',
      color: 'text-blue-500'
    }
  ];

  const socialLinks = [
    {
      icon: 'fab fa-github',
      label: 'GitHub',
      url: 'https://github.com/yara-eldidi',
      color: 'hover:bg-gray-800'
    },
    {
      icon: 'fab fa-linkedin-in',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yara-eldidi/',
      color: 'hover:bg-blue-600'
    },
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      url: 'mailto:yaraessameldindd@gmail.com',
      color: 'hover:bg-red-500'
    }
  ];



  return (
    <section id="contact" className="py-20 bg-white dark:bg-[#222637]">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3e4a70] mb-4 dark:text-amber-100">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-white">
            Have a project in mind or want to collaborate? I'd love to hear from you! 
            Drop me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Information */}
          <div className="space-y-8" data-aos="fade-right">
            
            <div className="bg-white p-8 rounded-2xl shadow-lg dark:bg-[#373a4d] dark:border dark:border-cyan-900">
              <h3 className="text-2xl font-bold text-[#3e4a70] mb-6 dark:text-white">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-800 transition-all duration-500 group break-all"
                  >
                    <div className={`w-12 h-12 ${info.color} bg-opacity-10 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <i className={`${info.icon} text-xl ${info.color}`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#3e4a70] mb-1 dark:text-amber-200">{info.title}</h4>
                      <p className="text-gray-600 dark:text-white">{info.content}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
            {/* Social Links */}
            <div  data-aos="fade-right" className=" p-8">
              <h3 className="text-2xl font-bold text-[#3e4a70] mb-6 dark:text-white">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gray-100 text-[#3e4a70] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:text-white ${social.color} shadow-md hover:shadow-lg`}
                    aria-label={social.label}
                  >
                    <i className={`${social.icon} text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default ContactLayout;