import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy covering data collection, permissions, third-party services, and security for apps published by " +
    site.name +
    ".",
};

const lastUpdated = "AUGUST  11, 2026";

export default function PrivacyPolicyPage() {
  return (
    <div className="section max-w-3xl">
      <SectionHeading
        eyebrow="Legal"
        title="Privacy Policy"
        description={`Last updated: ${lastUpdated}`}
      />

      <AnimatedSection
        delay={0.1}
        className="prose-none mt-14 space-y-10 text-sm leading-relaxed text-ash-600 dark:text-ash-400"
      >
        <p>
          This Privacy Policy explains how {site.name} (&quot;I&quot;,
          &quot;me&quot;, or &quot;my&quot;) collects, uses, and protects
          information when you use applications I develop and publish,
          including mobile applications built with React Native and Expo
          (&quot;the App&quot;). This policy is written to meet Google Play
          Console&apos;s data safety and developer policy requirements.
        </p>

        <section>
          <h2 className="text-xl font-semibold text-ash-900 dark:text-ash-100">
            1. Data Collection
          </h2>
          <p className="mt-3">
            The App may collect the following types of information:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              Account information you provide when signing up, such as your
              name and email address, via Firebase Authentication.
            </li>
            <li>
              Content you create within the App, such as saved devotionals,
              bookmarks, or preferences.
            </li>
            <li>
              Basic device and usage information (such as device type,
              operating system version, and crash logs) used to diagnose bugs
              and improve stability.
            </li>
          </ul>
          <p className="mt-3">
            I do not knowingly collect more information than is necessary to
            provide and improve the App&apos;s features.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ash-900 dark:text-ash-100">
            2. Permissions
          </h2>
          <p className="mt-3">
            Depending on the App&apos;s features, it may request the following
            device permissions:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>Internet access</strong> — required to sign in, sync
              content, and load devotionals or announcements.
            </li>
            <li>
              <strong>Storage access</strong> — used only if the App allows
              saving or downloading content for offline use.
            </li>
            <li>
              <strong>Audio playback</strong> — used to support read-aloud
              functionality for devotionals.
            </li>
          </ul>
          <p className="mt-3">
            Permissions are requested only when needed for a specific feature,
            and the App will function with reduced capability if a permission
            is declined where possible.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ash-900 dark:text-ash-100">
            3. Third-Party Services
          </h2>
          <p className="mt-3">
            The App uses the following third-party services, each governed by
            its own privacy policy:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>Firebase Authentication</strong> (Google) — used to
              manage secure sign-in and account sessions.
            </li>
            <li>
              <strong>AWS S3</strong> (Amazon Web Services) — used, where
              applicable, for secure storage and retrieval of media content.
            </li>
          </ul>
          <p className="mt-3">
            These providers may process data on my behalf under their own
            security and privacy commitments. I do not sell personal data to
            third parties, and I do not share personal data for third-party
            advertising purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ash-900 dark:text-ash-100">
            4. Security
          </h2>
          <p className="mt-3">
            I take reasonable technical and organizational measures to protect
            information collected by the App, including using authenticated,
            encrypted connections (HTTPS) and relying on established providers
            (Firebase, AWS) for storage and authentication. However, no method
            of transmission or storage is 100% secure, and I cannot guarantee
            absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ash-900 dark:text-ash-100">
            5. Children&apos;s Privacy
          </h2>
          <p className="mt-3">
            The App is not directed at children under the age of 13, and I do
            not knowingly collect personal information from children under
            13. If you believe a child has provided personal information
            through the App, please contact me using the details below so it
            can be reviewed and removed where appropriate.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ash-900 dark:text-ash-100">
            6. Your Choices
          </h2>
          <p className="mt-3">
            You may request access to, correction of, or deletion of your
            personal data by contacting me directly. You may also delete your
            account within the App, where that feature is available, or
            request account deletion via email.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ash-900 dark:text-ash-100">
            7. Changes to This Policy
          </h2>
          <p className="mt-3">
            This Privacy Policy may be updated periodically to reflect changes
            in the App&apos;s features or legal requirements. Continued use of
            the App after changes are posted constitutes acceptance of the
            revised policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ash-900 dark:text-ash-100">
            8. Contact Information
          </h2>
          <p className="mt-3">
            If you have questions about this Privacy Policy or how your data
            is handled, contact:
          </p>
          <p className="mt-3">
            {site.name}
            <br />
            Email: {site.email}
          </p>
        </section>
      </AnimatedSection>
    </div>
  );
}
