import { useState } from "react";
import { motion } from "framer-motion";
import PnsAssistant from "./PnsAssistant";
import { legalLinks } from "./Legal";
import { ArrowRight, BadgeCheck, BookOpen, Briefcase, Check, Clock, CreditCard, Download, HeartHandshake, Lock, Mail, MapPin, Menu, Phone, Plus, School, Sprout, Users, X } from "lucide-react";

const email = "frontdesk@pragmansystems.co.za";
const phoneDisplay = "+27 67 033 6452";
const phoneHref = "tel:+27670336452";
const mailHref = `mailto:${email}?subject=${encodeURIComponent("Enquiry from the PNS website")}`;
const ascendUrl = "https://ascendhtcenter.pragmansystems.co.za/";
const nextstepUrl = "https://nextstep.pragmansystems.co.za/";
const nextstepApkUrl = "https://nextstep.pragmansystems.co.za/download/nextstep.apk";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

function Section({ id, className = "", children }) {
  return (
    <motion.section
      id={id}
      className={`scroll-mt-20 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      variants={fadeUp}
    >
      {children}
    </motion.section>
  );
}

function Eyebrow({ children, light = false }) {
  return <p className={`mb-3 text-xs font-bold uppercase tracking-[0.2em] ${light ? "text-pns-lilac" : "text-pns-violet"}`}>{children}</p>;
}

const navItems = [
  ["Our products", "#products"],
  ["Pricing", "#pricing"],
  ["How it works", "#how"],
  ["About us", "#about"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"]
];

const trust = [
  [BadgeCheck, "Registered SA company", "Reg. 2026/496918/07"],
  [CreditCard, "Secure payments", "Processed by Payfast"],
  [Lock, "Your data protected", "Handled in line with POPIA"],
  [Clock, "Real people", "Reply within one working day"]
];

const products = [
  {
    name: "Ascend",
    full: "Ascend Homework & Tutoring Center",
    tag: "No Promises. Just Results.",
    body: "A calm, structured place for your child to finish homework properly, close learning gaps and prepare for tests and exams. Our tutors work in person at The Precinct in Waterfall and online in a live classroom, and you follow every step in your own parent portal.",
    points: [
      "Supervised homework, Monday to Thursday, 15:00–18:00",
      "One-on-one tutoring with a dedicated tutor",
      "CAPS-aligned exam prep and practice papers",
      "Parent portal: attendance, homework, marks and tutor reports",
      "Grade R to Grade 12, in person and online"
    ],
    href: ascendUrl,
    cta: "Visit Ascend",
    icon: BookOpen,
    band: "from-pns-ink via-pns-plum to-pns-violet",
    dot: "bg-pns-violet",
    button: "bg-pns-ink hover:bg-pns-plum"
  },
  {
    name: "NextStep",
    full: "NextStep",
    tag: "For life after school.",
    body: "Job hunting is exhausting: endless listings, scam adverts and the same CV sent out again and again. Upload your CV once and NextStep searches for genuine jobs, learnerships and internships twice a day, ranks them by how well they fit you, and helps you apply with stronger documents.",
    points: [
      "New matches twice a day, ranked strong to weak",
      "Risky listings flagged: never pay to apply",
      "Tailored CVs and cover letters, ready to send",
      "CVs, certificates and documents in one secure place",
      "All of it for R5 a month. Cancel anytime."
    ],
    href: nextstepUrl,
    cta: "Visit NextStep",
    app: { href: nextstepApkUrl, label: "Download for Android", note: "Android 7.0 or later. Not on the Play Store yet: your phone will ask you to allow the install." },
    icon: Sprout,
    band: "from-pns-emerald via-[#146b59] to-[#2c8a72]",
    dot: "bg-pns-emerald",
    button: "bg-pns-emerald hover:bg-[#0b4a3e]"
  }
];

// [icon, title, body, link, call to action, icon colours, accent bar]
const audiences = [
  [Users, "Parents & learners", "Reliable help with homework and schoolwork, and a clear view of how your child is doing.", ascendUrl, "Go to Ascend", "bg-pns-ink text-white", "bg-pns-violet"],
  [Briefcase, "School leavers & graduates", "Practical support to find real opportunities and apply with confidence.", nextstepUrl, "Go to NextStep", "bg-pns-emerald text-white", "bg-pns-emerald"],
  [School, "Schools & partners", "Work with us to bring tutoring or readiness support to your learners or community.", "#contact", "Talk to us", "bg-pns-gold text-pns-deep", "bg-pns-gold"]
];

const values = [
  ["Practical", "We build things people actually use, not reports that sit on a shelf."],
  ["Honest", "No inflated promises. We show you the progress, and we're clear about what's next."],
  ["Personal", "Behind every tool is a real person ready to help. Call or email us any time."],
  ["Secure", "Your information is protected, used only to deliver your service and never sold."]
];

const plans = [
  {
    service: "NextStep",
    name: "Application Support",
    price: "R5",
    per: "/ month",
    features: ["Matched opportunities twice a day", "Scam and risk flagging", "Tailored CVs and cover letters", "Secure document storage", "Cancel anytime"],
    href: nextstepUrl,
    cta: "Join NextStep",
    featured: "Best value"
  },
  {
    service: "Ascend",
    name: "Homework Assistance",
    price: "R750",
    per: "/ month",
    features: ["Monday to Thursday, 15:00–18:00", "Supervised, with help when stuck", "Homework checked before home time", "Parent portal and tutor reports"],
    href: ascendUrl,
    cta: "Enrol now"
  },
  {
    service: "Ascend",
    name: "One-on-one Tutoring",
    price: "R1,250",
    per: "/ month",
    features: ["A dedicated private tutor", "3 hours a week (2 × 1.5 h or 1 × 3 h)", "Focus on the subjects that need it most", "In person or live online"],
    href: ascendUrl,
    cta: "Enrol now"
  },
  {
    service: "Ascend",
    name: "Homework & Tutoring",
    price: "R1,500",
    per: "/ month",
    features: ["Daily homework sessions plus a private tutor", "Homework turned into one-on-one lessons", "R500 a month less than both separately", "Full parent portal access"],
    href: ascendUrl,
    cta: "Enrol now",
    featured: "Most complete"
  }
];

// [service, accent, steps as [title, detail]]
const journeys = [
  ["Ascend", "bg-pns-ink", [
    ["Register online", "Create a parent account and add your child's grade and subjects."],
    ["We confirm your place", "Our front desk confirms the programme, schedule, start date and fee in writing."],
    ["Pay and start", "Pay your fee using the options we send you, and your child starts on the agreed date."],
    ["Watch them grow", "Follow attendance, homework, marks and tutor reports in your parent portal."]
  ]],
  ["NextStep", "bg-pns-emerald", [
    ["Create your account", "Sign up with your email and confirm it. It takes a minute."],
    ["Upload your CV", "That's it. We read your skills, qualifications and experience."],
    ["Get your matches", "New opportunities arrive twice a day, ranked by how well they fit you."],
    ["Apply with confidence", "Send your tailored CV and cover letter, and track every application."]
  ]]
];

const faqs = [
  ["How do I pay?", "Online payments are processed securely by Payfast, a leading South African payment gateway, so you can pay by card, Instant EFT and other methods Payfast supports. PNS never sees or stores your full card details. For Ascend, our front desk sends you the payment options once your place is confirmed."],
  ["When does my service start after I pay?", "NextStep paid features switch on as soon as your payment is confirmed, usually within minutes. Ascend sessions start on the date our front desk confirms with you. We don't ship anything: all our services are delivered in person or online."],
  ["Can I cancel?", "Yes. NextStep can be cancelled at any time and won't renew the next month. Ascend enrolments can be cancelled with written notice by email or WhatsApp. If you change your mind within 7 days of buying online, you get a full refund. See our Refund & Cancellation Policy for the details."],
  ["Does NextStep guarantee me a job?", "No honest service can. NextStep finds and ranks genuine opportunities, flags risky ones and helps you send stronger applications, but employers make the hiring decisions. We focus on improving your chances and saving you time."],
  ["Which grades does Ascend support?", "Ascend supports learners from Grade R to Grade 12, following the CAPS curriculum, in person at The Precinct in Waterfall and online. Exam prep is also available at R300 per week."],
  ["Is my personal information safe?", "Yes. We collect only what we need to deliver your service, store it with reputable providers, protect it with access controls and encryption, and never sell it. Our Privacy Policy explains your rights under POPIA."]
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-pns-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-pns-lilac/60 bg-white/90 backdrop-blur-xl">
        <nav className="section-shell flex h-[72px] items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3" aria-label="Pragma Novus Systems home">
            <img src="/logos/pns-mark.png" alt="" className="h-11 w-11" />
            <span className="leading-tight">
              <strong className="block font-display text-sm font-bold tracking-[0.14em] text-pns-ink">PRAGMA NOVUS</strong>
              <span className="block font-display text-[10px] tracking-[0.42em] text-pns-ink/80">SYSTEMS</span>
            </span>
          </a>
          <div className="hidden items-center gap-1 text-sm font-semibold lg:flex">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="rounded-full px-4 py-2 text-pns-ink/80 transition hover:bg-pns-mist hover:text-pns-ink">
                {label}
              </a>
            ))}
            <a href="#contact" className="ml-2 inline-flex items-center gap-2 rounded-full bg-pns-ink px-5 py-2.5 font-bold text-white transition hover:bg-pns-violet">
              Get in touch
            </a>
          </div>
          <button type="button" onClick={() => setMenuOpen((o) => !o)} className="flex h-11 w-11 items-center justify-center rounded-full border border-pns-lilac lg:hidden" aria-label="Menu" aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
        {menuOpen ? (
          <div className="border-t border-pns-lilac/60 bg-white px-4 py-3 lg:hidden">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block rounded-xl px-4 py-3 font-semibold text-pns-ink hover:bg-pns-mist">
                {label}
              </a>
            ))}
          </div>
        ) : null}
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-pns-deep via-pns-ink to-pns-plum pb-24 pt-36 text-white md:pt-44">
          {/* Orbit motif from the logo, kept faint so it reads as texture rather than decoration */}
          <div className="pointer-events-none absolute -right-40 -top-40 h-[620px] w-[620px] rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-[380px] w-[380px] rounded-full border border-pns-gold/25" />
          <div className="pointer-events-none absolute right-[300px] top-[330px] h-3 w-3 rounded-full bg-pns-gold/70" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-pns-gold/50 to-transparent" />
          <div className="section-shell relative grid items-center gap-12 md:grid-cols-[1.25fr_.75fr]">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-pns-gold">Pragma Novus Systems · South Africa</p>
              <h1 className="font-display text-4xl font-bold leading-[1.1] md:text-6xl">
                Helping people learn, grow and take their <span className="text-pns-gold">next step.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
                We're a South African company that designs smart, practical services for learners, parents and young people starting out. From a Grade R learner catching up on reading to a graduate landing a first job, we pair intelligent tools with real people who care about the outcome.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={ascendUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 font-bold text-pns-ink transition hover:bg-pns-gold hover:text-pns-deep">
                  Enrol at Ascend <ArrowRight size={18} />
                </a>
                <a href={nextstepUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/40 px-6 font-bold text-white transition hover:border-white hover:bg-white/10">
                  Join NextStep for R5 a month
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="hidden justify-center md:flex">
              {/* brightness lifts the artwork's off-white background to the card's pure white */}
              <div className="w-full max-w-sm overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.35)] ring-1 ring-pns-gold/40">
                <img src="/logos/pns-logo.png" alt="Pragma Novus Systems logo" className="w-full brightness-[1.03]" />
              </div>
            </motion.div>
          </div>
          <div className="section-shell relative mt-16 grid gap-6 border-t border-white/15 pt-8 sm:grid-cols-2 md:grid-cols-4">
            {trust.map(([Icon, title, body]) => (
              <div key={title} className="flex items-start gap-3">
                <Icon size={22} className="mt-0.5 shrink-0 text-pns-gold" />
                <div>
                  <strong className="block text-sm">{title}</strong>
                  <span className="text-sm text-white/65">{body}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Products */}
        <Section id="products" className="py-20">
          <div className="section-shell">
            <Eyebrow>Our products</Eyebrow>
            <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight md:text-4xl">Two services, one goal: real progress you can see.</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {products.map((p) => (
                <article key={p.name} className="flex flex-col overflow-hidden rounded-3xl border border-pns-lilac bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                  <div className={`relative flex items-center gap-4 bg-gradient-to-br ${p.band} px-8 py-7 text-white`}>
                    <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full border border-white/15" />
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25"><p.icon size={24} /></span>
                    <div>
                      <h3 className="font-display text-2xl font-bold">{p.full}</h3>
                      <p className="text-sm font-semibold italic text-pns-gold">{p.tag}</p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <p className="leading-7 text-pns-ink/75">{p.body}</p>
                    <ul className="mt-5 grid gap-2">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-3 text-sm font-semibold"><span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${p.dot}`} />{pt}</li>
                      ))}
                    </ul>
                    <div className="mt-auto flex flex-wrap gap-3 pt-7">
                      <a href={p.href} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 rounded-full px-5 py-3 font-bold text-white transition ${p.button}`}>
                        {p.cta} <ArrowRight size={17} />
                      </a>
                      {p.app && (
                        <a href={p.app.href} download className="inline-flex items-center gap-2 rounded-full border-2 border-pns-emerald px-5 py-3 font-bold text-pns-emerald transition hover:bg-pns-emerald hover:text-white">
                          <Download size={17} /> {p.app.label}
                        </a>
                      )}
                    </div>
                    {p.app && <p className="mt-3 text-xs leading-5 text-pns-ink/60">{p.app.note}</p>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Section>

        {/* Pricing */}
        <Section id="pricing" className="bg-pns-mist py-20">
          <div className="section-shell">
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight md:text-4xl">Clear prices in rand. No hidden fees.</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-pns-ink/75">All prices are in South African Rand (ZAR). You always see the exact amount before you pay, and online payments are processed securely by Payfast.</p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {plans.map((plan) => (
                <article key={plan.name} className={`relative flex flex-col rounded-3xl bg-white p-7 shadow-soft ${plan.featured ? "ring-2 ring-pns-gold" : "ring-1 ring-pns-lilac"}`}>
                  {plan.featured && <span className="absolute -top-3 left-6 rounded-full bg-pns-gold px-3 py-1 text-xs font-bold text-pns-deep">{plan.featured}</span>}
                  <p className={`text-xs font-bold uppercase tracking-[0.18em] ${plan.service === "NextStep" ? "text-pns-emerald" : "text-pns-violet"}`}>{plan.service}</p>
                  <h3 className="mt-1 font-display text-lg font-bold">{plan.name}</h3>
                  <p className="mt-3 font-display text-4xl font-bold">{plan.price}<span className="ml-1 font-sans text-base font-medium text-pns-ink/60">{plan.per}</span></p>
                  <ul className="mt-5 grid flex-1 gap-2.5 text-sm">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2"><Check size={16} className="mt-0.5 shrink-0 text-pns-emerald" />{f}</li>
                    ))}
                  </ul>
                  <a href={plan.href} target="_blank" rel="noopener noreferrer" className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-bold text-white transition ${plan.service === "NextStep" ? "bg-pns-emerald hover:bg-[#0b4a3e]" : "bg-pns-ink hover:bg-pns-plum"}`}>
                    {plan.cta} <ArrowRight size={16} />
                  </a>
                </article>
              ))}
            </div>
            <p className="mt-8 text-sm leading-6 text-pns-ink/65">
              Ascend Exam Prep is also available at R300 per week. Your Ascend fee is confirmed in writing before you pay. See our{" "}
              <a href="/refunds" className="font-semibold text-pns-violet underline">Refund &amp; Cancellation Policy</a> and{" "}
              <a href="/delivery" className="font-semibold text-pns-violet underline">Service Delivery Policy</a>.
            </p>
          </div>
        </Section>

        {/* Who we help */}
        <Section id="who" className="py-20">
          <div className="section-shell">
            <Eyebrow>Who we help</Eyebrow>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Not sure where to start? Pick the one that fits.</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {audiences.map(([Icon, title, body, href, cta, iconColours, bar]) => (
                <a key={title} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="group relative overflow-hidden rounded-3xl bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                  <span className={`absolute inset-x-0 top-0 h-1 ${bar}`} />
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconColours}`}><Icon size={22} /></span>
                  <h3 className="mt-4 font-display text-xl font-bold">{title}</h3>
                  <p className="mt-2 leading-7 text-pns-ink/75">{body}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-bold text-pns-violet transition group-hover:gap-3">{cta} <ArrowRight size={16} /></span>
                </a>
              ))}
            </div>
          </div>
        </Section>

        {/* How it works */}
        <Section id="how" className="bg-pns-mist py-20">
          <div className="section-shell">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight md:text-4xl">Getting started takes minutes, not weeks.</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {journeys.map(([service, accent, steps]) => (
                <div key={service} className="rounded-3xl bg-white p-8 shadow-soft">
                  <h3 className="font-display text-xl font-bold">{service}</h3>
                  <ol className="mt-6 grid gap-5">
                    {steps.map(([title, body], i) => (
                      <li key={title} className="flex gap-4">
                        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-bold text-white ${accent}`}>{i + 1}</span>
                        <div>
                          <strong className="block">{title}</strong>
                          <span className="text-sm leading-6 text-pns-ink/70">{body}</span>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* About */}
        <Section id="about" className="py-20">
          <div className="section-shell grid gap-12 md:grid-cols-[.9fr_1.1fr] md:items-center">
            <div>
              <Eyebrow>About us</Eyebrow>
              <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">Intelligent systems. Novel solutions. Real people.</h2>
              <p className="mt-5 text-lg leading-8 text-pns-ink/75">
                Pragma Novus Systems (PNS) designs and runs services that make learning and early careers easier to manage and easier to see. We start small, listen closely, and only grow what genuinely helps.
              </p>
              <p className="mt-4 leading-8 text-pns-ink/75">
                "Pragma" stands for practical action; "Novus" means new. Ascend and NextStep come from the same idea: when progress is easy to see and support is easy to reach, people go further. Both are run from our base at The Precinct in Waterfall, and we improve them every month based on what families and young people tell us.
              </p>
            </div>
            <div className="grid gap-4">
              {values.map(([title, body]) => (
                <div key={title} className="flex gap-4 rounded-2xl border border-pns-lilac border-l-4 border-l-pns-gold bg-white p-5 shadow-soft">
                  <HeartHandshake className="mt-1 shrink-0 text-pns-plum" size={22} />
                  <div>
                    <h3 className="font-display text-lg font-bold">{title}</h3>
                    <p className="mt-1 leading-7 text-pns-ink/75">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* FAQ */}
        <Section id="faq" className="bg-pns-mist py-20">
          <div className="section-shell max-w-3xl">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Questions people often ask</h2>
            <div className="mt-8 grid gap-3">
              {faqs.map(([q, a]) => (
                <details key={q} className="group rounded-2xl bg-white p-5 shadow-soft">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-bold [&::-webkit-details-marker]:hidden">
                    {q}
                    <Plus size={18} className="shrink-0 text-pns-violet transition group-open:rotate-45" />
                  </summary>
                  <p className="mt-3 leading-7 text-pns-ink/75">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" className="relative overflow-hidden bg-gradient-to-br from-pns-deep via-pns-ink to-pns-plum py-20 text-white">
          <div className="section-shell grid gap-10 md:grid-cols-[1.1fr_.9fr] md:items-center">
            <div>
              <Eyebrow light>Contact us</Eyebrow>
              <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">We'd love to hear from you.</h2>
              <p className="mt-5 max-w-lg text-lg leading-8 text-white/75">Questions about Ascend, NextStep or working together? Call, email or pop in. We usually reply within one working day.</p>
            </div>
            <div className="grid gap-3">
              <a href={phoneHref} className="flex min-h-14 items-center gap-4 rounded-2xl bg-white px-5 font-bold text-pns-ink transition hover:-translate-y-0.5"><Phone size={20} className="text-pns-violet" /> {phoneDisplay}</a>
              <a href={mailHref} className="flex min-h-14 items-center gap-4 rounded-2xl bg-white/10 px-5 font-bold transition hover:bg-white/15"><Mail size={20} /> {email}</a>
              <div className="flex items-start gap-4 rounded-2xl bg-white/10 px-5 py-4 font-semibold"><MapPin size={20} className="mt-0.5 shrink-0" /> 1 Mushroom Road, Waterfall, The Precinct, 1686</div>
            </div>
          </div>
        </Section>
      </main>

      <PnsAssistant />

      <footer className="border-t border-pns-lilac py-8 text-sm text-pns-ink/70">
        <div className="section-shell flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img src="/logos/pns-mark.png" alt="" className="h-9 w-9" />
            <span>
              <strong className="text-pns-ink">Pragma Novus Systems (Pty) Ltd</strong> · Reg. 2026/496918/07
            </span>
          </div>
          <p>© {new Date().getFullYear()} Pragma Novus Systems. Ascend and NextStep are services of PNS.</p>
        </div>
        <nav className="section-shell mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-pns-lilac/60 pt-5 font-semibold" aria-label="Legal">
          {legalLinks.map(([label, href]) => (
            <a key={href} href={href} className="text-pns-ink hover:text-pns-violet">{label}</a>
          ))}
          <span className="text-pns-ink/50 md:ml-auto">Secure payments by Payfast · Prices in ZAR</span>
        </nav>
      </footer>
    </div>
  );
}

export default App;
