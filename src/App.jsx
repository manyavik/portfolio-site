import React, { useState } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import visaTeamImg from "./assets/images/visa/visa-team.webp";
import visaTimeline from "./assets/images/visa/visa-timeline.jpg";
import visaTakeaways from "./assets/images/visa/visa-takeaways.webp";
import mainPic from "./assets/images/main-pic.jpg";

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState(null);

  //add scroll bar
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  const projects = [
    {
      id: 'visa',
      title: 'Visa FinTech Consulting',
      type: 'popup',
      description: 'Led technical analysis of competitor technology providers for Visa Debit Processing Services. Conducted comprehensive research and presented strategic recommendations to executives.',
      keywords: { product: ['strategic', 'research', 'recommendations'], swe: ['technical', 'analysis'], fintech: ['Visa', 'FinTech', 'Debit Processing'] },
      tags: ['Consulting', 'FinTech', 'Research'],
      image: 'visa-team',
      content: {
        details: 'Worked with cross-functional team to analyze issuer processing ecosystem, map competitor capabilities, and identify opportunities for Visa DPS to strengthen their B2B positioning through AI-powered fraud tools and digital offerings.',
        blocks: [
          {
            id: 'timeline',
            label: 'Project Timeline',
            image: visaTimeline,
            caption: 'How the engagement...'
          },
          {
            id: 'solution',
            label: 'Our Solution',
            image: visaTakeaways,   // your “our solution” image
            caption: 'High-level view of our'
          },
          {
            id: 'final',
            label: 'Final Presentation',
            image: visaTeamImg,      // group / presentation note
            caption: 'Snapshot from the final'
          }
        ]
      }
    },
    {
      id: 'cirrus',
      title: 'CirrusLabs KPI Dashboard',
      type: 'popup',
      description: 'Built full-stack KPI dashboard for company-wide performance tracking. Used React, Django, NeonDB, and deployed to Microsoft Azure.',
      keywords: { product: ['dashboard', 'performance tracking'], swe: ['full-stack', 'React', 'Django', 'NeonDB', 'Azure'], fintech: [] },
      tags: ['Full-Stack', 'React', 'Django', 'Azure'],
      image: 'cirrus-cover',
      content: {
        images: [],
        details: 'Developed scalable dashboard aggregating data from multiple sources. Contributed to Lockthreat GRC enterprise compliance tool and presented live demo at cybersecurity conference.'
      }
    },
    {
      id: 'roommate',
      title: 'RoommateHub',
      type: 'link',
      link: 'https://github.com/yourusername/roommatehub',
      description: 'Platform connecting UGA students with compatible roommates through intelligent matching based on lifestyle preferences and habits.',
      keywords: { product: ['Platform', 'matching', 'preferences'], swe: ['intelligent'], fintech: [] },
      tags: ['Personal Project', 'Full-Stack', 'Product Design'],
      image: 'roommate-cover'
    },
    {
      id: 'ktp',
      title: 'Co-Founded Kappa Theta Pi',
      type: 'link',
      link: 'https://ktpgeorgia.com/#leadership',
      description: 'Co-founded technology fraternity at UGA. Grew to 50+ members in inaugural year. Lead professional development and portfolio website initiative for art students.',
      keywords: { product: ['Co-founded', 'Grew', 'professional development'], swe: ['technology', 'website'], fintech: [] },
      tags: ['Leadership', 'Community Building'],
      image: 'ktp-cover'
    },
    {
      id: 'shecancode',
      title: 'SheCanCode Treasurer',
      type: 'link',
      link: 'https://www.uga-shecancode.dev/contact',
      description: 'Launched fundraising initiatives raising $500+. Manage budget for Women in CS mentorship program empowering women in technology.',
      keywords: { product: ['Launched', 'fundraising', 'Manage budget', 'program'], swe: ['technology'], fintech: ['budget'] },
      tags: ['Leadership', 'Finance'],
      image: 'she-cover'
    },
    {
      id: 'ai-research',
      title: 'AI Research Assistant',
      type: 'disabled',
      description: 'Building intelligent research tools at UGA. More details coming soon.',
      keywords: { product: ['research tools'], swe: ['Building', 'intelligent'], fintech: [] },
      tags: ['AI/ML', 'Research', 'Coming Soon'],
      image: 'ai-cover'
    }
  ];

  const visaBlocks = [
    {
      id: 'timeline',
      image: visaTimeline, // your existing image import
      caption: 'hello'
    },
    {
      id: 'solution',
      image: visaTakeaways,
      caption: 'High-level view of our recommended positioning, capability gaps, and AI-powered opportunities.'
    },
    {
      id: 'final',
      image: visaTeamImg,
      caption: 'Snapshot from our final presentation to Visa DPS leadership (aka group photo time ✨).'
    }
  ];

  const highlightText = (text, keywords) => {
    if (!filter) return text;
    
    const wordsToHighlight = keywords[filter] || [];
    if (wordsToHighlight.length === 0) return text;

    let result = text;
    wordsToHighlight.forEach(word => {
      const regex = new RegExp(`(${word})`, 'gi');
      result = result.replace(regex, '<mark class="bg-pink-200 text-gray-900">$1</mark>');
    });
    
    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Nav */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur border-b border-pink-100">
        <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-semibold tracking-wide text-pink-600 uppercase"
          >
            Manya Vikram
          </button>
          <div className="flex gap-6 text-sm">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              Skills
            </button>
          </div>
        </div>
      </nav>
      
      <main className="pt-20">
        {/* Hero Section */}
        <section
          id="about"
          className="max-w-6xl mx-auto px-8 py-10 scroll-mt-24"
        >
          <div className="flex items-center gap-10">
            {/* Profile Photo */}
            <div className="flex-shrink-0">
              <div className="w-60 h-60 rounded-2xl overflow-hidden shadow-md">
                <img 
                  src={mainPic} 
                  alt="Manya Vikram" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="flex-1">
              <h1 className="text-5xl font-light mb-3">
                <span className="gradient-name">Manya Vikram</span>
              </h1>

              <p className="text-lg text-gray-600 mb-4">
                CS + FinTech @ University of Georgia
              </p>

              <p className="text-lg text-gray-700 leading-relaxed max-w-xl mb-6">
                I build products at the intersection of technology and finance. From consulting for Visa on competitive positioning 
                to developing full-stack dashboards at CirrusLabs, I'm passionate about creating solutions that solve real problems. 
                Currently seeking opportunities where I can continue learning and building meaningful products.
              </p>

              <div className="flex gap-6 text-sm">
                <a href="mailto:manyavikram30@gmail.com" className="text-gray-600 hover:text-pink-500 underline underline-offset-4 transition-colors">
                  Email
                </a>
                <a href="https://linkedin.com/in/manya-vikram-bb0652220" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 underline underline-offset-4 transition-colors">
                  LinkedIn
                </a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 underline underline-offset-4 transition-colors">
                  GitHub
                </a>
                <a href="https://docs.google.com/document/d/180aJI64cyjPJ2b-or9-uTTdq_aZl-tE_W2Df9TZPcao/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 underline underline-offset-4 transition-colors">
                  Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="max-w-6xl mx-auto px-8 py-12 scroll-mt-24"
        >
          {/* Sticky header row: title + filters */}
          <div className="sticky top-16 z-20 bg-white/95 backdrop-blur border-b border-gray-100 pb-4 mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-4xl font-light text-gray-900">
                Projects
              </h2>

              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500 mr-2">Filter by role:</span>

                <button
                  onClick={() => setFilter(filter === 'product' ? null : 'product')}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    filter === 'product'
                      ? 'bg-pink-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-pink-100 hover:text-pink-700'
                  }`}
                >
                  Product
                </button>

                <button
                  onClick={() => setFilter(filter === 'swe' ? null : 'swe')}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    filter === 'swe'
                      ? 'bg-pink-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-pink-100 hover:text-pink-700'
                  }`}
                >
                  Software Engineering
                </button>

                <button
                  onClick={() => setFilter(filter === 'fintech' ? null : 'fintech')}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    filter === 'fintech'
                      ? 'bg-pink-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-pink-100 hover:text-pink-700'
                  }`}
                >
                  FinTech
                </button>

                {filter && (
                  <button
                    onClick={() => setFilter(null)}
                    className="ml-1 text-xs text-gray-500 hover:text-gray-700"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Project cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => {
                  if (project.type === 'popup') {
                    setSelectedProject(project);
                  } else if (project.type === 'link') {
                    window.open(project.link, '_blank');
                  }
                }}
                className={`group border border-gray-200 rounded-lg overflow-hidden transition-all ${
                  project.type === 'disabled'
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:shadow-xl hover:-translate-y-1 cursor-pointer hover:border-pink-200'
                }`}
              >
                {/* Project Image */}
                <div className="aspect-video bg-gray-100 flex items-center justify-center relative overflow-hidden">
                  {project.id === 'visa' ? (
                    <img src={visaTeamImg} alt="Visa Team" className="w-full" />
                  ) : (
                    <span className="text-sm text-gray-400">
                      {project.title}
                    </span>
                  )}
                  {project.type === 'link' && (
                    <div className="absolute top-3 right-3 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                      {project.link?.includes('github') ? (
                        <Github size={18} />
                      ) : (
                        <ExternalLink size={18} />
                      )}
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {highlightText(project.description, project.keywords)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-pink-50 text-pink-700 text-xs rounded-full border border-pink-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Skills Section */}
        <section
          id="skills"
          className="max-w-6xl mx-auto px-8 py-16 border-t border-gray-100 scroll-mt-24"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-8">Skills</h2>
          
          <div className="grid grid-cols-3 gap-12">
            <div>
              <h3 className="text-sm font-semibold text-pink-600 uppercase tracking-wider mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Python', 'JavaScript', 'HTML/CSS', 'SQL', 'LaTeX'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-pink-600 uppercase tracking-wider mb-4">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Django', 'MongoDB', 'Git', 'GitHub', 'Azure', 'AWS'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-pink-600 uppercase tracking-wider mb-4">Other</h3>
              <div className="flex flex-wrap gap-2">
                {['VS Code', 'Jira', 'Agile/Scrum', 'Product Management'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Project Popup Modal */}
        {selectedProject && selectedProject.type === 'popup' && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-white max-w-3xl w-full max-h-[85vh] overflow-y-auto rounded-lg shadow-2xl">
              <div className="sticky top-0 bg-white border-b border-pink-200 p-6 flex items-center justify-between z-10">
                <h2 className="text-2xl font-medium">{selectedProject.title}</h2>
                <button onClick={() => setSelectedProject(null)} className="hover:opacity-60 transition-opacity">
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-4 md:p-6">
                {selectedProject.id === 'visa' && (
                  <div className="grid-paper rounded-3xl p-2 md:p-3">
                    <div
                      className="
                        flex gap-4 overflow-x-auto
                        snap-x snap-mandatory
                        pb-4
                      "
                    >
                      {visaBlocks.map((block, index) => (
                        <div
                          key={block.id}
                          className="
                            visa-block flex-shrink-0
                            basis-[92%] md:basis-[88%] lg:basis-[85%]
                            snap-start
                          "
                          style={{ animationDelay: `${index * 120}ms` }}
                        >
                          <div
                            className="
                              rounded-2xl overflow-hidden
                              shadow-sm
                              w-full h-[60vh]
                              md:h-[65vh] lg:h-[50vh]
                            "
                          >
                            <img
                              src={block.image}
                              alt=""
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <p className="mt-1 text-xs text-gray-500 text-center">
                      Scroll sideways to explore the project!
                    </p>
                  </div>
                )}
              </div>



              <div className="sticky bottom-0 bg-white border-t border-pink-200 p-4 text-center">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-8 py-3 bg-pink-500 text-white font-medium hover:bg-pink-600 transition-colors rounded-lg"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      
      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-8 py-12 border-t border-gray-100 mt-20">
        <p className="text-sm text-gray-500 text-center">
          © 2024 Manya Vikram
        </p>
      </footer>
    </div>
  );
}