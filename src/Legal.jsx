import { ArrowLeft } from "lucide-react";

const email = "frontdesk@pragmansystems.co.za";
const phoneDisplay = "+27 67 033 6452";
const address = "1 Mushroom Road, Waterfall, The Precinct, 1686, Gauteng, South Africa";
const updated = "2 November 2026";

export const legalLinks = [
  ["Terms & Conditions", "/terms"],
  ["Privacy Policy", "/privacy"],
  ["Refund & Cancellation", "/refunds"],
  ["Service Delivery", "/delivery"]
];

const H2 = ({ children }) => <h2 className="mt-12 font-display text-2xl font-bold text-pns-ink">{children}</h2>;
const H3 = ({ children }) => <h3 className="mt-6 font-display text-lg font-bold text-pns-ink">{children}</h3>;
const P = ({ children }) => <p className="mt-4 leading-7 text-pns-ink/80">{children}</p>;
const UL = ({ items }) => (
  <ul className="mt-4 grid list-disc gap-2 pl-6 leading-7 text-pns-ink/80 marker:text-pns-violet">
    {items.map((item, i) => <li key={i}>{item}</li>)}
  </ul>
);
const Note = ({ children }) => <div className="mt-6 rounded-2xl border-l-4 border-pns-gold bg-pns-mist p-5 leading-7 text-pns-ink/85">{children}</div>;
const Table = ({ rows, head }) => (
  <div className="mt-5 overflow-x-auto">
    <table className="w-full border-collapse text-left text-sm">
      {head && (
        <thead>
          <tr>{head.map((h) => <th key={h} className="border border-pns-lilac bg-pns-mist p-3 font-bold">{h}</th>)}</tr>
        </thead>
      )}
      <tbody>
        {rows.map(([k, v]) => (
          <tr key={k}>
            <th className="w-1/3 border border-pns-lilac bg-pns-mist p-3 align-top font-bold">{k}</th>
            <td className="border border-pns-lilac p-3 align-top text-pns-ink/80">{v}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
const A = ({ href, children }) => <a href={href} className="font-semibold text-pns-violet underline underline-offset-2 hover:text-pns-plum">{children}</a>;
const Mail = ({ subject }) => <A href={`mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`}>{email}</A>;

function Terms() {
  return (
    <>
      <P>These Terms and Conditions ("Terms") apply to <strong>www.pragmansystems.co.za</strong> and to every service offered and sold by <strong>Pragma Novus Systems (Pty) Ltd</strong> (registration number 2026/496918/07) ("PNS", "we", "us"), including Ascend Homework &amp; Tutoring Center ("Ascend") and NextStep Application Support ("NextStep") (together, the "Services").</P>
      <P>By using this website, creating an account or paying for a Service, you agree to these Terms. Ascend and NextStep also have service-specific terms on their own websites. If they conflict with these Terms, the service-specific terms apply to that Service.</P>

      <H2>1. About us</H2>
      <Table rows={[
        ["Company name", "Pragma Novus Systems (Pty) Ltd"],
        ["Registration number", "2026/496918/07"],
        ["Physical address", address],
        ["Email", <Mail />],
        ["Telephone / WhatsApp", phoneDisplay],
        ["Website", "www.pragmansystems.co.za"]
      ]} />

      <H2>2. Our Services</H2>
      <H3>2.1 Ascend Homework &amp; Tutoring Center</H3>
      <P>Ascend provides homework assistance, one-on-one tutoring and exam preparation for learners in Grades 1 to 12. Parents get an online portal showing attendance, homework, marks, bookings, invoices and tutor reports. Ascend is delivered in four ways:</P>
      <UL items={[
        <><strong>At the centre:</strong> in person at the Precinct Lifestyle Hub in Waterfall, Monday to Thursday after school.</>,
        <><strong>Online:</strong> live one-on-one lessons from home, anywhere in South Africa.</>,
        <><strong>In-home private tutoring:</strong> a vetted Ascend tutor comes to your home. This depends on a tutor being available near your area; we confirm availability with you before any in-home session goes ahead.</>,
        <><strong>Hybrid:</strong> you choose online or in-home for each session.</>
      ]} />
      <P>Every Ascend tutor is vetted before they teach, including a check against the National Register for Sex Offenders.</P>
      <H3>2.2 The Ascend platform for tutors and tutoring businesses</H3>
      <P>Independent tutors and tutoring businesses can use the Ascend platform to run their own clients: lessons, homework, progress reports and billing. They pay PNS a platform fee of <strong>10% of the total they bill their families through Ascend</strong>, however they charge (monthly, per session, weekly or per term). The tutor or business supplies its own tutoring services and sets its own prices; its agreement with its families is between them, and PNS is not a party to it. A tutor or business using the platform must have its families' consent before adding their information.</P>
      <H3>2.3 NextStep Application Support</H3>
      <P>NextStep is an online subscription service that helps school leavers, graduates and job-seekers find relevant opportunities, flags potentially risky listings, stores application documents and helps users prepare CVs and cover letters. NextStep is not an employer, recruitment agency or labour broker, and it does not guarantee interviews, employment or admission to any programme.</P>
      <H3>2.4 Service descriptions</H3>
      <P>We describe our Services as accurately as we can. We may improve, change or discontinue features from time to time. If a change materially reduces a paid Service you have already paid for, you may cancel and receive a pro-rata refund for the unused period.</P>

      <H2>3. Eligibility and accounts</H2>
      <UL items={[
        "You must be 18 or older to buy a Service. Learners under 18 use Ascend only through an account created by a parent or legal guardian. NextStep users under 18 need a parent or guardian's consent.",
        "You must give accurate, complete information and keep it up to date.",
        "Keep your login details confidential. You are responsible for activity on your account unless it results from our own security failure. Tell us immediately if you suspect unauthorised use."
      ]} />

      <H2>4. Prices and payment</H2>
      <UL items={[
        <>All prices are in <strong>South African Rand (ZAR)</strong> and include VAT where applicable.</>,
        <>Current prices: <strong>NextStep</strong> R5 per month. <strong>Ascend Homework Assistance</strong> R750 per month. <strong>Ascend One-on-one Tutoring</strong> R1,250 per month. <strong>Ascend Homework &amp; Tutoring</strong> R1,500 per month. <strong>Ascend Exam Prep</strong> R300 per week. Individually booked online and in-home sessions are charged at the rate confirmed with you before you pay. Your Ascend fee is confirmed in writing before you pay.</>,
        <>There is <strong>no registration fee</strong> for Ascend. Any sibling discount or other discount is shown on your invoice.</>,
        <>You can pay <strong>online by card</strong>, <strong>by EFT</strong> (and upload your proof of payment in your portal) or <strong>in person</strong> at the Ascend front desk. Card payments are processed by <strong>Payfast</strong>, a third-party payment gateway. Payfast's own terms and security standards apply to the payment. PNS does not receive or store your full card details.</>,
        "NextStep subscriptions are billed monthly in advance and renew automatically until cancelled. Ascend fees are payable monthly (or weekly for Exam Prep) in advance for the period booked, unless agreed otherwise in writing.",
        <><strong>Ascend bookings are conditional until paid.</strong> You can book sessions before paying, but a booking is only secured once we receive payment. If we haven't received payment within <strong>32 hours</strong> of you making a booking, the booking is released and the time may be offered to someone else. You won't be charged for a released booking.</>,
        "Every payment we record is confirmed with a receipt, and your statement in the Ascend portal shows your invoices, payments, credits and balance. If an invoice becomes overdue, we may send you a reminder.",
        "We may change prices. We'll give you at least 20 business days' notice before a change applies to an existing subscription or enrolment, and you may cancel before then.",
        "If a payment fails or is reversed, we may suspend access to paid features until the outstanding amount is paid."
      ]} />

      <H2>5. Delivery of Services</H2>
      <P>We don't sell or ship physical goods. NextStep is delivered online and paid features are activated once payment is confirmed. Ascend sessions are delivered at the centre, online or in your home, according to the schedule confirmed with you. The Ascend platform for tutors and businesses is delivered online from the moment they sign up. See our <A href="/delivery">Service Delivery Policy</A>.</P>

      <H2>6. Cancellations and refunds</H2>
      <P>You may cancel a Service at any time. Your refund rights, including your cooling-off rights under the Electronic Communications and Transactions Act and your cancellation rights under the Consumer Protection Act, are set out in our <A href="/refunds">Refund &amp; Cancellation Policy</A>, which forms part of these Terms.</P>

      <H2>7. Your responsibilities</H2>
      <P>You agree not to:</P>
      <UL items={[
        "give false information or impersonate another person;",
        "upload malware or try to hack, scrape, overload or interfere with our systems;",
        "bypass payment or access controls, or share paid access with others;",
        "record or share Ascend lessons without our permission;",
        "use the Services for anything unlawful, abusive, discriminatory or fraudulent."
      ]} />
      <P>You remain responsible for the accuracy of the CVs, certificates and other information you upload, and for your decisions about which opportunities to apply for.</P>
      <P>For in-home tutoring, a parent, guardian or another responsible adult must be at home for the whole session, and the home must be a safe place for the tutor to work. We may stop in-home sessions where that isn't the case.</P>
      <P>Tutors and businesses using the Ascend platform are responsible for the tutoring they provide, their own prices and tax, and for having their families' consent to store their information.</P>

      <H2>8. Results</H2>
      <P>We work hard for every learner and job-seeker, but results depend on many things outside our control, including attendance, effort and the decisions of schools and employers. We don't guarantee particular marks, results, interviews or employment.</P>

      <H2>9. Third-party websites</H2>
      <P>Our Services may link to job boards, employer websites, video platforms and payment providers. These third parties have their own terms and privacy practices, and we're not responsible for their content or decisions.</P>

      <H2>10. Intellectual property</H2>
      <P>Content on our websites and platforms, including text, logos, software, practice papers and designs, belongs to PNS or our licensors. You may use it only for personal, non-commercial purposes connected to your use of the Services. Documents you create or upload remain yours.</P>

      <H2>11. Privacy</H2>
      <P>We handle personal information in line with the Protection of Personal Information Act (POPIA) and our <A href="/privacy">Privacy Policy</A>.</P>

      <H2>12. Limitation of liability</H2>
      <P>To the extent permitted by law, PNS is not liable for indirect, incidental or consequential loss, lost opportunities, unsuccessful applications, third-party decisions, or loss caused by inaccurate information you provide. Our total liability for any claim relating to a Service is limited to the amount you paid for that Service in the three months before the claim. Nothing in these Terms limits rights you have under the Consumer Protection Act or any other law that cannot legally be excluded.</P>

      <H2>13. Suspension and termination</H2>
      <P>We may suspend or close an account that breaches these Terms, creates a security or legal risk or is used fraudulently. Where possible, we'll warn you first and give you a chance to fix the problem. You may stop using the Services and close your account at any time.</P>

      <H2>14. Complaints</H2>
      <P>If you're unhappy with a Service, contact us at <Mail /> or {phoneDisplay}. We'll acknowledge your complaint within 2 working days and aim to resolve it within 10 working days. If we can't resolve it, you may contact the Consumer Goods and Services Ombud or the National Consumer Commission.</P>

      <H2>15. Changes to these Terms</H2>
      <P>We may update these Terms from time to time. The "last updated" date shows the current version, and we'll communicate material changes by email or on our website before they take effect.</P>

      <H2>16. Governing law</H2>
      <P>These Terms are governed by the laws of the Republic of South Africa.</P>
    </>
  );
}

function Privacy() {
  return (
    <>
      <P>Pragma Novus Systems (Pty) Ltd (registration number 2026/496918/07) ("PNS", "we", "us") respects your privacy. This policy explains how we collect, use, share and protect personal information when you use www.pragmansystems.co.za, Ascend or NextStep, in line with the <strong>Protection of Personal Information Act 4 of 2013 (POPIA)</strong>.</P>

      <H2>1. Information we collect</H2>
      <Table head={["Category", "Examples"]} rows={[
        ["Contact and account details", "Name, email address, phone number, login details"],
        ["Learner information (Ascend)", "Child's name, grade, school, subjects, attendance, homework, marks and tutor notes, provided or recorded with a parent or guardian's consent"],
        ["Location (Ascend in-home and hybrid tutoring)", "Your general area (for example \"Midrand\"), so we can match you with a tutor nearby. We ask for a street address only once an in-home session is confirmed."],
        ["Bookings (Ascend)", "Sessions you book, how each one is delivered (at the centre, online or in-home), and whether it has been paid"],
        ["Tutor applicants (Ascend)", "Name, contact details, subjects, experience, how and where you'd like to tutor, and the results of background checks, including a check against the National Register for Sex Offenders"],
        ["Tutors and businesses on the Ascend platform", "Business name, contact details, how you charge your clients, and the amounts you bill through Ascend (to work out the platform fee)"],
        ["Career information (NextStep)", "CV, qualifications, certificates, work history, skills, job preferences and application records"],
        ["Payment information", "Transaction references, amounts, payment status, invoices, receipts and any proof of EFT payment you upload. Card details are captured and processed by Payfast, not by PNS."],
        ["Technical information", "Device type, browser, IP address and basic usage data needed to keep our services secure and working"],
        ["Communications", "Emails, WhatsApp messages and enquiries you send us"]
      ]} />

      <H2>2. Why we use your information</H2>
      <UL items={[
        "To create and manage your account and deliver the Service you signed up for;",
        "to process payments, subscriptions, refunds and invoices;",
        "to report progress to parents (Ascend) and to match opportunities and prepare application documents (NextStep);",
        "to match families with a suitable tutor nearby, and to assess and vet people who apply to tutor for Ascend;",
        "to confirm bookings, send payment reminders and release bookings that haven't been paid for;",
        "to contact you about your account, schedule changes, service updates and support requests;",
        "to keep our systems secure, prevent fraud and meet legal and tax obligations;",
        "to improve our Services using anonymised or aggregated information."
      ]} />
      <P>We only send marketing messages if you've agreed to receive them, and you can opt out at any time.</P>
      <P>When you answer a quick interest question on one of our pages without leaving your details, we store only your answer, a random identifier kept in your browser and a scrambled (hashed) version of your internet address used to stop repeated answers. We can't identify you from it.</P>

      <H2>3. Children's information</H2>
      <P>We process personal information of learners under 18 only with the consent of a parent or legal guardian, and only to deliver tutoring and progress reporting. Parents can view, correct or ask us to delete their child's information at any time.</P>

      <H2>4. Who we share information with</H2>
      <P>We <strong>never sell</strong> your personal information. We share it only where needed to deliver our Services:</P>
      <UL items={[
        <><strong>Payfast</strong>, to process payments securely;</>,
        "trusted service providers for hosting, databases, authentication, email, video lessons and document processing, who must protect your information;",
        "employers or opportunity providers, but only when you choose to send them an application;",
        "the Ascend tutor assigned to your child's session (only what they need to teach, and for in-home sessions, how to reach you);",
        "authorities, where the law requires it."
      ]} />
      <P>Some service providers may store information outside South Africa. When that happens, we make sure they provide protection comparable to POPIA.</P>
      <H3>Tutors and businesses using the Ascend platform</H3>
      <P>When an independent tutor or tutoring business uses the Ascend platform for its own clients, that tutor or business decides what information it collects about its families and why, and is responsible for it under POPIA. PNS stores and processes that information on their behalf, keeps each business's information separate, and doesn't use it for our own purposes.</P>

      <H2>5. How we protect your information</H2>
      <P>We use encrypted connections (HTTPS), access controls, secure authentication and reputable hosting providers. Only authorised people can access personal information, and only when they need it for their work. No online system is completely secure, but we will notify you and the Information Regulator if a security breach affects your personal information.</P>

      <H2>6. How long we keep it</H2>
      <P>We keep personal information only as long as needed to deliver the Service and meet legal requirements (for example, financial records, including invoices, receipts and proof of payment, are kept for 5 years). Applications from tutors we don't appoint are deleted within 12 months. When you close your account, we delete or anonymise your information unless the law requires us to keep it.</P>

      <H2>7. Cookies</H2>
      <P>Our websites use essential cookies and similar technologies to keep you signed in and keep the site secure. We don't use advertising cookies.</P>

      <H2>8. Your rights</H2>
      <P>Under POPIA you have the right to:</P>
      <UL items={[
        "ask what personal information we hold about you and get a copy;",
        "ask us to correct or delete your information;",
        "object to processing and withdraw consent (this may limit the Service we can provide);",
        "opt out of marketing at any time;",
        "complain to the Information Regulator."
      ]} />
      <P>To use any of these rights, email <Mail subject="Privacy request" /> with the subject line "Privacy request". We'll respond within 30 days.</P>

      <H2>9. Contact and complaints</H2>
      <P><strong>Information Officer:</strong> Pragma Novus Systems (Pty) Ltd, {address} · <Mail /> · {phoneDisplay}</P>
      <P>If you're not satisfied with how we handled your concern, you can contact the <strong>Information Regulator (South Africa)</strong> at <A href="https://inforegulator.org.za">inforegulator.org.za</A>.</P>

      <H2>10. Changes to this policy</H2>
      <P>We may update this policy from time to time. The "last updated" date shows the current version, and we'll tell you about material changes.</P>
    </>
  );
}

function Refunds() {
  return (
    <>
      <P>This policy applies to all services sold by Pragma Novus Systems (Pty) Ltd ("PNS"), including Ascend Homework &amp; Tutoring Center and NextStep Application Support. It forms part of our <A href="/terms">Terms &amp; Conditions</A> and does not limit your rights under the Consumer Protection Act (CPA) or the Electronic Communications and Transactions Act (ECTA).</P>
      <Note><strong>In short:</strong> You can cancel any service at any time. If you change your mind within 7 days of buying online, you get a full refund. After that, cancelling stops future billing, and fees already paid for the current period aren't refunded unless we failed to deliver the service. Ascend has no registration fee, and a booking you haven't paid for is simply released after 32 hours at no charge.</Note>

      <H2>1. Returns</H2>
      <P>PNS sells services only (tutoring and online subscriptions). We don't sell physical goods, so there are no items to return. Refunds work as described below.</P>

      <H2>2. 7-day cooling-off period</H2>
      <P>If you buy a service online, you may cancel within <strong>7 days</strong> of payment for a <strong>full refund</strong>, no reason needed, in line with section 44 of ECTA. For Ascend, if sessions were already attended in those 7 days, we deduct the value of the sessions delivered.</P>

      <H2>3. NextStep (R5 per month)</H2>
      <UL items={[
        "Cancel your subscription at any time from your account or by emailing us.",
        "Cancelling stops the next renewal. You keep paid features until the end of the month you've already paid for.",
        "After the 7-day cooling-off period, fees for the current month are not refunded.",
        "If you were charged in error, charged twice, or couldn't use the service because of a fault on our side, we refund the affected amount in full."
      ]} />

      <H2>4. Ascend Homework &amp; Tutoring</H2>
      <UL items={[
        "Cancel an enrolment by giving written notice by email or WhatsApp.",
        "After the cooling-off period, fees already paid for the current month (or week, for Exam Prep) are not refunded, unless we cancel sessions.",
        <>If <strong>we</strong> cancel a session, we'll offer a replacement session or credit it against your next fee. If neither suits you, we'll refund the value of the missed session.</>,
        "Sessions the learner misses are not refunded, but we'll try to arrange a make-up session where possible.",
        <>In line with section 14 of the CPA, you may cancel a fixed-term agreement with <strong>20 business days' notice</strong>. A reasonable cancellation charge may apply, and we'll explain it to you in writing first.</>,
        "Ascend charges no registration fee, so there is nothing to refund for registering."
      ]} />

      <H3>4.1 Booked online and in-home sessions</H3>
      <UL items={[
        <><strong>Unpaid bookings:</strong> a booking is conditional until we receive payment. If payment isn't received within <strong>32 hours</strong> of booking, the booking is released. Nothing is charged, so nothing is refunded.</>,
        <><strong>Cancelling a paid session:</strong> cancel in your Ascend portal or tell us at least <strong>24 hours</strong> before it starts and the full amount is credited to your account for another session, or refunded if you ask. If you cancel less than 24 hours before, the session isn't refunded, but we'll try to arrange another time.</>,
        <><strong>If we can't deliver:</strong> if we decline or cancel a paid session, or can't find a tutor near you for an in-home session you've paid for, you get a full credit or refund, whichever you prefer.</>,
        "If the tutor doesn't arrive for an in-home session, or an online session can't go ahead because of a fault on our side, we credit or refund that session in full.",
        "Money in credit on your account (for example after a credit note or an advance payment) is refunded on request."
      ]} />

      <H2>5. Tutors and businesses on the Ascend platform</H2>
      <UL items={[
        "There's no sign-up fee. The platform fee is 10% of what you bill your families through Ascend, so it falls automatically if you credit or refund a family through Ascend.",
        "You can stop using the platform at any time. The fee for amounts you've already billed is still payable.",
        "Refunds to your own families are between you and them, under your own refund policy."
      ]} />

      <H2>6. How to cancel or request a refund</H2>
      <P>Email <Mail subject="Cancellation or refund request" /> or WhatsApp {phoneDisplay} with:</P>
      <UL items={[
        "your full name and the email address on your account;",
        "the service (Ascend or NextStep) and, for Ascend, the learner's name;",
        "your payment reference or date of payment;",
        "the reason (optional for cooling-off cancellations)."
      ]} />
      <P>We'll confirm we've received your request within <strong>2 working days</strong>.</P>

      <H2>7. How refunds are paid</H2>
      <UL items={[
        <>Approved refunds are processed within <strong>10 working days</strong>.</>,
        "Card payments are refunded to the same card through Payfast where possible (card refunds can take a few extra days to show, depending on your bank). EFT and in-person payments are refunded by EFT to a bank account in the payer's name.",
        "Every refund or credit is shown on your statement in the Ascend portal.",
        "We don't charge a fee for processing refunds."
      ]} />

      <H2>8. Questions or disputes</H2>
      <P>If you're not happy with the outcome, contact us first and we'll do our best to resolve it. You may also contact the Consumer Goods and Services Ombud (<A href="https://www.cgso.org.za">cgso.org.za</A>) or the National Consumer Commission.</P>
    </>
  );
}

function Delivery() {
  return (
    <>
      <Note><strong>No physical goods are shipped.</strong> Pragma Novus Systems (Pty) Ltd sells services only, so there are no delivery or shipping fees. This page explains how and when each service is delivered after you pay.</Note>

      <H2>1. NextStep Application Support</H2>
      <Table rows={[
        ["How it's delivered", "Online at nextstep.pragmansystems.co.za and through the NextStep Android and Windows apps"],
        ["When you get access", "Paid features switch on automatically once Payfast confirms your payment, usually within a few minutes"],
        ["Service area", "Anywhere in South Africa with an internet connection"],
        ["Billing period", "Monthly, from the date of your first successful payment"]
      ]} />
      <P>If your access isn't active within 24 hours of a successful payment, email <Mail /> with your payment reference and we'll sort it out within one working day.</P>

      <H2>2. Ascend Homework &amp; Tutoring Center</H2>
      <Table head={["Option", "How it's delivered"]} rows={[
        ["At the centre", "In person at the Precinct Lifestyle Hub, 1 Mushroom Road, Waterfall, 1686. Homework Assistance runs Monday to Thursday, 15:00–18:00. Tutoring is 3 hours a week (2 × 1.5 hours or 1 × 3 hours) at times agreed with you."],
        ["Online", "Live one-on-one lessons in the Ascend online classroom, or through a meeting link we email you when the session is confirmed. Available anywhere in South Africa."],
        ["In-home", "A vetted Ascend tutor comes to your home at the confirmed time. Available where we have a tutor near your area; when you sign up we tell you whether one is available before any in-home session goes ahead."],
        ["Hybrid", "You choose online or in-home for each session you book."]
      ]} />
      <Table rows={[
        ["Parent portal access", "Straight away when you register. Your children's classes, bookings, homework, progress, invoices and receipts appear there."],
        ["Monthly programmes", "Start on the date our front desk confirms with you in writing after enrolment and payment"],
        ["Booked sessions", "You request a date, time and delivery option in your portal. We confirm the tutor and time by email. A booking is secured once we receive payment; if payment isn't received within 32 hours of booking, the booking is released."],
        ["How to pay", "By card through Payfast, by EFT (upload your proof of payment in the portal) or in person at the front desk"]
      ]} />
      <P>Online lessons need a device with a camera, microphone and a stable internet connection. We can't refund sessions missed because of the learner's own connectivity problems, but we'll help where we can.</P>

      <H2>3. The Ascend platform for tutors and tutoring businesses</H2>
      <Table rows={[
        ["How it's delivered", "Online at ascendhtcenter.pragmansystems.co.za"],
        ["When you get access", "Immediately after you sign up. Your families sign up through your own link."],
        ["Platform fee", "10% of what you bill your families through Ascend, shown on your Billing tab each month"]
      ]} />

      <H2>4. Confirmation</H2>
      <P>After every successful payment you'll receive a confirmation and a numbered receipt showing the amount paid in ZAR and the service purchased. Keep it as your proof of purchase. Your statement in the Ascend portal always shows your invoices, payments, credits and balance.</P>

      <H2>5. Questions</H2>
      <P>Contact us at <Mail /> or {phoneDisplay}. See also our <A href="/refunds">Refund &amp; Cancellation Policy</A>.</P>
    </>
  );
}

export const legalPages = {
  "/terms": ["Terms & Conditions", Terms],
  "/privacy": ["Privacy Policy", Privacy],
  "/refunds": ["Refund, Returns & Cancellation Policy", Refunds],
  "/delivery": ["Service Delivery Policy", Delivery]
};

export default function LegalPage({ path }) {
  const [title, Body] = legalPages[path];

  return (
    <div className="min-h-screen bg-white text-pns-ink">
      <header className="border-b border-pns-lilac/60 bg-white">
        <nav className="section-shell flex h-[72px] items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3" aria-label="Pragma Novus Systems home">
            <img src="/logos/pns-mark.png" alt="" className="h-11 w-11" />
            <span className="leading-tight">
              <strong className="block font-display text-sm font-bold tracking-[0.14em] text-pns-ink">PRAGMA NOVUS</strong>
              <span className="block font-display text-[10px] tracking-[0.42em] text-pns-ink/80">SYSTEMS</span>
            </span>
          </a>
          <a href="/" className="inline-flex items-center gap-2 rounded-full border border-pns-lilac px-4 py-2 text-sm font-bold transition hover:bg-pns-mist">
            <ArrowLeft size={16} /> Back to site
          </a>
        </nav>
      </header>

      <section className="bg-gradient-to-br from-pns-deep via-pns-ink to-pns-plum py-14 text-white">
        <div className="section-shell">
          <h1 className="font-display text-3xl font-bold md:text-5xl">{title}</h1>
          <p className="mt-3 text-white/70">Last updated: {updated}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {legalLinks.map(([label, href]) => (
              <a key={href} href={href} className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${href === path ? "border-pns-gold bg-pns-gold text-pns-deep" : "border-white/30 hover:border-white"}`}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <main className="section-shell max-w-3xl py-12 md:py-16">
        <Body />
      </main>

      <footer className="border-t border-pns-lilac py-8 text-sm text-pns-ink/70">
        <div className="section-shell">
          <strong className="text-pns-ink">Pragma Novus Systems (Pty) Ltd</strong> · Reg. 2026/496918/07 · {address} · {email} · {phoneDisplay}
        </div>
      </footer>
    </div>
  );
}
