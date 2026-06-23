import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Eye,
  FileText,
  GraduationCap,
  Handshake,
  LineChart,
  LockKeyhole,
  Mail,
  MonitorCheck,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  Users
} from "lucide-react";

const email = "pnsystems.t@gmail.com";
const phoneDisplay = "(+27) 67 033 6452";
const phoneHref = "tel:+27670336452";
const mailHref = `mailto:${email}`;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

function MotionSection({ id, className = "", children }) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      variants={fadeUp}
    >
      {children}
    </motion.section>
  );
}

function SectionHeader({ eyebrow, title, children, inverse = false }) {
  return (
    <div className="max-w-3xl">
      <p className={`mb-3 text-sm font-extrabold uppercase tracking-[0.18em] ${inverse ? "text-blue-200" : "text-pns-blue"}`}>
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-black leading-tight tracking-normal md:text-5xl ${inverse ? "text-white" : "text-pns-ink"}`}>
        {title}
      </h2>
      {children ? (
        <p className={`mt-5 text-lg leading-8 ${inverse ? "text-slate-300" : "text-slate-600"}`}>{children}</p>
      ) : null}
    </div>
  );
}

function Card({ icon: Icon, title, children }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-premium"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-pns-blue transition group-hover:bg-pns-blue group-hover:text-white">
        <Icon size={24} strokeWidth={2.1} />
      </div>
      <h3 className="text-xl font-extrabold leading-snug text-pns-ink">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{children}</p>
    </motion.article>
  );
}

function App() {
  const [activeBriefing, setActiveBriefing] = useState("schools");
  const strategicLayers = [
    ["PNS", "Parent company and strategic innovation engine", "Pragma Novus Systems designs disciplined education-support systems for measurable transformation."],
    ["PNS-ESQMS", "Core educational quality architecture", "The support-quality management architecture that frames diagnostics, accountability, intervention, and improvement."],
    ["ASCEND", "Flagship live implementation platform", "The operational dashboard, intelligence, analytics, and measurable learner-support layer currently carrying the vision into practice."]
  ];

  const ascendCapabilities = [
    ["Diagnostics", "Identify learner support needs through structured evidence."],
    ["Intervention planning", "Move from concern to coordinated academic action."],
    ["Learner monitoring", "Track progress, attendance, engagement, and support signals."],
    ["Educator support", "Help educators act on evidence without losing professional judgement."],
    ["Parent visibility", "Translate progress into clear, constructive parent-facing communication."],
    ["Performance intelligence", "Turn raw activity into measurable insight for responsible decisions."]
  ];
  const modelSteps = [
    ["Context", "Understand the learner, school, institution, and programme environment before action begins."],
    ["Diagnostics", "Identify priority support areas while protecting proprietary diagnostic logic."],
    ["Intervention", "Coordinate structured academic action through role-aware support pathways."],
    ["Monitoring", "Track progress signals, participation, evidence, and accountability over time."],
    ["Improvement", "Refine support decisions as evidence shows what is working."]
  ];

  const solutions = [
    ["Educational intelligence systems", Eye, "Evidence-led visibility that helps stakeholders understand progress, priorities, and support activity."],
    ["Structured intervention pathways", GraduationCap, "A disciplined implementation layer that moves teams from diagnosis to coordinated action."],
    ["Analytics-driven monitoring", LineChart, "Review-friendly progress views that strengthen accountability without overwhelming users."],
    ["Parent and learner reporting", FileText, "Clear communication that builds confidence and keeps improvement conversations practical."],
    ["Institutional support systems", Building2, "Support architecture that strengthens existing school and organisational systems rather than replacing them."],
    ["Scalable implementation frameworks", MonitorCheck, "Programme support for education initiatives that must be visible, repeatable, measurable, and reportable."]
  ];

  const briefings = {
    schools: {
      label: "Schools",
      title: "Schools gain a clearer operating layer for academic improvement.",
      body: "PNS positions ASCEND as a structured extension of the school's academic ecosystem, improving visibility, coordination, and accountability without displacing school leadership.",
      points: [
        "Strengthens management conversations with progress evidence.",
        "Creates a clearer bridge between academic concern and action.",
        "Supports implementation discipline while protecting educator authority."
      ]
    },
    parents: {
      label: "Parents",
      title: "Parents receive progress language they can understand and trust.",
      body: "ASCEND translates educational support into measured, parent-friendly visibility. The emphasis is confidence, transparency, and constructive next-step action.",
      points: [
        "Makes learner progress easier to follow over time.",
        "Reduces uncertainty by showing that support is structured.",
        "Creates a calmer, more informed parent-school conversation."
      ]
    },
    sponsors: {
      label: "Sponsors",
      title: "Sponsors invest in support that can be measured responsibly.",
      body: "PNS gives sponsors a credible way to fund learner development through measurable milestones, responsible implementation oversight, and clear reporting language for boards, communities, and education stakeholders.",
      points: [
        "Shows how sponsored support contributes to learner confidence, academic participation, and measurable improvement.",
        "Provides reporting signals sponsors can use for impact reviews and social investment narratives.",
        "Creates a scalable structure for sponsor-backed education progression without exposing protected ESQMS mechanics."
      ]
    },
    partners: {
      label: "Partners",
      title: "Partners gain a professionally governed education systems partner.",
      body: "PNS works with education organisations, community programmes, school groups, and implementation partners that need credible structure, learner progress visibility, and accountable delivery.",
      points: [
        "Clarifies partnership roles, reporting expectations, and programme value from the outset.",
        "Supports partner conversations with schools, parents, sponsors, and community stakeholders.",
        "Positions ASCEND as visible, structured, and professionally governed."
      ]
    }
  };

  return (
    <div className="min-h-screen overflow-hidden text-pns-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-white/[0.86] backdrop-blur-xl">
        <nav className="section-shell flex min-h-[76px] items-center justify-between gap-5">
          <a href="#top" className="flex items-center gap-3" aria-label="Pragma Novus Systems home">
            <img src="/logos/pns-esqms-logo.png" alt="PNS-ESQMS Pragma Novus Systems" className="h-14 w-14 rounded-lg object-contain" />
            <div className="hidden leading-tight sm:block">
              <strong className="block text-sm font-black text-pns-navy">Pragma Novus Systems</strong>
              <span className="text-xs font-semibold text-slate-500">Education support quality management</span>
            </div>
          </a>
          <div className="hidden items-center gap-7 text-sm font-bold text-slate-700 lg:flex">
            <a href="#architecture" className="transition hover:text-pns-blue">Architecture</a>
            <a href="#ascend" className="transition hover:text-pns-blue">ASCEND</a>
            <a href="#ecosystem" className="transition hover:text-pns-blue">Ecosystem</a>
            <a href="#schools" className="transition hover:text-pns-blue">Schools</a>
            <a href="#partners" className="transition hover:text-pns-blue">Partners</a>
          </div>
          <a href={mailHref} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-pns-navy px-4 text-sm font-extrabold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-pns-blue">
            <Mail size={17} />
            Contact
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="relative min-h-screen bg-pns-navy pt-28 text-white">
          <div className="absolute inset-0">
            <img src="/pns-hero.png" alt="" className="h-full w-full object-cover opacity-[0.34]" />
            <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(6,26,53,.98)_0%,rgba(6,26,53,.88)_46%,rgba(6,26,53,.55)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(22,135,255,.24),transparent_28rem),radial-gradient(circle_at_18%_80%,rgba(201,149,39,.14),transparent_24rem)]" />
          </div>

          <div className="section-shell relative grid min-h-[calc(100vh-112px)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr]">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp} className="mb-8 inline-flex items-center gap-3 rounded-lg border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-xl">
                <img src="/logos/pns-esqms-logo.png" alt="PNS-ESQMS logo" className="h-12 w-12 rounded-md bg-white object-contain p-1" />
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-200">Pragma Novus Systems</p>
                  <p className="text-sm font-semibold text-white/[0.86]">Parent company and systems identity</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="mb-8 inline-flex flex-col gap-4 rounded-lg border border-white/15 bg-white/95 p-5 text-pns-navy shadow-glow sm:flex-row sm:items-center">
                <img src="/logos/pns-esqms-logo.png" alt="PNS-ESQMS logo" className="h-36 w-36 rounded-lg object-contain" />
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-pns-blue">Parent company and systems identity</p>
                  <strong className="mt-2 block text-3xl font-black leading-tight">Pragma Novus Systems</strong>
                  <span className="mt-2 block font-bold text-slate-600">Educational Support Quality Management Systems</span>
                </div>
              </motion.div>
              <motion.h1 variants={fadeUp} className="max-w-4xl text-5xl font-black leading-[0.96] tracking-normal md:text-7xl">
                Educational intelligence for measurable transformation.
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-xl leading-9 text-slate-200">
                Pragma Novus Systems builds disciplined education-support systems that convert learner evidence into diagnostics, intervention, accountability, and continuous improvement.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
                <a href={`${mailHref}?subject=Book%20a%20PNS%20discussion`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-pns-bright px-5 font-extrabold text-white shadow-glow transition hover:-translate-y-0.5">
                  Book a Discussion <ArrowRight size={18} />
                </a>
                <a href={`${mailHref}?subject=Partnership%20request`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/24 bg-white/10 px-5 font-extrabold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/16">
                  Request a Partnership
                </a>
                <a href="#about" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/24 px-5 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
                  Learn More
                </a>
              </motion.div>
            </motion.div>

            <motion.aside initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.16 }} className="dark-glass rounded-lg p-7 shadow-glow">
              <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-pns-gold">Strategic value proposition</p>
              <h2 className="text-3xl font-black leading-tight md:text-5xl">Proactive value innovation, accountable support, protected system intelligence.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-200">PNS gives education leaders a structured way to act on learner evidence, improve support quality, and communicate progress without exposing proprietary PNS-ESQMS architecture.</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {["Diagnostic clarity", "Measured intervention", "Accountable reporting"].map((item) => (
                  <div key={item} className="rounded-lg border border-white/12 bg-white/[0.08] p-4">
                    <CheckCircle2 className="mb-3 text-blue-200" size={22} />
                    <p className="text-sm font-bold text-white">{item}</p>
                  </div>
                ))}
              </div>
            </motion.aside>
          </div>
        </section>

        <MotionSection id="about" className="bg-white py-24">
          <div className="section-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
            <SectionHeader eyebrow="About PNS" title="A strategic education-systems company building measurable support architecture.">
              Pragma Novus Systems is the parent company and strategic innovation engine behind PNS-ESQMS and ASCEND. We build systems that make learner support more diagnostic, accountable, visible, and continuously improvable.
            </SectionHeader>
            <motion.div variants={stagger} className="grid gap-4 sm:grid-cols-2">
              <Card icon={ShieldCheck} title="Credible systems identity">PNS is positioned as the professional parent company behind structured education improvement implementations.</Card>
              <Card icon={BarChart3} title="Measurable improvement">Progress, visibility, accountability, and confidence are positioned as boardroom-ready outcomes.</Card>
              <Card icon={Users} title="Multi-stakeholder fit">Built for schools, parents, sponsors, and education partners who need a clear implementation partner.</Card>
              <Card icon={LockKeyhole} title="Protected methods">Internal logic, mapping systems, scoring approaches, and proprietary analytics remain confidential.</Card>
            </motion.div>
          </div>
        </MotionSection>

        <MotionSection id="architecture" className="bg-pns-mist py-24">
          <div className="section-shell">
            <SectionHeader eyebrow="Strategic Architecture" title="One ecosystem. Three clear layers.">
              PNS communicates outcomes publicly while protecting the internal architecture that makes disciplined support possible.
            </SectionHeader>
            <motion.div variants={stagger} className="mt-12 grid gap-5 lg:grid-cols-3">
              {strategicLayers.map(([label, title, body]) => (
                <motion.article key={label} variants={fadeUp} className="rounded-lg border border-slate-200 bg-white p-6 shadow-premium">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-pns-blue">{label}</p>
                  <h3 className="mt-3 text-2xl font-black leading-tight text-pns-ink">{title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{body}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </MotionSection>

        <MotionSection id="ascend" className="relative bg-white py-24">
          <div className="section-shell grid items-center gap-12 lg:grid-cols-[1fr_.95fr]">
            <div>
              <SectionHeader eyebrow="Flagship Implementation" title="ASCEND is the flagship live implementation of the PNS vision.">
                ASCEND is the most prominent active expression of PNS-ESQMS: the operational dashboard layer, intelligence layer, analytics layer, and measurable learner-support layer.
              </SectionHeader>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {ascendCapabilities.map(([title, detail]) => (
                  <div key={title} className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                    <Sparkles className="mt-1 shrink-0 text-pns-gold" size={20} />
                    <div>
                      <span className="font-black text-slate-800">{title}</span>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-premium">
              <img src="/logos/ascend-logo.png" alt="ASCEND Education Intelligence Platform" className="w-full rounded-md object-contain" />
            </div>
          </div>
        </MotionSection>

        <MotionSection id="model" className="bg-pns-navy py-24 text-white">
          <div className="section-shell">
            <SectionHeader eyebrow="Our Model" title="Our operating logic moves from evidence to accountable improvement." inverse>
              PNS follows a disciplined sequence that keeps each engagement focused on diagnostics, intervention, visibility, and continuous improvement.
            </SectionHeader>
            <div className="mt-12 grid gap-4 md:grid-cols-5">
              {modelSteps.map(([step, detail], index) => (
                <motion.div key={step} variants={fadeUp} className="rounded-lg border border-white/12 bg-white/[0.08] p-5 backdrop-blur">
                  <span className="text-sm font-black text-pns-gold">0{index + 1}</span>
                  <h3 className="mt-3 text-2xl font-black">{step}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </MotionSection>

        <MotionSection id="solutions" className="bg-white py-24">
          <div className="section-shell">
            <SectionHeader eyebrow="Solutions" title="Strategic education systems without technical over-disclosure.">
              Stakeholders see clear outcomes, disciplined implementation, and measurable reporting while internal diagnostics, scoring logic, curriculum architecture, and protected analytics remain confidential.
            </SectionHeader>
            <motion.div variants={stagger} className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {solutions.map(([title, Icon, text]) => (
                <Card key={title} icon={Icon} title={title}>{text}</Card>
              ))}
            </motion.div>
          </div>
        </MotionSection>

        <MotionSection id="ecosystem" className="bg-pns-mist py-24">
          <div className="section-shell grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
            <SectionHeader eyebrow="Strategic Ecosystem" title="ASCEND is the active platform. The PNS ecosystem is broader.">
              Work inside ASCEND strengthens the foundation for future educational intelligence systems, institutional support systems, analytics-driven intervention, scalable support frameworks, and new education innovation platforms.
            </SectionHeader>
            <div className="grid gap-4 sm:grid-cols-2">
              {["Educational intelligence systems", "Institutional support systems", "Analytics-driven intervention", "Scalable support frameworks"].map((item) => (
                <div key={item} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                  <BarChart3 className="mb-4 text-pns-blue" size={24} />
                  <h3 className="text-xl font-black text-pns-ink">{item}</h3>
                  <p className="mt-3 leading-7 text-slate-600">Built through disciplined implementation, measurable evidence, and continuous improvement.</p>
                </div>
              ))}
            </div>
          </div>
        </MotionSection>

        <MotionSection id="schools" className="bg-white py-24">
          <div className="section-shell grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <SectionHeader eyebrow="For Schools" title="An implementation layer that strengthens what already exists." />
            </div>
            <div className="grid gap-5 lg:col-span-2 sm:grid-cols-2">
              <Card icon={Building2} title="Strengthens school systems">PNS works as an added implementation layer, not as a replacement for leadership, teachers, or existing school structures.</Card>
              <Card icon={Target} title="Keeps action focused">Schools receive clearer improvement conversations around progress, accountability, and implementation priorities.</Card>
            </div>
          </div>
        </MotionSection>

        <MotionSection id="parents" className="bg-white py-24">
          <div className="section-shell grid gap-10 lg:grid-cols-[1fr_1fr]">
            <SectionHeader eyebrow="For Parents" title="Confidence through visible, structured progress.">
              Parents need clarity. ASCEND presents learning support in a way that feels understandable, measured, and action-oriented.
            </SectionHeader>
            <div className="rounded-lg bg-gradient-to-br from-pns-navy to-pns-blue p-7 text-white shadow-premium">
              <h3 className="text-3xl font-black">Parent-facing value</h3>
              <div className="mt-7 grid gap-4">
                {["Progress visibility", "Confidence in the process", "Measurable improvement", "Structured communication"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-blue-200" size={21} />
                    <span className="font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MotionSection>

        <MotionSection id="partners" className="bg-pns-navy py-24 text-white">
          <div className="section-shell grid gap-12 lg:grid-cols-[.95fr_1.05fr]">
            <SectionHeader eyebrow="Sponsors & Partners" title="Scalable, measurable, accountable, and partnership-ready." inverse>
              PNS is positioned for schools, sponsors, entities, and education partners who need evidence of implementation value without exposure to protected system internals.
            </SectionHeader>
            <div className="grid gap-4 sm:grid-cols-2">
              {["Scalable support programmes", "Impact-oriented reporting", "Professional partner communication", "Meeting-ready implementation pathway"].map((item) => (
                <div key={item} className="rounded-lg border border-white/12 bg-white/[0.08] p-5">
                  <Handshake className="mb-4 text-pns-gold" size={24} />
                  <h3 className="text-xl font-black">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </MotionSection>

        <MotionSection id="briefing" className="bg-pns-mist py-24">
          <div className="section-shell">
            <SectionHeader eyebrow="Explore the opportunity" title="Clickable briefings for each stakeholder group.">
              Each briefing gives decision-makers the information they need to assess relevance, value, and partnership fit while protected system architecture remains confidential.
            </SectionHeader>
            <div className="mt-12 grid gap-6 lg:grid-cols-[280px_1fr]">
              <div className="grid content-start gap-3" role="tablist" aria-label="Stakeholder briefings">
                {Object.entries(briefings).map(([key, briefing]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveBriefing(key)}
                    className={`min-h-14 rounded-lg border px-4 text-left font-black transition ${
                      activeBriefing === key
                        ? "border-pns-blue bg-gradient-to-br from-pns-navy to-pns-blue text-white shadow-glow"
                        : "border-slate-200 bg-white text-pns-navy hover:-translate-y-0.5 hover:border-blue-200"
                    }`}
                  >
                    {briefing.label}
                  </button>
                ))}
              </div>
              <motion.article
                key={activeBriefing}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="min-h-[330px] rounded-lg border border-slate-200 bg-white p-8 shadow-premium"
              >
                <h3 className="text-3xl font-black leading-tight text-pns-ink md:text-5xl">{briefings[activeBriefing].title}</h3>
                <p className="mt-5 text-lg leading-8 text-slate-600">{briefings[activeBriefing].body}</p>
                <ul className="mt-7 grid gap-4">
                  {briefings[activeBriefing].points.map((point) => (
                    <li key={point} className="flex gap-3 font-bold text-slate-700">
                      <span className="mt-2 h-3 w-3 shrink-0 rounded-full bg-pns-gold shadow-[0_0_0_5px_rgba(201,149,39,0.14)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            </div>
          </div>
        </MotionSection>

        <MotionSection id="ip" className="bg-white py-24">
          <div className="section-shell rounded-lg border border-slate-200 bg-slate-50 p-8 shadow-premium md:p-12">
            <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-pns-navy text-white">
                <LockKeyhole size={30} />
              </div>
              <div>
                <SectionHeader eyebrow="Responsible Disclosure" title="We share outcomes and value. We protect the system behind them." />
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Public PNS communications describe the value stakeholders need to understand: measurable educational transformation, diagnostic support, accountability, visibility, and partnership readiness. Internal PNS-ESQMS methodologies, diagnostic logic, intervention rules, scoring engines, curriculum architecture, and proprietary learner analytics remain confidential.
                </p>
              </div>
            </div>
          </div>
        </MotionSection>

        <MotionSection id="contact" className="bg-gradient-to-br from-pns-navy via-pns-blue to-[#0f2745] py-24 text-white">
          <div className="section-shell grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-blue-200">Contact PNS</p>
              <h2 className="text-4xl font-black leading-tight md:text-6xl">Start a serious education support conversation.</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                Request a meeting, partnership discussion, school conversation, or funder briefing with Pragma Novus Systems.
              </p>
            </div>
            <div className="rounded-lg border border-white/14 bg-white/10 p-6 backdrop-blur-xl">
              <img src="/logos/pns-esqms-logo.png" alt="PNS-ESQMS logo" className="mb-6 h-24 w-24 rounded-lg bg-white object-contain p-2" />
              <div className="grid gap-3">
                <a href={mailHref} className="inline-flex min-h-12 items-center gap-3 rounded-lg bg-white px-4 font-extrabold text-pns-navy transition hover:-translate-y-0.5">
                  <Mail size={19} /> {email}
                </a>
                <a href={phoneHref} className="inline-flex min-h-12 items-center gap-3 rounded-lg border border-white/20 px-4 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
                  <Phone size={19} /> {phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </MotionSection>
      </main>

      <footer className="bg-white py-8">
        <div className="section-shell flex flex-col gap-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img src="/logos/pns-esqms-logo.png" alt="PNS-ESQMS logo" className="h-12 w-12 rounded-lg object-contain" />
            <span className="font-bold text-pns-navy">Pragma Novus Systems</span>
          </div>
          <p>© 2026 PNS. ASCEND is the flagship live implementation of the PNS education-intelligence ecosystem. Proprietary methods protected.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
