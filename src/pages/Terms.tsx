import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArticleContent } from "@/components/ArticleComponents";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="box-content max-w-[80rem] px-6 md:px-[calc(18vw-10rem)] mx-auto mt-[4rem] mb-[8rem]">
        <header className="mb-[4rem] text-center">
          <h1 className="text-[3.4rem] md:text-[4.2rem] lg:text-[5rem] font-semibold tracking-[-0.01em] leading-[1.2] mb-[1rem]">
            Terms & Conditions
          </h1>
          <p className="text-[1.6rem] text-muted-foreground">
            Last updated: January 10, 2025
          </p>
        </header>

        <ArticleContent>
  <p>
    Welcome to MKB Tours & Travel. By booking our services or using our website,
    you agree to be bound by the following Terms & Conditions. Please read them
    carefully before confirming your trip.
  </p>

  <h2>Important Notice</h2>
  <p>
    Kindly note that 5% GST is applicable for GST billing. All terms and
    conditions mentioned below are applicable for our outstation one-way and
    round-trip services.
  </p>

  <h2>Kilometre & Hour Limits</h2>
  <p>
    Each trip has a specific kilometre limit and, for certain packages, an hour
    limit. Any usage beyond these limits will be charged additionally as per
    applicable rates.
  </p>

  <h2>Airport Entry Charges</h2>
  <p>
    Airport entry charges, if applicable, are not included in the fare and must
    be paid extra by the customer.
  </p>

  <h2>Additional Charges</h2>
  <p>
    All tolls, parking fees, interstate taxes, and other government charges are
    not included in the fare and must be paid as per actuals.
  </p>

  <h2>Night Allowance</h2>
  <p>
    For travel between 9:45 PM and 6:00 AM, a night allowance will be applicable
    and payable directly to the driver.
  </p>

  <h2>Itinerary Planning</h2>
  <p>
    Customers must confirm all destinations and cities in advance. Changes or
    additions during the journey may not be possible and can result in extra
    charges.
  </p>

  <h2>Hill Station Travel</h2>
  <p>
    For safety and vehicle performance, air-conditioning may be switched off
    during steep hill climbs.
  </p>

  <h2>CNG Vehicles</h2>
  <p>
    To promote eco-friendly travel, your vehicle may run on CNG. Refueling
    stops may be required during the journey.
  </p>

  <h2>Pick-up & Drop Policy</h2>
  <p>
    The package includes one pick-up point and one drop point only. Local
    sightseeing or multiple drops within the city are not included unless
    specified.
  </p>

  <h2>Service Coverage</h2>
  <h3>One-Way Trips</h3>
  <p>
    Ideal for single-destination travel with flexible pick-up and drop options
    across India.
  </p>

  <h3>Round Trips</h3>
  <p>
    Complete return journeys with customizable itineraries and multiple
    destination coverage.
  </p>

  <h2>Governing Law</h2>
  <p>
    These Terms & Conditions shall be governed and interpreted in accordance
    with the laws of India. Any disputes shall fall under the jurisdiction of
    Mumbai courts.
  </p>

  <h2>Changes to Terms</h2>
  <p>
    MKB Tours & Travel reserves the right to modify these Terms & Conditions at
    any time without prior notice. Updated terms will be posted on this page.
  </p>

  <h2>Contact Information</h2>
  <p>
    For any clarification regarding these Terms & Conditions, please contact
    us:
  </p>
  <ul>
    <li>📞 +91 84338 94555</li>
    <li>✉️ Shreemkb@gmail.com</li>
    <li>
      Through our contact page: <a href="/contact">/contact</a>
    </li>
  </ul>
</ArticleContent>

      </div>

      <Footer />
    </div>
  );
};

export default Terms;
