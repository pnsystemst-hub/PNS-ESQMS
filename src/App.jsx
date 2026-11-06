import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PnsAssistant from "./PnsAssistant";
import { legalLinks } from "./Legal";
import { ArrowRight, BadgeCheck, Check, Clock, CreditCard, Download, GraduationCap, HeartHandshake, Lock, Mail, MapPin, Menu, Phone, Plus, School, Sprout, Users, X } from "lucide-react";

const email = "frontdesk@pragmansystems.co.za";
const phoneDisplay = "+27 67 033 6452";
const phoneHref = "tel:+27670336452";
const mailHref = `mailto:${email}?subject=${encodeURIComponent("Enquiry from the PNS website")}`;
const ascendUrl = "https://ascendhtcenter.pragmansystems.co.za/";
// ?from= is Ascend's lead tracking: it remembers which page sent a person to sign up.
const ascend = (path, from) => `${ascendUrl}${path.replace(/^\//, "")}${path.includes("?") ? "&" : "?"}from=${from}`;
const ask = (subject) => `mailto:${email}?subject=${encodeURIComponent(subject)}`;
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
  ["Parents", "/parents"],
  ["Tutors & businesses", "/tutors"],
  ["Schools & organisations", "/organisations"],
  ["Ascend", "/#ascend"],
  ["What we do", "/#what-we-do"],
  ["About", "/#about"]
];

const trust = [
  [BadgeCheck, "Registered SA company", "Reg. 2026/496918/07"],
  [CreditCard, "Secure payments", "Processed by Payfast"],
  [Lock, "Your data protected", "Handled in line with POPIA"],
  [Clock, "Real people", "Reply within one working day"]
];

// The three ways in. Same order and same words on the Ascend home page.
const doors = [
  [Users, "Parents", "See where your child is stuck, get them the right help, and follow whether it's working.", "/parents", "For parents", "bg-pns-ink text-white", "bg-pns-violet"],
  [GraduationCap, "Tutors & tutoring businesses", "Bring your own learners and run lessons, homework, progress and billing in one workspace.", "/tutors", "For tutors and businesses", "bg-pns-plum text-white", "bg-pns-plum"],
  [School, "Schools, estates & organisations", "Set up a structured, measurable support programme for your learners or community.", "/organisations", "For organisations", "bg-pns-gold text-pns-deep", "bg-pns-gold"]
];

const cycle = [
  ["Check", "Find what the learner can and can't do yet, skill by skill."],
  ["Plan", "Decide what to work on first, instead of repeating whole topics."],
  ["Teach", "Live online or in person, with homework and practice that fit."],
  ["Retest", "Test again to see whether the gap has actually closed."],
  ["Report", "Results in plain words for parents, tutors and organisers."]
];

const ascendCan = [
  "Curriculum map for CAPS, IEB and Cambridge, broken into topics and subtopics",
  "Tests marked topic by topic, with practice papers that mark themselves",
  "Live classroom with video, whiteboard and documents on the board",
  "Timetables, registers and bookings for in-person lessons",
  "Homework, messages and weekly summaries for families",
  "Separate, private spaces for each centre, business and tutor"
];

// Commercial divisions: only what can be used or arranged today.
const divisions = [
  ["Educational Intelligence", "Knowing what's really going on.", ["Learning checks, starting with maths", "Topic-by-topic results and learning gaps", "Progress reports in plain words"]],
  ["Educational Technology", "The Ascend platform.", ["A workspace for independent tutors", "A space for tutoring businesses and centres", "A dashboard for parents and a simple login for learners"]],
  ["Educational Services", "Teaching, delivered by us.", ["One-on-one tutoring, in person and online", "Supervised homework assistance", "Exam preparation"]],
  ["Educational Infrastructure", "Programmes for your community.", ["Support programmes for schools", "Homework and tutoring centres for estates", "Community education programmes"]],
  ["Educational Resources", "The curriculum, made usable.", ["Curriculum map for CAPS, IEB and Cambridge", "Practice papers with memos", "Targeted practice for individual learners"]],
  ["Educational Quality Management", "How we keep support accountable.", ["The PNS-ESQMS framework", "Baselines, assessment cycles and retests", "Reporting standards for support programmes"]]
];

