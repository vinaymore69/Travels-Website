import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArticleContent } from "@/components/ArticleComponents";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="box-content max-w-[80rem] px-6 md:px-[calc(18vw-10rem)] mx-auto mt-[4rem] mb-[8rem]">
        <header className="mb-[4rem] text-center">
          <h1 className="text-[3.4rem] md:text-[4.2rem] lg:text-[5rem] font-semibold tracking-[-0.01em] leading-[1.2] mb-[1rem]">
            Privacy Policy
          </h1>
          <p className="text-[1.6rem] text-muted-foreground">
            Last updated: January 10, 2025
          </p>
        </header>

       <ArticleContent>
  <p>
    At MKB Tours & Travel, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and safeguard your data when you visit our website or use our services.
  </p>

  <h2>Information We Collect</h2>

  <h3>Personal Information</h3>
  <p>
    We may collect personal details that you voluntarily provide, including but not limited to:
  </p>
  <ul>
    <li>Full name</li>
    <li>Phone number</li>
    <li>Email address</li>
    <li>Pickup and drop locations</li>
    <li>Travel dates and preferences</li>
    <li>Payment and billing details (for invoicing purposes)</li>
  </ul>
  <p>
    This information is collected when you submit enquiry forms, request bookings, download our travel guide, or contact us through phone, email, or WhatsApp.
  </p>

  <h3>Automatically Collected Information</h3>
  <p>
    When you visit our website, we may automatically collect certain information about your device, including:
  </p>
  <ul>
    <li>Browser type and version</li>
    <li>Operating system</li>
    <li>IP address</li>
    <li>Pages visited and time spent on pages</li>
    <li>Referring website addresses</li>
  </ul>

  <h2>How We Use Your Information</h2>
  <p>We use the information we collect to:</p>
  <ul>
    <li>Process bookings and provide travel services</li>
    <li>Contact you regarding enquiries, confirmations, and trip support</li>
    <li>Send service updates and promotional offers (with your consent)</li>
    <li>Improve our website, services, and customer experience</li>
    <li>Maintain legal, accounting, and safety records</li>
    <li>Detect, prevent, and address technical or security issues</li>
  </ul>

  <h2>Cookies and Tracking Technologies</h2>
  <p>
    We use cookies and similar tracking technologies to enhance website functionality and user experience. You can instruct your browser to refuse cookies or alert you when cookies are being sent. Some website features may not function properly if cookies are disabled.
  </p>

  <h3>Types of Cookies We Use</h3>
  <ul>
    <li>
      <strong>Essential Cookies:</strong> Required for website operation and booking forms
    </li>
    <li>
      <strong>Analytics Cookies:</strong> Help us understand visitor behavior and improve services
    </li>
    <li>
      <strong>Preference Cookies:</strong> Remember language, location, and display settings
    </li>
  </ul>

  <h2>Third-Party Services</h2>
  <p>
    We may use third-party service providers such as payment gateways, hosting services, and analytics tools to operate our website and manage bookings. These parties are granted access only for necessary functions and are bound by confidentiality obligations.
  </p>

  <h2>Data Security</h2>
  <p>
    We implement appropriate technical and organizational security measures to protect your personal information. While we strive to use commercially acceptable means to protect your data, no method of transmission over the internet is 100% secure.
  </p>

  <h2>Your Rights</h2>
  <p>You have the right to:</p>
  <ul>
    <li>Access your personal information</li>
    <li>Request correction of inaccurate data</li>
    <li>Request deletion of your information (subject to legal requirements)</li>
    <li>Withdraw consent for marketing communications</li>
    <li>Request data portability where applicable</li>
  </ul>

  <h2>Children's Privacy</h2>
  <p>
    Our services are intended for users above 18 years of age. We do not knowingly collect personal information from minors.
  </p>

  <h2>International Data Transfers</h2>
  <p>
    Your data may be stored on servers located in India or other regions. We ensure appropriate safeguards are in place for secure data handling.
  </p>

  <h2>Changes to This Privacy Policy</h2>
  <p>
    We may update this Privacy Policy from time to time. Any changes will be posted on this page along with an updated revision date. We encourage you to review this page periodically.
  </p>

  <h2>Contact Us</h2>
  <p>
    If you have any questions regarding this Privacy Policy, please contact us:
  </p>
  <ul>
    <li>By email: Shreemkb@gmail.com</li>
    <li>By phone: +91 84338 94555</li>
    <li>Through our contact page: <a href="/contact">/contact</a></li>
  </ul>
</ArticleContent>

      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
