import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — WearWise",
};

const sections = [
  { id: "definitions", label: "1. Interpretation & Definitions" },
  { id: "data-collection", label: "2. Collecting & Using Your Personal Data" },
  { id: "disclosure", label: "3. Disclosure of Your Personal Data" },
  { id: "security", label: "4. Security of Your Personal Data" },
  { id: "kvkk", label: "5. Your Rights Under Turkish Law (KVKK)" },
  { id: "children", label: "6. Children's Privacy" },
  { id: "links", label: "7. Links to Other Websites" },
  { id: "changes", label: "8. Changes to This Privacy Policy" },
  { id: "contact", label: "9. Contact Us" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f0f4fb] text-slate-800">
      {/* ── Header ─────────────────────────────────────────────── */}
      <header className="bg-[#1e3a5f] text-white py-14 px-6 text-center">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#dce6f5] mb-3">
          WearWise
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-4 text-[#dce6f5] text-sm">
          Last updated:{" "}
          <time dateTime="2026-03-30" className="font-semibold text-white">
            March 30, 2026
          </time>
        </p>
      </header>

      {/* ── Body ───────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <p className="text-slate-600 leading-relaxed mb-10">
          This Privacy Policy describes Our policies and procedures on the
          collection, use, and disclosure of Your information when You use the
          WearWise application and tells You about Your privacy rights and how
          the law protects You. We use Your Personal Data to provide and improve
          the Service. By using the Service, You agree to the collection and use
          of information in accordance with this Privacy Policy. If You are
          located in Turkey, this Privacy Policy also fulfills our obligations
          under the Law on the Protection of Personal Data No. 6698 (KVKK).
        </p>

        {/* Table of Contents */}
        <nav
          aria-label="Table of contents"
          className="rounded-xl border border-[#dce6f5] bg-white p-6 shadow-sm mb-12"
        >
          <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-[#4a6fa5] mb-4">
            Contents
          </h2>
          <ol className="space-y-2">
            {sections.map((s, i) => (
              <li key={s.id} className="flex items-baseline gap-3">
                <span className="text-xs font-mono text-slate-400 w-5 shrink-0 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <a
                  href={`#${s.id}`}
                  className="text-sm text-[#2d5690] hover:text-[#0f2340] hover:underline underline-offset-2 transition-colors"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Article */}
        <article className="space-y-14">
          {/* ── 1. Definitions ─────────────────────────────────── */}
          <section id="definitions">
            <SectionHeading>1. Interpretation &amp; Definitions</SectionHeading>

            <SubHeading>1.1 Interpretation</SubHeading>
            <p className="text-slate-700 leading-relaxed mb-4">
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </p>

            <SubHeading>1.2 Definitions</SubHeading>
            <p className="text-slate-700 leading-relaxed mb-4">
              For the purposes of this Privacy Policy:
            </p>
            <dl className="space-y-4">
              {[
                [
                  "Account",
                  "A unique account created for You to access our Service or parts of our Service.",
                ],
                [
                  "Application",
                  "Refers to WearWise, the AI-powered wardrobe and virtual outfit try-on mobile application provided by the Company.",
                ],
                [
                  "Affiliate",
                  'An entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest, or other securities entitled to vote for election of directors or other managing authority.',
                ],
                [
                  "AI-Generated Content",
                  "Virtual outfit try-on images created by our third-party AI service (Google Gemini) using Your photos.",
                ],
                [
                  "Company",
                  'Referred to as either "the Company", "We", "Us" or "Our" in this Agreement, refers to WearWise, Turkey.',
                ],
                ["Country", "Turkey"],
                [
                  "Device",
                  "Any device that can access the Service such as a smartphone or a digital tablet.",
                ],
                [
                  "Personal Data",
                  "Any information that relates to an identified or identifiable individual.",
                ],
                ["Service", "The WearWise Application."],
                [
                  "Service Provider",
                  "Any natural or legal person who processes data on behalf of the Company. This includes third-party companies or individuals hired to facilitate the Service, provide the Service on behalf of the Company, perform services related to the Service, or assist the Company in analyzing how the Service is used.",
                ],
                [
                  "Subscription",
                  "Paid access tiers (BASIC, PRO, ULTRA) that grant the user a set number of AI try-on credits per billing period.",
                ],
                [
                  "Try-On Credit",
                  "A single unit of AI outfit generation consumed when a user triggers a virtual try-on.",
                ],
                [
                  "Usage Data",
                  "Data collected automatically, either generated by the use of the Service or from the Service infrastructure itself.",
                ],
                [
                  "Wardrobe Data",
                  "Photos of clothing items and outfits that You upload or save within the Application.",
                ],
                [
                  "You",
                  "The individual accessing or using the Service, or the company or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.",
                ],
              ].map(([term, def]) => (
                <div key={term} className="flex gap-3">
                  <dt className="font-semibold text-[#1e3a5f] shrink-0 min-w-[140px]">
                    {term}
                  </dt>
                  <dd className="text-slate-600 leading-relaxed">{def}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* ── 2. Data Collection ──────────────────────────────── */}
          <section id="data-collection">
            <SectionHeading>
              2. Collecting &amp; Using Your Personal Data
            </SectionHeading>

            <SubHeading>2.1 Personal Data</SubHeading>
            <p className="text-slate-700 leading-relaxed mb-3">
              While using Our Service, We may ask You to provide Us with certain
              personally identifiable information, which may include:
            </p>
            <ul className="list-disc list-outside pl-6 space-y-1.5 text-slate-600 mb-6">
              <li>
                Your name and email address (collected via Google Sign-In /
                OAuth)
              </li>
              <li>
                Your Google account profile photo (if provided by Google during
                sign-in)
              </li>
              <li>
                Photos of Yourself (selfies) that You voluntarily upload for
                virtual try-on purposes
              </li>
              <li>
                Photos of clothing and outfit items that You upload to Your
                wardrobe
              </li>
              <li>
                Push notification tokens for delivering try-on completion
                notifications
              </li>
              <li>
                Subscription and purchase data managed via our payment processor
                (RevenueCat)
              </li>
            </ul>

            <SubHeading>2.2 Usage Data</SubHeading>
            <p className="text-slate-700 leading-relaxed mb-3">
              Usage Data is collected automatically when using the Service. It
              may include information such as Your Device&apos;s IP address,
              device type, operating system version, app version, features used,
              time and date of usage, time spent on features, unique device
              identifiers, and other diagnostic data.
            </p>

            <SubHeading>2.3 Photo and Image Data</SubHeading>
            <p className="text-slate-700 leading-relaxed mb-3">
              WearWise&apos;s core functionality requires the processing of
              photos You provide:
            </p>
            <ul className="list-disc list-outside pl-6 space-y-1.5 text-slate-600 mb-4">
              <li>
                Self-portraits (selfies) you voluntarily submit for virtual
                outfit try-on generation
              </li>
              <li>
                Photos of clothing items and outfits you add to your wardrobe
              </li>
              <li>
                AI-generated virtual try-on images produced as a result of
                processing your submitted photos
              </li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-6">
              Your photos are transmitted securely to our AI processing
              infrastructure (Google Gemini API) solely for the purpose of
              generating virtual try-on images. We do not use Your photos to
              train AI models without Your explicit consent. Generated try-on
              images are stored on our servers and linked to Your account so You
              can access them within the app.
            </p>

            <SubHeading>2.4 Wardrobe and Outfit Data</SubHeading>
            <p className="text-slate-700 leading-relaxed mb-6">
              We store metadata associated with the clothing items and outfits
              You save in Your wardrobe, including item names, categories, tags,
              and Your preferences. This data is used to personalize Your
              styling experience within the app.
            </p>

            <SubHeading>2.5 Subscription and Payment Data</SubHeading>
            <p className="text-slate-700 leading-relaxed mb-6">
              Subscription management and payment processing are handled by our
              third-party provider, RevenueCat. We do not directly collect or
              store Your payment card details. We receive subscription status
              information (active plan tier, credit balance, renewal dates) from
              RevenueCat to provide You with the correct level of access. For
              RevenueCat&apos;s data practices, please refer to their{" "}
              <ExternalLink href="https://www.revenuecat.com/privacy">
                privacy policy
              </ExternalLink>
              .
            </p>

            <SubHeading>2.6 Use of Your Personal Data</SubHeading>
            <p className="text-slate-700 leading-relaxed mb-3">
              The Company may use Personal Data for the following purposes:
            </p>
            <ul className="list-disc list-outside pl-6 space-y-2 text-slate-600 mb-6">
              <li>
                <strong>To provide and maintain our Service</strong>, including
                monitoring usage and powering AI virtual try-on generation.
              </li>
              <li>
                <strong>To manage Your Account</strong>: to manage Your
                registration as a user and to maintain Your wardrobe, try-on
                history, and subscription credits.
              </li>
              <li>
                <strong>For the performance of a contract</strong>: the
                development, compliance, and undertaking of the subscription
                contract for the Services You have purchased.
              </li>
              <li>
                <strong>To contact You</strong>: To send push notifications
                regarding the completion of Your virtual try-on generation,
                important updates, or security-related communications.
              </li>
              <li>
                <strong>To process AI try-on requests</strong>: Your selfie and
                selected clothing photo are securely transmitted to Google&apos;s
                Gemini API for the sole purpose of generating a virtual try-on
                image.
              </li>
              <li>
                <strong>To manage Your requests</strong>: To respond to and
                manage any requests or support inquiries You submit to Us.
              </li>
              <li>
                <strong>For business transfers</strong>: We may use Your
                information to evaluate or conduct a merger, divestiture,
                restructuring, reorganization, dissolution, or other sale or
                transfer of some or all of Our assets.
              </li>
              <li>
                <strong>For analytics and improvement</strong>: We may use
                aggregated, anonymized usage data for data analysis, identifying
                usage trends, and improving our Service and user experience.
              </li>
            </ul>

            <SubHeading>2.7 Retention of Your Personal Data</SubHeading>
            <p className="text-slate-700 leading-relaxed mb-3">
              The Company will retain Your Personal Data only for as long as is
              necessary for the purposes set out in this Privacy Policy.
              Specifically:
            </p>
            <ul className="list-disc list-outside pl-6 space-y-1.5 text-slate-600 mb-6">
              <li>
                Account data is retained for the lifetime of your account and
                for a reasonable period after account deletion, as required by
                applicable law.
              </li>
              <li>
                Uploaded photos (selfies and wardrobe items) are retained as
                long as Your account is active. You may delete individual items
                at any time via the app. All Your photos are deleted upon
                account deletion.
              </li>
              <li>
                AI-generated try-on images are retained for as long as Your
                account is active or until You delete them.
              </li>
              <li>
                Usage Data is generally retained for a shorter period, except
                where retention is required for security or legal compliance
                purposes.
              </li>
            </ul>

            <SubHeading>2.8 AI Processing and Third-Party Services</SubHeading>
            <p className="text-slate-700 leading-relaxed mb-3">
              WearWise&apos;s virtual try-on feature relies on Google&apos;s
              Gemini AI API to process Your photos and generate outfit try-on
              images. When You initiate a try-on, the following occurs:
            </p>
            <ul className="list-disc list-outside pl-6 space-y-1.5 text-slate-600 mb-4">
              <li>
                Your selected selfie and clothing item photo are securely
                transmitted over encrypted connections to Google&apos;s Gemini
                API servers.
              </li>
              <li>
                Google processes these images to generate the virtual try-on
                output.
              </li>
              <li>
                The generated image is returned to our servers, stored, and made
                available to You within the app.
              </li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-6">
              Your use of the virtual try-on feature constitutes Your consent to
              this processing. Google&apos;s data practices are governed by{" "}
              <ExternalLink href="https://policies.google.com/privacy">
                Google&apos;s Privacy Policy
              </ExternalLink>
              . We have contractual agreements with Google that restrict the use
              of Your data to providing the Gemini API service.
            </p>

            <SubHeading>2.9 Transfer of Your Personal Data</SubHeading>
            <p className="text-slate-700 leading-relaxed mb-6">
              Your information may be transferred to and maintained on computers
              located outside of Turkey, including in the European Union and the
              United States, where data protection laws may differ. Your consent
              to this Privacy Policy, followed by Your submission of such
              information, represents Your agreement to that transfer. The
              Company will take all steps reasonably necessary to ensure that
              Your data is treated securely and in accordance with this Privacy
              Policy.
            </p>

            <SubHeading>2.10 Delete Your Personal Data</SubHeading>
            <p className="text-slate-700 leading-relaxed mb-3">
              You have the right to delete or request that We assist in deleting
              the Personal Data that We have collected about You. This includes:
            </p>
            <ul className="list-disc list-outside pl-6 space-y-1.5 text-slate-600 mb-4">
              <li>
                Deleting individual wardrobe items and try-on images directly
                within the app.
              </li>
              <li>
                Deleting Your entire account and all associated data by
                navigating to{" "}
                <strong>Account Settings &gt; Delete Account</strong> within the
                app.
              </li>
              <li>
                Contacting Us via the email address below to request deletion of
                any specific data.
              </li>
            </ul>
            <p className="text-slate-700 leading-relaxed">
              Please note that We may need to retain certain information when we
              have a legal obligation or lawful basis to do so.
            </p>
          </section>

          {/* ── 3. Disclosure ───────────────────────────────────── */}
          <section id="disclosure">
            <SectionHeading>3. Disclosure of Your Personal Data</SectionHeading>

            <SubHeading>3.1 Business Transactions</SubHeading>
            <p className="text-slate-700 leading-relaxed mb-6">
              If the Company is involved in a merger, acquisition, or asset
              sale, Your Personal Data may be transferred. We will provide
              notice before Your Personal Data is transferred and becomes
              subject to a different Privacy Policy.
            </p>

            <SubHeading>3.2 Law Enforcement</SubHeading>
            <p className="text-slate-700 leading-relaxed mb-6">
              Under certain circumstances, the Company may be required to
              disclose Your Personal Data if required to do so by law or in
              response to valid requests by public authorities (e.g., a Turkish
              court, the Personal Data Protection Authority (KVKK), or a
              government agency).
            </p>

            <SubHeading>3.3 Other Legal Requirements</SubHeading>
            <p className="text-slate-700 leading-relaxed mb-3">
              The Company may disclose Your Personal Data in the good faith
              belief that such action is necessary to:
            </p>
            <ul className="list-disc list-outside pl-6 space-y-1.5 text-slate-600">
              <li>
                Comply with a legal obligation under Turkish law or other
                applicable jurisdiction
              </li>
              <li>
                Protect and defend the rights or property of the Company
              </li>
              <li>
                Prevent or investigate possible wrongdoing in connection with
                the Service
              </li>
              <li>
                Protect the personal safety of users of the Service or the
                public
              </li>
              <li>Protect against legal liability</li>
            </ul>
          </section>

          {/* ── 4. Security ─────────────────────────────────────── */}
          <section id="security">
            <SectionHeading>4. Security of Your Personal Data</SectionHeading>
            <p className="text-slate-700 leading-relaxed mb-4">
              The security of Your Personal Data is important to Us. We
              implement commercially reasonable security measures including
              encrypted data transmission (TLS/HTTPS), encrypted storage, and
              access controls to protect Your information, particularly Your
              photos and AI-generated images.
            </p>
            <p className="text-slate-700 leading-relaxed">
              However, no method of transmission over the Internet or method of
              electronic storage is 100% secure. While We strive to use
              commercially acceptable means to protect Your Personal Data, We
              cannot guarantee its absolute security.
            </p>
          </section>

          {/* ── 5. KVKK ─────────────────────────────────────────── */}
          <section id="kvkk">
            <SectionHeading>
              5. Your Rights Under Turkish Law (KVKK)
            </SectionHeading>
            <p className="text-slate-700 leading-relaxed mb-4">
              If You are located in Turkey, under the Law on the Protection of
              Personal Data No. 6698 (KVKK), You have the following rights with
              respect to Your Personal Data:
            </p>
            <ul className="list-disc list-outside pl-6 space-y-2 text-slate-600 mb-6">
              <li>
                The right to learn whether Your Personal Data has been processed
              </li>
              <li>
                The right to request information if Your Personal Data has been
                processed
              </li>
              <li>
                The right to learn the purpose of processing of Your Personal
                Data and whether this data is used in line with its purpose
              </li>
              <li>
                The right to know the third parties in Turkey or abroad to whom
                Your Personal Data has been transferred
              </li>
              <li>
                The right to request rectification if Your Personal Data is
                incomplete or inaccurately processed
              </li>
              <li>
                The right to request deletion or destruction of Your Personal
                Data
              </li>
              <li>
                The right to request notification of the operations regarding
                rectification and deletion/destruction of Your Personal Data to
                the third parties to whom it was transferred
              </li>
              <li>
                The right to object to a result that is to Your detriment by
                means of analysis of Your Personal Data exclusively through
                automated systems
              </li>
              <li>
                The right to claim compensation for the damage arising from the
                unlawful processing of Your Personal Data
              </li>
            </ul>
            <p className="text-slate-700 leading-relaxed">
              To exercise any of these rights, please contact Us at{" "}
              <a
                href="mailto:support@wearwise.info"
                className="text-[#2d5690] hover:text-[#0f2340] underline underline-offset-2 transition-colors"
              >
                support@wearwise.info
              </a>{" "}
              with the subject line &quot;KVKK Data Request&quot;. We will
              respond to Your request within 30 days.
            </p>
          </section>

          {/* ── 6. Children ─────────────────────────────────────── */}
          <section id="children">
            <SectionHeading>6. Children&apos;s Privacy</SectionHeading>
            <p className="text-slate-700 leading-relaxed mb-4">
              Our Service does not address anyone under the age of 13. We do not
              knowingly collect personally identifiable information from anyone
              under the age of 13. If You are a parent or guardian and You are
              aware that Your child has provided Us with Personal Data, please
              contact Us.
            </p>
            <p className="text-slate-700 leading-relaxed">
              If We become aware that We have collected Personal Data from
              anyone under the age of 13 without verification of parental
              consent, We take steps to remove that information from our
              servers. If We need to rely on consent as a legal basis for
              processing Your information and Your country requires consent from
              a parent, We may require Your parent&apos;s consent before We
              collect and use that information.
            </p>
          </section>

          {/* ── 7. Links ────────────────────────────────────────── */}
          <section id="links">
            <SectionHeading>7. Links to Other Websites</SectionHeading>
            <p className="text-slate-700 leading-relaxed mb-4">
              Our Service may contain links to other websites that are not
              operated by Us. If You click on a third-party link, You will be
              directed to that third party&apos;s site. We strongly advise You
              to review the Privacy Policy of every site You visit.
            </p>
            <p className="text-slate-700 leading-relaxed">
              We have no control over and assume no responsibility for the
              content, privacy policies, or practices of any third-party sites
              or services.
            </p>
          </section>

          {/* ── 8. Changes ──────────────────────────────────────── */}
          <section id="changes">
            <SectionHeading>8. Changes to This Privacy Policy</SectionHeading>
            <p className="text-slate-700 leading-relaxed mb-4">
              We may update Our Privacy Policy from time to time. We will notify
              You of any changes by posting the new Privacy Policy on this page
              and updating the &quot;Last updated&quot; date at the top.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Where material changes occur, We will notify You via a prominent
              in-app notice or push notification prior to the change becoming
              effective. You are advised to review this Privacy Policy
              periodically for any changes. Changes to this Privacy Policy are
              effective when they are posted on this page.
            </p>
          </section>

          {/* ── 9. Contact ──────────────────────────────────────── */}
          <section id="contact">
            <SectionHeading>9. Contact Us</SectionHeading>
            <p className="text-slate-700 leading-relaxed mb-6">
              If you have any questions about this Privacy Policy, wish to
              exercise your rights, or have a privacy-related concern, You can
              contact us:
            </p>
            <address className="not-italic rounded-xl border border-[#dce6f5] bg-white p-6 shadow-sm space-y-2">
              <p className="font-bold text-[#1e3a5f] text-lg">WearWise</p>
              <p className="text-slate-600">
                Email:{" "}
                <a
                  href="mailto:support@wearwise.info"
                  className="text-[#2d5690] hover:text-[#0f2340] underline underline-offset-2 transition-colors font-medium"
                >
                  support@wearwise.info
                </a>
              </p>
              <p className="text-slate-600">Country: Turkey</p>
            </address>
          </section>
        </article>
      </div>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer className="border-t border-slate-200 py-8 mt-12 text-center text-sm text-slate-500">
        <p>© 2026 WearWise. All rights reserved.</p>
      </footer>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold text-[#1e3a5f] mb-5 pb-3 border-b border-[#dce6f5]">
      {children}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-base font-semibold text-[#2d5690] mt-6 mb-2">
      {children}
    </h3>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#2d5690] hover:text-[#0f2340] underline underline-offset-2 transition-colors"
    >
      {children}
    </a>
  );
}