// The three customer pages. Each offer: [title, body, call to action, link, note].
const doorPages = {
  "/parents": {
    title: "For parents",
    eyebrow: "For parents",
    h1: "Know where your child is stuck, and whether the help is working.",
    intro: "Use only what you need. A learning check doesn't commit you to tutoring, and everything your child does shows up in one simple dashboard.",
    offers: [
      ["See where my child is stuck", "A learning check shows which skills are holding your child back, before you spend money trying to fix them. It starts with maths, and you keep the results whatever you decide next. It's an academic check, not a psychological assessment. We arrange these by hand for now, so tell us your child's grade, curriculum and subject.", "Request a learning check", ask("Learning check request"), "We'll confirm what's available for your child's grade and subject."],
      ["Get tutoring", "One-on-one lessons with a tutor, live online, at your home where a tutor is nearby, or a mix of both. Register once, add your children and choose what suits them.", "Register for tutoring", ascend("/register?org=precinct&mode=online", "pns-parents"), "Our front desk confirms the programme, start date and fee in writing."],
      ["Find a centre", "Supervised homework help and tutoring at a centre near you, starting with the Ascend Homework & Tutoring Center at The Precinct in Waterfall.", "See the centre", ascend("/precinct", "pns-parents"), null]
    ],
    stepsTitle: "What you see once you're in",
    steps: [
      ["One dashboard", "Each child's lessons, attendance, homework and marks in one place."],
      ["Topics, not just marks", "Results by subject, term and topic, in plain words."],
      ["Join from your phone", "Your child joins live lessons from your account, or with their own username and PIN."],
      ["Stay in touch", "Message the tutor and get a short summary of your child's week."]
    ],
    pricing: true,
    faqs: [
      ["Which curricula do you support?", "Ascend's curriculum map covers CAPS, IEB and Cambridge. Practice questions are written against CAPS and linked to matching IEB and Cambridge topics. Tell us your child's curriculum and we'll be clear about what's available."],
      ["We homeschool. Can Ascend help?", "It can be useful, for tutoring, learning checks and following progress. Talk to us about your curriculum and what you need, and we'll tell you honestly what fits."],
      ["Which grades do you support?", "Our centre and tutoring programmes support Grade R to Grade 12. Self-marking practice currently covers Grades 4 to 12."]
    ]
  },
  "/tutors": {
    title: "For tutors and tutoring businesses",
    eyebrow: "For tutors & tutoring businesses",
    h1: "Spend less time on admin and more time teaching.",
    intro: "If you're running your work on WhatsApp, Zoom, spreadsheets and Word documents, Ascend puts it in one place. Your learners and your business stay yours.",
    offers: [
      ["I'm a private tutor", "Your own space on Ascend for your own clients: lessons, homework, progress and billing. Teach in the live classroom, or keep using Zoom, Google Meet or WhatsApp.", "Run my learners on Ascend", ascend("/register?as=private_tutor", "pns-tutors"), "You're set up straight away. Any platform fee is shown on the form before you accept."],
      ["I run a tutoring business", "Your name, logo and colour. Your programmes and fees. Your parents, learners and tutors, and nobody outside your business can see them.", "Register my business", ascend("/register?as=business", "pns-tutors"), "Any platform fee is shown on the form before you accept."],
      ["I want to teach for Ascend", "Join our team and teach our families online, in their homes or at a centre. We check every application before setting you up.", "Apply to teach", ascend("/register?as=ascend_tutor", "pns-tutors"), "Applying doesn't guarantee placement or a set number of learners."]
    ],
    stepsTitle: "What's in the workspace",
    steps: [
      ["Teach", "Live classroom with video, whiteboard and documents, plus registers for in-person lessons."],
      ["Assess", "Practice papers that mark themselves, and tests marked topic by topic."],
      ["Follow progress", "A learning map for CAPS, IEB and Cambridge that shows each learner's gaps."],
      ["Run the business", "Parents' dashboards, messages, invoices and receipts."]
    ],
    faqs: [
      ["Will I get new clients by signing up?", "No, and we won't promise that. Ascend is a workspace for the learners you already teach. Your families sign up through your own link."],
      ["Do I have to stop using Zoom or WhatsApp?", "No. Teach in Ascend's classroom, or keep your current tools and record the lesson in Ascend."]
    ]
  },
  "/organisations": {
    title: "For schools, estates and organisations",
    eyebrow: "For schools, estates & organisations",
    h1: "A structured, measurable support programme, without building it yourself.",
    intro: "We bring the platform and the framework. You keep your learners, your teaching and your governance. Every programme is scoped and quoted with you, so there is nothing to buy online.",
    offers: [
      ["Schools", "Supplementary support that complements your teaching: assess a grade or subject, see the gaps topic by topic, support the learners who need it, and retest to see what worked.", "Discuss a school programme", ask("School programme enquiry"), "We suggest starting small: one subject and one grade."],
      ["Estates & residential communities", "A homework and tutoring centre as an amenity for residents, with registration, attendance, teaching and parent reporting running on Ascend.", "Discuss a centre for our estate", ask("Educational support centre enquiry"), null],
      ["NGOs, community & private education", "Structured educational support for a community or private facility, with the reporting a board or sponsor will ask for.", "Discuss a partnership", ask("Partnership enquiry"), null]
    ],
    stepsTitle: "How we work with you",
    steps: [
      ["Talk", "You tell us who the programme is for and what you want to change."],
      ["Scope", "We agree the subjects, grades, learners and measures, and quote in writing."],
      ["Set up", "Your own private space on Ascend, with tutor onboarding and learner registration."],
      ["Run and measure", "Baseline, teaching, assessment cycles, retests and regular reports."]
    ],
    faqs: [
      ["Who sees our learners' information?", "Each organisation has its own private space. Learner records are visible only to their parents, their tutors and that organisation's organisers. We agree how personal information is handled in writing, in line with POPIA, before a programme starts."],
      ["Do you supply the tutors?", "Either way can work. You can use your own educators on Ascend, or talk to us about providing teaching as part of the programme."]
    ]
  }
};

