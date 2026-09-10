import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa6";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Competitions", href: "#competitions" },
  { label: "Register", href: "#register" },
  { label: "Contact", href: "#contact" },
];

const categories = [
  {
    title: "Creative Writing",
    description:
      "Develop imagination, storytelling, and structured writing skills while expressing ideas clearly and creatively.",
  },
  {
    title: "Mental Maths",
    description:
      "Enhance speed, accuracy, and logical thinking through engaging and challenging numerical activities.",
  },
  {
    title: "Quiz",
    description:
      "Test knowledge across multiple subjects and build confidence with quick thinking and smart recall.",
  },
  {
    title: "Poster Designing",
    description:
      "Encourage artistic expression and visual communication through innovative and meaningful poster creation.",
  },
  {
    title: "Public Speaking",
    description:
      "Build confidence, articulation, and persuasive communication by presenting ideas with clarity and passion.",
  },
  {
    title: "Journalism",
    description:
      "Develop reporting, writing, and storytelling skills while building awareness, research, and expression.",
  },
  {
    title: "Spelling Bee",
    description:
      "Strengthen vocabulary, spelling accuracy, and language proficiency in a fun and competitive format.",
  },
];

const steps = [
  {
    title: "Register",
    text: "Choose your preferred competition and complete your registration with ease.",
  },
  {
    title: "Participate",
    text: "Prepare and take part in your selected competition with confidence and curiosity.",
  },
  {
    title: "Evaluation",
    text: "Entries are reviewed by experienced judges based on creativity, accuracy, and performance.",
  },
  {
    title: "Recognition",
    text: "Top participants receive certificates, awards, and special recognition for their achievements.",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <nav className="nav container" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.label} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <section className="hero-section" id="home">
        <div className="container hero-inner">
          <div className="hero-banner" aria-label="Intellecta Genius Fest logo">
            <Image
              src="/logo.jpg"
              alt="Intellecta Genius Fest logo"
              width={1100}
              height={220}
              priority
              className="logo-image"
            />
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="container intro-grid">
          <div className="intro-copy">
            <p className="eyebrow">Applicant Registration</p>
            <h1>Unleash Your Genius</h1>
            <p className="lead">
              Welcome to Intellecta Genius Fest — a transformative platform
              where creativity, intelligence, and innovation come together to
              shape the leaders of tomorrow.
            </p>
            <p>
              Guided by our vision of “Unleashing the Power of Young Minds,” we
              provide students with opportunities to explore hidden talents,
              build confidence, and excel in a competitive yet inspiring
              environment.
            </p>
            <div className="cta-row">
              <Link href="#register" className="primary-btn">
                Register now
              </Link>
              <Link href="#about" className="secondary-btn">
                Learn more
              </Link>
            </div>
          </div>

          <div className="stat-card">
            <span className="stat-label">Featured event</span>
            <h2>Creative Writing</h2>
            <p>
              An inspiring stage for young storytellers, thinkers, and dreamers
              to transform imagination into impactful writing.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="container section-heading">
          <p className="eyebrow">About Intellecta</p>
          <h2>Where young minds grow into confident leaders.</h2>
        </div>

        <div className="container mission-grid">
          <article className="info-card">
            <h3>Our Mission</h3>
            <p>
              At Intellecta Genius Fest, our mission is to unleash the power of
              young minds by creating meaningful opportunities beyond
              traditional learning.
            </p>
            <ul>
              <li>Encourage creative and critical thinking</li>
              <li>Build communication and expression skills</li>
              <li>Promote curiosity, confidence, and excellence</li>
            </ul>
          </article>

          <article className="info-card accent">
            <h3>Our Vision</h3>
            <p>
              We aim to establish Intellecta Genius Fest as a trusted platform
              for creativity, innovation, and talent recognition across schools
              and communities.
            </p>
            <ul>
              <li>Inspire a new generation of thinkers and leaders</li>
              <li>Expand opportunities for student excellence</li>
              <li>Set a new standard in modern education</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="competitions-section" id="competitions">
        <div className="container section-heading">
          <p className="eyebrow">Competition categories</p>
          <h2>Explore your talent across multiple domains.</h2>
        </div>

        <div className="container categories-grid">
          {categories.map((category) => (
            <article key={category.title} className="category-card">
              <div className="category-header">
                <div className="card-bullet" aria-hidden="true" />
                <h3>{category.title}</h3>
              </div>
              <p>{category.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section">
        <div className="container section-heading">
          <p className="eyebrow">How it works</p>
          <h2>Simple steps to participate.</h2>
        </div>

        <div className="container steps-grid">
          {steps.map((step, index) => (
            <div key={step.title} className="step-card">
              <span className="step-number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="register-section" id="register">
        <div className="container register-wrap">
          <div className="register-copy">
            <p className="eyebrow">Register now</p>
            <h2>Ready to become part of the next generation of innovators?</h2>
            <p>
              Choose the category that matches your passion and complete your
              registration to showcase your talent with confidence.
            </p>
          </div>

          <div className="register-actions">
            <button>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScwiNAOAkQWvBLw3KQhOa0fssaUZ-q-nOqdNUH8SB7L_Np2Sg/viewform?usp=publish-editor"
                target="_blank"
                rel="noreferrer"
                className="register-card school-card"
                aria-label="School registration"
              >
                <div className="bg-red-500 uppercase px-4 py-4 text-white text-2xl font-semibold rounded-xl transition-transform duration-200 hover:-translate-y-1 hover:scale-[1.02]">
                  Applicant Registration
                </div>
              </a>
            </button>
            <button>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdQtNAwkZUDHIWLvG1t-Yhs6cVfoHfsFpeljNmC4dE_BSuxXA/viewform?usp=publish-editor"
                target="_blank"
                rel="noreferrer"
                className="register-card school-card"
                aria-label="School registration"
              >
                <div className="bg-orange-500 uppercase px-7 py-4 text-white text-2xl font-semibold rounded-xl transition-transform duration-200 hover:-translate-y-1 hover:scale-[1.02]">
                  School Registration
                </div>
              </a>
            </button>
          </div>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="container footer-inner">
          <div>
            <Image
              src="/logo.jpg"
              alt="Intellecta Genius Fest logo"
              width={400}
              height={100}
              priority
              className="footer-logo"
            />
          </div>

          <div className="contact-block">
            <p>
              Email:{" "}
              <a href="mailto:intellectageniusfest@gmail.com" className="text-yellow-400 hover:underline">
                intellectageniusfest@gmail.com
              </a>
            </p>

            <p>
              Phone: <a href="tel:+923002289955" className="text-yellow-400 hover:underline">
                +92 300 2289955
              </a>
              {" • "}
              <a href="tel:+923151184504" className="text-yellow-400 hover:underline">
                +92 315 1184504
              </a>
            </p>
          </div>
          <div className="socials" aria-label="Social media links">
            <a
              href="https://www.facebook.com/share/1EUuH5P6kt/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/intellecta_geniusfest?utm_source=qr&igsh=YjNoOXBlb28xN2c0"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@Intellecta-pk"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.tiktok.com/@intellecta2?_r=1&_t=ZS-95MPw4n3d48"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
