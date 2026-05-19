import { Link } from "react-router-dom";
import Layout from "@/components/site/Layout";

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-24">
    <h2 className="font-serif-display text-slate-ink text-[26px] md:text-[30px] leading-tight tracking-tight">
      {title}
    </h2>
    <div className="mt-4 space-y-4 text-[16px] md:text-[17px] leading-relaxed text-[hsl(var(--slate-700))]">
      {children}
    </div>
  </section>
);

const Privacy = () => (
  <Layout
    title="Privacy Policy"
    description="How United To Thrive LLC collects, uses, and protects information about visitors, members, and partners."
    canonical="/privacy"
  >
    <section className="bg-background">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 md:px-10 pt-24 md:pt-32 pb-10 md:pb-14">
        <h1
          className="font-serif-display text-slate-ink"
          style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
        >
          Privacy policy.
        </h1>
        <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[640px]">
          How United To Thrive LLC collects, uses, and protects information about visitors, members, and partners across our websites and programs.
        </p>
        <p className="mt-4 italic text-[14px] text-[hsl(var(--slate-500))]">Last updated: November 2026</p>
      </div>
    </section>

    <section className="bg-background">
      <div className="mx-auto max-w-[760px] px-6 sm:px-8 md:px-10 pb-24 md:pb-32 space-y-12">
        <Section id="who-we-are" title="1. Who we are">
          <p>
            United To Thrive LLC (&ldquo;United to Thrive,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is an Arizona limited liability company headquartered at 222 S Mill Ave, Suite 800, Tempe, AZ 85281. We operate UnitedToThrive.com and related properties including Profit Partners, Mastermind Passport, Command Central, FAM Central, Local Leaders, Promo Engine, Team Wellness Hub, and WER1.
          </p>
          <p>
            This policy explains what information we collect, why we collect it, how we use and share it, and the choices you have.
          </p>
        </Section>

        <Section id="information-we-collect" title="2. Information we collect">
          <p><strong>Information you give us.</strong> When you complete a form, apply to a program, request a booking, contact us, subscribe to updates, or become a member or partner, we collect details you submit. This typically includes your name, business name, email, phone, location, role, and any context you share about your goals or organization.</p>
          <p><strong>Information collected automatically.</strong> When you visit our sites we automatically collect technical information such as IP address, browser type, device type, referring page, pages viewed, and timestamps. We use cookies and similar technologies to remember preferences, measure traffic, and understand how the site is used.</p>
          <p><strong>Information from third parties.</strong> We may receive information from service providers used to run forms, scheduling, payments, email, analytics, and advertising, as well as from partners who refer you to a program.</p>
        </Section>

        <Section id="how-we-use" title="3. How we use information">
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Operate and improve our websites, programs, and member experiences.</li>
            <li>Review applications, schedule conversations, and deliver requested services.</li>
            <li>Communicate with you about programs, events, updates, and administrative matters.</li>
            <li>Send marketing emails and newsletters where permitted, with an unsubscribe link in every message.</li>
            <li>Measure performance, debug issues, and improve site security.</li>
            <li>Comply with legal obligations and enforce our terms.</li>
          </ul>
        </Section>

        <Section id="legal-basis" title="4. Legal basis for processing">
          <p>Where required by law, we rely on one or more of the following: your consent, performance of a contract with you, our legitimate interests in operating and growing the network, and compliance with legal obligations.</p>
        </Section>

        <Section id="sharing" title="5. How we share information">
          <p>We do not sell personal information. We share information only as needed to run our business:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Service providers</strong> that host the site, deliver forms and scheduling, process payments, send email, run analytics, and provide CRM and support tooling.</li>
            <li><strong>Program partners</strong> when you specifically apply to or participate in a program operated jointly with another organization.</li>
            <li><strong>Legal and safety</strong> reasons including responding to lawful requests, protecting rights and safety, and enforcing agreements.</li>
            <li><strong>Business transfers</strong> in connection with a merger, acquisition, financing, or sale of assets, with notice where required.</li>
          </ul>
        </Section>

        <Section id="cookies" title="6. Cookies and analytics">
          <p>We use cookies and similar technologies for essential site functions, preferences, analytics, and measuring marketing performance. You can control cookies through your browser settings. Disabling cookies may affect site functionality.</p>
        </Section>

        <Section id="retention" title="7. Data retention">
          <p>We retain information for as long as needed to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. When information is no longer needed, we delete or anonymize it.</p>
        </Section>

        <Section id="security" title="8. Security">
          <p>We use reasonable technical and organizational measures to protect information. No method of transmission or storage is fully secure, and we cannot guarantee absolute security.</p>
        </Section>

        <Section id="your-rights" title="9. Your choices and rights">
          <p>Depending on where you live, you may have rights to access, correct, delete, or port your personal information, to opt out of certain processing, and to withdraw consent. To exercise these rights, contact us using the details below. We will respond within the timelines required by applicable law.</p>
          <p>You can opt out of marketing email at any time using the unsubscribe link in any message.</p>
        </Section>

        <Section id="children" title="10. Children">
          <p>Our sites and programs are intended for adults. We do not knowingly collect personal information from children under 13. If you believe a child has provided us information, contact us and we will delete it.</p>
        </Section>

        <Section id="international" title="11. International visitors">
          <p>We operate from the United States. If you access our sites from outside the U.S., your information will be processed in the U.S. under U.S. law.</p>
        </Section>

        <Section id="changes" title="12. Changes to this policy">
          <p>We may update this policy from time to time. When we make material changes, we will update the &ldquo;Last updated&rdquo; date and, where appropriate, provide additional notice.</p>
        </Section>

        <Section id="contact" title="13. Contact us">
          <p>
            United To Thrive LLC<br />
            222 S Mill Ave, Suite 800<br />
            Tempe, AZ 85281
          </p>
          <p>
            Questions about this policy? <Link to="/contact?topic=privacy" className="text-slate-ink underline underline-offset-4 hover:no-underline">Contact us</Link>.
          </p>
        </Section>
      </div>
    </section>
  </Layout>
);

export default Privacy;
