export type ReportSection = {
  id: string
  label: string
}

export type EvidenceItem = {
  title: string
  body: string
  sourceLabel: string
  sourceHref: string
}

export type HurtItem = {
  title: string
  body: string
}

export type Recommendation = {
  title: string
  body: string
  steps: string[]
}

export type RoadmapItem = {
  phase: string
  body: string
}

export type ReferenceLink = {
  label: string
  href: string
}

export const reportSections: ReportSection[] = [
  { id: 'overview', label: 'Executive summary' },
  { id: 'diagnosis', label: 'Diagnosis' },
  { id: 'hurts', label: 'What it hurts' },
  { id: 'recommendations', label: 'What to build' },
  { id: 'next', label: 'Next steps' },
]

export const executiveSummaryBullets = [
  'The BID’s digital information system is becoming a constraint on the economic-development work it wants to do.',
  'The district already has real assets, but they are not being organized into a strong enough system for signaling opportunity, coordinating action, and supporting decisions.',
  'The immediate priority is not more pages. It is better information infrastructure.',
]

export const diagnosisIntro =
  'The main finding is that the digital presence already contains useful facts, listings, and support references, but does not yet function as a strong information system for the district. That matters because information problems quickly become coordination problems: sometimes everyone is waiting because everyone thinks everyone else is waiting. Good information infrastructure creates a shared, audited factual base that changes behavior and helps a place plan together, fund together, deliver together, and adjust together.'

export const evidenceItems: EvidenceItem[] = [
  {
    title: 'Brooklyn College and local talent are visible, but not operationalized.',
    body:
      'The BID already points to Brooklyn College and a local population base, including about 19,000 students and faculty plus roughly 350,000 nearby residents. That should read as a talent and partnership advantage, but the current digital layer does not turn it into a real jobs, internship, or employer pipeline or a visible talent pool for employers.',
    sourceLabel: 'About Flatbush',
    sourceHref: 'https://www.exploreflatbush.com/about-flatbush/',
  },
  {
    title: 'Local finance is present, but not organized as a business advantage.',
    body:
      'The public business guide already shows a meaningful capital base in the district, including national banks, smaller local financial institutions, and credit unions. For BR&E work, that is crucial: the BID should be able to see, explain, and route businesses toward available capital when merchants need help with working capital, build-out costs, equipment, or short-term operating pressure. Right now that finance presence reads more like a directory listing than a usable capital-access system. It does not clearly show what kinds of support are available, who they are for, or how the BID could use those institutions in real retention and expansion work.',
    sourceLabel: 'Business Resource Guide',
    sourceHref: 'https://www.exploreflatbush.com/business-resource-guide/',
  },
  {
    title: 'Commercial opportunity is visible, but not site-selection-ready.',
    body:
      'Vacancies are listed, but the real-estate layer does not yet provide the structured information a serious operator would want for quick evaluation: better data, clearer comparisons, and a stronger opportunity narrative.',
    sourceLabel: 'Real Estate',
    sourceHref: 'https://www.exploreflatbush.com/real-estate/',
  },
  {
    title: 'Support and reporting are too generic.',
    body:
      'The BID clearly offers help, but the public feedback path is still generic and the district-data layer is still too static. That makes it harder to capture merchant constraints, corridor issues, and recurring patterns as usable intelligence, and harder for residents or business owners to know whether something was seen, logged, and taken seriously.',
    sourceLabel: 'Contact Us and BID Data',
    sourceHref: 'https://www.exploreflatbush.com/contact-us/',
  },
]

