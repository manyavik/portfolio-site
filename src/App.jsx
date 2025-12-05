import React, { useState } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState(null);

  const projects = [
    {
      id: 'visa',
      title: 'Visa DPS FinTech Consulting',
      type: 'popup',
      description: 'Led technical analysis of competitor technology providers for Visa Debit Processing Services. Conducted comprehensive research and presented strategic recommendations to executives.',
      keywords: { product: ['strategic', 'research', 'recommendations'], swe: ['technical', 'analysis'], fintech: ['Visa', 'FinTech', 'Debit Processing'] },
      tags: ['Consulting', 'FinTech', 'Research'],
      image: 'visa-team',
      content: {
        images: ['visa-team', 'visa-timeline', 'visa-takeaways'],
        details: 'Worked with cross-functional team to analyze issuer processing ecosystem, map competitor capabilities, and identify opportunities for Visa DPS to strengthen their B2B positioning through AI-powered fraud tools and digital offerings.'
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
      link: 'https://ktpgeorgia.com',
      description: 'Co-founded technology fraternity at UGA. Grew to 50+ members in inaugural year. Lead professional development and portfolio website initiative for art students.',
      keywords: { product: ['Co-founded', 'Grew', 'professional development'], swe: ['technology', 'website'], fintech: [] },
      tags: ['Leadership', 'Community Building'],
      image: 'ktp-cover'
    },
    {
      id: 'shecancode',
      title: 'SheCanCode Treasurer',
      type: 'link',
      link: 'https://www.uga-shecancode.dev',
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
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <div className="flex items-start gap-12 mb-12">
          {/* Profile Photo Placeholder */}
          <div className="w-48 h-48 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
            <span className="text-sm text-gray-400">Add your photo here</span>
            {/* TO ADD YOUR PHOTO: Replace this div with: <img src="your-photo.jpg" alt="Manya Vikram" className="w-full h-full object-cover" /> */}
          </div>
          
          <div className="flex-1">
            <h1 className="text-6xl font-light text-gray-900 mb-4">
              Manya Vikram
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              CS + FinTech @ University of Georgia
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mb-6">
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

      {/* Filter Bar */}
      <section className="max-w-6xl mx-auto px-8 py-6 border-y border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500 mr-4">Filter by role:</span>
          <button
            onClick={() => setFilter(filter === 'product' ? null : 'product')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === 'product' 
                ? 'bg-pink-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-pink-100 hover:text-pink-700'
            }`}
          >
            Product
          </button>
          <button
            onClick={() => setFilter(filter === 'swe' ? null : 'swe')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === 'swe' 
                ? 'bg-pink-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-pink-100 hover:text-pink-700'
            }`}
          >
            Software Engineering
          </button>
          <button
            onClick={() => setFilter(filter === 'fintech' ? null : 'fintech')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
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
              className="ml-2 text-xs text-gray-500 hover:text-gray-700"
            >
              Clear
            </button>
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-8 py-12">
        <h2 className="text-4xl font-light text-gray-900 mb-12">Projects</h2>
        
        <div className="grid grid-cols-3 gap-4">
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
                  <div className="w-full h-full bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">VISA DPS</span>
                    {/* TO ADD ACTUAL VISA PHOTO: Replace this div with your uploaded image */}
                  </div>
                ) : (
                  <span className="text-sm text-gray-400">{project.title}</span>
                )}
                {project.type === 'link' && (
                  <div className="absolute top-3 right-3 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    {project.link?.includes('github') ? <Github size={18} /> : <ExternalLink size={18} />}
                  </div>
                )}
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {highlightText(project.description, project.keywords)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-pink-50 text-pink-700 text-xs rounded-full border border-pink-200">
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
      <section className="max-w-6xl mx-auto px-8 py-16 border-t border-gray-100">
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
            
            <div className="p-8 space-y-6">
              <p className="text-gray-700 leading-relaxed">{selectedProject.content.details}</p>
              
              {/* Project Images */}
              {selectedProject.id === 'visa' && (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">Project Highlights</h3>
                  <div className="space-y-4">
                    <div className="rounded-lg overflow-hidden border border-gray-200">
                      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23f3f4f6' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='%239ca3af' text-anchor='middle' dominant-baseline='middle'%3EVisa Team Photo - Upload your image here%3C/text%3E%3C/svg%3E" alt="Visa Team" className="w-full" />
                      {/* TO ADD: Replace src with your actual image file */}
                    </div>
                    <div className="rounded-lg overflow-hidden border border-gray-200">
                      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23f3f4f6' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='%239ca3af' text-anchor='middle' dominant-baseline='middle'%3EProject Timeline - Upload your image here%3C/text%3E%3C/svg%3E" alt="Timeline" className="w-full" />
                    </div>
                    <div className="rounded-lg overflow-hidden border border-gray-200">
                      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23f3f4f6' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='%239ca3af' text-anchor='middle' dominant-baseline='middle'%3EKey Takeaways - Upload your image here%3C/text%3E%3C/svg%3E" alt="Takeaways" className="w-full" />
                    </div>
                  </div>
                </div>
              )}
              
              {selectedProject.id === 'cirrus' && (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">Dashboard Wireframes</h3>
                  <p className="text-sm text-gray-500 italic">Add your wireframe images here when ready</p>
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

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-8 py-12 border-t border-gray-100 mt-20">
        <p className="text-sm text-gray-500 text-center">
          © 2024 Manya Vikram • Built with React
        </p>
      </footer>
    </div>
  );
}