const contactReasons = [
  "A learning check for my child",
  "Tutoring for my child",
  "Using Ascend as a tutor",
  "Using Ascend for my tutoring business",
  "A demonstration for my school or organisation",
  "A support centre for my estate or community",
  "NextStep",
  "Something else"
];

const values = [
  ["Practical", "We build things people actually use, not reports that sit on a shelf."],
  ["Honest", "No inflated promises. We show you the progress, and we're clear about what's next."],
  ["Personal", "Behind every tool is a real person ready to help. Call or email us any time."],
  ["Secure", "Your information is protected, used only to deliver your service and never sold."]
];

const plans = [
  {
    service: "Ascend",
    name: "Homework Assistance",
    price: "R750",
    per: "/ month",
    features: ["Monday to Thursday, 15:00–18:00", "Supervised, with help when stuck", "Homework checked before home time", "Parent portal and tutor reports"],
    href: ascend("/register?org=precinct", "pns-parents"),
    cta: "Enrol now"
  },
  {
    service: "Ascend",
    name: "One-on-one Tutoring",
    price: "R1,250",
    per: "/ month",
    features: ["A dedicated private tutor", "3 hours a week (2 × 1.5 h or 1 × 3 h)", "Focus on the subjects that need it most", "In person or live online"],
    href: ascend("/register?org=precinct", "pns-parents"),
    cta: "Enrol now"
  },
  {
    service: "Ascend",
    name: "Homework & Tutoring",
    price: "R1,500",
    per: "/ month",
    features: ["Daily homework sessions plus a private tutor", "Homework turned into one-on-one lessons", "R500 a month less than both separately", "Full parent portal access"],
    href: ascend("/register?org=precinct", "pns-parents"),
    cta: "Enrol now",
    featured: "Most complete"
  }
];

const faqs = [
  ["How do I pay?", "Online payments are processed securely by Payfast, a leading South African payment gateway, so you can pay by card, Instant EFT and other methods Payfast supports. PNS never sees or stores your full card details. For Ascend, our front desk sends you the payment options once your place is confirmed."],
  ["When does my service start after I pay?", "NextStep paid features switch on as soon as your payment is confirmed, usually within minutes. Ascend sessions start on the date our front desk confirms with you. We don't ship anything: all our services are delivered in person or online."],
  ["Can I cancel?", "Yes. NextStep can be cancelled at any time and won't renew the next month. Ascend enrolments can be cancelled with written notice by email or WhatsApp. If you change your mind within 7 days of buying online, you get a full refund. See our Refund & Cancellation Policy for the details."],
  ["Does NextStep guarantee me a job?", "No honest service can. NextStep finds and ranks genuine opportunities, flags risky ones and helps you send stronger applications, but employers make the hiring decisions. We focus on improving your chances and saving you time."],
  ["What's the difference between PNS and Ascend?", "Pragma Novus Systems is the company. Ascend is our education platform. We use it to run our own tutoring and homework programmes, and other tutors, businesses and organisations can use it to run theirs."],
  ["Do I have to buy tutoring to use Ascend?", "No. Tutors and businesses can use Ascend with their own learners, and a learning check doesn't commit a family to tutoring."],
  ["Is my personal information safe?", "Yes. We collect only what we need to deliver your service, store it with reputable providers, protect it with access controls and encryption, and never sell it. Our Privacy Policy explains your rights under POPIA."]
];

