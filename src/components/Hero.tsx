import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Code } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="mb-4">
            <span className="text-2xl md:text-3xl font-light text-purple-300">Hey! I'm</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Krishna Gothwal
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A dedicated full-stack web developer who thrives on turning ideas into impactful digital experiences
          </p>
          <p className="text-lg md:text-xl mb-8 text-purple-200 max-w-3xl mx-auto">
            ✨ 20+ industry-grade projects • MERN Stack Expert • Production-level coding standards
          </p>
          
          <div className="flex justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
              onClick={() => scrollToSection('projects')}
            >
              🚀 View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-black hover:bg-blue-600 hover:text-gray-900"
              onClick={() => scrollToSection('contact')}
            >
              🛠 Let's Build Together
            </Button>
          </div>
          
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/krishna-dev11" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              title="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/krishna-gothwal-299baa311/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://leetcode.com/u/krishnagothwal0/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              title="LeetCode Profile"
            >
              <Code className="w-6 h-6" />
            </a>
            <a 
              href="mailto:krishnagothwal@gmail.com" 
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              title="Send Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <div className="mt-8 text-sm text-purple-200 italic">
            📌 Based in Ujjain, Madhya Pradesh, India
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;