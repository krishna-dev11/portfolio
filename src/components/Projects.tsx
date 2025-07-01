import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Download } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "🎓 KTech: Ed-Tech Platform",
      description: "A comprehensive educational technology platform built with modern web technologies. Features course management, interactive learning modules, and student progress tracking.",
      image: "https://res.cloudinary.com/dosupd81x/image/upload/v1751378179/Screenshot_2025-06-30_223855_pwjiu4.png",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://ktech-silk.vercel.app/",
      githubUrl: "https://github.com/krishna-dev11",
      featured: true
    },
    {
      title: "🌦️ Weather App",
      description: "Displays real-time weather data using OpenWeather API with a glassmorphism-based UI. Features location-based forecasts and beautiful visual effects.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop&crop=center",
      technologies: ["React", "OpenWeather API", "CSS3", "Glassmorphism"],
      liveUrl: "https://www.linkedin.com/posts/krishna-gothwal-299baa311_codehelp-lovebabbar-lakshyakumar-activity-7319270659837108224-9ITb",
      githubUrl: "https://github.com/krishna-dev11",
      featured: true
    },
    {
      title: "🧾 Payment Gateway UI",
      description: "Razorpay-inspired responsive frontend built with Tailwind CSS + Vite. Features modern payment interface with smooth animations and mobile-first design.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&crop=center",
      technologies: ["Tailwind CSS", "Vite", "JavaScript", "HTML5"],
      liveUrl: "https://www.linkedin.com/posts/krishna-gothwal-299baa311_codehelp-lovebabbar-lakshyakumar-activity-7319269294997913600-nRND",
      githubUrl: "https://github.com/krishna-dev11",
      featured: true
    },
    {
      title: "🧑‍💼 Portfolio Website",
      description: "This very site! A showcase of my work, skills, and digital presence. Built with modern React and styled with Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      liveUrl: "https://www.linkedin.com/posts/krishna-gothwal-299baa311_codehelp-lovebabbar-lakshyakumar-activity-7319268889165541376-QyYN",
      githubUrl: "https://github.com/krishna-dev11",
      featured: false
    },
    {
      title: "🔍 GitHub Profile Finder",
      description: "Searches and displays GitHub user profiles using public API. Features user stats, repositories, and clean interface design.",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=500&h=300&fit=crop&crop=center",
      technologies: ["React", "GitHub API", "CSS3", "JavaScript"],
      liveUrl: "https://www.linkedin.com/posts/krishna-gothwal-299baa311_codehelp-lovebabbar-lakshyakumar-activity-7319271070664990720-BiLq",
      githubUrl: "https://github.com/krishna-dev11",
      featured: false
    },
    {
      title: "🛒 Shopping Cart (Redux)",
      description: "E-commerce shopping cart with Redux state management. Features product filtering, cart operations, and persistent storage.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500&h=300&fit=crop&crop=center",
      technologies: ["React", "Redux", "JavaScript", "LocalStorage"],
      liveUrl: "https://www.linkedin.com/posts/krishna-gothwal-299baa311_codehelp-lovebabbar-lakshyakumar-activity-7319276769516142592-H_ZU",
      githubUrl: "https://github.com/krishna-dev11",
      featured: false
    },
    {
      title: "🎮 Tic Tac Toe",
      description: "Interactive two-player game with celebration effects and clean UI. Features smooth animations, win detection, and responsive design.",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=500&h=300&fit=crop&crop=center",
      technologies: ["JavaScript", "CSS3", "HTML5", "Animations"],
      liveUrl: "https://www.linkedin.com/posts/krishna-gothwal-299baa311_codehelp-lovebabbar-lakshyakumar-activity-7319271224822349824-J3J6",
      githubUrl: "https://github.com/krishna-dev11",
      featured: false
    }
  ];

  const otherProjects = [
    "📝 Blog Website", "🖼️ Image Gallery", "💬 Discord Clone", "📚 Course Filter App"
  ];

  const downloadResume = () => {
    window.open('https://drive.google.com/file/d/18HTLsFQZrfqbRDLUJLCVOHoQ5f3DfbL0/view?usp=sharing', '_blank');
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            🚀 Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            20+ industry-grade projects that reflect real-world use cases with production-level coding standards
          </p>
          
          {/* Resume Download Button */}
          <div className="mt-8">
            <Button 
              size="lg" 
              onClick={downloadResume}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className={`group hover:shadow-2xl transition-all duration-300 hover:scale-105 ${project.featured ? 'lg:col-span-2' : ''}`}>
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">...and more:</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {otherProjects.map((project, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                {project}
              </Badge>
            ))}
          </div>
          <p className="text-gray-600 italic">
            🛠 Let's build something awesome together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;