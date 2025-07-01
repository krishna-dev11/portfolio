import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Zap } from "lucide-react";
import TechStack from "./TechStack";

const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-purple-500" />,
      title: "Full Stack Development",
      description: "MERN stack expertise with 20+ industry-grade projects"
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: "Modern UI/UX",
      description: "Designing interfaces in Figma and bringing them to life"
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: "Database Management",
      description: "Working with MongoDB and MySQL for robust backends"
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: "Performance Focus",
      description: "Production-level coding standards and optimization"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Hey! I'm Krishna Gothwal, a dedicated full-stack web developer who thrives on turning ideas into impactful digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">My Journey</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I've built 20+ industry-grade projects that reflect real-world use cases — not just for practice, 
              but with production-level coding standards, performance optimization, and clean UI/UX.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With a focus on the MERN stack, I enjoy working across the full development cycle — from designing 
              interfaces in Figma to building robust backends with Node.js, Express.js, and managing databases.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I love collaborating in open-source style environments, writing clean Git-tracked code, 
              and bringing UI to life using Tailwind CSS. Design should not just look good but also feel intuitive.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-0 text-center">
                  <div className="mb-4">{feature.icon}</div>
                  <h4 className="font-semibold mb-2 text-gray-800">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 mb-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">🔧 Tech Stack</h3>
            <p className="text-slate-400">Technologies I work with to build amazing digital experiences</p>
          </div>
          
          <TechStack />
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 italic">
            Though this portfolio features a simple and minimal design, I'm currently working on enhancing it 
            into a more refined, modern, and visually engaging layout. 😉
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;