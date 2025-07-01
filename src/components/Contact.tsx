import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-purple-500" />,
      title: "📧 Email",
      value: "krishnagothwal@gmail.com",
      link: "mailto:krishnagothwal@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-500" />,
      title: "📱 Phone",
      value: "+91 8827196257",
      link: "tel:+918827196257"
    },
    {
      icon: <MapPin className="w-6 h-6 text-green-500" />,
      title: "📌 Location",
      value: "Ujjain, Madhya Pradesh, India",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            📍 Contact Info
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            🛠 Let's build something awesome together!
          </p>
          <p className="text-lg text-gray-500 mt-2 italic">
            (Also, keep an eye out — a revamped, even classier version of this portfolio is coming soon 😉)
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Let's Connect</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm Krishna Gothwal, a dedicated full-stack web developer who thrives on turning ideas into impactful digital experiences. 
              Whether you have a project in mind, want to collaborate, or just want to say hi, feel free to reach out!
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                  <div className="p-3 rounded-full bg-gray-100">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{info.title}</h4>
                    <a href={info.link} className="text-gray-600 hover:text-purple-600 transition-colors">
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-3">Why Work With Me?</h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• 20+ industry-grade projects with production-level standards</li>
                <li>• Full-stack MERN expertise with modern UI/UX focus</li>
                <li>• Clean, Git-tracked code and agile collaboration</li>
                <li>• Performance optimization and scalable solutions</li>
              </ul>
            </div>
          </div>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800">Send Message</CardTitle>
              <p className="text-gray-600">Have a project idea? Let's discuss how we can bring it to life!</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project or just say hi!"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;