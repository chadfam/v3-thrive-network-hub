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

const Terms = () => (
  <Layout
    title="Terms of Service"
    description="The agreement between United To Thrive LLC and visitors, members, and partners using the United to Thrive platform and offerings."
    canonical="/terms"
  >
    <section className="bg-background">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 md:px-10 pt-24 md:pt-32 pb-10 md:pb-14">
        <h1
          className="font-serif-display text-slate-ink"
          style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
        >
          Terms of service.
        </h1>
        <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[640px]">
          The agreement between United To Thrive LLC and visitors, members, and partners using the United to Thrive platform and offerings.
        </p>
        <p className="mt-4 italic text-[14px] text-[hsl(var(--slate-500))]">Last updated: November 2026</p>
      </div>
    </section>

    <section className="bg-background">
      <div className="mx-auto max-w-[760px] px-6 sm:px-8 md:px-10 pb-24 md:pb-32 space-y-12">
        <Section id="acceptance" title="1. Acceptance of terms">
          <p>
            These Terms of Service (the &ldquo;Terms&rdquo;) govern your access to and use of the websites, programs, and services operated by United To Thrive LLC (&ldquo;United to Thrive,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), including UnitedToThrive.com and related properties (collectively, the &ldquo;Services&rdquo;). By accessing or using the Services, you agree to be bound by these Terms. If you do not agree, do not use the Services.
          </p>
        </Section>

        <Section id="eligibility" title="2. Eligibility">
          <p>You must be at least 18 years old and able to form a binding contract to use the Services. If you use the Services on behalf of an organization, you represent that you have authority to bind that organization to these Terms.</p>
        </Section>

        <Section id="programs" title="3. Programs and member agreements">
          <p>Programs such as Profit Partners, Mastermind Passport, Command Central, FAM Central, Local Leaders, Promo Engine, Team Wellness Hub, and WER1 are subject to separate program-specific agreements provided at enrollment. In the event of a conflict between these Terms and a program-specific agreement, the program-specific agreement controls for that program.</p>
        </Section>

        <Section id="applications" title="4. Applications and acceptance">
          <p>Submitting an application does not guarantee acceptance into any program. We may accept or decline applications at our discretion based on fit, capacity, and program criteria.</p>
        </Section>

        <Section id="fees" title="5. Fees, payments, and refunds">
          <p>Some Services and programs require payment. Fees, billing cycles, and refund terms are described at the point of purchase or in the applicable program agreement. Unless stated otherwise in writing, fees are non-refundable once a program has begun.</p>
        </Section>

        <Section id="conduct" title="6. Acceptable use">
          <p>You agree not to misuse the Services. You will not:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Violate any law or the rights of others.</li>
            <li>Upload or transmit malicious code, spam, or harmful content.</li>
            <li>Attempt to access, scrape, or interfere with parts of the Services not intended for you.</li>
            <li>Misrepresent your identity, affiliation, or qualifications.</li>
            <li>Use the Services to harass, defame, or harm any person or organization.</li>
          </ul>
        </Section>

        <Section id="ip" title="7. Intellectual property">
          <p>The Services, including all content, branding, software, and trademarks, are owned by United To Thrive LLC or its licensors and are protected by intellectual property laws. Profit Partners&trade;, Mastermind Passport&trade;, Command Central&trade;, and Lifetime Client Agency&trade; are trademarks of United To Thrive LLC.</p>
          <p>We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for their intended purpose. You may not copy, modify, distribute, sell, or create derivative works from the Services without our written consent.</p>
        </Section>

        <Section id="user-content" title="8. User content">
          <p>You retain ownership of content you submit to the Services. By submitting content, you grant United to Thrive a worldwide, non-exclusive, royalty-free license to use, store, display, reproduce, and adapt that content as needed to operate and improve the Services and to fulfill program activities.</p>
          <p>You represent that you have all rights necessary to submit your content and that it does not infringe the rights of any third party.</p>
        </Section>

        <Section id="third-party" title="9. Third-party services and links">
          <p>The Services may link to or integrate with third-party websites and tools. We are not responsible for third-party content, products, or practices. Your use of third-party services is governed by their own terms and policies.</p>
        </Section>

        <Section id="disclaimers" title="10. Disclaimers">
          <p>The Services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, whether express, implied, or statutory, including warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
          <p>Information and coaching shared through our Services is for general business, leadership, and wellness education. It is not legal, tax, financial, medical, or other professional advice. You are responsible for your own decisions and results.</p>
        </Section>

        <Section id="liability" title="11. Limitation of liability">
          <p>To the maximum extent permitted by law, United To Thrive LLC and its officers, members, employees, and partners will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits, revenue, data, or goodwill, arising from or related to your use of the Services. Our total liability for any claim relating to the Services will not exceed the amount you paid to us in the twelve months preceding the claim, or one hundred U.S. dollars, whichever is greater.</p>
        </Section>

        <Section id="indemnification" title="12. Indemnification">
          <p>You agree to indemnify and hold harmless United To Thrive LLC and its affiliates from any claims, losses, liabilities, and expenses (including reasonable attorneys&rsquo; fees) arising from your use of the Services, your content, or your violation of these Terms or any applicable law.</p>
        </Section>

        <Section id="termination" title="13. Termination">
          <p>We may suspend or terminate your access to the Services at any time for any reason, including violation of these Terms. You may stop using the Services at any time. Sections that by their nature should survive termination will survive, including intellectual property, disclaimers, limitation of liability, indemnification, and dispute resolution.</p>
        </Section>

        <Section id="law" title="14. Governing law and disputes">
          <p>These Terms are governed by the laws of the State of Arizona, without regard to its conflict of laws principles. Any dispute arising from these Terms or the Services will be resolved exclusively in the state or federal courts located in Maricopa County, Arizona, and you consent to the personal jurisdiction of those courts.</p>
        </Section>

        <Section id="changes" title="15. Changes to these terms">
          <p>We may update these Terms from time to time. When we make material changes, we will update the &ldquo;Last updated&rdquo; date above. Your continued use of the Services after changes take effect constitutes acceptance of the updated Terms.</p>
        </Section>

        <Section id="misc" title="16. Miscellaneous">
          <p>These Terms, together with any program-specific agreements, are the entire agreement between you and United To Thrive LLC regarding the Services. If any provision is found unenforceable, the remaining provisions will remain in effect. Our failure to enforce a right is not a waiver of that right. You may not assign these Terms without our written consent.</p>
        </Section>

        <Section id="contact" title="17. Contact">
          <p>
            United To Thrive LLC<br />
            222 S Mill Ave, Suite 800<br />
            Tempe, AZ 85281
          </p>
          <p>
            Questions about these Terms? <Link to="/contact" className="text-slate-ink underline underline-offset-4 hover:no-underline">Contact us</Link>.
          </p>
        </Section>
      </div>
    </section>
  </Layout>
);

export default Terms;
