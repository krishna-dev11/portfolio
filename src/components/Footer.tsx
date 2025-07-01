import { Github, Linkedin, Mail, Heart, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/krishna-dev11",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/krishna-gothwal-299baa311/",
      label: "LinkedIn"
    },
    {
      icon: <Code className="w-5 h-5" />,
      href: "https://leetcode.com/u/krishnagothwal0/",
      label: "LeetCode"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:krishna.gothwal@email.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              Krishna Gothwal
            </h3>
            <p className="text-gray-400">
              Full Stack Developer & UI/UX Designer
            </p>
          </div>

          <div className="flex items-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-3 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-110"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} Krishna Gothwal. All rights reserved.
            </p>
            
            <div className="flex items-center text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
              <span>and lots of coffee</span>
            </div>
          </div>
          
          <button
            onClick={scrollToTop}
            className="mt-4 text-sm text-purple-400 hover:text-purple-300 transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;