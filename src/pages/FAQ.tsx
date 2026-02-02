
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";


const FAQ = () => {
  const { t, language } = useLanguage();
  // Get the FAQ list from translations
  const faqs = t("faq.questions");


  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}

      <Section>
        <div className="text-center w-full max-w-[80rem] mt-10 mx-auto">
          <h1 className="text-[3.4rem] md:text-[4.2rem] lg:text-[6rem] font-semibold tracking-[-0.01em] leading-[1.2] md:leading-[1] mb-[2rem]">
            {t("faq.title")}
          </h1>
          <p className="text-[1.8rem] md:text-[2rem] text-muted-foreground leading-[1.8]">
            {t("faq.subtitle")}
          </p>
        </div>
      </Section>

      {/* FAQ Accordion */}

      <Section>
        <div className="max-w-[80rem] w-full mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {Array.isArray(faqs) && faqs.map((faq, index) => (
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
            {t("faq.stillHaveQuestions")}
          </h3>
          <p className="text-[1.8rem] leading-[1.8] text-muted-foreground mb-[2rem]">
            {t("faq.stillHaveQuestionsDesc")}
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 text-[1.6rem] font-medium bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity"
          >
            {t("faq.contactUs")}
          </a>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default FAQ;
