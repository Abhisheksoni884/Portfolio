import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ChevronRight, ArrowRight, Code2, Brain, Zap, Award, Sparkles, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const elements = document.querySelectorAll('.scroll-fade');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-foreground font-body overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'nav-scrolled' : 'bg-transparent'}`}>
        <div className="container flex items-center justify-between h-16">
          <div className={`font-display text-2xl font-bold transition-colors duration-500 ${isScrolled ? 'text-white' : 'gradient-text'} animate-fadeInDown`}>Abhishek Soni</div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-8">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors duration-300 underline-animate ${isScrolled ? 'text-white/90 hover:text-white' : 'hover:text-primary'}`}
                >
                  {item}
                </a>
              ))}
            </div>
            <a
              href="https://drive.google.com/uc?export=download&id=1UpOdSmGHWd6A3twwzo5IXdg0xkXGB98P"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm font-bold transition-all duration-300 px-4 py-2 rounded-lg ${isScrolled ? 'bg-accent text-primary hover:bg-accent/90' : 'bg-primary text-white hover:bg-primary/90'} hover-lift shadow-md`}
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 gradient-bg overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Left-aligned badge */}
            <div className="mb-12 animate-fadeInUp">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50/50 text-primary font-semibold text-sm rounded-full border border-amber-200 hover:border-amber-400 hover:shadow-md transition-all duration-300">
                <Sparkles className="w-4 h-4" />
                AI/ML Engineer & Full-Stack Developer
              </span>
            </div>

            {/* Left-aligned headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight animate-fadeInUp text-left">
              Building <span className="text-primary">Production-Scale</span> <br />
              <span className="text-primary">AI Systems</span>
            </h1>

            {/* Left-aligned description */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl animate-fadeInUp text-left">
              1.5+ years architecting agentic systems, multimodal AI pipelines, and LLM-powered voice applications. Specialized in FastAPI services, RAG architectures, and full-stack AI integration.
            </p>

            {/* Left-aligned CTA buttons */}
            <div className="flex gap-4 flex-wrap mb-16 animate-fadeInUp justify-start">
              <button
                onClick={() => window.location.href = 'mailto:abhisheksoni1908@gmail.com'}
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white hover:bg-primary/90 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover-lift cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </button>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary hover:bg-primary/5 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover-lift"
              >
                Explore My Work
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Left-aligned social links */}
            <div className="flex gap-4 justify-start animate-fadeInUp">
              {[
                { icon: Github, label: 'GitHub', href: 'https://github.com', color: 'hover:bg-gray-800 hover:text-white' },
                { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/abhishek-soni', color: 'hover:bg-primary hover:text-white' },
                { icon: Mail, label: 'Email', href: 'mailto:abhisheksoni1908@gmail.com', color: 'hover:bg-primary hover:text-white' }
              ].map(({ icon: Icon, label, href, color }, i) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`p-3 rounded-xl bg-white/80 border border-border shadow-md transition-all duration-500 hover-lift ${color}`}
                  title={label}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Navy Blue Gradient */}
      <section className="py-20 gradient-bg-blue text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: 'Years Experience', value: '1.5+' },
              { label: 'Projects Completed', value: '10+' },
              { label: 'Technologies', value: '20+' },
              { label: 'Team Members', value: '50+' }
            ].map((stat, i) => (
              <div key={stat.label} className="text-center animate-bounce-in" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="text-5xl font-bold mb-2 animate-pulse-glow">{stat.value}</div>
                <p className="text-white/90 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Left aligned content */}
      <section id="about" className="py-24 md:py-32">
        <div className="container">
          <div className="mb-16">
            <span className="text-primary font-semibold text-sm">ABOUT ME</span>
            <div className="h-1 w-16 bg-gradient-to-r from-primary via-accent to-primary rounded-full mt-3 mb-6" />
            <h2 className="text-5xl md:text-6xl font-bold text-foreground max-w-3xl text-left">Transforming Ideas Into Intelligent Systems</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl">
            <div className="scroll-fade" id="about-content">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed animate-fadeInUp text-left">
                I'm passionate about building scalable, production-ready AI systems that solve real-world problems. My expertise spans the full spectrum of AI development—from model architecture and optimization to deployment and monitoring.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fadeInUp text-left">
                Currently at Cogbee Technologies, I architect real-time AI systems with sub-300ms latency and develop advanced computer vision pipelines. I thrive on transforming complex ML challenges into elegant, efficient solutions.
              </p>

              <div className="space-y-4">
                {[
                  'Production-scale agentic systems',
                  'Multimodal AI pipelines & LLM integration',
                  'Real-time voice applications',
                  'Computer vision & OCR systems'
                ].map((item, i) => (
                  <div key={item} className="flex items-start gap-3 animate-fadeInUp text-left" style={{ animationDelay: `${i * 0.1}s` }}>
                    <span className="w-2.5 h-2.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="scroll-fade card-premium p-12 relative overflow-hidden border border-accent/30" id="about-visual">
              <div className="absolute inset-0 bg-secondary/50 rounded-2xl" />
              <div className="relative z-10 center-content h-96">
                <div className="text-center">
                  <div className="text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 animate-pulse-glow">1.5+</div>
                  <p className="text-foreground font-semibold mb-2 text-lg">Years of Experience</p>
                  <p className="text-muted-foreground">Building production-scale AI systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Right aligned */}
      <section id="experience" className="py-24 md:py-32 bg-gradient-to-b from-indigo-50/30 to-white">
        <div className="container">
          <div className="mb-16">
            <span className="text-primary font-semibold text-sm">PROFESSIONAL JOURNEY</span>
            <div className="h-1 w-16 bg-gradient-to-r from-primary via-accent to-primary rounded-full mt-3 mb-6" />
            <h2 className="text-5xl md:text-6xl font-bold text-foreground text-left">Experience</h2>
          </div>

          <div className="space-y-8 max-w-5xl">
            {[
              {
                title: 'AI/ML Engineer',
                company: 'Cogbee Technologies',
                period: 'July 2025 - Present',
                location: 'Ahmedabad',
                achievements: [
                  'Architected real-time AI interview agent using LiveKit with sub-300ms latency',
                  'Developed Python-based AI proctoring microservice with FastAPI',
                  'Built CNN-based OCR model for CAPTCHA prediction',
                  'Integrated voice capabilities with custom STT-LLM-TTS pipeline'
                ]
              },
              {
                title: 'AI/ML Trainee Consultant',
                company: 'Inexture Solutions',
                period: 'September 2024 - March 2025',
                location: 'Ahmedabad',
                achievements: [
                  'Gained hands-on experience in ML, DL, NLP, and LLM systems',
                  'Built and deployed AI models with focus on data pipelines',
                  'Developed expertise in RAG systems and FastAPI services',
                  'Completed comprehensive AI/ML training certification'
                ]
              }
            ].map((exp, idx) => (
              <div
                key={exp.title}
                className="scroll-fade card-premium p-8 md:p-10 border-l-4 border-amber-400 hover:border-amber-600 transition-colors duration-300 bg-slate-50/30"
                id={`exp-${idx}`}
              >
                <div className="flex justify-between items-start mb-6 flex-col md:flex-row gap-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{exp.title}</h3>
                    <p className="text-primary font-semibold text-lg">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground font-medium">{exp.period}</p>
                    <p className="text-muted-foreground text-sm">{exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={achievement} className="flex gap-3 text-foreground animate-fadeInUp text-left" style={{ animationDelay: `${i * 0.1}s` }}>
                      <span className="text-yellow-600 font-bold flex-shrink-0">→</span>
                      <span className="text-lg">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Centered */}
      <section id="projects" className="py-24 md:py-32">
        <div className="container">
          <div className="center-content mb-16">
            <span className="text-primary font-semibold text-sm">FEATURED WORK</span>
            <div className="h-1 w-16 bg-gradient-to-r from-primary via-accent to-primary rounded-full mt-3 mb-6" />
            <h2 className="text-5xl md:text-6xl font-bold text-primary">Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Zap,
                title: 'AI Interview Agent',
                description: 'Real-time AI interview agent using LiveKit with sub-300ms latency for human-like voice interactions.',
                tags: ['LiveKit', 'Python', 'WebSocket', 'Real-time'],
                link: 'https://github.com'
              },
              {
                icon: Brain,
                title: 'AI Proctoring Microservice',
                description: 'FastAPI-based video analysis with speaker diarization, lip-sync detection, and gaze tracking. 60% performance improvement.',
                tags: ['FastAPI', 'Computer Vision', 'Optimization'],
                link: 'https://github.com'
              },
              {
                icon: Code2,
                title: 'Document Data Extraction & Form Automation',
                description: 'Intelligent document parsing system that extracts data from PDF, DOCX, and multiple formats. Automatically populates form fields with extracted data.',
                tags: ['Document Processing', 'OCR', 'Form Automation'],
                link: 'https://github.com'
              },
              {
                icon: Award,
                title: 'AI Prescription Verification',
                description: 'GenAI chatbot using LLM and Tesseract OCR for prescription verification with Streamlit interface.',
                tags: ['LLM', 'OCR', 'Streamlit'],
                link: 'https://github.com'
              }
            ].map((project, idx) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.title}
                  className="scroll-fade card-premium overflow-hidden group hover:border-amber-400 transition-colors duration-300 border border-border bg-white"
                  id={`project-${idx}`}
                >
                  <div className="p-8 h-48 flex items-center justify-center relative overflow-hidden bg-slate-50/50">
                    <Icon className="w-20 h-20 transition-all duration-500 text-primary/30 group-hover:text-amber-400 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="p-8 bg-white h-full">
                    <h3 className="text-2xl font-bold text-primary mb-3 transition-colors duration-300">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 text-base leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-amber-50/50 text-primary text-xs font-semibold rounded-full border border-amber-200 group-hover:border-amber-400 transition-colors duration-300">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-bold text-base hover:opacity-80 transition-opacity duration-300 flex items-center gap-1 group/link"
                    >
                      Learn More &gt;
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section - Centered */}
      <section id="skills" className="py-24 md:py-32 bg-gradient-to-b from-indigo-50/30 to-white">
        <div className="container">
          <div className="center-content mb-16">
            <span className="text-primary font-semibold text-sm">TECHNICAL EXPERTISE</span>
            <div className="h-1 w-16 bg-gradient-to-r from-primary via-accent to-primary rounded-full mt-3 mb-6" />
            <h2 className="text-5xl md:text-6xl font-bold text-primary">Skills</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'Programming', skills: ['Python', 'Java', 'C++', 'JavaScript', 'TypeScript'] },
              { title: 'AI/ML & Deep Learning', skills: ['LLM', 'RAG', 'NLP', 'Computer Vision', 'PyTorch', 'TensorFlow', 'Langchain'] },
              { title: 'AI/Voice Frameworks', skills: ['LiveKit', 'ElevenLabs', 'Video SDK', 'Google API', 'Whisper', 'STT/TTS'] },
              { title: 'Frameworks & Tools', skills: ['FastAPI', 'Docker', 'PostgreSQL', 'Git', 'Streamlit'] },
              { title: 'Web Development', skills: ['HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'React'] },
              { title: 'DevOps & Architecture', skills: ['Websockets', 'MCP', 'CI/CD', 'Microservices', 'RPC'] }
            ].map((category, idx) => (
              <div
                key={category.title}
                className="scroll-fade card-premium p-8 hover:shadow-lg hover:border-amber-400 transition-all duration-300 bg-slate-50/30 border border-border"
                id={`skill-${idx}`}
              >
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <span className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full" />
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <div key={skill} className="flex items-center gap-2 text-foreground hover:text-accent transition-colors duration-300 text-left" style={{ animationDelay: `${i * 0.05}s` }}>
                      <span className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full" />
                      <span className="text-base">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section - Left aligned */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="mb-16">
            <span className="text-primary font-semibold text-sm">EDUCATION & CERTIFICATIONS</span>
            <div className="h-1 w-16 bg-gradient-to-r from-primary via-accent to-primary rounded-full mt-3 mb-6" />
            <h2 className="text-5xl md:text-6xl font-bold text-primary text-left">Education</h2>
          </div>

          <div className="space-y-6 max-w-3xl">
            {[
              { degree: 'MSc-IT', school: 'Aryan International College, Ajmer', score: '75%', year: '2023 - 2025' },
              { degree: 'BSc-IT', school: 'Aryan International College, Ajmer', score: '73.7%', year: '2020 - 2023' },
              { degree: 'AI/ML Training Certification', school: 'Inexture Solutions', score: 'Completed', year: '2025' }
            ].map((edu, idx) => (
              <div key={edu.degree} className="scroll-fade card-premium p-8 border-r-4 border-accent transition-colors duration-300 card-sample-gradient" id={`edu-${idx}`}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{edu.degree}</h3>
                    <p className="text-muted-foreground text-lg">{edu.school}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-primary font-semibold text-lg">{edu.score}</p>
                    <p className="text-muted-foreground text-sm">{edu.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 md:py-32 gradient-bg-blue text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <div className="center-content max-w-3xl mx-auto">
            <h2 className="text-6xl md:text-7xl font-bold mb-8 animate-fadeInUp">
              Let's Build Something <span className="text-accent">Amazing</span>
            </h2>

            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed animate-fadeInUp">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hello, feel free to reach out!
            </p>

            <div className="flex gap-4 justify-center flex-wrap animate-fadeInUp">
              <button
                onClick={() => window.location.href = 'mailto:abhisheksoni1908@gmail.com'}
                className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-primary hover:bg-accent/90 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover-lift cursor-pointer border-2 border-white"
              >
                <Mail className="w-4 h-4" />
                Email Me
              </button>
              <a
                href="https://linkedin.com/in/abhishek-soni"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary border-2 border-white text-white hover:opacity-90 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover-lift"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary border-2 border-white text-white hover:opacity-90 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover-lift"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-gradient-to-b from-indigo-50/20 to-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">© 2025 Abhishek Soni. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="tel:8239278936" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                +91 8239278936
              </a>
              <a href="mailto:abhisheksoni1908@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                abhisheksoni1908@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