function Doors() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {doors.map(([Icon, title, body, href, cta, iconColours, bar]) => (
        <a key={title} href={href} className="group relative flex flex-col overflow-hidden rounded-3xl bg-white p-7 shadow-soft ring-1 ring-pns-lilac transition hover:-translate-y-1 hover:shadow-lift">
          <span className={`absolute inset-x-0 top-0 h-1 ${bar}`} />
          <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconColours}`}><Icon size={22} /></span>
          <h3 className="mt-4 font-display text-xl font-bold">{title}</h3>
          <p className="mt-2 flex-1 leading-7 text-pns-ink/75">{body}</p>
          <span className="mt-5 inline-flex items-center gap-2 font-bold text-pns-violet transition group-hover:gap-3">{cta} <ArrowRight size={16} /></span>
        </a>
      ))}
    </div>
  );
}

function FaqList({ items }) {
  return (
    <div className="mt-8 grid gap-3">
      {items.map(([q, a]) => (
        <details key={q} className="group rounded-2xl bg-white p-5 shadow-soft ring-1 ring-pns-lilac/60">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-bold [&::-webkit-details-marker]:hidden">
            {q}
            <Plus size={18} className="shrink-0 text-pns-violet transition group-open:rotate-45" />
          </summary>
          <p className="mt-3 leading-7 text-pns-ink/75">{a}</p>
        </details>
      ))}
    </div>
  );
}

function Contact() {
  const [reason, setReason] = useState(contactReasons[0]);
  return (
    <Section id="contact" className="relative overflow-hidden bg-gradient-to-br from-pns-deep via-pns-ink to-pns-plum py-20 text-white">
      <div className="section-shell grid gap-10 md:grid-cols-[1.1fr_.9fr] md:items-center">
        <div>
          <Eyebrow light>Contact us</Eyebrow>
          <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">Tell us what you need.</h2>
          <p className="mt-5 max-w-lg text-lg leading-8 text-white/75">Choose what it's about and we'll start your email for you, or call or pop in. We usually reply within one working day.</p>
        </div>
        <div className="grid gap-3">
          <div className="grid gap-2 rounded-2xl bg-white/10 p-5 font-semibold">
            <label htmlFor="contact-reason">I'd like to talk about</label>
            <select id="contact-reason" value={reason} onChange={(e) => setReason(e.target.value)} className="min-h-12 w-full rounded-xl bg-white px-3 font-semibold text-pns-ink">
              {contactReasons.map((r) => <option key={r}>{r}</option>)}
            </select>
            <a href={ask(reason)} className="mt-1 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-pns-gold px-5 font-bold text-pns-deep transition hover:bg-white"><Mail size={18} /> Email us about this</a>
          </div>
          <a href={phoneHref} className="flex min-h-14 items-center gap-4 rounded-2xl bg-white px-5 font-bold text-pns-ink transition hover:-translate-y-0.5"><Phone size={20} className="text-pns-violet" /> {phoneDisplay}</a>
          <a href={mailHref} className="flex min-h-14 items-center gap-4 rounded-2xl bg-white/10 px-5 font-bold transition hover:bg-white/15"><Mail size={20} className="shrink-0" /> <span className="break-all">{email}</span></a>
          <div className="flex items-start gap-4 rounded-2xl bg-white/10 px-5 py-4 font-semibold"><MapPin size={20} className="mt-0.5 shrink-0" /> 1 Mushroom Road, Waterfall, The Precinct, 1686</div>
        </div>
      </div>
    </Section>
  );
}

function Pricing() {
  return (
    <Section id="pricing" className="bg-white py-16">
      <div className="section-shell">
        <Eyebrow>Ascend Homework & Tutoring Center</Eyebrow>
        <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight md:text-4xl">Clear prices in rand. No hidden fees.</h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-pns-ink/75">These are the prices for our own programmes. All prices are in South African Rand (ZAR). You always see the exact amount before you pay, and online payments are processed securely by Payfast.</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.name} className={`relative flex flex-col rounded-3xl bg-white p-7 shadow-soft ${plan.featured ? "ring-2 ring-pns-gold" : "ring-1 ring-pns-lilac"}`}>
              {plan.featured && <span className="absolute -top-3 left-6 rounded-full bg-pns-gold px-3 py-1 text-xs font-bold text-pns-deep">{plan.featured}</span>}
              <h3 className="font-display text-lg font-bold">{plan.name}</h3>
              <p className="mt-3 font-display text-4xl font-bold">{plan.price}<span className="ml-1 font-sans text-base font-medium text-pns-ink/60">{plan.per}</span></p>
              <ul className="mt-5 grid flex-1 gap-2.5 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2"><Check size={16} className="mt-0.5 shrink-0 text-pns-emerald" />{f}</li>
                ))}
              </ul>
              <a href={plan.href} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-pns-ink px-5 py-3 font-bold text-white transition hover:bg-pns-plum">
                {plan.cta} <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm leading-6 text-pns-ink/65">
          Exam Prep is also available at R300 per week. Your fee is confirmed in writing before you pay. See our{" "}
          <a href="/refunds" className="font-semibold text-pns-violet underline">Refund &amp; Cancellation Policy</a> and{" "}
          <a href="/delivery" className="font-semibold text-pns-violet underline">Service Delivery Policy</a>.
        </p>
      </div>
    </Section>
  );
}

function DoorPage({ page }) {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-pns-deep via-pns-ink to-pns-plum pb-16 pt-32 text-white md:pt-40">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[620px] w-[620px] rounded-full border border-white/10" />
        <div className="section-shell relative">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-pns-gold">{page.eyebrow}</p>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.1] md:text-5xl">{page.h1}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">{page.intro}</p>
        </div>
      </section>
      <Section className="py-16">
        <div className="section-shell grid gap-5 md:grid-cols-3">
          {page.offers.map(([title, body, cta, href, note]) => (
            <article key={title} className="flex flex-col rounded-3xl bg-white p-7 shadow-soft ring-1 ring-pns-lilac">
              <h2 className="font-display text-xl font-bold">{title}</h2>
              <p className="mt-3 flex-1 leading-7 text-pns-ink/75">{body}</p>
              <a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-pns-ink px-5 py-3 text-center font-bold text-white transition hover:bg-pns-plum">
                {cta} <ArrowRight size={16} className="shrink-0" />
              </a>
              {note && <p className="mt-3 text-xs leading-5 text-pns-ink/60">{note}</p>}
            </article>
          ))}
        </div>
      </Section>
      <Section className="bg-pns-mist py-16">
        <div className="section-shell">
          <h2 className="font-display text-3xl font-bold leading-tight">{page.stepsTitle}</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {page.steps.map(([title, body]) => (
              <div key={title} className="rounded-2xl bg-white p-6 shadow-soft">
                <strong className="font-display">{title}</strong>
                <p className="mt-2 text-sm leading-6 text-pns-ink/75">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      {page.pricing && <Pricing />}
      <Section className={page.pricing ? "bg-pns-mist py-16" : "py-16"}>
        <div className="section-shell max-w-3xl">
          <h2 className="font-display text-3xl font-bold">Questions</h2>
          <FaqList items={page.faqs} />
        </div>
      </Section>
    </>
  );
}

function Home() {
  return (
    <>
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
              Where learning becomes <span className="text-pns-gold">measurable.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
              Educational intelligence, technology and quality-managed educational support. Ascend is the platform that brings them together, for families, tutors, schools and communities.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#doors" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 font-bold text-pns-ink transition hover:bg-pns-gold hover:text-pns-deep">
                Find what fits you <ArrowRight size={18} />
              </a>
              <a href="#ascend" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/40 px-6 font-bold text-white transition hover:border-white hover:bg-white/10">
                What is Ascend?
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

      {/* The three ways in */}
      <Section id="doors" className="py-20">
        <div className="section-shell">
          <Eyebrow>Who we help</Eyebrow>
          <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight md:text-4xl">Start with who you are.</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-pns-ink/75">You don't need to understand everything we do. Pick the one that fits and see only what's relevant to you.</p>
          <div className="mt-10"><Doors /></div>
          <div className="mt-6 flex flex-col gap-4 rounded-3xl bg-pns-sage p-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-pns-emerald text-white"><Sprout size={20} /></span>
              <p className="leading-7 text-pns-ink/80"><strong className="font-display text-pns-ink">Also from PNS: NextStep.</strong> For school leavers and graduates: genuine jobs, learnerships and internships matched to your CV, for R5 a month.</p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a href={nextstepUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-pns-emerald px-5 py-3 font-bold text-white transition hover:bg-[#0b4a3e]">Visit NextStep <ArrowRight size={16} /></a>
              <a href={nextstepApkUrl} download className="inline-flex items-center gap-2 rounded-full border-2 border-pns-emerald px-5 py-3 font-bold text-pns-emerald transition hover:bg-pns-emerald hover:text-white"><Download size={16} /> Android app</a>
            </div>
          </div>
        </div>
      </Section>

      {/* Ascend */}
      <Section id="ascend" className="bg-pns-mist py-20">
        <div className="section-shell">
          <Eyebrow>Ascend</Eyebrow>
          <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight md:text-4xl">From more teaching to intelligent intervention.</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-pns-ink/75">Ascend is more than an online classroom. It connects assessment, targeted support, teaching, progress and everyday administration, so everyone works from the same picture of each learner.</p>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {cycle.map(([title, body], i) => (
              <li key={title} className="rounded-2xl bg-white p-5 shadow-soft">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pns-ink font-bold text-white">{i + 1}</span>
                <strong className="mt-3 block font-display text-lg">{title}</strong>
                <span className="mt-1 block text-sm leading-6 text-pns-ink/70">{body}</span>
              </li>
            ))}
          </ol>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {ascendCan.map((c) => <li key={c} className="flex items-start gap-3 leading-7"><Check size={18} className="mt-1 shrink-0 text-pns-emerald" />{c}</li>)}
          </ul>
          <a href={ascend("/", "pns-home")} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-pns-ink px-6 font-bold text-white transition hover:bg-pns-plum">Visit Ascend <ArrowRight size={18} /></a>
        </div>
      </Section>

      {/* What we do */}
      <Section id="what-we-do" className="py-20">
        <div className="section-shell">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight md:text-4xl">Six areas of work, one purpose.</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-pns-ink/75">Open any area to see what's in it. Use one part or several: you never have to take everything.</p>
          <div className="mt-10 grid items-start gap-4 md:grid-cols-2">
            {divisions.map(([title, line, items]) => (
              <details key={title} className="group rounded-2xl border border-pns-lilac border-l-4 border-l-pns-gold bg-white p-5 shadow-soft">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                  <span><strong className="block font-display text-lg">{title}</strong><span className="text-sm text-pns-ink/70">{line}</span></span>
                  <Plus size={18} className="shrink-0 text-pns-violet transition group-open:rotate-45" />
                </summary>
                <ul className="mt-4 grid gap-2 text-sm font-semibold">
                  {items.map((i) => <li key={i} className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-pns-violet" />{i}</li>)}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* About */}
      <Section id="about" className="bg-pns-mist py-20">
        <div className="section-shell grid gap-12 md:grid-cols-[.9fr_1.1fr] md:items-center">
          <div>
            <Eyebrow>About us</Eyebrow>
            <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">Intelligent systems. Novel solutions. Real people.</h2>
            <p className="mt-5 text-lg leading-8 text-pns-ink/75">
              Pragma Novus Systems (PNS) exists to make educational support more structured, measurable and accountable. PNS is the company and the framework. Ascend is the platform we built to deliver them.
            </p>
            <p className="mt-4 leading-8 text-pns-ink/75">
              Our approach is set out in the PNS Educational Support Quality Management System (PNS-ESQMS): start with a baseline, teach to the gaps, test in cycles, retest, and report honestly. We're based at The Precinct in Waterfall. "Pragma" stands for practical action; "Novus" means new.
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
      <Section id="faq" className="py-20">
        <div className="section-shell max-w-3xl">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="font-display text-3xl font-bold md:text-4xl">Questions people often ask</h2>
          <FaqList items={faqs} />
        </div>
      </Section>
    </>
  );
}

function App({ path = "/" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const page = doorPages[path];

  useEffect(() => {
    if (page) document.title = `${page.title} | Pragma Novus Systems`;
    // The page is drawn after the browser looks for #pricing and the like, so go there once it exists.
    if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: "instant" });
  }, [page]);

  return (
    <div className="min-h-screen bg-white text-pns-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-pns-lilac/60 bg-white/90 backdrop-blur-xl">
        <nav className="section-shell flex h-[72px] items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3" aria-label="Pragma Novus Systems home">
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
        {page ? <DoorPage page={page} /> : <Home />}
        <Contact />
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
