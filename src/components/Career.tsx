import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Stack Intern</h4>
                <h5>GeekTheory</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Worked in a 4-member team on an AI-based requirement gathering
              assistant that helped automate client discovery, structure project
              inputs, and reduce manual effort during early sales conversations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Web Developer</h4>
                <h5>Mahakal Darshan Platform</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built and deployed a production tourism platform with dynamic
              services, admin controls, AI chatbot support, WhatsApp leads, SEO
              improvements, and business impact for 2,000+ devotees.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech CSE</h4>
                <h5>Mahakal Institute of Technology</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Computer Science undergraduate building MERN, AI, SaaS, EdTech,
              CRM, and real-time collaboration projects while strengthening DSA,
              DBMS, operating systems, and computer networks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
