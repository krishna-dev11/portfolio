import { MdArrowOutward } from "react-icons/md";
import "./styles/Certifications.css";

const certifications = [
  {
    title: "Full Stack Web Development",
    issuer: "CodeHelp",
    image: "/images/web dev.png",
    link: "https://drive.google.com/file/d/1f6AWETDwh2APjCve2y4BvPU5S37uxbqO/view?usp=sharing",
  },
  {
    title: "DSA in C++",
    issuer: "CodeHelp",
    image: "/images/dsa codehelp.jpg",
    link: "https://drive.google.com/file/d/1Num8Wd4kjsU4RoDjxe5zRKGkvl9xXoy1/view?usp=sharing",
  },
  {
    title: "Java Programming",
    issuer: "Infosys Springboard",
    image: "/images/Infosys SpringBoat.jpg",
    link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_29959473947367270000_shared/1-ffc87be7-77dd-4737-bc65-e5af1ff8da5a.pdf",
  },
  {
    title: "Introduction to SQL",
    issuer: "Coursera",
    image: "/images/sql.png",
    link: "https://drive.google.com/file/d/1Y0R5LCCsFIY9nlDWe8WF9Sorzwu2RAxL/view?usp=sharing",
  },
  {
    title: "Version Control with Git",
    issuer: "Coursera",
    image: "/images/git & github.png",
    link: "https://drive.google.com/file/d/1Q3CZx3Sg26x7zg3GHt18P6GPJzAME82i/view?usp=sharing",
  },
];

const Certifications = () => {
  return (
    <section className="cert-section section-container" id="certifications">
      <div className="cert-heading">
        <h2>
          My <span>Certifications</span>
        </h2>
      </div>
      <div className="cert-grid">
        {certifications.map((certification) => (
          <a
            className="cert-card"
            href={certification.link}
            target="_blank"
            rel="noreferrer"
            data-cursor="disable"
            key={certification.title}
          >
            <div className="cert-image">
              <img src={certification.image} alt={certification.title} />
            </div>
            <div className="cert-info">
              <p>{certification.issuer}</p>
              <h3>{certification.title}</h3>
              <span>
                View Certificate <MdArrowOutward />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
