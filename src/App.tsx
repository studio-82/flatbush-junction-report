import { useEffect, useState } from 'react'
import './App.css'
import {
  diagnosisIntro,
  evidenceItems,
  hurtItems,
  nextStepLinks,
  nextStepNote,
  recommendations,
  reportSections,
  roadmap,
} from './reportData'

function App() {
  const [activeSection, setActiveSection] = useState(reportSections[0].id)

  useEffect(() => {
    const sections = reportSections
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section instanceof HTMLElement)

    if (!sections.length) {
      return
    }

    const updateActiveSection = () => {
      const triggerLine = window.innerHeight * 0.22
      let nextActive = sections[0].id

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= triggerLine) {
          nextActive = section.id
        } else {
          break
        }
      }

      setActiveSection((current) => (current === nextActive ? current : nextActive))
    }

    let ticking = false

    const onScrollOrResize = () => {
      if (ticking) {
        return
      }

      ticking = true
      window.requestAnimationFrame(() => {
        updateActiveSection()
        ticking = false
      })
    }

    updateActiveSection()
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)

    return () => {
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
    }
  }, [])

  return (
    <div className="app-shell">
      <aside className="sidebar" aria-label="Report navigation">
        <div className="sidebar__inner">
          <p className="sidebar__label">Contents</p>
          <ul className="sidebar__list">
            {reportSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={activeSection === section.id ? 'is-active' : undefined}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <main className="article">
        <header className="article__header">
          <div className="hero">
            <div className="hero__lead">
              <p className="hero__caption">Flatbush Junction BID</p>
              <h1>Information as infrastructure</h1>
              <p className="deck">
                A short report on how the BID&apos;s digital information system is becoming a
                constraint on the economic-development work it wants to do, and what can be
                done to address that problem.
              </p>
            </div>
          </div>
        </header>

        <section id="overview" data-section className="article__section">
          <SectionHeader
            kicker="Executive summary"
            title="The BID’s digital information system is too weak for the economic-development job it is trying to do."
          />
          <p className="lede">
            The digital layer does not yet do enough to surface district assets,
            coordinate action, support local hiring, or turn day-to-day activity into
            usable economic-development intelligence.
          </p>
          <p>
            The district already has meaningful assets, including Brooklyn College, local
            finance institutions, commercial vacancies, merchant-support resources, and a
            base of corridor activity that should be easier to measure and communicate. The
            problem is that these assets are not being organized into a system strong enough
            to signal opportunity, coordinate action, and produce usable intelligence.
          </p>
        </section>

        <section id="diagnosis" data-section className="article__section">
          <SectionHeader
            kicker="Diagnosis"
            title="The digital layer already contains useful signals, but it does not yet organize them into a strong district system."
          />
          <p>{diagnosisIntro}</p>
          <p className="module-label">Findings</p>
          <div className="simple-list">
            {evidenceItems.map((item, index) => (
              <article key={item.title} className="simple-list__item">
                <h3>
                  {index + 1}. {item.title}
                </h3>
                <p>{item.body}</p>
                <p className="muted-copy">
                  Source:{' '}
                  <a href={item.sourceHref} target="_blank" rel="noreferrer">
                    {item.sourceLabel}
                  </a>
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="hurts" data-section className="article__section">
          <SectionHeader
            kicker="What it hurts"
            title="Weak information infrastructure is already limiting the BID in five concrete ways."
          />
          <div className="simple-list">
            {hurtItems.map((item) => (
              <article key={item.title} className="simple-list__item">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="recommendations" data-section className="article__section">
          <SectionHeader
            kicker="What to build"
            title="The next move is to build a stronger information system in four parts."
          />
          <div className="simple-list">
            {recommendations.map((recommendation) => (
              <article key={recommendation.title} className="simple-list__item">
                <h3>{recommendation.title}</h3>
                <p>{recommendation.body}</p>
                <ul className="article-list">
                  {recommendation.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="next" data-section className="article__section">
          <SectionHeader
            kicker="Next steps"
            title="A sensible first phase is straightforward."
          />
          <div className="simple-list">
            {roadmap.map((item) => (
              <article key={item.phase} className="simple-list__item">
                <p className="roadmap-phase">{item.phase}</p>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <div className="summary-box">
            <p>{nextStepNote}</p>
            <ul className="article-list">
              {nextStepLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}

function SectionHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <header className="section-header">
      <p className="eyebrow">{kicker}</p>
      <h2>{title}</h2>
    </header>
  )
}

export default App
