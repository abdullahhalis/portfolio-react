import educationData from "@/data/education.json";
import { ChevronDown, ExternalLink, FileText, ZoomIn } from "lucide-react";
import { useState } from "react";
import { PdfViewer } from "./PdfViewer";

export function Education() {
  const [showAll, setShowAll] = useState(false);

  const visibleCertification = showAll
    ? educationData.certifications
    : educationData.certifications.slice(0, 4);

  return (
    <section
      id="education"
      className="bg-bg text-text w-full h-fit scroll-mt-14 pb-12"
    >
      <div className="max-w-6xl mx-auto">
        <hr className="text-text-muted/30" />
        <span className="inline-flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold ml-4 mt-18">
            Education
          </h1>
          <span className="ml-4 w-18 h-1 bg-primary" />
        </span>

        <div className="mt-10 space-y-8 mx-8">
          {educationData.education.map((item, index) => (
            <div
              key={index}
              className="bg-surface border border-border rounded-xl p-6 flex flex-wrap items-center justify-center gap-6 md:justify-start max-w-2xl"
            >
              <img
                src={item.logo}
                alt={item.institution}
                className="w-20 h-20 rounded-full object-cover"
              />

              <div>
                <h3 className="text-lg font-extrabold">{item.institution}</h3>
                <div className="flex flex-col md:flex-row text-sm text-text-muted font-medium mt-1">
                  <span>{item.degree}</span>
                  <span className="hidden md:inline mx-2">|</span>
                  <span>{item.period}</span>
                </div>

                {item.gpa && (
                  <p className="text-sm mt-2 text-text-muted/60">
                    GPA: {item.gpa}
                  </p>
                )}
                {item.achievement && (
                  <p className="text-sm mt-2 text-text-muted/60">
                    {item.achievement}
                  </p>
                )}
                {item.certificate && (
                  <div className="mt-4">
                    <PdfViewer pdf={item.certificate}>
                      <button
                        className="
                          inline-flex items-center gap-2
                          px-4 py-2
                          rounded-md
                          bg-surface-hover
                          border border-border
                          hover:border-primary/30
                          hover:text-primary
                          transition
                          text-xs font-medium cursor-pointer"
                      >
                        <FileText size={16} />
                        Certificate
                      </button>
                    </PdfViewer>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <span className="inline-flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold ml-4 mt-16">
            Certifications
          </h1>
          <span className="ml-4 w-20 h-1 bg-primary" />
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 mx-8">
          {visibleCertification.map((cert, index) => (
            <button
              key={index}
              className="
                  flex flex-col md:flex-row
                  px-4 items-center
                  bg-surface
                  border border-border
                  rounded-xl
                  overflow-hidden
                  text-left                  
                  hover:border-primary
                  group
                  transition duration-300"
            >
              <PdfViewer key={index} pdf={cert.pdf}>
                <div className="relative group cursor-pointer">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full md:w-32 object-cover rounded-md transition duration-300 group-hover:scale-105"
                  />
                  <div
                    className="
                    absolute inset-0 bg-bg/0 group-hover:bg-bg/60 flex items-center justify-center transition duration-300"
                  >
                    <ZoomIn
                      size={24}
                      className="
                      text-text
                      opacity-0 scale-75
                      group-hover:opacity-100
                      group-hover:scale-100
                      transition duration-300"
                    />
                  </div>
                </div>
              </PdfViewer>

              <div className="p-4 w-full">
                <h3 className="text-sm font-semibold">{cert.name}</h3>

                <p className="text-xs text-text-muted mt-2">
                  {cert.issuer} | {cert.date}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <PdfViewer key={index} pdf={cert.pdf}>
                    <span className="inline-flex items-center gap-1 text-xs text-text-muted hover:text-primary font-medium hover:-translate-y-1 cursor-pointer duration-300">
                      View
                      <ZoomIn size={14} />
                    </span>
                  </PdfViewer>
                  <a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-text-muted hover:text-primary font-medium underline underline-offset-4 hover:-translate-y-1 hover:translate-x-2 cursor-pointer duration-300"
                  >
                    View Credentials
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </button>
          ))}
        </div>

        {educationData.certifications.length > 4 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="
                  inline-flex items-center gap-2
                  px-6 py-3
                  rounded-xl
                  border border-border
                  bg-surface
                  hover:border-primary/30
                  hover:text-primary
                  transition
                  text-sm font-medium group"
            >
              {showAll ? "Show Less" : "Show More"}

              <ChevronDown
                size={14}
                className={`
                transition-transform duration-300 group-hover:translate-y-0.5
                ${showAll ? "rotate-180" : ""}
              `}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
