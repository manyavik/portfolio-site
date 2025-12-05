import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'leadership', 'projects', 'skills'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-8 py-6 flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-lg font-medium hover:opacity-60 transition-opacity"
          >
            Manya Vikram
          </button>
          
          <div className="flex gap-8 text-sm">
            {['About', 'Experience', 'Leadership', 'Projects', 'Skills'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`hover:opacity-60 transition-opacity relative ${
                  activeSection === item.toLowerCase() ? 'text-gray-900 font-medium' : 'text-gray-500'
                }`}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <span className="absolute -bottom-[25px] left-0 w-full h-0.5 bg-gray-900"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-8 pt-32">
        
        {/* About Section */}
        <section id="about" className="py-20 scroll-mt-24">
          <h1 className="text-5xl font-light text-gray-900 mb-4">
            Manya Vikram
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            CS + FinTech @ University of Georgia
          </p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
            I'm interested in building products at the intersection of technology and finance. 
            Currently seeking SWE and Product Management internships where I can work on meaningful problems 
            with experienced teams.
          </p>
          <div className="flex gap-6 mt-8 text-sm">
            <a href="mailto:manyavikram30@gmail.com" className="text-gray-600 hover:text-gray-900 underline underline-offset-4">
              Email
            </a>
            <a href="https://linkedin.com/in/manya-vikram-bb0652220" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 underline underline-offset-4">
              LinkedIn
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 underline underline-offset-4">
              GitHub
            </a>
            <a href="https://docs.google.com/document/d/180aJI64cyjPJ2b-or9-uTTdq_aZl-tE_W2Df9TZPcao/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 underline underline-offset-4">
              Resume
            </a>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 border-t border-gray-100 scroll-mt-24">
          <h2 className="text-3xl font-light text-gray-900 mb-12">Experience</h2>
          
          <div className="space-y-16">
            {/* CirrusLabs */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-900">Software Development Intern</h3>
                  <p className="text-gray-600">CirrusLabs</p>
                </div>
                <p className="text-sm text-gray-500">May - Aug 2025</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Built a KPI dashboard using React, Django, NeonDB, and Python, deployed to Azure. 
                Contributed to Lockthreat GRC enterprise compliance tool and presented at cybersecurity demo.
              </p>
            </div>

            {/* Visa */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-900">Financial Technology Consultant</h3>
                  <p className="text-gray-600">Visa</p>
                </div>
                <p className="text-sm text-gray-500">Jan - May 2025</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Performed technical analysis of competitor technology providers and API integrations. 
                Mapped debit processing workflows and proposed automation solutions. 
                Presented findings to Visa DPS executives.
              </p>
              {/* Visa Images Placeholder */}
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-400">Team Photo</span>
                </div>
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-400">Timeline</span>
                </div>
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-400">Takeaways</span>
                </div>
              </div>
            </div>

            {/* Data Annotation */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-900">AI Trainer</h3>
                  <p className="text-gray-600">Data Annotation Tech</p>
                </div>
                <p className="text-sm text-gray-500">Jan 2024 - Present</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Curate datasets to improve NLP accuracy in entity recognition and sentiment analysis. 
                Streamline data labeling workflows and maintain quality standards.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="py-20 border-t border-gray-100 scroll-mt-24">
          <h2 className="text-3xl font-light text-gray-900 mb-12">Leadership</h2>
          
          <div className="space-y-16">
            {/* KTP */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-medium text-gray-900">Kappa Theta Pi</h3>
                    <a href="https://ktpgeorgia.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  <p className="text-gray-600">Co-Founder & VP of Professional Development</p>
                </div>
                <p className="text-sm text-gray-500">Sept 2024 - Present</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Lead professional development: workshops, speakers, hackathons. 
                Grew membership to 50+ students in inaugural year. 
                Co-leading portfolio website development for art students.
              </p>
            </div>

            {/* SheCanCode */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-medium text-gray-900">SheCanCode</h3>
                    <a href="https://www.uga-shecancode.dev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  <p className="text-gray-600">Treasurer</p>
                </div>
                <p className="text-sm text-gray-500">Sept 2024 - Present</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Raised $500+ through fundraising initiatives. 
                Manage budget for Women in CS mentorship program.
              </p>
            </div>

            {/* Terry FinTech */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-900">Terry FinTech Society</h3>
                  <p className="text-gray-600">Member</p>
                </div>
                <p className="text-sm text-gray-500">Jan 2024 - Present</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Developed algorithms to monitor 10+ cryptocurrencies. 
                Presented portfolio strategy for mock trading competition.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 border-t border-gray-100 scroll-mt-24">
          <h2 className="text-3xl font-light text-gray-900 mb-12">Projects</h2>
          
          <div className="space-y-16">
            {/* Grocery App */}
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Grocery Optimization Application</h3>
              <p className="text-sm text-gray-500 mb-4">Java, JavaFX, APIs</p>
              <p className="text-gray-700 leading-relaxed">
                Developed a Java-based application to optimize grocery purchases by mapping recipe ingredients to products 
                and displaying affordable options. Integrated Spoonacular and UPC Database APIs.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 border-t border-gray-100 scroll-mt-24">
          <h2 className="text-3xl font-light text-gray-900 mb-12">Skills</h2>
          
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Languages</h3>
              <p className="text-gray-700 leading-relaxed">
                Java, Python, JavaScript, HTML/CSS, SQL, LaTeX
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Tools & Frameworks</h3>
              <p className="text-gray-700 leading-relaxed">
                React, Django, MongoDB, Git, VS Code, Azure, AWS, Jira
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="py-20 border-t border-gray-100">
          <h2 className="text-3xl font-light text-gray-900 mb-12">Education</h2>
          
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-medium text-gray-900">University of Georgia</h3>
                <p className="text-gray-700">B.S. Computer Science</p>
                <p className="text-gray-700">Minor in Business, Certificate in FinTech</p>
              </div>
              <p className="text-sm text-gray-500">Expected May 2027</p>
            </div>
            <div className="space-y-2 text-gray-700">
              <p><span className="font-medium">Coursework:</span> Data Structures and Algorithms, Systems Programming, Applied Linear Algebra, Discrete Mathematics</p>
              <p><span className="font-medium">Certifications:</span> AWS Cloud Practitioner</p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-8 py-12 border-t border-gray-100">
        <p className="text-sm text-gray-500 text-center">
          © 2024 Manya Vikram
        </p>
      </footer>
    </div>
  );
}