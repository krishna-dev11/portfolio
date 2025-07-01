import { Card, CardContent } from "@/components/ui/card";
import { Code, Settings, Terminal, Wrench } from "lucide-react";

const TechStack = () => {
  const techCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-8 h-8 text-blue-400" />,
      skills: ["React.js", "TypeScript", "Next.js", "HTML5", "CSS3", "TailwindCSS"]
    },
    {
      title: "Backend",
      icon: <Settings className="w-8 h-8 text-green-400" />,
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "RESTful APIs"]
    },
    {
      title: "Languages",
      icon: <Terminal className="w-8 h-8 text-purple-400" />,
      skills: ["C++", "Java", "Python"]
    },
    {
      title: "Tools",
      icon: <Wrench className="w-8 h-8 text-orange-400" />,
      skills: ["Git", "GitHub", "AWS", "VS Code", "Chrome DevTools"]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {techCategories.map((category, index) => (
        <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-slate-700/50 rounded-full">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              <div className="space-y-2 w-full">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="bg-slate-700/30 text-slate-300 px-3 py-2 rounded-lg text-sm font-medium hover:bg-slate-600/30 transition-colors">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TechStack;