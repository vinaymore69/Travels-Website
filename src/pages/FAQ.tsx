import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
const faqs = [
  {
    question: "What is MKB Tours & Travel?",
    answer:
      "MKB Tours & Travel is a Mumbai-based travel company providing reliable cab services and customized tour packages across India, including hill stations, pilgrimage tours, beach holidays, and heritage trips.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer local rentals, airport transfers, outstation one-way and round trips, Mumbai Darshan, pilgrimage tours, and customized holiday packages with professional drivers and well-maintained vehicles.",
  },
  {
    question: "Do you provide pickup and drop services?",
    answer:
      "Yes, we provide door-to-door pickup and drop services for all our local, outstation, airport, and tour packages.",
  },
  {
    question: "Can I customize my travel itinerary?",
    answer:
      "Absolutely. We offer fully customizable travel packages based on your preferred destinations, travel dates, vehicle type, and budget.",
  },
  {
    question: "What types of vehicles are available?",
    answer:
      "Our fleet includes Maruti Dzire, WagonR, Ertiga, Innova Crysta, and other comfortable vehicles suitable for individuals, families, and groups.",
  },
  {
    question: "Are your drivers experienced and verified?",
    answer:
      "Yes, all our drivers are professionally trained, background-verified, and experienced in long-distance and city travel to ensure safety and comfort.",
  },
  {
    question: "Do you provide 24/7 customer support?",
    answer:
      "Yes, our support team is available 24/7 to assist you with bookings, trip modifications, and emergency help during your journey.",
  },
  {
    question: "Do you organize pilgrimage tours?",
    answer:
      "Yes, we specialize in pilgrimage tours to destinations such as Shirdi, Trimbakeshwar, Pandharpur, Bhimashankar, Shani Shingnapur, and other sacred places across Maharashtra and India.",
  },
  {
    question: "Is advance booking required?",
    answer:
      "Advance booking is recommended, especially during weekends, holidays, and festival seasons, to ensure vehicle availability and best service.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept UPI, cash, and bank transfers. For corporate and long-distance bookings, advance payment may be required.",
  },
  {
    question: "Do you provide GST invoices?",
    answer:
      "Yes, GST invoices are available on request. A 5% GST is applicable for GST billing as per government norms.",
  },
  {
    question: "How can I contact MKB Tours & Travel?",
    answer:
      "You can call us at +91 84338 94555 or email us at Shreemkb@gmail.com for bookings, queries, and support.",
  },
];


  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <Section>
        <div className="text-center w-full max-w-[80rem] mx-auto">
          <h1 className="text-[3.4rem] md:text-[4.2rem] lg:text-[6rem] font-semibold tracking-[-0.01em] leading-[1.2] md:leading-[1] mb-[2rem]">
            Frequently Asked Questions
          </h1>
          <p className="text-[1.8rem] md:text-[2rem] text-muted-foreground leading-[1.8]">
            Everything you need to know about Shree MKB Tours & Travel and how it works.
          </p>
        </div>
      </Section>

      {/* FAQ Accordion */}
      <Section>
        <div className="max-w-[80rem] w-full mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border"
              >
                <AccordionTrigger className="text-[1.8rem] md:text-[2rem] font-medium text-left hover:no-underline py-6 w-full">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[1.6rem] leading-[1.8] text-muted-foreground pb-6 w-full">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* Still Have Questions */}
      <Section>
        <div className="text-center max-w-[70rem] mx-auto border-t border-border pt-[4rem]">
          <h3 className="text-[2.4rem] font-semibold mb-[1.5rem]">
            Still have questions?
          </h3>
          <p className="text-[1.8rem] leading-[1.8] text-muted-foreground mb-[2rem]">
            Can't find the answer you're looking for? Feel free to reach out to
            our team.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 text-[1.6rem] font-medium bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity"
          >
            Contact Us
          </a>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default FAQ;
