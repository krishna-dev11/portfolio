import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useMemo, useState } from "react";
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "ASCII",
    category: "AI Website Builder SaaS",
    tech: ["React", "Tailwind CSS", "Node.js", "Firebase", "Stripe"],
    type: "project",
    summary:
      "AI-powered website builder with live preview, source-code export, publishing, community sharing, and credit-based SaaS monetization.",
    image: "/images/ASCII.jpg",
    link: "https://ascii-ten-nu.vercel.app/",
  },
  {
    title: "Thinkly",
    category: "AI EdTech Platform",
    tech: ["React", "Node.js", "Express", "MongoDB", "Razorpay"],
    type: "project",
    summary:
      "Full-stack EdTech system with role-based access, course management, live classes, AI study assistance, payments, and Cloudinary media delivery.",
    image: "/images/Thinkly.png",
    link: "https://ktech-silk.vercel.app/",
  },
  {
    title: "CO-LAB",
    category: "Real-Time Design Platform",
    tech: ["React", "Node.js", "Express", "MongoDB", "WebSockets"],
    type: "project",
    summary:
      "Collaborative whiteboard and design platform with live cursors, shared canvas sync, session handling, version persistence, and export-ready workflows.",
    image: "/images/Colab.png",
    link: "https://draw-sync-teal.vercel.app/",
  },
  {
    title: "Mahakal Darshan",
    category: "Freelance Tourism System",
    tech: ["React", "Node.js", "MongoDB", "Auth0", "Cloudinary", "SEO"],
    type: "freelance",
    summary:
      "Production tourism platform with dynamic services, AI chatbot, WhatsApp lead flow, admin dashboard, testimonials, SEO, and 2,000+ devotee reach.",
    image: "/images/MahakaldarshakbookingUjjain.png",
    link: "https://www.ujjainmahakaldarshnabooking.in/",
  },
  {
    title: "BoldVoice CRM",
    category: "Coaching CRM & LMS",
    tech: ["React", "Redux", "Node.js", "MongoDB", "Gemini API"],
    type: "freelance",
    summary:
      "Business platform for lead tracking, batch scheduling, student management, analytics dashboards, AI assistance, and Auth0-based access control.",
    image: "/images/BoldVoice.png",
    link: "https://the-boldvoice.vercel.app/",
  },
  {
    title: "Developer Portfolio",
    category: "Personal Brand",
    tech: ["React", "Vite", "TypeScript", "GSAP", "Three.js"],
    type: "project",
    summary:
      "Interactive portfolio presenting MERN projects, product experience, technical skills, and career story with animated 3D visuals.",
    image: "/images/Portfolio.png",
    link: "https://krishna-dev11-portfolio.vercel.app/",
  },
];

const Work = () => {
  const [activeTab, setActiveTab] = useState<"all" | "freelance">("all");
  const filteredProjects = useMemo(
    () =>
      projects.filter(
        (project) => activeTab === "all" || project.type === "freelance"
      ),
    [activeTab]
  );

  useGSAP(() => {
    const media = gsap.matchMedia();

    media.add("(min-width: 1025px)", () => {
      let translateX = 0;

      function setTranslateX() {
        const flex = document.querySelector(".work-flex") as HTMLElement | null;
        const container = document.querySelector(
          ".work-container"
        ) as HTMLElement | null;
        if (!flex || !container) return;

        const containerWidth = container.getBoundingClientRect().width;
        translateX = Math.max(0, flex.scrollWidth - containerWidth);
      }

      setTranslateX();
      if (translateX <= 1) {
        gsap.set(".work-flex", { clearProps: "transform" });
        ScrollTrigger.refresh();
        return;
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: () => `+=${Math.max(translateX, window.innerHeight * 0.8)}`,
          scrub: true,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          id: "work",
          onRefresh: setTranslateX,
        },
      });

      timeline.to(".work-flex", {
        x: () => -translateX,
        ease: "none",
      });

      requestAnimationFrame(() => {
        setTranslateX();
        ScrollTrigger.refresh();
      });

      return () => {
        timeline.kill();
        ScrollTrigger.getById("work")?.kill();
      };
    });

    media.add("(max-width: 1024px)", () => {
      gsap.set(".work-flex", { clearProps: "transform" });
      ScrollTrigger.getById("work")?.kill();
      ScrollTrigger.refresh();
    });

    return () => media.revert();
  }, { dependencies: [filteredProjects.length], revertOnUpdate: true });

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <div className="work-heading">
          <h2>
            My <span>Work</span>
          </h2>
          <div className="work-tabs" data-cursor="disable">
            <button
              className={activeTab === "all" ? "work-tab-active" : ""}
              onClick={() => setActiveTab("all")}
              type="button"
            >
              All Projects
            </button>
            <button
              className={activeTab === "freelance" ? "work-tab-active" : ""}
              onClick={() => setActiveTab("freelance")}
              type="button"
            >
              Freelance Work
            </button>
          </div>
        </div>
        <div className="work-flex">
          {filteredProjects.map((project, index) => (
            <a
              className="work-card"
              key={index}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
            >
              <div className="work-card-img">
                <img src={project.image} alt={`${project.title} preview`} />
                <div className="work-card-overlay" />
                <span className="work-card-num">
                  0{index + 1}
                </span>
                <div className="work-card-arrow">
                  <MdArrowOutward />
                </div>
              </div>

              <div className="work-card-body">
                <div className="work-card-meta">
                  <span className="work-card-category">{project.category}</span>
                  <span className="work-card-type">
                    {project.type === "freelance" ? "Freelance" : "Project"}
                  </span>
                </div>
                <h3 className="work-card-title">{project.title}</h3>
                <p className="work-card-summary">{project.summary}</p>
                <div className="work-card-tags">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
