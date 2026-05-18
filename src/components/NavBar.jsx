import { ExternalLink, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../utils/cn";

export default function NavBar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Experience",
    "Projects",
    "Education",
    "Contact",
    "Resume",
  ];

  useEffect(() => {
    const sections = navItems.map((item) =>
      document.getElementById(item.toLowerCase()),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleScroll = (id) => (e) => {
    e.preventDefault();

    if (id === "home") {
      window.scrollTo({ top: 0});
    } else {
      document.getElementById(id)?.scrollIntoView();
    }
    setIsOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-bg/95 backdrop-blur border-b border-border">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#home"
            className="font-bold text-lg"
            onClick={handleScroll("home")}
          >
            <span className="text-text">Abdullahhalis</span>
          </a>

          <nav className="hidden md:flex gap-x-6">
            {navItems.map((item, index) => {
              if (item.toLowerCase() === "resume") {
                return (
                  <a
                    key={index}
                    href="/assets/pdf/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold transition text-text-muted hover:text-primary"
                  >
                    Resume <ExternalLink size={14} className="inline" />
                  </a>
                );
              } else {
                return (
                  <a
                    key={item.toLowerCase()}
                    href={`#${item.toLowerCase()}`}
                    onClick={handleScroll(item.toLowerCase())}
                    className={cn(
                      "text-sm font-semibold transition",
                      active === item.toLowerCase()
                        ? "text-primary"
                        : "text-text-muted hover:text-primary",
                    )}
                  >
                    {item}
                  </a>
                );
              }
            })}
          </nav>

          <button
            className="text-text md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {isOpen && (
        <div
          className={cn(
            `fixed inset-0 bg-bg/70 backdrop-blur z-40 flex flex-col items-center justify-center gap-8 text-xl transition-opacity duration-300 ${
              isOpen ? "translate-y-0" : "-translate-y-full"
            }`,
          )}
        >
          {navItems.map((item, index) => {
            if (item.toLowerCase() === "resume") {
              return (
                <a
                  key={index}
                  href="/assets/pdf/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold transition text-text-muted hover:text-primary"
                >
                  Resume <ExternalLink size={14} className="inline" />
                </a>
              );
            } else {
              return (
                <a
                  key={item.toLowerCase()}
                  href={`#${item.toLowerCase()}`}
                  onClick={handleScroll(item.toLowerCase())}
                  className={cn(
                    "text-sm font-semibold transition",
                    active === item.toLowerCase()
                      ? "text-primary"
                      : "text-text-muted hover:text-primary",
                  )}
                >
                  {item}
                </a>
              );
            }
          })}
        </div>
      )}
    </>
  );
}
