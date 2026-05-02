import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    smoother?.kill();
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    const linkHandlers: Array<{
      element: HTMLAnchorElement;
      handler: (e: Event) => void;
    }> = [];
    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      const handler = (e: Event) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          const elem = e.currentTarget as HTMLAnchorElement;
          const section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      };
      element.addEventListener("click", handler);
      linkHandlers.push({ element, handler });
    });

    const resizeHandler = () => {
      ScrollSmoother.refresh(true);
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", resizeHandler);

    return () => {
      linkHandlers.forEach(({ element, handler }) => {
        element.removeEventListener("click", handler);
      });
      window.removeEventListener("resize", resizeHandler);
      smoother?.kill();
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          Krishna
        </a>
        <a
          href="mailto:krishnagothwal88@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          krishnagothwal88@gmail.com
        </a>
        <button
          className={`navbar-toggle ${isMenuOpen ? "navbar-toggle-active" : ""}`}
          data-cursor="disable"
          onClick={() => setIsMenuOpen((value) => !value)}
          type="button"
        >
          <span></span>
          <span></span>
        </button>
        <ul className={isMenuOpen ? "navbar-menu-open" : ""}>
          <li>
            <a data-href="#about" href="#about" onClick={() => setIsMenuOpen(false)}>
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work" onClick={() => setIsMenuOpen(false)}>
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a
              data-href="#certifications"
              href="#certifications"
              onClick={() => setIsMenuOpen(false)}
            >
              <HoverLinks text="CERTS" />
            </a>
          </li>
          <li>
            <a
              data-href="#contact"
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
