import Image from 'next/image';
import Link from 'next/link';
import ContactForm from './components/ContactForm';
import ThemeAndTopButton from './components/ThemeAndTopButton';

const skills = [
  {
    category: 'Frontend',
    items: ['React 18', 'TypeScript', 'Next.js', 'CSS/Tailwind', 'Flutter', 'React Native'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'Django', 'Flask', 'Python', 'Firebase', 'Supabase'],
  },
  {
    category: 'Tools & Services',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite', 'Git', 'Docker', 'Vertex AI'],
  },
];

const projects = [
  {
    id: 'trelio',
    title: 'Trelio',
    description: 'A secure digital wellness platform for therapy, coaching, and guided reflection.',
    tech: ['React', 'Node.js', 'Firebase', 'TypeScript'],
    repo: 'https://github.com/kenkipkoec/trelio',
    image: '/trelio.png',
  },
  {
    id: 'homecare-hub',
    title: 'HomeCare Hub',
    description: 'Service marketplace connecting customers with verified home care and pest control providers.',
    tech: ['React', 'Django', 'PostgreSQL', 'Stripe'],
    repo: 'https://github.com/kenkipkoec/homecare-hub',
    image: '/homecare.png',
  },
  {
    id: 'crm-web-app',
    title: 'CRM Web App',
    description: 'Business dashboard for managing leads, pipelines, and tracking growth metrics.',
    tech: ['React', 'TypeScript', 'PostgreSQL', 'Next.js'],
    repo: 'https://github.com/kenkipkoec/crm-web-app',
    image: '/crm.png',
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <div className="nav-inner">
          <Link href="#home" className="brand">
            Ngetich Ken
          </Link>
          <nav className="nav-links">
            <Link href="#about">About</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#architecture">Architecture</Link>
            <Link href="#contact">Contact</Link>
            <Link href="#resume">Resume</Link>
          </nav>
          <ThemeAndTopButton />
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <div className="profile-section">
            <div className="profile-photo-wrapper">
              <Image src="/myprofile.png" alt="Ngetich Ken profile photo" fill sizes="(max-width: 768px) 80vw, 280px" style={{ objectFit: 'cover' }} />
              <div className="profile-text">Ngetich Ken</div>
            </div>
          </div>
          <div className="hero-text">
            <span className="eyebrow">Full-Stack Developer</span>
            <h1>Hello, I'm Ngetich Ken</h1>
            <p className="hero-description">
              I build quality web and mobile products with a focus on clean code, reliability, and exceptional user experience. Always punctual, collaborative, and committed to delivering excellence.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="#contact">
                Get in Touch
              </Link>
              <Link className="button button-secondary" href="#resume">
                Check my Resume
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="section-head">
          <h2>About Me</h2>
        </div>
        <div className="about-content">
          <div className="about-card">
            <h3>Quality Delivery</h3>
            <p>
              I'm committed to delivering code that is clean, well-tested, and production-ready. Every line counts, and I ensure that the final product meets the highest standards.
            </p>
          </div>
          <div className="about-card">
            <h3>Punctuality & Reliability</h3>
            <p>
              Deadlines matter. I pride myself on delivering projects on time while maintaining quality. You can rely on me to be consistent and dependable.
            </p>
          </div>
          <div className="about-card">
            <h3>Team Collaboration</h3>
            <p>
              I thrive in collaborative environments. Clear communication, supporting team members, and sharing knowledge make better products and stronger teams.
            </p>
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-head">
          <h2>Skills & Technologies</h2>
          <p>Tools and technologies I use to build exceptional products</p>
        </div>
        <div className="skill-grid">
          {skills.map((skillGroup) => (
            <article key={skillGroup.category} className="skill-card">
              <h3>{skillGroup.category}</h3>
              <ul>
                {skillGroup.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="section-head">
          <h2>Projects I've Built</h2>
          <p>Showcasing my work across different domains</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-image-wrap">
                <Image src={project.image} alt={`${project.title} preview`} width={400} height={240} />
              </div>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.repo} target="_blank" rel="noreferrer" className="button button-secondary">
                View Repository
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section architecture-section" id="architecture">
        <div className="section-head">
          <h2>My Approach & Architecture</h2>
          <p>How I design and build scalable, maintainable solutions</p>
        </div>
        <div className="architecture-grid">
          <article className="arch-card">
            <h3>🏗️ Clean Architecture</h3>
            <p>I follow industry best practices with separation of concerns, modular design, and clear dependencies. Every layer serves a purpose, making code easier to test, maintain, and scale.</p>
          </article>
          <article className="arch-card">
            <h3>⚡ Performance First</h3>
            <p>Optimization is built in from the start. Efficient algorithms, caching strategies, lazy loading, and minimal bundle sizes ensure fast load times and smooth user experiences.</p>
          </article>
          <article className="arch-card">
            <h3>🔒 Security by Design</h3>
            <p>Authentication, authorization, data validation, and protection against common vulnerabilities are integrated throughout. User data security is non-negotiable.</p>
          </article>
          <article className="arch-card">
            <h3>🧪 Test-Driven Development</h3>
            <p>Comprehensive test coverage ensures reliability. Unit tests, integration tests, and end-to-end tests catch issues early and give confidence in deployments.</p>
          </article>
          <article className="arch-card">
            <h3>📱 Responsive & Accessible</h3>
            <p>Every product works beautifully on all devices. Accessibility standards ensure inclusive design that works for everyone, regardless of their abilities.</p>
          </article>
          <article className="arch-card">
            <h3>🔄 Continuous Improvement</h3>
            <p>Monitoring, logging, and analytics guide decisions. Feedback loops help me iterate quickly, fix issues, and continuously improve the product.</p>
          </article>
        </div>
      </section>

      <section className="section resume-section" id="resume">
        <div className="section-grid">
          <div>
            <h2>Resume / CV</h2>
            <p>Download my detailed resume to learn more about my experience, education, and qualifications.</p>
            <div className="resume-card">
              <div className="resume-preview">
                <div className="pdf-icon">📄</div>
                <div className="resume-info">
                  <h3>Ken Kipkoech Ngetich</h3>
                  <p>Full-Stack Developer & Software Engineer</p>
                </div>
              </div>
              <div className="resume-actions">
                <a href="/Ken%20Kipkoech%20Ngetich%20(kenaki).pdf" download="Ken Kipkoech Ngetich (kenaki).pdf" className="btn btn-primary">
                  Download CV
                </a>
                <a href="/Ken%20Kipkoech%20Ngetich%20(kenaki).pdf" target="_blank" rel="noreferrer" className="btn btn-secondary">
                  View Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="section-grid contact-grid">
          <div>
            <h2>Ready to build something better?</h2>
            <p>I’m available for freelance work, collaborations, and senior engineering roles.</p>
            <div className="contact-card contact-details">
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:itsmetrokenaki@gmail.com">itsmetrokenaki@gmail.com</a>
              </p>
              <div className="social-links">
                <a href="https://github.com/kenkipkoec" className="social-icon github" title="GitHub" target="_blank" rel="noreferrer">
                  <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
                </a>
                <a href="https://wa.me/254115042040" className="social-icon whatsapp" title="WhatsApp" target="_blank" rel="noreferrer">
                  <img src="/whatsapp.png" alt="WhatsApp" />
                </a>
                <a href="https://linkedin.com/in/ngetich-ken" className="social-icon linkedin" title="LinkedIn" target="_blank" rel="noreferrer">
                  <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-card contact-form-card">
            <h3>Contact Me</h3>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <p>Handcrafted with care • Built with Next.js • Always learning</p>
        <p className="copyright">© 2026 All rights reserved • Ngetich Ken</p>
      </footer>
    </main>
  );
}