export const hurtItems: HurtItem[] = [
  {
    title: 'Business attraction',
    body:
      'If district information is thin or scattered, prospective operators do not get a strong enough case for why the Junction is worth attention.',
  },
  {
    title: 'Brooklyn College and workforce connection',
    body:
      'If talent information is weak, the BID misses the chance to turn Brooklyn College and the surrounding population into a visible labor advantage for local employers.',
  },
  {
    title: 'Local finance and support visibility',
    body:
      'If support resources remain buried in lists, merchants and incoming businesses are less likely to see how much local help and financial access is actually available.',
  },
  {
    title: 'BR&E and merchant intelligence',
    body:
      'If complaints, support requests, and recurring business constraints are not captured systematically, the BID loses the chance to turn service activity into corridor intelligence. The small-firm tail matters most here: the corner store, home-based business, and small contractor often carry real local employment but rarely show up clearly without deliberate information systems.',
  },
  {
    title: 'Funders and strategic partners',
    body:
      'If the BID cannot show disciplined district reporting and a clear opportunity picture, it has a weaker case when approaching funders, partners, and institutional allies.',
  },
]

export const recommendations: Recommendation[] = [
  {
    title: 'Build a stronger district information layer',
    body:
      'The BID should make it easy for anyone looking up the district to find as much high-quality information as possible about what the place has, what the BID does, and where someone should go next.',
    steps: [
      'Tighten the district narrative around assets, opportunity, and support.',
      'Repair weak or placeholder business-directory and map experiences.',
      'Make key facts, services, and business pathways easier to find and trust so latent advantages are actually visible.',
    ],
  },
  {
    title: 'Create a real opportunity and site-selection layer',
    body:
      'The BID should present vacancies and business opportunity in a way that is useful to operators, brokers, and partners.',
    steps: [
      'Turn property listings into a more structured vacancy layer.',
      'Connect vacancies to district facts, traffic, and anchor institutions.',
      'Publish short opportunity briefs for likely business categories.',
    ],
  },
  {
    title: 'Build a jobs and talent layer',
    body:
      'The BID should organize local talent information so employers, residents, and Brooklyn College can connect more directly.',
    steps: [
      'Show residents nearby jobs, internships, and pathways.',
      'Show employers the local talent pool available around the district and around Brooklyn College.',
      'Use periodic employer nudges to keep the resource active and visible.',
    ],
  },
  {
    title: 'Create a BID intake and intelligence layer',
    body:
      'The BID should capture complaints, support requests, merchant issues, and documents in a structured format that supports follow-through and learning.',
    steps: [
      'Make issue reporting and feedback prominent for residents, tenants, and business owners.',
      'Use structured intake for street cleaning, graffiti, merchant support, and corridor problems, with visible status where appropriate.',
      'Track recurring patterns and report what was raised, fixed, and unresolved so the system becomes a source of BR&E intelligence rather than just a form inbox.',
    ],
  },
]

export const roadmap: RoadmapItem[] = [
  {
    phase: 'First phase',
    body:
      'Begin working sessions around the district story, the key facts, the weak directory/map experiences, and the issue-reporting path so the BID can decide what information needs to be made public, what needs to be structured, and what needs owners.',
  },
  {
    phase: 'Second phase',
    body:
      'Publish a simple recurring State of the Junction dashboard and improve the vacancy and opportunity layer so the BID starts building a shared factual base that partners and funders can trust.',
  },
  {
    phase: 'Third phase',
    body:
      'Add the jobs and talent system plus the structured intake and intelligence system so the BID starts learning from what it captures, especially from small firms and recurring corridor issues.',
  },
]

export const nextStepNote =
  'As a benchmark for what stronger information infrastructure can look like, One Louisville is useful because it brings together data and statistics, a property locator, talent and workforce information, and small-business resources into one clearer economic-development information system.'

export const nextStepLinks: ReferenceLink[] = [
  {
    label: 'One Louisville',
    href: 'https://onelouisville.org/',
  },
  {
    label: 'One Louisville Data & Statistics',
    href: 'https://onelouisville.org/data-statistics/',
  },
  {
    label: 'One Louisville Property Locator',
    href: 'https://onelouisville.org/property-locator/',
  },
  {
    label: 'One Louisville Talent & Workforce',
    href: 'https://onelouisville.org/talent-workforce/',
  },
  {
    label: 'One Louisville Small Business Resources',
    href: 'https://onelouisville.org/small-business-resources/',
  },
]
