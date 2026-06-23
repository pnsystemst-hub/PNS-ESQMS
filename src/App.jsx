import { useState } from "react";
import { motion } from "framer-motion";
import AscendAssistant from "./AscendAssistant";
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
  Menu,
  MonitorCheck,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  X
} from "lucide-react";

const email = "pnsystems.t@gmail.com";
const phoneDisplay = "(+27) 67 033 6452";
const phoneHref = "tel:+27670336452";
const mailHref = `mailto:${email}`;
const ascendUrl = "https://ascend-dashboard-rho.vercel.app/";

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
      className="group rounded-2xl border border-sky-100 bg-gradient-to-br from-white via-white to-sky-50/70 p-6 shadow-[0_18px_50px_rgba(6,26,53,0.08)] transition duration-300 hover:-translate-y-2 hover:border-amber-200 hover:shadow-[0_28px_80px_rgba(14,165,233,0.18)]"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-50 to-amber-50 text-pns-blue shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition group-hover:scale-105 group-hover:from-pns-blue group-hover:to-pns-bright group-hover:text-white">
        <Icon size={24} strokeWidth={2.1} />
      </div>
      <h3 className="text-xl font-extrabold leading-snug text-pns-ink">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{children}</p>
    </motion.article>
  );
}


function LearningDataScene({ title, label, detail, variant }) {
  const isTracking = variant === "tracking";
  const isIntervention = variant === "intervention";
  const bars = isTracking ? [46, 58, 64, 72, 81] : isIntervention ? [72, 64, 77, 84, 88] : [38, 52, 61, 73, 79];

  return (
    <motion.article
      variants={fadeUp}
      className="group overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-[0_22px_70px_rgba(6,26,53,0.1)] transition duration-300 hover:-translate-y-2 hover:border-amber-200 hover:shadow-[0_32px_90px_rgba(14,165,233,0.18)]"
    >
      <div className="relative min-h-[230px] bg-gradient-to-br from-pns-navy via-pns-blue to-pns-bright p-5 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.26),transparent_10rem),radial-gradient(circle_at_82%_78%,rgba(201,149,39,0.28),transparent_13rem)]" />
        <div className="relative grid h-full gap-4">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-white/14 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-blue-50">{label}</span>
            <span className="rounded-full bg-amber-300/90 px-3 py-1 text-xs font-black text-pns-navy">Sample view</span>
          </div>

          <div className="grid gap-4 rounded-2xl border border-white/14 bg-white/10 p-4 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-pns-blue shadow-glow">
                {isTracking ? <LineChart size={25} /> : isIntervention ? <Target size={25} /> : <GraduationCap size={25} />}
              </div>
              <div>
                <p className="text-sm font-bold text-blue-100">{isTracking ? "Weekly movement" : isIntervention ? "Support focus" : "Learning picture"}</p>
                <h3 className="text-2xl font-black">{title}</h3>
              </div>
            </div>

            <div className="flex h-24 items-end gap-2 rounded-2xl bg-white/10 p-3">
              {bars.map((height, index) => (
                <div key={height + index} className="flex flex-1 flex-col items-center gap-2">
                  <div className="w-full rounded-t-xl bg-gradient-to-t from-amber-300 to-white shadow-[0_0_18px_rgba(255,255,255,0.22)]" style={{ height: `${height}%` }} />
                  <span className="text-[10px] font-black text-blue-100">W{index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-pns-blue">What this represents</p>
        <p className="mt-3 leading-7 text-slate-600">{detail}</p>
      </div>
    </motion.article>
  );
}
function App() {
  const [activeBriefing, setActiveBriefing] = useState("schools");
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    ["What we do", "#about"],
    ["ASCEND", "#ascend"],
    ["For you", "#pathways"],
    ["Schools", "#schools"],
    ["Partners", "#partners"],
    ["Contact", "#contact"]
  ];
  const heroCards = [
    ["Need learner support?", "Start with ASCEND", "#ascend"],
    ["Run a school or programme?", "See how PNS supports improvement", "#schools"],
    ["Want measurable impact?", "Explore partner pathways", "#partners"]
  ];
  const pathwayCards = [
    ["If you are a parent", "click here to ask about support for your child", ascendUrl, true],
    ["If you are a learner", "click here to reach the ASCEND platform", ascendUrl, true],
    ["If you are a school", "click here to explore collaboration with PNS", "#schools", false],
    ["If you are a sponsor or partner", "click here to discuss measurable impact", "#partners", false]
  ];
  const strategicLayers = [
    ["PNS", "The team building the bigger education-support vision", "Pragma Novus Systems designs tools and structures that help learning support become more visible and accountable."],
    ["PNS-ESQMS", "The quality spine behind the work", "A careful support framework for diagnostics, intervention, monitoring, and continuous improvement."],
    ["ASCEND", "Where the work becomes visible", "The live platform where learners, parents, educators, and partners can see support activity and progress take shape."]
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
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-white/[0.9] shadow-[0_12px_40px_rgba(6,26,53,0.08)] backdrop-blur-xl">
        <nav className="section-shell flex min-h-[76px] items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3" aria-label="Pragma Novus Systems home">
            <img src="/logos/pns-esqms-logo.png" alt="PNS-ESQMS Pragma Novus Systems" className="h-14 w-14 rounded-xl bg-white object-contain shadow-sm" />
            <div className="hidden leading-tight sm:block">
              <strong className="block text-sm font-black text-pns-navy">Pragma Novus Systems</strong>
              <span className="text-xs font-semibold text-slate-500">Measurable learner support, built with care</span>
            </div>
          </a>

          <div className="hidden items-center rounded-full border border-sky-100 bg-white/80 p-1 text-sm font-bold text-slate-700 shadow-sm lg:flex">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="rounded-full px-4 py-2 transition hover:bg-sky-50 hover:text-pns-blue focus:bg-sky-50 focus:text-pns-blue">
                {label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <a href={ascendUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pns-bright to-pns-blue px-4 text-sm font-extrabold text-white shadow-glow transition hover:-translate-y-0.5">
              Open ASCEND <ArrowRight size={16} />
            </a>
            <a href={mailHref} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-sky-100 bg-white px-4 text-sm font-extrabold text-pns-navy shadow-sm transition hover:-translate-y-0.5 hover:border-amber-200">
              <Mail size={17} /> Contact
            </a>
          </div>

          <button type="button" onClick={() => setMenuOpen((open) => !open)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sky-100 bg-white text-pns-navy shadow-sm lg:hidden" aria-label="Open website menu" aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
        {menuOpen ? (
          <div className="border-t border-sky-100 bg-white/95 px-4 py-4 shadow-premium backdrop-blur-xl lg:hidden">
            <div className="mx-auto grid max-w-md gap-2">
              {navItems.map(([label, href]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)} className="rounded-2xl px-4 py-3 font-extrabold text-pns-navy transition hover:bg-sky-50">
                  {label}
                </a>
              ))}
              <a href={ascendUrl} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pns-bright to-pns-blue px-4 font-extrabold text-white shadow-glow">
                Open ASCEND Platform <ArrowRight size={17} />
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <main id="top">
        <section className="relative min-h-screen bg-pns-navy pt-28 text-white">
          <div className="absolute inset-0">
            <img src="/pns-hero.png" alt="" className="h-full w-full object-cover opacity-[0.3]" />
            <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(6,26,53,.98)_0%,rgba(6,26,53,.86)_48%,rgba(6,26,53,.52)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(22,135,255,.24),transparent_28rem),radial-gradient(circle_at_18%_80%,rgba(201,149,39,.18),transparent_24rem)]" />
          </div>

          <div className="section-shell relative grid min-h-[calc(100vh-112px)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr]">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp} className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm font-extrabold text-blue-100 backdrop-blur-xl">
                <Sparkles size={17} className="text-pns-gold" />
                Education support, made visible
              </motion.div>
              <motion.h1 variants={fadeUp} className="max-w-4xl text-5xl font-black leading-[0.98] tracking-normal md:text-7xl">
                We help learning support become clearer, smarter, and measurable.
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-xl leading-9 text-slate-200">
                PNS builds the systems behind better learner support: diagnostics, intervention, monitoring, and progress conversations that people can actually use.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
                <a href={ascendUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pns-bright to-pns-blue px-5 font-extrabold text-white shadow-glow transition hover:-translate-y-0.5">
                  Go to ASCEND <ArrowRight size={18} />
                </a>
                <a href="#pathways" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/24 bg-white/10 px-5 font-extrabold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/16">
                  Find your route
                </a>
                <a href="#about" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/24 px-5 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
                  What PNS does
                </a>
              </motion.div>
            </motion.div>

            <motion.aside initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.16 }} className="dark-glass rounded-3xl p-6 shadow-glow">
              <div className="mb-5 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.08] p-4">
                <img src="/logos/pns-esqms-logo.png" alt="PNS-ESQMS logo" className="h-16 w-16 rounded-xl bg-white object-contain p-1" />
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-blue-200">Pragma Novus Systems</p>
                  <p className="mt-1 font-bold text-white/90">Building practical educational intelligence.</p>
                </div>
              </div>
              <div className="grid gap-3">
                {heroCards.map(([title, action, href]) => (
                  <a key={title} href={href} className="group rounded-2xl border border-white/12 bg-white/[0.08] p-5 transition duration-300 hover:-translate-y-1 hover:border-amber-200/70 hover:bg-white/[0.14]">
                    <h2 className="text-xl font-black text-white">{title}</h2>
                    <p className="mt-2 inline-flex items-center gap-2 font-bold text-blue-100 group-hover:text-white">
                      {action} <ArrowRight size={17} />
                    </p>
                  </a>
                ))}
              </div>
            </motion.aside>
          </div>
        </section>

        <MotionSection id="about" className="bg-white py-24">
          <div className="section-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
            <SectionHeader eyebrow="About PNS" title="A strategic education-systems company building measurable support architecture.">
              PNS is building practical educational intelligence: tools that help families, schools, educators, and partners see what support is happening, why it matters, and where progress is moving.
            </SectionHeader>
            <motion.div variants={stagger} className="grid gap-4 sm:grid-cols-2">
              <Card icon={ShieldCheck} title="Built with purpose">PNS designs education-support systems for people who need clarity, not noise.</Card>
              <Card icon={BarChart3} title="Progress you can follow">Support activity becomes easier to review, explain, and improve over time.</Card>
              <Card icon={Users} title="Designed for real users">Parents, learners, schools, educators, and partners each get a clearer way into the work.</Card>
              <Card icon={LockKeyhole} title="Careful by design">We show the value clearly while protecting the deeper architecture behind the system.</Card>
            </motion.div>
          </div>
        </MotionSection>


        <MotionSection id="pathways" className="bg-gradient-to-br from-white via-sky-50/80 to-amber-50/40 py-20">
          <div className="section-shell">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <SectionHeader eyebrow="Where should I go?" title="Choose the path that sounds like you.">
                A simple guide for visitors who want to explore PNS, reach ASCEND, or start a conversation.
              </SectionHeader>
              <a href={ascendUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-full bg-pns-navy px-5 font-extrabold text-white shadow-glow transition hover:-translate-y-1 hover:bg-pns-blue">
                Open ASCEND Platform <ArrowRight size={18} />
              </a>
            </div>
            <motion.div variants={stagger} className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {pathwayCards.map(([title, action, href, external]) => (
                <motion.a
                  key={title}
                  variants={fadeUp}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group rounded-3xl border border-sky-100 bg-white/90 p-6 shadow-[0_18px_54px_rgba(6,26,53,0.09)] transition duration-300 hover:-translate-y-2 hover:border-amber-200 hover:shadow-[0_30px_80px_rgba(14,165,233,0.18)]"
                >
                  <p className="text-sm font-black uppercase tracking-[0.14em] text-pns-blue">{title}</p>
                  <h3 className="mt-4 text-2xl font-black leading-tight text-pns-ink">{action}</h3>
                  <span className="mt-5 inline-flex items-center gap-2 font-extrabold text-pns-blue transition group-hover:gap-3 group-hover:text-pns-navy">
                    Continue <ArrowRight size={17} />
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </MotionSection>

        <MotionSection id="visual-proof" className="bg-white py-24">
          <div className="section-shell">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <SectionHeader eyebrow="What PNS makes easier to see" title="Learning support should not feel invisible.">
                Visitors get a clearer picture of the kind of visibility PNS is building: learner support, weekly movement, and focused intervention without exposing protected system logic.
              </SectionHeader>
              <div className="rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-amber-50 p-6 shadow-[0_22px_70px_rgba(6,26,53,0.08)]">
                <div className="grid grid-cols-3 gap-3 text-center">
                  {["Learning", "Evidence", "Progress"].map((item) => (
                    <div key={item} className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-2xl font-black text-pns-blue">{item === "Learning" ? "01" : item === "Evidence" ? "02" : "03"}</p>
                      <p className="mt-1 text-xs font-extrabold uppercase tracking-[0.12em] text-slate-500">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <motion.div variants={stagger} className="mt-10 grid gap-6 lg:grid-cols-3">
              <LearningDataScene title="Learner support" label="Guided learning" variant="learning" detail="A public-facing picture of how support can become more structured, easier to explain, and easier to follow." />
              <LearningDataScene title="Progress tracking" label="Data movement" variant="tracking" detail="A visual cue for weekly trends, support signals, and the movement from raw activity toward useful progress conversations." />
              <LearningDataScene title="Intervention focus" label="Next steps" variant="intervention" detail="A simple representation of how concerns can move into planned action, review, and continuous improvement." />
            </motion.div>
          </div>
        </MotionSection>
        <MotionSection id="architecture" className="bg-pns-mist py-24">
          <div className="section-shell">
            <SectionHeader eyebrow="Strategic Architecture" title="One ecosystem. Three clear layers.">
              A quick map of how the public-facing pieces fit together, without exposing the deeper mechanics behind them.
            </SectionHeader>
            <motion.div variants={stagger} className="mt-12 grid gap-5 lg:grid-cols-3">
              {strategicLayers.map(([label, title, body]) => (
                <motion.article key={label} variants={fadeUp} className="rounded-2xl border border-sky-100 bg-gradient-to-br from-white via-white to-amber-50/60 p-6 shadow-premium transition duration-300 hover:-translate-y-2 hover:border-amber-200">
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
                  <div key={title} className="flex gap-3 rounded-2xl border border-sky-100 bg-gradient-to-br from-white to-sky-50/70 p-4 shadow-[0_14px_34px_rgba(6,26,53,0.07)] transition duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-[0_22px_60px_rgba(14,165,233,0.16)]">
                    <Sparkles className="mt-1 shrink-0 text-pns-gold" size={20} />
                    <div>
                      <span className="font-black text-slate-800">{title}</span>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-white via-sky-50 to-white p-5 shadow-premium transition duration-300 hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(14,165,233,0.24)]">
              <a
                href={ascendUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open the ASCEND dashboard app in a new tab"
                className="block rounded-xl transition duration-300 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-amber-300/50"
              >
                <img src="/logos/ascend-login-logo.svg" alt="ASCEND Education Intelligence Platform" className="w-full rounded-md object-contain" />
              </a>
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
                <div key={item} className="rounded-2xl border border-sky-100 bg-gradient-to-br from-white to-sky-50/70 p-5 shadow-[0_14px_40px_rgba(6,26,53,0.08)] transition duration-300 hover:-translate-y-2 hover:border-amber-200">
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
                className="min-h-[330px] rounded-2xl border border-sky-100 bg-gradient-to-br from-white via-white to-sky-50/80 p-8 shadow-premium"
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
          <div className="section-shell rounded-2xl border border-sky-100 bg-gradient-to-br from-white via-slate-50 to-amber-50/50 p-8 shadow-premium md:p-12">
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

      <AscendAssistant />

      <footer className="bg-white py-8">
        <div className="section-shell flex flex-col gap-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img src="/logos/pns-esqms-logo.png" alt="PNS-ESQMS logo" className="h-12 w-12 rounded-lg object-contain" />
            <span className="font-bold text-pns-navy">Pragma Novus Systems</span>
          </div>
          <p>&copy; 2026 PNS. ASCEND is the flagship live implementation of the PNS education-intelligence ecosystem. Proprietary methods protected.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
